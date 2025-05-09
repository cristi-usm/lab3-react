import styles from './ProductCard.module.css';

export default function ProductCard({ product, iconsMap, imagePath }) {
  return (
    <div className={styles.card}>
      <img src={imagePath + product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <ul>
        {product.features.map((feat, index) => (
          <li key={index}>
            <img src={iconsMap[feat.icon]} alt="" />
            <span>{feat.text}</span>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <span className={styles.price}>{product.price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
