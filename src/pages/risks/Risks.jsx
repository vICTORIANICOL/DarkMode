import { useEffect } from "react";

import styles from "./risks.module.css";
import conPageImage from "../../assets/con.webp";

const Risks = () => {
  // Scroll to top on component mount (initial load)
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top on page load
  }, []);

  return (
    <section className={styles.risksSection}>
      <div
        className="arrow"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
          });
        }}
      ></div>
      <div className={styles.risksContainer}>
        <h1 className={styles.risksHeader}>
          Risici ved Dark Mode <br /> Webdesign
        </h1>

        <p className={styles.risksText1}>
          Giv et valg, vær opmærksom på en bruger, og hvis du ved, at han under
          brug er nødt til at fokusere på vigtigere opgaver (som at køre bil),
          så overvej at indstillinger skal justeres automatisk.
        </p>

        <img
          src={conPageImage}
          alt="dark mode web design"
          className={styles.risksImage}
        />

        <p className={styles.risks1}>1. Risici Ved Mørk Tilstand</p>

        <p className={styles.risksText}>
          En af de største risici er, at det kan forårsage anstrengte øjne og
          gøre det sværere for nogle mennesker at læse. Dette gælder især for
          personer med synsnedsættelse eller dem med visse typer farveblindhed.
          Derudover kan nogle brugere opleve, at kontrasten mellem den mørke
          baggrund og lys tekst er for stærk, hvilket forårsager hovedpine eller
          andet ubehag.
          <a href="https://www.ignitingbusiness.com/blog/pros-and-cons-of-dark-theme-websites" target="_blank" rel="noopener noreferrer" className={styles.riskbutton}>
            Læs mere
          </a>
        </p>

        <p className={styles.risks1}>
          2. Hvordan mørk tilstand kan påvirke søvn og døgnrytmer?
        </p>
        <p className={styles.risksText}>
          Døgnrytme er fysiske, mentale og adfærdsmæssige ændringer, der følger
          en daglig cyklus. Denne cyklus er påvirket af miljøfaktorer som lys og
          mørke. Eksponering for blåt lys, som udsendes af de fleste
          elektroniske enheder, kan undertrykke produktionen af melatonin, et
          hormon, der regulerer søvnen.
        </p>

        <p className={styles.risksText}>
          Når brugere vælger Dark Mode på deres enheder, tror de måske, at det
          er bedre for deres øjne, da kontrasten er reduceret og lysstyrken
          dæmpet. Brugen af Dark Mode kan dog faktisk forårsage anstrengte
          øjne og træthed, hvilket kan påvirke søvnkvaliteten. Det blå lys, der
          udsendes af elektroniske enheder, er ikke den eneste faktor, der
          påvirker søvnen; kontrasten og lysstyrken på skærmen spiller også en
          rolle.
        </p>

        <p className={styles.risks1}>
          3. Dark Modes indflydelse på farvekontrasten og farvenøjagtigheden
        </p>

        <p className={styles.risksText}>
          Mørk tilstand kan gøre det vanskeligt at gengive farver nøjagtigt,
          især for designere og kunstnere, der er afhængige af farvenøjagtighed
          for at skabe deres arbejde. Dette kan være særligt problematisk for
          e-handelswebsteder, hvor nøjagtig farvegengivelse er afgørende for at
          skabe salg.
        </p>

        <p className={styles.risksText}>
          For at afbøde disse risici er det vigtigt for webdesignere omhyggeligt
          at overveje farvepaletten, der bruges i mørk tilstand, og teste
          farvenøjagtigheden på en række forskellige enheder og
          skærmindstillinger. Ved at gøre det kan designere sikre, at brugerne
          får en positiv oplevelse med mørk tilstand, samtidig med at brandets
          integritet og dets visuelle identitet bevares.
        </p>

        <div className={styles.risksSubtext}>
          Research published in the <a href="https://journals.physiology.org/" target="_blank" rel="noopener noreferrer" style={{color: '#B34100'}}>Journal of Applied Physiology</a> indicates that
          high blue light exposure at night delays sleep onset and reduces
          restfulness.
        </div>
      </div>
    </section>
  );
};

export default Risks;
