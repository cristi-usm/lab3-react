import { useState, useEffect } from "react";
import Navbar from "../components/Channels/Navbar";
import Player from "../components/Channels/Player";
import ChannelList from "../components/Channels/ChannelList";
import "./index.css";

function App() {
    const [variant, setVariant] = useState<"Default" | "Large">("Large");

    useEffect(() => {
        const updateVariant = () => {
            setVariant(window.innerWidth < 1024 ? "Default" : "Large");
        };

        updateVariant();
        window.addEventListener("resize", updateVariant);
        return () => window.removeEventListener("resize", updateVariant);
    }, []);


    const channels = Array.from({ length: 40 }, (_, index) => ({
        id: String(index + 1),
        name: `Jurnal TV`,
        // icon: `/images/channel${index + 1}.svg`
        icon: `/images/JurnalTV.svg`
    }));

    return (
        <div>
            <Navbar variant={variant} />
            <Player variant={variant} url={""} advertisement={{
                title: "",
                image: {
                    mobile: "",
                    desktop: ""
                }
            }} />

            <ChannelList variant={variant} setVariant={setVariant} channels={channels} />
        </div>
    );
}

export default App;
