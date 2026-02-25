import styles from "./About.module.css";
import Button from "@components/Button/Button";
import info from "@data/info.json";

function About({ navigate }) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <section className={styles.bio}>

          <div className={styles.bioLeft}>
            <div className={styles.photoCard}>
              <img src={info.photo} alt={info.name} className={styles.photo} />
            </div>
            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.dLabel}>Nume</span>
                <span className={styles.dValue}>{info.name}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.dLabel}>Email</span>
                <span className={styles.dValue}>{info.email}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.dLabel}>Universitate</span>
                <span className={styles.dValue}>{info.university}</span>
              </div>
            </div>
          </div>

          <div className={styles.bioRight}>
            <span className={styles.eyebrow}>Despre mine</span>
            <h1 className={styles.bioTitle}>
              Construiesc cu<br /><em>intenție și precizie</em>
            </h1>
            <p className={styles.bioPara}>{info.bio}</p>

            <div className={styles.skills}>
              {info.skills.map((skill) => (
                <span key={skill} className={styles.skill}>{skill}</span>
              ))}
            </div>

            <Button text="Contactează-mă" onClick={() => navigate("contact")} variant="primary" />
          </div>

        </section>

      </div>
    </div>
  );
}

export default About;
