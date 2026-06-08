import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null); // 'impressum' oder 'datenschutz' oder null

  const openModal = (type, e) => {
    e.preventDefault();
    setActiveModal(type);
    document.body.style.overflow = "hidden"; // Verhindert das Scrollen im Hintergrund
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset";
  };

  return (
    <footer className="footer-container flex">
      <nav aria-label="Footer Navigation">
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#datenschutz" onClick={(e) => openModal("datenschutz", e)}>
              Datenschutz
            </a>
          </li>
          <li>
            <a href="#impressum" onClick={(e) => openModal("impressum", e)}>
              Impressum
            </a>
          </li>
        </ul>
      </nav>

      <p>© 2026 Spencer Sharp. All rights reserved.</p>

      {/* MODAL WINDOWS FOR LEGAL TEXTS */}
      {activeModal && (
        <div className="legal-modal-overlay" onClick={closeModal}>
          <div className="legal-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="legal-modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="legal-modal-inner-text">
              
              {/* --- IMPRESSUM INHALT --- */}
              {activeModal === "impressum" && (
                <>
                  <h1>Impressum</h1>
                  <p className="legal-subtitle">Gesetzliche Anbieterkennzeichnung nach § 5 DDG</p>
                  
                  <div className="legal-highlight-box">
                    <p><strong>Dienstanbieter &amp; Verantwortlicher:</strong></p>
                    <p>
                      Hanna Farha<br />
                      Markter / Webentwickler &amp; Designer<br />
                      Schillingstr. 30<br />
                      10179 Berlin<br />
                      Deutschland
                    </p>
                    <p><strong>Kontakt:</strong></p>
                    <p>
                      Telefon: 01799343000<br />
                      E-Mail: johnnyfarha1@gmail.com 
                    </p>
                  </div>

                  <h3>EU-Streitschlichtung</h3>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                      https://ec.europa.eu/consumers/odr
                    </a>.<br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>

                  <h3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </>
              )}

              {/* --- DATENSCHUTZ INHALT --- */}
              {activeModal === "datenschutz" && (
                <>
                  <h1>Datenschutzerklärung</h1>
                  <p className="legal-subtitle">Informationen über die Erhebung und Verarbeitung personenbezogener Daten</p>
                  
                  <h2>1. Datenschutz auf einen Blick</h2>
                  <h3>Allgemeine Hinweise</h3>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                  
                  <h3>Datenerfassung auf dieser Website</h3>
                  <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                  <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum entnehmen.</p>
                  <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
                  <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. wenn Sie uns eine E-Mail schreiben). Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch die IT-Systeme erfasst (z. B. IP-Adresse oder Uhrzeit des Seitenaufrufs).</p>

                  <h2>2. Hosting</h2>
                  <p>Wir hosten die Inhalte unserer Website bei einem externen Dienstleister (z. B. Vercel / Netlify / GitHub Pages). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Portfolios.</p>

                  <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                  <h3>Hinweis zur verantwortlichen Stelle</h3>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p>
                    Hanna Farha<br />
                    Schillingstr. 30<br />
                    10179 Berlin<br />
                    Telefon: 01799343000
                  </p>

                  <h3>Ihre Rechte als betroffene Person</h3>
                  <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen (DSGVO) jederzeit das Recht auf:</p>
                  <ul>
                    <li>Unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                    <li>Berichtigung unrichtiger Daten oder Löschung (Art. 16 und 17 DSGVO)</li>
                    <li>Widerruf einer bereits erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                    <li>Beschwerde bei der zuständigen Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
                  </ul>

                  <h2>4. Datenerfassung (Server-Log-Files)</h2>
                  <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, IP-Adresse, Uhrzeit). Diese Daten sind technisch notwendig, um die Stabilität und Sicherheit der Website zu gewährleisten (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).</p>
                </>
              )}

            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;