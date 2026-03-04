import styles from '@styles/About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <h2>Despre Coffee House</h2>
        <p>
          Coffee House este locul unde pasiunea pentru cafea întâlnește atmosfera caldă și prietenoasă.
          Folosim doar boabe de cafea atent selecționate și preparăm fiecare băutură cu grijă,
          pentru ca tu să te bucuri de o experiență autentică.
        </p>
        <p>
          De la espresso intens până la latte cremos, fiecare ceașcă spune o poveste.
          Vino să descoperi aroma cafelei adevărate!
        </p>
      </div>
      <div className={styles.image}>
        <img src="/assets/americano.jpg" alt="Cafea și atmosferă caldă" />
      </div>
    </div>
  );
}