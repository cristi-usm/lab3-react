import styles from "./Contact.module.css";
import info from "@data/info.json";

function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.top}>
          <span className={styles.eyebrow}>Contact</span>
          <h1 className={styles.title}>Să discutăm</h1>
          <p className={styles.sub}>
            Fie că ai un proiect, o idee sau vrei să discutăm despre tehnologie — scrie-mi.
          </p>
        </div>

        <div className={styles.layout}>

          {/* Date contact */}
          <div className={styles.info}>
            <div className={styles.infoRow}>
              <span className={styles.infoIcon}>✉️</span>
              <div>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>{info.email}</span>
              </div>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoIcon}>🏛️</span>
              <div>
                <span className={styles.infoLabel}>Universitate</span>
                <span className={styles.infoValue}>{info.university}</span>
              </div>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <span className={styles.infoLabel}>Locație</span>
                <span className={styles.infoValue}>Chișinău, Moldova</span>
              </div>
            </div>
          </div>

          {/* Formular */}
          <div className={styles.formWrap}>
            <div className={styles.form}>
              <div className={styles.row2}>
                <div>
                  <label className={styles.label}>Nume</label>
                  <input type="text" placeholder="Ion Popescu" className={styles.field} />
                </div>
                <div>
                  <label className={styles.label}>Email</label>
                  <input type="email" placeholder="ion@mail.com" className={styles.field} />
                </div>
              </div>
              <div>
                <label className={styles.label}>Mesaj</label>
                <textarea placeholder="Scrie mesajul tău..." rows={5} className={styles.field} />
              </div>
              <button className={styles.submitBtn}>Trimite mesajul →</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
