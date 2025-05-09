import styles from './BestsellersSection.module.css';
import ProductCard from '@components/ProductCard/ProductCard';
import products from '@data/products.json';

import leisureIcon from '@assets/icons/leisure.svg';
import comfortableIcon from '@assets/icons/comfortable.svg';
import cottonIcon from '@assets/icons/cotton.svg';
import weightIcon from '@assets/icons/weight.svg';

const iconsMap = {
  "leisure.svg": leisureIcon,
  "comfortable.svg": comfortableIcon,
  "cotton.svg": cottonIcon,
  "weight.svg": weightIcon
};

export default function BestsellersSection() {
  const imagePath = "/src/assets/products/"; // adjust path if needed

  return (
    <section className={styles.bestsellers}>
      <h2>Our bestsellers</h2>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} iconsMap={iconsMap} imagePath={imagePath} />
        ))}
      </div>
    </section>
  );
}
