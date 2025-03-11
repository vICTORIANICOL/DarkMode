
  import { useEffect } from "react";
  
  import styles from "./discover.module.css";
  import discoverPageImage from "../../assets/discover.webp";
  import discoverPageImage2 from "../../assets/discover2.webp";
  import discoverPageImage3 from "../../assets/discover3.webp";
  
  const Discover= () => {
    // Scroll to top on component mount (initial load)
    useEffect(() => {
      window.scrollTo(0, 0); // This scrolls the page to the top on page load
    }, []);
  
    return (
      <section className={styles.discoverSection}>
        <div
          className="arrow"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth", // Smooth scrolling effect
            });
          }}
        ></div>
        <div className={styles.discoverContainer}>
          <h1 className={styles.discoverHeader}>
            Fakta om Webdesign <br /> i Mørk Tilstand
          </h1>

          <p className={styles.discoverText1}>
            Tænk på, hvad det betyder for miljøet. Takket være energibesparelsen
            er Dark UI mere miljøvenlig end sine lysere modstykker.
          </p>

          <p className={styles.discover1}>Tidligere end du troede</p>

          <p className={styles.discoverText}>
            Dark UI går tilbage til 1981, hvor IBM-computere brugte mørke
            baggrunde til at maskere sorte huller forårsaget af
            skærmbegrænsninger. Dette forbedrede brugeroplevelsen og blev
            standarden for tidlige Command-Line Interface (CLI) systemer.
          </p>

          <img
            src={discoverPageImage}
            alt="Dark mode web design"
            className={styles.discoverImage}
          />
          <p className={styles.imageCaption}>
            IBM 3180 & Stranger Things Scene by TJ HardyPRO on{" "}
            <a
              href="https://www.artstation.com/artwork/Qb8Wl"
              target="_blank"
              rel="noopener noreferrer"
            >
              ArtStation
            </a>
          </p>

          <p className={styles.discoverText}>
            Af samme grund blev der brugt grøn farve til bogstaver og tegn, som
            havde vedholdenhed længe nok til at skinne kontinuerligt indtil
            næste skærmscanning - hvilket reducerede effekten af sorte striber.
          </p>

          <p className={styles.discover1}>En industri overlevede</p>
          <p className={styles.discoverText}>
            Mens Dark UI faldt i de fleste industrier, beholdt bilsektoren det
            af en afgørende årsag - driverfokus. Hastighedsmålere bruger lyse
            skilte på mørk baggrund for at sikre synlighed, især under dårlige
            lysforhold. Et stærkt oplyst interiør ville skabe refleksioner,
            hvilket forårsager distraktioner. For at forhindre dette er det kun
            vigtige skilte og pejlemærker, der er baggrundsbelyste, hvilket øger
            sikkerheden og koncentrationen på vejen.
          </p>

          <img
            src={discoverPageImage2}
            alt="Dark mode web design"
            className={styles.discoverImage}
          />
          <p className={styles.imageCaption}>
            MG Production Car HMI by{" "}
            <a
              href="https://dribbble.com/gnatovych"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vladimir Gnatovych
            </a>
          </p>

          <p className={styles.discover1}>OLED</p>

          <p className={styles.discoverText}>
            Det hele startede i det øjeblik, hvor Sony udgav sine første
            OLED-skærme (organisk lysdiode), som er kendetegnet ved, at hver
            pixel skinner for sig selv med forskellig lysintensitet. I tilfælde
            af de sorteste pixel (#000) - de er slået helt fra. Måske er én
            pixel ikke for meget, men hvis 80 % af skærmen er dækket af sort
            farve, giver det et betydeligt område at slukke, hvilket i
            virkeligheden udmønter sig i den største fordel - mindre spild af
            energi!
          </p>

          <p className={styles.discoverText}>
            Hvis du har troet, at du som person, der laver applikationer, ikke
            har indflydelse på reduktionen af en sådan mængde energi, så kommer
            du med hjælp til Dark Mode og nævnte OLED-skærme. Selvfølgelig
            afhænger den nøjagtige procentdel af energi, der drænes af sålens
            skærm, af mange faktorer, som hvordan appen er oprettet, og hvilken
            lysstyrke der bruges.
          </p>

          <p className={styles.discoverText}>
            Mere detaljerede data blev leveret af eksperter fra Google, og
            resultaterne blev præsenteret under Android Dev Summit 2018, det vil
            sige i løbet af året, hvor Android introducerede Dark Mode. De
            udførte test af brugt energi ved forskellige farveskemaer. Her er
            resultaterne:
          </p>

          <img
            src={discoverPageImage3}
            alt="Dark mode web design"
            className={styles.discoverImage}
          />
          <p className={styles.imageCaption}>
            Screen energy usage on YouTube in Light Mode vs. Dark Mode @{" "}
            <a
              href="https://www.youtube.com/watch?v=N_6sPd0Jd3g"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android Dev Summit 2018
            </a>
          </p>

          <div className={styles.discoverText1}>
            &ldquo;Design is really an act of communication, which means having
            a deep understanding of the person with whom the designer is
            communicating.&rdquo;
          </div>
        </div>
      </section>
    );
  };
  
  

export default Discover;
