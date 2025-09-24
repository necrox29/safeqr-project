import { GoogleGenerativeAI } from '@google/generative-ai';
import fetch from 'node-fetch';

// --- INICIALIZACIÓN DE CLIENTES ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const virusTotalApiKey = process.env.VIRUSTOTAL_API_KEY;
const safeBrowsingApiKey = process.env.SAFE_BROWSING_API_KEY;


// --- FUNCIÓN PRINCIPAL DEL CONTROLADOR ---
export const createScan = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'No se proporcionó una URL.' });
    }
    console.log('URL recibida para análisis completo:', url);

    try {
        // --- CAPA 1: VIRUSTOTAL ---
        const vtReport = await getVirusTotalReport(url);
        if (!vtReport.isSafe) {
            return res.json({
                isSafe: false,
                reason: `Detectado como malicioso por VirusTotal (${vtReport.stats.malicious} motores).`,
                analysisProvider: 'VirusTotal'
            });
        }

        // --- CAPA 2: GOOGLE SAFE BROWSING ---
        const sbReport = await getSafeBrowsingReport(url);
        if (!sbReport.isSafe) {
            return res.json({
                isSafe: false,
                reason: `Detectado como ${sbReport.threatType} por Google Safe Browsing.`,
                analysisProvider: 'Google Safe Browsing'
            });
        }
        
        // --- CAPA 3: ANÁLISIS HEURÍSTICO CON GEMINI ---
        // TODO: Reemplazar este fetch simple con Puppeteer para manejar redirecciones y JS.
        const response = await fetch(url);
        const pageHtml = await response.text();

        const geminiReport = await getGeminiReport(url, pageHtml);
        if (geminiReport.is_phishing) {
             return res.json({
                isSafe: false,
                reason: `Análisis de IA: ${geminiReport.reason}`,
                analysisProvider: 'Gemini AI'
            });
        }
        
        // --- VEREDICTO FINAL ---
        return res.json({
            isSafe: true,
            reason: 'El sitio pasó todas las verificaciones de seguridad.'
        });

    } catch (error) {
        console.error('Error en el controlador de escaneo:', error.message);
        res.status(500).json({ error: 'Error al procesar el análisis de la URL.' });
    }
};


// --- FUNCIONES AUXILIARES ---

async function getVirusTotalReport(url) {
    const apiUrl = 'https://www.virustotal.com/api/v3/urls';
    const options = {
        method: 'POST',
        headers: {
            'x-apikey': virusTotalApiKey,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `url=${encodeURIComponent(url)}`,
    };

    // 1. Enviar la URL para análisis
    const submissionResponse = await fetch(apiUrl, options);
    if (!submissionResponse.ok) throw new Error(`VirusTotal submission failed with status ${submissionResponse.status}`);
    const submissionData = await submissionResponse.json();
    const analysisId = submissionData.data.id;

    // 2. Esperar un momento y obtener el reporte del análisis
    await new Promise(resolve => setTimeout(resolve, 5000)); // Espera 5 segundos
    
    const reportUrl = `https://www.virustotal.com/api/v3/analyses/${analysisId}`;
    const reportOptions = { headers: { 'x-apikey': virusTotalApiKey } };
    const reportResponse = await fetch(reportUrl, reportOptions);
    if (!reportResponse.ok) throw new Error(`VirusTotal report failed with status ${reportResponse.status}`);
    const reportData = await reportResponse.json();

    const stats = reportData.data.attributes.stats;
    return {
        isSafe: stats.malicious === 0 && stats.suspicious === 0,
        stats: stats
    };
}

async function getSafeBrowsingReport(url) {
    const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${safeBrowsingApiKey}`;
    const body = {
        client: { clientId: "safeqr", clientVersion: "1.0.0" },
        threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url: url }]
        }
    };
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(body)
    });
    const data = await response.json();
    if (data.matches && data.matches.length > 0) {
        return { isSafe: false, threatType: data.matches[0].threatType };
    }
    return { isSafe: true };
}

async function getGeminiReport(url, pageHtml) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const prompt = `Eres un experto en ciberseguridad. Analiza el HTML de la URL ${url}. Verifica si el contenido (especialmente la etiqueta <title>) y la apariencia visual descrita por el HTML parecen ser de un sitio legítimo o si intentan suplantar a otra marca (phishing). Responde solo con un JSON { "is_phishing": boolean, "reason": "Explica en una frase MUY CORTA por qué es sospechoso (ej: 'El título no coincide con la URL')." } sin markdown. HTML: ${pageHtml.substring(0, 35000)}`;
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        return JSON.parse(responseText.trim().replace(/```json|```/g, ''));
    } catch(e) {
        console.error("Error con Gemini:", e.message);
        return { is_phishing: false, reason: "Análisis con IA falló." };
    }
}