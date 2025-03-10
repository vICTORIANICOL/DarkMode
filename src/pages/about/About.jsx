import { useEffect } from "react";

import styles from "./about.module.css";
import firstPageImage from "../../assets/firstpage.avif";

const About = () => {
  // Scroll to top on component mount (initial load)
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top on page load
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div
        className="arrow"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
          });
        }}
      ></div>
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutHeader}>
          Hvad er Mørkt Webdesign <br /> og Hvordan man Bruger det Effektivt?
        </h1>

        <p className={styles.aboutText}>
          Mørk tilstand, mørke temaer eller mørke brugergrænseflader – uanset
          hvad du kalder det – har opnået en tværplatform, tværenheds-kultfølge
          som standarden for kreative fagfolk. Mørk tilstand er ikke længere
          blot en webdesigntrend, men er blevet en vigtig del af godt webdesign
          takket være faktorer som øget tilgængelighed og reduceret
          øjenbelastning.
        </p>

        <div className={styles.gridContainer}>
          <p className={styles.gridParagraph}>
            Mørk tilstand kan simpelthen være mere æstetisk tiltalende for mange
            brugere. Det kan give et elegant og moderne udseende til en
            hjemmeside eller app og kan endda hjælpe med at fremhæve visse
            elementer, såsom billeder og videoer.
          </p>
          <a
            href="https://www.awwwards.com/awwwards/collections/dark-mode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.aboutButton}>Mørke Designs</button>
          </a>

          <img
            src={firstPageImage}
            alt="Dark mode web design"
            className={styles.aboutImage}
          />
        </div>

        <p className={styles.aboutText}>
          Mørkt UI er faktisk lige så gammelt som computere. For mere end 40 år
          siden, i 1981, blev valget af mørk baggrund i de første IBM-computere
          dikteret af teknologiske begrænsninger. Den lave vedholdenhed af den
          standard hvide farve, der blev brugt i gamle skærme, forårsagede, at
          der opstod sorte horisontale striber på skærmen. Antallet af sorte
          mellemrum var så højt, at man for at forbedre brugernes opfattelse og
          oplevelse besluttede at maskere dem ved at bruge en sort baggrund. På
          sådanne systemer kørte de første computere med
          kommandolinjegrænseflade (CLI).
        </p>

        <p className={styles.aboutText}>
          Mere end en stilpræference, er mørkt design en effektiv praksis.
          Facebook og Instagram har observeret: “Brugere bruger 15% mere tid på
          platformen, når de bruger mørk tilstand sammenlignet med lys
          tilstand.” Med hjemmesider og app-ejere, der er ivrige efter at
          maksimere engagement, kan du forvente at finde flere mørke design – og
          mere efterspørgsel efter det – omkring dig.
        </p>
      </div>
    </section>
  );
};

export default About;
