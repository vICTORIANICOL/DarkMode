import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./about.module.css";
import firstPageImage from "../../assets/firstpage.avif";
import benefitsPageImage from "../../assets/pro.webp";
import conPageImage from "../../assets/con.webp";
import discoverPageImage from "../../assets/discover.webp";
import discoverPageImage2 from "../../assets/discover2.webp";
import discoverPageImage3 from "../../assets/discover3.webp";

const About = () => {
  // Scroll to top on component mount (initial load)
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top on page load
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      {/* ---------------------------------------- About Section ---------------------------------------- */}
      <section id="aboutSection" className={styles.aboutSection}>
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
            hvad du kalder det – har opnået en tværplatform,
            tværenheds-kultfølge som standarden for kreative fagfolk. Mørk
            tilstand er ikke længere blot en webdesigntrend, men er blevet en
            vigtig del af godt webdesign takket være faktorer som øget
            tilgængelighed og reduceret øjenbelastning.
          </p>

          <div className={styles.gridContainer}>
            <p className={styles.gridParagraph}>
              Mørk tilstand kan simpelthen være mere æstetisk tiltalende for
              mange brugere. Det kan give et elegant og moderne udseende til en
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
            Mørkt UI er faktisk lige så gammelt som computere. For mere end 40
            år siden, i 1981, blev valget af mørk baggrund i de første
            IBM-computere dikteret af teknologiske begrænsninger. Den lave
            vedholdenhed af den standard hvide farve, der blev brugt i gamle
            skærme, forårsagede, at der opstod sorte horisontale striber på
            skærmen. Antallet af sorte mellemrum var så højt, at man for at
            forbedre brugernes opfattelse og oplevelse besluttede at maskere dem
            ved at bruge en sort baggrund. På sådanne systemer kørte de første
            computere med kommandolinjegrænseflade (CLI).
          </p>

          <p className={styles.aboutText}>
            Mere end en stilpræference, er mørkt design en effektiv praksis.
            Facebook og Instagram har observeret: “Brugere bruger 15% mere tid
            på platformen, når de bruger mørk tilstand sammenlignet med lys
            tilstand.” Med hjemmesider og app-ejere, der er ivrige efter at
            maksimere engagement, kan du forvente at finde flere mørke design –
            og mere efterspørgsel efter det – omkring dig.
          </p>
        </div>
      </section>

      {/* ---------------------------------------- BENEFITS Section ---------------------------------------- */}
      <section id="benefitsSection" className={styles.benefitsSection}>
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
            <a
              href="https://uxplanet.org/alternatives-to-using-pure-black-000000-for-text-and-backgrounds-54ef0e733cdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              læsbarheden{" "}
            </a>
            , især i omgivelser med svagt lys. Når du bruger en lys skærm i
            mørke, kan kontrasten mellem den hvide baggrund og sort tekst være
            hård for øjnene og føre til ubehag og endda hovedpine. Mørk tilstand
            kan hjælpe med at afhjælpe dette problem.
          </p>

          <p className={styles.benefits1}>
            2. Dark Mode-tendensen inden for webdesign, og hvordan det påvirker
            branding?
          </p>
          <p className={styles.benefitsText}>
            Denne tendens er opst&aring;et p&aring; grund af det faktum, at den
            reducerer belastningen af &oslash;jnene og forbedrer
            l&aelig;sbarheden af tekst og billeder under d&aring;rlige
            lysforhold. Desuden afgiver det en atmosf&aelig;re af modernitet,
            elegance og sofistikering til et websted, hvilket g&oslash;r det
            mere tiltalende og f&aelig;ngslende for brugerne.
          </p>

          <img
            src={benefitsPageImage}
            alt="Dark mode web design"
            className={styles.benefitsImage}
          />

          <p className={styles.benefitsText}>
            Nogle m&aelig;rker kan drage fordel af Dark Mode, is&aelig;r hvis
            det stemmer overens med deres identitet. For eksempel kan
            m&aelig;rker, der er forbundet med sofistikerede eller premium
            produkter og tjenester, drage fordel af at implementere Dark Mode,
            da det kan tilf&oslash;je elegancen og eksklusiviteten af deres
            brand.
          </p>

          <p className={styles.benefits1}>
            3. Sorte baggrunde hjælper med at få billeder til at poppe
          </p>

          <p className={styles.benefitsText}>
            Har du nogensinde bemærket, at mange museer og fotografer ofte
            bruger sorte baggrunde på deres hjemmesider i mørk tilstand? Det er
            ikke kun en sofistikeret æstetisk præference. De træffer det valg
            bevidst for at sikre, at deres fotos og illustrationer bliver
            levende.
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
            &ldquo;Good design, when it&apos;s done well, becomes invisible.
            It&apos;s only when it&apos;s done poorly that we notice it.&rdquo;
            - <span style={{ color: "#B34100" }}>Jared M. Spool</span>
          </div>
        </div>
      </section>

      {/* ---------------------------------------- RISKS Section ---------------------------------------- */}

      <section id="risksSection" className={styles.risksSection}>
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
            Giv et valg, vær opmærksom på en bruger, og hvis du ved, at han
            under brug er nødt til at fokusere på vigtigere opgaver (som at køre
            bil), så overvej at indstillinger skal justeres automatisk.
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
            personer med synsnedsættelse eller dem med visse typer
            farveblindhed. Derudover kan nogle brugere opleve, at kontrasten
            mellem den mørke baggrund og lys tekst er for stærk, hvilket
            forårsager hovedpine eller andet ubehag.
            <a
              href="https://www.ignitingbusiness.com/blog/pros-and-cons-of-dark-theme-websites"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.riskbutton}
            >
              Læs mere
            </a>
          </p>

          <p className={styles.risks1}>
            2. Hvordan mørk tilstand kan påvirke søvn og døgnrytmer?
          </p>
          <p className={styles.risksText}>
            Døgnrytme er fysiske, mentale og adfærdsmæssige ændringer, der
            følger en daglig cyklus. Denne cyklus er påvirket af miljøfaktorer
            som lys og mørke. Eksponering for blåt lys, som udsendes af de
            fleste elektroniske enheder, kan undertrykke produktionen af
            melatonin, et hormon, der regulerer søvnen.
          </p>

          <p className={styles.risksText}>
            Når brugere vælger Dark Mode på deres enheder, tror de måske, at det
            er bedre for deres øjne, da kontrasten er reduceret og lysstyrken
            dæmpet. Brugen af Dark Mode kan dog faktisk forårsage anstrengte
            øjne og træthed, hvilket kan påvirke søvnkvaliteten. Det blå lys,
            der udsendes af elektroniske enheder, er ikke den eneste faktor, der
            påvirker søvnen; kontrasten og lysstyrken på skærmen spiller også en
            rolle.
          </p>

          <p className={styles.risks1}>
            3. Dark Modes indflydelse på farvekontrasten og farvenøjagtigheden
          </p>

          <p className={styles.risksText}>
            Mørk tilstand kan gøre det vanskeligt at gengive farver nøjagtigt,
            især for designere og kunstnere, der er afhængige af
            farvenøjagtighed for at skabe deres arbejde. Dette kan være særligt
            problematisk for e-handelswebsteder, hvor nøjagtig farvegengivelse
            er afgørende for at skabe salg.
          </p>

          <p className={styles.risksText}>
            For at afbøde disse risici er det vigtigt for webdesignere
            omhyggeligt at overveje farvepaletten, der bruges i mørk tilstand,
            og teste farvenøjagtigheden på en række forskellige enheder og
            skærmindstillinger. Ved at gøre det kan designere sikre, at brugerne
            får en positiv oplevelse med mørk tilstand, samtidig med at brandets
            integritet og dets visuelle identitet bevares.
          </p>

          <div className={styles.risksSubtext}>
            Research published in the{" "}
            <a
              href="https://journals.physiology.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#B34100" }}
            >
              Journal of Applied Physiology
            </a>{" "}
            indicates that high blue light exposure at night delays sleep onset
            and reduces restfulness.
          </div>
        </div>
      </section>

      {/* ---------------------------------------- DISCOVER Section ---------------------------------------- */}

      <section id="discoverSection" className={styles.discoverSection}>
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
    </div>
  );
};

export default About;
