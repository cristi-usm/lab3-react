import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { StatSection } from "../StatsCards/StatCard";
import { InfoList } from "../InfoList/InfoList";
import './InfoSection.css'



export default function InfoSection(){
    return (
        <div className="main-wrapper">
            <div className="left-content">
                <h3 className="brand-title">
                    Why Thousands of Travelers Choose <span style={{textDecoration: "underline"}}>WANDER.hd</span> for Their Philippine Adventures
                </h3>
                <p className="brand-description">
                    From the crystal-clear waters of El Nido's pristine beaches to the vibrant cultural hotspots hidden within the heart of Manila, we are dedicated to making your exploration of the Philippines easier, safer, and infinitely more exciting. Our team of local experts meticulously designs each itinerary to ensure you don't just visit a destination, but truly experience its soul. Whether you are trekking through the emerald rice terraces of Banaue or diving into the diverse marine life of Coron, we provide expert-crafted journeys tailored to your unique travel style.
                </p>

                <div className="social-icons">
                    <FaInstagram/> <FaTwitter /> <FaFacebook />
                </div>
                <StatSection />
            </div>
            <div className="right-content">
                <InfoList />
            </div>
        </div>
    )
}