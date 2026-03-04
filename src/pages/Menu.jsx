import { useEffect, useState } from 'react';
import styles from '@styles/Menu.module.css';

export default function Menu() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch('/src/data/gallery.json')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  const handleSelect = (index) => setSelectedIndex(index);

  const handleNext = () => setSelectedIndex((prev) => (prev + 1) % images.length);

  const handlePrev = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedIndex(randomIndex);
  };

  const handleShuffle = () => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffled);
    setSelectedIndex(0);
  };

  return (
    <div className={styles.menu}>
      <h2>Galeria Coffee House</h2>

      {images.length > 0 && (
        <div className={styles.mainImage}>
          <img src={images[selectedIndex].image} alt={images[selectedIndex].title} />
          <h3>{images[selectedIndex].title}</h3>
        </div>
      )}

      <div className={styles.list}>
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.image}
            alt={img.title}
            className={`${styles.thumb} ${index === selectedIndex ? styles.active : ''}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev}>Imaginea Anterioară</button>
        <button onClick={handleNext}>Următoarea Imagine</button>
        <button onClick={handleRandom}>Imagine Aleatoare</button>
        <button onClick={handleShuffle}>Aranjare Aleatoare</button>
      </div>
    </div>
  );
}