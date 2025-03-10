import styles from "./section6.module.css";

const Section6 = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerText}>
          Mørkets <br /> Vogtere
        </h2>
        <p className={styles.introText}>Vores Støtter</p>
      </div>

      <div className={styles.linksContainer}>
        <div className={styles.linkGroup}>
          <h3 className={styles.subheading}>En særlig omtale går til ...</h3>
          <ul className={styles.linkList}>
            <li>
              <a
                href="https://blog.tbhcreative.com/web-design-trends-of-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Tbh Creative
              </a>
            </li>
            <li>
              <a
                href="https://forms.app/en/blog/dark-mode-statistics"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Statistics on Dark Mode
              </a>
            </li>
            <li>
              <a
                href="https://piktochart.com/tips/dark-color-palette"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Dark Color Palette
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section6;
