import styles from "./Gallery.module.css";
import photo1 from "@assets/gallery1.png";
import photo2 from "@assets/gallery2.png";
import photo3 from "@assets/gallery3.png";
import photo4 from "@assets/gallery4.png";
import photo5 from "@assets/gallery5.png";
import photo6 from "@assets/gallery6.png";

export function Gallery() {
    return (
        <div className={styles.container}>
            <p className={styles.subtitle}>GALERI RUANGAN APARTEMEN TERBAIK</p>
            <h3 className={styles.title}>Galeri Apartemen Di Indonesia</h3>
            <div className={styles.grid_container}>
                <div className={styles.grid_item}>
                    <img src={photo1} alt="Apartment 1" />
                </div>
                <div className={styles.grid_item}>
                    <img src={photo2} alt="Apartment 2" />
                </div>
                <div className={styles.grid_item}>
                    <img src={photo3} alt="Apartment 3" />
                </div>
                <div className={styles.grid_item}>
                    <img src={photo4} alt="Apartment 4" />
                </div>
                <div className={styles.grid_item}>
                    <img src={photo5} alt="Apartment 5" />
                </div>
                <div className={styles.grid_item}>
                    <img src={photo6} alt="Apartment 6" />
                </div>

            </div>
        </div>
    )
}

export default Gallery;