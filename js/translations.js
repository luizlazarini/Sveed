// SVEED - Traduções Multi-idioma
// Versão 3.3.0

const translations = {
    pt: {
        // Meta
        metaDescription: "SVEED - Governança Pública da Última Milha Educacional. Infraestrutura técnica voltada à governança pública para verificação de execução em dispositivos da educação.",
        metaKeywords: "Governança digital, Última milha, Conformidade TCU, Gestão de ativos públicos, Software offline da educação",
        title: "SVEED - Governança Pública da Última Milha Educacional",
        
        // Header
        logoSubtitle: "Verificação de Rotinas de Uso na Educação",
        navDesafio: "O Desafio",
        navSobre: "O SVEED",
        navDinamica: "Dinâmica",
        navPilares: "Pilares",
        navDashboard: "Dashboard",
        navOperadoras: "Operadoras",
        navConformidade: "Conformidade",
        
        // Hero
        heroTitle: "SVEED — Governança Pública da Última Milha Educacional",
        heroSubtitle: "Verificação técnica de execução mínima de uso na educação em dispositivos utilizados no âmbito de políticas públicas de educação, em ambientes offline e de difícil monitoramento.",
        ctaButton: "Solicitar Nota Técnica de Viabilidade",
        ctaDisclaimer: "Documento técnico-institucional, sem caráter comercial ou pedagógico."
    },
    
    en: {
        // Meta
        metaDescription: "SVEED - Public Governance of the Educational Last Mile. Technical infrastructure aimed at public governance for execution verification on educational devices.",
        metaKeywords: "Digital governance, Last mile, Compliance, Public asset management, Offline education software",
        title: "SVEED - Public Governance of the Educational Last Mile",
        
        // Header
        logoSubtitle: "Verification of Educational Use Routines",
        navDesafio: "The Challenge",
        navSobre: "About SVEED",
        navDinamica: "Dynamics",
        navPilares: "Pillars",
        navDashboard: "Dashboard",
        navOperadoras: "Operators",
        navConformidade: "Compliance",
        
        // Hero
        heroTitle: "SVEED — Public Governance of the Educational Last Mile",
        heroSubtitle: "Technical verification of minimum educational use execution on devices used within the scope of public education policies, in offline and hard-to-monitor environments.",
        ctaButton: "Request Technical Feasibility Note",
        ctaDisclaimer: "Technical-institutional document, without commercial or pedagogical character."
    },
    
    es: {
        // Meta
        metaDescription: "SVEED - Gobernanza Pública de la Última Milla Educativa. Infraestructura técnica orientada a la gobernanza pública para verificación de ejecución en dispositivos educativos.",
        metaKeywords: "Gobernanza digital, Última milla, Cumplimiento, Gestión de activos públicos, Software offline educativo",
        title: "SVEED - Gobernanza Pública de la Última Milla Educativa",
        
        // Header
        logoSubtitle: "Verificación de Rutinas de Uso en Educación",
        navDesafio: "El Desafío",
        navSobre: "SVEED",
        navDinamica: "Dinámica",
        navPilares: "Pilares",
        navDashboard: "Dashboard",
        navOperadoras: "Operadoras",
        navConformidade: "Cumplimiento",
        
        // Hero
        heroTitle: "SVEED — Gobernanza Pública de la Última Milla Educativa",
        heroSubtitle: "Verificación técnica de ejecución mínima de uso en educación en dispositivos utilizados en el ámbito de políticas públicas de educación, en ambientes offline y de difícil monitoreo.",
        ctaButton: "Solicitar Nota Técnica de Viabilidad",
        ctaDisclaimer: "Documento técnico-institucional, sin carácter comercial o pedagógico."
    }
};

// Função para aplicar traduções
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Meta tags
    document.querySelector('meta[name="description"]').setAttribute('content', t.metaDescription);
    document.querySelector('meta[name="keywords"]').setAttribute('content', t.metaKeywords);
    document.title = t.title;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en-US' : 'es-ES';
    
    // Header
    document.querySelector('.logo-subtitle').textContent = t.logoSubtitle;
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav a');
    navLinks[0].textContent = t.navDesafio;
    navLinks[1].textContent = t.navSobre;
    navLinks[2].textContent = t.navDinamica;
    navLinks[3].textContent = t.navPilares;
    navLinks[4].textContent = t.navDashboard;
    navLinks[5].textContent = t.navOperadoras;
    navLinks[6].textContent = t.navConformidade;
    
    // Hero
    document.querySelector('.hero-title').textContent = t.heroTitle;
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    document.querySelector('.cta-button').textContent = t.ctaButton;
    document.querySelector('.cta-disclaimer').textContent = t.ctaDisclaimer;
}

// Detectar idioma da URL
function detectLanguage() {
    const path = window.location.pathname;
    if (path.includes('index-en.html')) return 'en';
    if (path.includes('index-es.html')) return 'es';
    return 'pt';
}

// Inicializar traduções ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = detectLanguage();
    applyTranslations(currentLang);
});
