import styles from "./Footer.module.css";
import footerData from "@data/footer.json";
import caretIcon from "@assets/caret-right.svg";
import locationIcon from "@assets/map-pin.svg";
import mailIcon from "@assets/envelope.svg";
import phoneIcon from "@assets/phone-square.svg";
import logo from "@assets/logo.svg";
import facebookLogo from "@assets/facebook.svg";
import twitterLogo from "@assets/twitter.svg";
import instagramLogo from "@assets/instagram.svg";
import pinterestLogo from "@assets/pinterest.svg";

export function Footer() {
    const iconMap = {
        caret: caretIcon,
        location: locationIcon,
        mail: mailIcon,
        phone: phoneIcon
    };
    return (
        <footer className={styles.container}>
            <div className={styles.footer_main}>
                <div className={styles.info_container}>
                    <img src={logo} alt="house logo" />
                    <p className={styles.text}>
                        Aplikasi terbaik layanan penginapan di seluruh apartemen dan hotel di Indoensia
                    </p>
                    <div className={styles.social_wrapper}>
                        <a href="#"><img src={facebookLogo} alt="Facebook" /></a>
                        <a href="#"><img src={instagramLogo} alt="Instagram" /></a>
                        <a href="#"><img src={twitterLogo} alt="Twitter" /></a>
                        <a href="#"><img src={pinterestLogo} alt="Pinterest" /></a>
                    </div>
                </div>
                <div className={styles.links}>
                    <h3 className={styles.title}>Quick Links</h3>
                    <ul className={styles.list}>
                        {footerData.quickLinks.map((item) => (
                            <li key={item.id} className={styles.listItem}>
                                <img src={iconMap[item.iconType]}/>
                                <a href="#">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.links}>
                    <h3 className={styles.title}>Site Links</h3>
                    <ul className={styles.list}>
                        {footerData.siteLinks.map((item) => (
                            <li key={item.id} className={styles.listItem}>
                                <img src={iconMap[item.iconType]}/>
                                <a href="#">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.links}>
                    <h3 className={styles.title}>Tetap bersama kami</h3>
                    <ul className={styles.list}>
                        {footerData.contactLinks.map((item) => (
                            <li key={item.id} className={styles.listItem}>
                                <img src={iconMap[item.iconType]}/>
                                <a href="#">{item.info}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.copyright_segment}>
                <p>COPYRIGHT DIESNATALIS</p>
            </div>
        </footer>
    );
}

export default Footer;