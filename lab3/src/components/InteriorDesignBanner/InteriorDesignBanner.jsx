import styles from "./InteriorDesignBanner.module.css"
import { Button } from "@components/Button";

export function InteriorDesignBanner() {
    return (
        <div className={styles.container}>
            <div className={styles.data_container}>
                <h3 className={styles.title}>Lets Make Over Your Interior Design Today</h3>
                <p className={styles.subtitle}>Tersedia banyak sekali apartemen terbaik yang siap anda tempati</p>
                <Button label={"Lihat selengkapnya"} variant="secondary"/>
            </div>
        </div>
    )
}

export default InteriorDesignBanner;