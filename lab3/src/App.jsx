import { useNavigation } from "@hooks/useNavigation";
import { Header } from "@components/Header";
import OurServices from "@pages/OurServices";
import  ContactUs  from "@pages/ContactUs";

const PAGES = ["about", "contact"];

function App() {
    const { currentPage, navigate } = useNavigation(PAGES);

    let page;
    if (currentPage === "about") {
        page = <OurServices />;
    }else if (currentPage === "contact") {
        page = <ContactUs />;
    }else {
        page = <OurServices />;
    }
    return (
        <>
            <Header navigate={navigate}>
            </Header>
                {page}
        </>
    )
}

export default App;