import { Card } from "../Card";
import styles from "./Services.module.css";
import data from "@data/services.json";

export function Services() {
    return (
        <div className={styles.container}>
            {data.services.map((service, index) => (
                <Card key = {service.id} title={service.title} info={service.info} btnText={service.btnText} iconType={service.iconType} isFirst={index === 0}></Card>
            ))}
        </div>
    )
}

export default Services;