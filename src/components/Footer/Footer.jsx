import "./Footer.css"
import { SearchBar } from "../Header/Header";

export default function Footer() {
    const footerSections = [
        {
            title: "Support",
            links: ["Customer Help", "Terms & Conditions", "Privacy Policy"]
        },
        {
            title: "Company",
            links: ["About Us", "Careers", "Press", "Blog"]
        }
    ];

    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h2 className="footer-logo">WANDER<span>.hd</span></h2>
                    <p>Discover your next adventure with the best travel experts.</p>
                </div>

                {footerSections.map((section) => (
                    <div key={section.title} className="footer-links">
                        <h3>{section.title}</h3>
                        <ul>
                            {section.links.map((link) => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="footer-newsletter">
                    <h3>Stay Inspired</h3>
                    <p>Subscribe to get travel tips and offers.</p>
                    <div className="">
                        <SearchBar placeholder={"Your mail"} />
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2026 MY Travel. All rights reserved.</p>
            </div>
        </footer>
    );
}