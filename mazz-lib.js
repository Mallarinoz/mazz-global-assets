/**
 * MAZZ LIB - Ecosistema Mazz DevAITech
 * Versión: 2.3 (WhatsApp, Telegram & Counter Ready)
 */

class MazzSocial extends HTMLElement {
    connectedCallback() {
        const repoName = this.getAttribute('app') || 'Mazz-DevAITech-Website';
        const area = this.getAttribute('area') || 'Corp';
        const url = `https://mallarinoz.github.io/${repoName}/`;
        const displayName = repoName.replace(/-Website$/i, '').replace(/-/g, ' ');

        this.innerHTML = `
            <style>
                .conn-container { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
                .social-row { display: flex; gap: 15px; margin-top: 5px; justify-content: flex-end; }
                .social-icon-svg { color: var(--gold); transition: 0.3s; display: flex; align-items: center; }
                .social-icon-svg svg { width: 22px; height: 22px; fill: currentColor; }
                .contact-btn-small { display: inline-block; color: var(--gold); border: 1px solid var(--gold); padding: 5px 12px; border-radius: 4px; text-decoration: none; font-size: 0.75rem; font-weight: bold; transition: 0.3s; }
                .contact-btn-small:hover { background: var(--gold); color: black; }
            </style>
            <div class="conn-container">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="background:var(--gold); color:black; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:bold;">${area}</span>
                    <strong style="color:var(--gold); font-size: 1rem; text-transform: uppercase;">${displayName}</strong>
                </div>
                <div class="social-row">
                    <a href="https://wa.me/573105833978" target="_blank" class="contact-btn-small">WhatsApp</a>
                    <a href="https://t.me/Mallarinoz" target="_blank" class="contact-btn-small">Telegram</a>
                </div>
                <div class="social-row">
                    <a href="#" class="social-icon-svg" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg></a>
                </div>
            </div>`;
    }
}

class MazzFooter extends HTMLElement {
    connectedCallback() {
        const app = this.getAttribute('app') || 'Mazz-DevAITech-Website';
        const year = new Date().getFullYear();
        this.innerHTML = `
        <footer class="master-footer" style="padding: 3rem 5%; border-top: 2px solid var(--gold); background: var(--card); color: var(--text);"> 
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px;">
                <div>
                    <h4 style="color:var(--gold); margin-bottom:15px;">Mazz DevAITech Corp</h4>
                    <p style="opacity: 0.8;">CEO: Ing. Ricardo C. Ortiz Mallarino</p>
                    <p><b>MazzDevAITech@gmail.com</b></p>
                    <p><b>+57 310 583 39 78</b></p>
                </div>
                <div style="text-align: center;">
                    <h4 style="color:var(--gold); margin-bottom:15px;">Ecosistema Mazz</h4>
                    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fmallarinoz.github.io%2FMazz-DevAITech-Website&count_bg=%23D4AF37&title_bg=%23101010&icon=&icon_color=%23E7E7E7&title=Visitas&edge_flat=false" alt="Visitas"/>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end;">
                    <mazz-social app="${app}" area="Hub"></mazz-social>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem; opacity: 0.5; font-size: 0.8rem;">
                &copy; ${year} MAZZ DEVAI TECH CORP SAS.
            </div>
        </footer>`;
    }
}

customElements.define('mazz-social', MazzSocial);
customElements.define('mazz-footer', MazzFooter);
