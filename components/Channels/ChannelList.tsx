import { useState, useEffect } from "react";
import ChannelListItem from "./ChannelListItem";
import TvChannel from "../../types/TvChannel";

interface ChannelListProps {
    variant: "Default" | "Large";
    setVariant: (variant: "Default" | "Large") => void;
    channels: TvChannel[];
}

const ChannelList = ({ variant, channels }: ChannelListProps) => {
    const [selectedChannelIndex, setSelectedChannelIndex] = useState(0);
    const [channelVariant, setChannelVariant] = useState<"Default" | "Large">(variant); // Separate state for TV channels

    // Track screen width for responsive behavior
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Ensure mobile always uses "Default"
    const activeVariant = screenSize < 1024 ? "Default" : channelVariant;

    const handlePreviousChannel = () => {
        setSelectedChannelIndex((prevIndex) => (prevIndex === 0 ? channels.length - 1 : prevIndex - 1));
    };

    const handleNextChannel = () => {
        setSelectedChannelIndex((prevIndex) => (prevIndex === channels.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="">

            {/* Navigation Controls (Visible only in Large mode) */}
            <div className={variant === "Large" ? "lg:relative lg:w-full lg:max-w-[1192px] lg:mx-auto lg:mt-[40px] lg:px-[16px]" : "hidden"}>

                <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex lg:items-center lg:gap-[109px] lg:text-nowrap">
                    
                    {/* Previous Button */}
                    <button 
                        onClick={handlePreviousChannel} 
                        className="lg:inline-flex lg:py-[8px] lg:pr-[16px] lg:pl-[8px] lg:items-center lg:gap-[16px] lg:w-[186px] lg:bg-[#FFF6BA] lg:rounded-3xl lg:cursor-pointer"
                    >
                        <img src="/images/arrow-left.svg" alt="Previous" className="lg:w-[28px] lg:h-[28px] lg:p-[6px] lg:rounded-[14px] lg:bg-[#FFD800]" />
                        <span className="lg:text-[#000222] lg:text-[16px] lg:font-medium lg:leading-[24px]">Canalul anterior</span>
                    </button>

                    {/* Current Channel */}
                    <h2 className="lg:text-[#000222] lg:text-center lg:text-[24px] lg:font-bold lg:leading-[36px]">
                        {channels[selectedChannelIndex].name}
                    </h2>

                    {/* Next Button */}
                    <button 
                        onClick={handleNextChannel} 
                        className="lg:inline-flex lg:py-[8px] lg:pr-[8px] lg:pl-[16px] lg:items-center lg:gap-[12px] lg:w-[186px] lg:bg-[#FFF6BA] lg:rounded-3xl lg:cursor-pointer"
                    >
                        <span className="lg:text-[#000222] lg:text-[16px] lg:font-medium lg:leading-[24px]">Canalul următor</span>
                        <img src="/images/arrow-right.svg" alt="Next" className="lg:w-[28px] lg:h-[28px] lg:p-[6px] lg:rounded-[14px] lg:bg-[#FFD800]" />
                    </button>

                </div>

                {/* Toggle Switch (Only on Desktop) */}
                <div className="hidden lg:relative lg:flex lg:items-center lg:w-[72px] lg:h-[40px] lg:rounded-[12px] lg:bg-[#ECEEEE] lg:cursor-pointer lg:hover:bg-gray-300 lg:p-[4px] lg:ml-auto">
                    
                    {/* Blocks View (Large Mode) */}
                    <div 
                        className={`lg:w-[32px] lg:h-[32px] cursor-pointer flex items-center justify-center rounded-[8px] 
                        ${channelVariant === "Large" ? "bg-white shadow-md" : "opacity-50"}`}
                        onClick={() => setChannelVariant("Large")}
                    >
                        <img src="/images/Blocks.svg" alt="Blocks View" className="lg:w-[32px] lg:h-[32px]" />
                    </div>

                    {/* List View (Default Mode) */}
                    <div 
                        className={`lg:w-[32px] lg:h-[32px] cursor-pointer flex items-center justify-center rounded-[8px] 
                        ${channelVariant === "Default" ? "bg-white shadow-md" : "opacity-50"}`}
                        onClick={() => setChannelVariant("Default")}
                    >
                        <img src="/images/list.svg" alt="List View" className="lg:w-[32px] lg:h-[32px]" />
                    </div>

                </div>
            </div>

            {/* Channels Grid */}
            <div className={`
                lg:max-w-[1192px] lg:w-full lg:mx-auto lg:mt-[40px]
                ${activeVariant === "Large" ? 
                    "lg:grid lg:grid-cols-8 lg:gap-[24px] lg:items-center lg:justify-center" 
                : 
                    "lg:grid lg:grid-cols-3 lg:gap-[8px] lg:items-center lg:justify-center"}
            `}>
                {channels.map((channel, index) => (
                    <div 
                        key={channel.id} 
                        className={`
                            ${activeVariant === "Large" ? "lg:w-[128px] lg:h-[128px]" : "lg:w-full lg:h-[64px]"}
                            lg:cursor-pointer 
                            ${index === selectedChannelIndex ? "lg:outline-[2px] lg:outline-[#FFD600] lg:rounded-3xl" : ""}
                        `}
                        onClick={() => setSelectedChannelIndex(index)}
                    >
                        <ChannelListItem variant={activeVariant} tvChannel={channel} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ChannelList;
