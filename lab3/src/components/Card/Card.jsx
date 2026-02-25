import styles from "./Card.module.css";
import { Button } from "@components/Button";
import pen from "@assets/pen.svg";
import house from "@assets/house.svg";
import painter from "@assets/painter.svg";
import shield from "@assets/shield.svg";
import hotel from "@assets/hotel.svg";
import park from "@assets/park.svg";

export function Card({title, info, btnText, iconType, isFirst}) {
    const iconMap = {
        pen: pen,
        house: house,
        painter: painter,
        shield: shield,
        hotel: hotel,
        park: park
    };
    return (
        <div className={`${styles.container} ${isFirst ? styles.dark:""}`}>
            <img src={iconMap[iconType]} className={styles.icon}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.info}>{info}</p>
            <Button label={`${btnText} →`} variant="secondary"> </Button>
        </div>
    )
}

export default Card;