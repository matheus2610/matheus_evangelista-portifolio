/**
 * TEMPLATE DE PROJETOS — Funciona offline.
 * Ler apenas o slug da query string e apresentar o título correspondente.
 * Quando a página completa de um projeto for criada, você poderá substituir
 * este template e manter o URL /detalhes-projeto.html?projeto=SLUG.
 */
document.addEventListener('DOMContentLoaded', () => {
  const titles = {
  "roteamento-filiais": {
    "pt": "Roteamento entre filiais",
    "en": "Routing Between Branch Offices",
    "es": "Enrutamiento entre sucursales"
  },
  "firewall-seguranca-rede": {
    "pt": "Firewall e segurança de rede",
    "en": "Firewall and Network Security",
    "es": "Firewall y seguridad de red"
  },
  "laboratorio-deteccao-ataques": {
    "pt": "Laboratório de detecção de ataques",
    "en": "Attack Detection Lab",
    "es": "Laboratorio de detección de ataques"
  },
  "seguranca-aplicacoes-web": {
    "pt": "Segurança de aplicações Web",
    "en": "Web Application Security",
    "es": "Seguridad de aplicaciones web"
  },
  "soc-completo": {
    "pt": "SOC completo",
    "en": "Full SOC",
    "es": "SOC completo"
  },
  "scanner-vulnerabilidades-web": {
    "pt": "Scanner de Vulnerabilidades Web",
    "en": "Web Vulnerability Scanner",
    "es": "Escáner de vulnerabilidades web"
  },
  "monitoramento-ameacas": {
    "pt": "Monitoramento de Ameaças em Tempo Real",
    "en": "Real-Time Threat Monitoring",
    "es": "Monitorización de amenazas en tiempo real"
  },
  "defesa-ativa-pentest": {
    "pt": "Defesa Ativa e Pentest",
    "en": "Active Defense & Pentesting",
    "es": "Defensa activa y pentesting"
  },
  "arquitetura-seguranca": {
    "pt": "Arquitetura de Segurança",
    "en": "Security Architecture",
    "es": "Arquitectura de seguridad"
  },
  "pipeline-cicd-sast-sca": {
    "pt": "Pipeline CI/CD com SAST e SCA",
    "en": "CI/CD Pipeline with SAST and SCA",
    "es": "Pipeline CI/CD con SAST y SCA"
  },
  "infrastructure-as-code": {
    "pt": "Infrastructure as Code",
    "en": "Infrastructure as Code",
    "es": "Infraestructura como código"
  },
  "sistema-autenticacao": {
    "pt": "Sistema de autenticação",
    "en": "Authentication System",
    "es": "Sistema de autenticación"
  },
  "processamento-assincrono": {
    "pt": "Processamento assíncrono",
    "en": "Asynchronous Processing",
    "es": "Procesamiento asíncrono"
  },
  "api-rest-produtos": {
    "pt": "API REST de Produtos",
    "en": "Product REST API",
    "es": "API REST de productos"
  },
  "api-autenticacao": {
    "pt": "API de autenticação",
    "en": "Authentication API",
    "es": "API de autenticación"
  },
  "microservicos": {
    "pt": "Microserviços",
    "en": "Microservices",
    "es": "Microservicios"
  }
};
  const lang = document.documentElement.lang.slice(0,2);
  const slug = new URLSearchParams(window.location.search).get('projeto');
  const name = titles[slug]?.[lang];
  // Mantém o projeto selecionado ao trocar idioma nos detalhes.
  if (slug) {
    document.querySelectorAll('.language-switcher a, link[rel="alternate"]').forEach(a => {
      a.setAttribute('href', a.getAttribute('href') + '?projeto=' + encodeURIComponent(slug));
    });
  }
  if (!name) return; // mantém o título genérico para um slug inexistente.
  const heading = document.getElementById('projectDetailTitle');
  if (heading) heading.textContent = name;
  document.title = `${name} | Matheus Evangelista`;
});
