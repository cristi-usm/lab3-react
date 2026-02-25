import styles from "./Home.module.css";
import Button from "@components/Button/Button";
import Card from "@components/Card/Card";
import Avatar from "@components/Avatar/Avatar";
import info from "@data/info.json";
import professors from "@data/professors.json";

function Home({ navigate }) {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>USM · Facultatea de Matematică și Informatică</p>
          <h1 className={styles.heroName}>
            Crudu<br /><em>Cristian</em>
          </h1>
          <p className={styles.heroBio}>{info.bio}</p>
          <div className={styles.heroBtns}>
            <Button text="Despre mine" onClick={() => navigate("about")} variant="primary" size="lg" />
            <Button text="Contact" onClick={() => navigate("contact")} variant="secondary" size="lg" />
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.photoWrap}>
            <img src={info.photo} alt={info.name} className={styles.photo} />
            <div className={styles.photoBadge}>🏆 Bursă Regală</div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* REALIZARI */}
      <section className={styles.section}>
        <p className={styles.sectionTag}>Portofoliu academic</p>
        <h2 className={styles.sectionTitle}>Realizările mele</h2>
        <div className={styles.grid}>
          {info.achievements.map((item) => (
            <Card key={item.id} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* PROFESORI */}
      <section className={styles.section}>
        <p className={styles.sectionTag}>Echipă academică</p>
        <h2 className={styles.sectionTitle}>Profesori îndrumători</h2>
        <div className={styles.profGrid}>
          {professors.map((p) => (
            <Avatar key={p.id} photo={p.photo} name={p.name} title={p.title} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Să colaborăm?</h2>
        <p className={styles.ctaSub}>Deschis oricând pentru proiecte interesante sau discuții academice.</p>
        <Button text="Contactează-mă" onClick={() => navigate("contact")} variant="primary" size="lg" />
      </section>

    </div>
  );
}

export default Home;
