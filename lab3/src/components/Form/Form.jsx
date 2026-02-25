import styles from "./Form.module.css";
import { Button } from "@components/Button";
import map from "@assets/map.svg";
import letter from "@assets/envelope.svg";
import phone from "@assets/phone-square.svg";
import data from "@data/feature.json"

function Feature({icon, title, info }) {
    return (
        <div className={styles.feature_item}>
            <img src={icon} className={styles.feature_icon}/>
            <div>
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}

export function Form() {
    const iconMap = {
        map: map,
        letter: letter,
        phone: phone
    }
    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <h3 className={styles.title}>Hubungi kami</h3>
                <p className={styles.subtitle}> Jangan ragu untuk meminta konsultasi atau bertanya lansung saja hubungi kami </p>
                <form className={styles.form}>
                    <div className={styles.inputs_grid}>
                        <div className={styles.input}>
                            <label>First Name</label>
                            <input type="text" placeholder="first name" />
                        </div>
                        <div className={styles.input}>
                            <label>Last Name</label>
                            <input type="text" placeholder="last name" />
                        </div>
                        <div className={styles.input}>
                            <label>Email Adress</label>
                            <input type="text" placeholder="Hello@email" />
                        </div>
                        <div className={styles.input}>
                            <label>Subjek</label>
                            <input type="text" placeholder="-- Topic --" />
                        </div>
                    </div>
                    <div className={styles.textarea}>
                        <label>Pesan</label>
                        <textarea placeholder="Ketik pesan disini..." ></textarea>
                    </div>
                    <Button label={"SEND MESSAGE"} variant="secondary"></Button>
                </form>
            </div>

            <div className={styles.contact_container}>
                <h3 className={styles.title}>Hubungi kami</h3>
                <p className={styles.subtitle}> Jangan ragu untuk meminta konsultasi atau bertanya lansung saja hubungi kami  </p>
                <div className={styles.feature_list}>
                    {data.contact.map((feature) => (
                        <Feature key={feature.id} icon={iconMap[feature.iconType]} title={feature.title} info={feature.info}></Feature>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Form;