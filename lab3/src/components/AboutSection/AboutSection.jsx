import styles from "./AboutSection.module.css"
import quote from "@assets/quote-left.svg";
import checkIcon from "@assets/check-circle.svg";
import aboutImg from "@assets/aboutImg.png";
import data from "@data/feature.json"
import shield from "@assets/shield.svg";
import list from "@assets/list.svg";
import msg from "@assets/msg.svg";

function Quote() {
    return (
        <div className={styles.quote_container}>
            <img src={quote} alt="quote-img" />
            <p className={styles.quote_text}>“ Lorem ipsum dolor sit amet consectetur adipsing elit. “</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className={styles.check_list}>
                <li><img src={checkIcon} /> Konsultasi Gratis</li>
                <li><img src={checkIcon} /> Bersertifikat</li>
                <li><img src={checkIcon} /> Layanan Terbaik</li>
                <li><img src={checkIcon} /> Tempat Idaman</li>
            </ul>
        </div>
    )
}

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

function Main() {
    const iconMap = {
        shield: shield,
        list: list,
        msg: msg
    }
    return (
        <div className={styles.main_container}>
            <p className={styles.subtitle}>KENAPA HARUS GUNAKAN LAYANAN KAMI</p>
            <p className={styles.title}>Kami Memberikan Hasil Layanan Terbaik Untuk Apartemen Anda</p>
            <div className={styles.img_frame}>
                <img src={aboutImg} alt="building" />
            </div>
            <div className={styles.feature_list}>
                {data.features.map((feature) => (
                    <Feature key={feature.id} icon={iconMap[feature.iconType]} title={feature.title} info={feature.info}></Feature>
                ))}
            </div>
        </div>
    )
}

export function AboutSection() {
    return (
        <>
            <div className={styles.container}>
                <Main></Main>
                <Quote></Quote>
            </div>
        </>
    )
 }

 export default AboutSection;