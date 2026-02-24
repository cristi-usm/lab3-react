import InfoSection from "../components/HomeComponents/InfoSection/InfoSection";
import Splash from "../components/HomeComponents/Splash/Splash";
import TopDestionations from "../components/HomeComponents/TopDestinations/TopDestionations";
import TourPackages from "../components/HomeComponents/TourPackages/TourPackages";

export default function Home(){
    return (
        <>
            <Splash />
            <InfoSection />
            <TopDestionations />
            <TourPackages />
        </>
    )
}