import styles from "./Banner.module.css";

export function Banner({ currPage, txt1, info, homeURL, currURL, color="beige"}) {
    return (
        <>
            <div className={styles.banner_container}>
                <div className={styles.text}>
                    <a className={`${styles.text} ${styles[color]}`} href={homeURL}>HOMEPAGE ▸</a>
                    <a className={`${styles.text} ${styles[color]}`} href={currURL}> {currPage}</a>
                </div>
                <div className={styles.title_container}>
                    <h1 className={`${styles.title} ${styles[color]}`} >{txt1}</h1>
                    <h1 className={`${styles.title} ${styles[color]}`} >Kami</h1>
                </div>
                <p className={styles.info_text}>{info}</p>
            </div>
        </>
    )
}

export default Banner;