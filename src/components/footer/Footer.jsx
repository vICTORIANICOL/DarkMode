import styles from  "../footer/footer.module.css"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2025 MørkFremtid. Alle rettigheder forbeholdes.</p>
        <p>Kontakt: +45 00 00 00 00</p>
        <p>Designet af Victoria Nicolenco</p>
        
      </div>
    </footer>
  );
};

export default Footer;
