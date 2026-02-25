import { Footer } from "@components/Footer";
import { Banner } from "@components/Banner";
import { Services } from "@components/Services";
import { AboutSection } from "@components/AboutSection";
import { Gallery } from "@components/Gallery";
import { InteriorDesignBanner } from "@components/InteriorDesignBanner";

function OurServices() {
    return (
        <>
            <Banner currPage={"Layanan kami"} txt1={"Layanan"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></Banner>
            <Services></Services>
            <AboutSection></AboutSection>
            <Gallery></Gallery>
            <InteriorDesignBanner></InteriorDesignBanner>
            <Footer></Footer>
        </>
    )
}

export default OurServices;