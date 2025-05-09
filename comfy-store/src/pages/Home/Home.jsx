import styles from './Home.module.css';
import heroImg from '@assets/home/hero.jpg';
import SpecialSection from '@components/SpecialSection/SpecialSection';
import TestimonialSection from '@components/TestimonialSection/TestimonialSection';
import BestsellersSection from '@components/BestsellersSection/BestsellersSection';
import globalStyles from '../../styles/globals.module.css';


export default function Home() {
  return (
    <div className={globalStyles.mainContent}>
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>We design better furniture, for better living</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.</p>
          <button className={styles.heroButton}>Start Shopping</button>
        </div>
        <img src={heroImg} alt="Hero" className={styles.heroImage} />
      </section> 

      <SpecialSection /> 

      <TestimonialSection /> 

      <BestsellersSection />

    </div>
    </div>
  );
}
