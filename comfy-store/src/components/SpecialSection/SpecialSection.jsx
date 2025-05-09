import styles from './SpecialSection.module.css';
import BenefitCard from '@components/BenefitCard/BenefitCard';
import benefits from '@data/benefits.json';

import scienceIcon from '@assets/icons/science.svg';
import comfortIcon from '@assets/icons/comfort.svg';
import sustainabilityIcon from '@assets/icons/sustainability.svg';

const iconsMap = {
  "science.svg": scienceIcon,
  "comfort.svg": comfortIcon,
  "sustainability.svg": sustainabilityIcon
};

export default function SpecialSection() {
  return (
    <section className={styles.section}>
      <h2>What makes us special?</h2>
      <div className={styles.cards}>
        {benefits.map((item, index) => (
          <BenefitCard
            key={index}
            icon={iconsMap[item.icon]}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
