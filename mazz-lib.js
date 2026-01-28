/**
 * MAZZ LIB - Ecosistema Mazz DevAITech
 * Versión: 2.2 (Final - Iconos Corregidos)
 */

class MazzSocial extends HTMLElement {
    connectedCallback() {
        const repoName = this.getAttribute('app') || 'Mazz-DevAITech-Website';
        const area = this.getAttribute('area') || 'Corp';
        const url = `https://mallarinoz.github.io/${repoName}/`;
        const displayName = repoName.replace(/-Website$/i, '').replace(/-/g, ' ');

        this.innerHTML = `
            <style>
                .conn-container { display: flex; flex-direction: column; gap: 15px; align-items: flex-end; }
                .social-row { display: flex; gap: 18px; margin-top: 8px; justify-content: flex-end; }
                .social-icon-svg { color: var(--gold); transition: 0.3s; display: flex; align-items: center; justify-content: center; text-decoration: none; }
                .social-icon-svg svg { width: 22px; height: 22px; fill: currentColor; }
                .social-icon-svg:hover { color: var(--text); transform: translateY(-3px); filter: drop-shadow(0 0 5px var(--gold)); }
                .gold-link-btn-ft { display: inline-block; color: var(--text); border: 2px solid var(--gold); padding: 8px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; transition: 0.3s; width: 100%; text-align: center; font-size: 0.85rem; }
                .gold-link-btn-ft:hover { background: var(--gold); color: #000; }
            </style>
            <div class="conn-container">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="background:var(--gold); color:black; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:bold;">${area}</span>
                    <strong style="color:var(--gold); font-size: 1.1rem; text-transform: uppercase;">${displayName}</strong>
                </div>
                <a href="${url}" target="_blank" class="gold-link-btn-ft">Visitar Sitio Web</a>
                <div class="social-row">
                    <a href="#" class="social-icon-svg" title="Instagram"><svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m5.4 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m4.1-3.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg></a>
                    <a href="#" class="social-icon-svg" title="Facebook"><svg viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg></a>
                    <a href="#" class="social-icon-svg" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg></a>
                    <a href="#" class="social-icon-svg" title="X"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                </div>
            </div>`;
    }
}

class MazzFooter extends HTMLElement {
    connectedCallback() {
        const app = this.getAttribute('app') || 'Mazz-DevAITech-Website';
        const year = new Date().getFullYear();
        this.innerHTML = `
        <style>
            .master-footer { padding: 4rem 5% 2rem; border-top: 2px solid var(--gold); background: var(--card); color: var(--text); transition: 0.4s; }
            .footer-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 40px; }
            .footer-col-right { display: flex; flex-direction: column; align-items: flex-end; text-align: right; }
            .footer-contact-item { margin: 8px 0; display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; transition: 0.3s; }
            .footer-contact-item:hover { color: var(--gold); }
            .footer-contact-item svg { width: 20px; height: 20px; fill: var(--gold); }
            @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; text-align: center; } .footer-col-right { align-items: center; } }
        </style>
        <footer class="master-footer" id="main-footer"> 
            <div class="footer-grid">
                <div>
                    <h4 style="color:var(--gold); margin-bottom:15px; font-size: 1.2rem;">Mazz DevAITech Corp</h4>
                    <p style="margin: 5px 0; opacity: 0.8;">CEO: Ing. Ricardo C. Ortiz Mallarino</p>
                    
                    <a href="mailto:MazzDevAITech@gmail.com" class="footer-contact-item">
                        <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        <span style="font-weight:bold;">MazzDevAITech@gmail.com</span>
                    </a>

                    <a href="tel:+573105833978" class="footer-contact-item">
                        <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                        <span style="font-weight:bold;">+57 310 583 39 78</span>
                    </a>
                </div>
                <div>
                    <h4 style="color:var(--gold); margin-bottom:15px; font-size: 1.2rem;">Ecosistema Mazz</h4>
                    <p style="font-size: 0.9rem; opacity: 0.8; line-height: 1.6;">Arquitectura de alta precisión para proyectos globales escalables. Innovación en IA, Fintech y Ciberseguridad.</p>
                </div>
                <div class="footer-col-right">
                    <h4 style="color:var(--gold); margin-bottom:15px; font-size: 1.2rem;">Conectividad</h4>
                    <mazz-social app="${app}" area="${this.getAttribute('area') || 'Hub'}"></mazz-social>
                </div>
            </div>
            <div style="text-align: center; margin-top: 3.5rem; border-top: 1px solid rgba(212,175,55,0.15); padding-top: 25px; font-size: 0.8rem; opacity: 0.5;">
                &copy; ${year} MAZZ DEVAI TECH CORP SAS.
            </div>
        </footer>`;
    }
}

customElements.define('mazz-social', MazzSocial);
customElements.define('mazz-footer', MazzFooter);