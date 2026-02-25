import { Footer } from "@components/Footer";
import { Banner } from "@components/Banner";
import { Form } from "@components/Form";

function ContactUs() {
    return (
        <>
            <Banner currPage={"Contact Us"} txt1={"Hubungi"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></Banner>
            <Form></Form>
            <Footer></Footer>
        </>
    )
}

export default ContactUs;