import { useEffect } from "react";

import styles from "./benefits.module.css";
import benefitsPageImage from "../../assets/pro.webp";


const Benefits = () => {
  // Scroll to top on component mount (initial load)
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top on page load
  }, []);

  return (
    <section className={styles.benefitsSection}>
      <div
        className="arrow"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
          });
        }}
      ></div>
      <div className={styles.benefitsContainer}>
        <h1 className={styles.benefitsHeader}>
          Fordele ved Mørkt Tilstand <br /> Webdesign
        </h1>

        <p className={styles.benefitsText1}>
          Fordelene ved at bruge mørk tilstand er talrige, og det er ingen
          overraskelse, at så mange websteder og apps nu tilbyder denne
          funktion.
        </p>

        <p className={styles.benefits1}>1. Fordelene Ved Mørk Tilstand</p>

        <p className={styles.benefitsText}>
          For det første kan mørk tilstand reducere øjenbelastning og forbedre{" "}
          <a href="https://uxplanet.org/alternatives-to-using-pure-black-000000-for-text-and-backgrounds-54ef0e733cdb" target="_blank" rel="noopener noreferrer">
            læsbarheden{" "}
          </a>
          , især i omgivelser med svagt lys. Når du bruger en lys skærm i mørke,
          kan kontrasten mellem den hvide baggrund og sort tekst være hård for
          øjnene og føre til ubehag og endda hovedpine. Mørk tilstand kan hjælpe
          med at afhjælpe dette problem.
        </p>

        <p className={styles.benefits1}>
          2. Dark Mode-tendensen inden for webdesign, og hvordan det påvirker
          branding?
        </p>
        <p className={styles.benefitsText}>
          Denne tendens er opst&aring;et p&aring; grund af det faktum, at den
          reducerer belastningen af &oslash;jnene og forbedrer l&aelig;sbarheden
          af tekst og billeder under d&aring;rlige lysforhold. Desuden afgiver
          det en atmosf&aelig;re af modernitet, elegance og sofistikering til et
          websted, hvilket g&oslash;r det mere tiltalende og f&aelig;ngslende
          for brugerne.
        </p>

        <img
          src={benefitsPageImage}
          alt="Dark mode web design"
          className={styles.benefitsImage}
        />

        <p className={styles.benefitsText}>
          Nogle m&aelig;rker kan drage fordel af Dark Mode, is&aelig;r hvis det
          stemmer overens med deres identitet. For eksempel kan m&aelig;rker,
          der er forbundet med sofistikerede eller premium produkter og
          tjenester, drage fordel af at implementere Dark Mode, da det kan
          tilf&oslash;je elegancen og eksklusiviteten af deres brand.
        </p>

        <p className={styles.benefits1}>
          3. Sorte baggrunde hjælper med at få billeder til at poppe
        </p>

        <p className={styles.benefitsText}>
          Har du nogensinde bemærket, at mange museer og fotografer ofte bruger
          sorte baggrunde på deres hjemmesider i mørk tilstand? Det er ikke kun
          en sofistikeret æstetisk præference. De træffer det valg bevidst for
          at sikre, at deres fotos og illustrationer bliver levende.
        </p>

        <p className={styles.benefitsText}>
          <a
            href="https://www.fastcompany.com/90421232/dark-mode-is-everywhere-but-is-it-really-better"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Hvide baggrunde
          </a>{" "}
          vasker ofte billeder ud, men - fordi farven sort falder - får mørke
          baggrunde billeder med lysere farver til at skille sig ud og blive
          levende.
        </p>

        <p className={styles.benefitsText}>
          Hvis de fleste mennesker får adgang til dit websted fra deres
          smartphones, vil du have glade brugere. Det skyldes, at en
          webdesigngrænseflade i mørk tilstand med en sort baggrund kræver
          mindre batteristrøm for at blive vist, ud over at den ser fantastisk
          ud.
        </p>

        <div className={styles.benefitsSubtext}>
          &ldquo;Good design, when it&apos;s done well, becomes invisible. It&apos;s only when
          it&apos;s done poorly that we notice it.&rdquo; - <span style={{color: '#B34100'}}>Jared M. Spool</span>
        </div>
      </div>
    </section>
  );
};

export default Benefits;