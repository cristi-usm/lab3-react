import React from "react";

interface PlayerProps {
    variant: "Default" | "Large";
    url: string;
    advertisement: {
        title: string;
        image: {
            mobile: string;
            desktop: string;
        };
    };
}

const Player: React.FC<PlayerProps> = ({ variant, url, advertisement }) => {
    return (
        <div
            className={
                variant === "Default"
                    ? "flex flex-col items-center w-full mt-[224px] md:gap-[15px]"
                    : "lg:flex lg:items-center lg:justify-between lg:w-full lg:px-[50px] lg:gap-[24px] mt-[168px] overflow-x-hidden lg:mx-auto lg:max-w-[1920px]"
            }
        >
            {/* Mobile Advertisement - Above Player */}
            {variant === "Default" && (
                <div className="w-full h-[100px] px-[44px] flex flex-col justify-center items-center bg-[#ECEEEE] rounded-[24px] mb-4">
                    <span className="text-center text-[16px] font-medium leading-[20px] text-[#CFD0D3]">
                        Add mob
                    </span>
                    <span className="text-center text-[14px] font-normal leading-[18px] text-[#CFD0D3]">
                        320 x 100px
                    </span>
                </div>
            )}

            {/* Desktop Advertisement - Left */}
            {variant === "Large" && (
                <div className="w-[160px] h-[600px] px-[44px] py-[313px] bg-[#ECEEEE] flex flex-col justify-center items-center rounded-[40px] gap-[8px]">
                    <span className="text-center text-[44px] font-[600] leading-[24px] text-[#CFD0D3]">
                        Add
                    </span>
                    <span className="text-center text-[20px] font-[600] leading-[24px] text-[#CFD0D3] text-nowrap">
                        160 x 600px
                    </span>
                </div>
            )}

            {/* Player Background */}
            {variant === "Large" && (
                <div className="flex absolute w-[930.638px] h-[721.32px] rotate-[-5.536deg] rounded-[930.638px] opacity-[0.68] blur-[75px] bg-[#FFCA00] -z-10 bg-[url('/images/bg.svg')]"></div>
            )}

            {/* Player */}
            <div
                className={
                    variant === "Default"
                        ? "w-full h-[403px] flex items-center justify-center bg-cover bg-center rounded-3xl"
                        : "lg:w-full lg:h-[600px] lg:flex lg:items-center lg:justify-center lg:bg-cover lg:bg-center lg:rounded-[40px]"
                }
                style={{
                    backgroundImage: `url(${variant === "Default" ? "/images/background_player.svg" : "/images/bgpc.svg"})`,
                }}
            >
                <div
                    className={
                        variant === "Default"
                            ? "flex w-full max-w-[312px] aspect-video flex-col items-start gap-[24px] md:gap-[50px]"
                            : "lg:gap-[20px] lg:aspect-video"
                    }
                >
                    <p
                        className={
                            variant === "Default"
                                ? "text-center text-2xl font-black leading-[28.8px] text-wrap md:text-[34px]"
                                : "lg:w-full lg:max-w-[600px] lg:text-center lg:text-[40px] lg:font-black lg:leading-[48px] lg:mx-auto"
                        }
                    >
                        Descoperă televiziunea online de la StarNet GRATUIT!
                    </p>

                    {/* Video Placeholder */}
                    <img
                        className={
                            variant === "Default"
                                ? "w-full aspect-video object-cover rounded-2xl border border-[#FFD600]"
                                : "lg:w-[700px] lg:aspect-video lg:shrink-0 lg:border-[2px] lg:border-solid lg:border-[#FFD600] lg:rounded-[40px]"
                        }
                        src="/images/player.svg"
                        alt="Video placeholder"
                    />
                </div>
            </div>
            

            {/* Desktop Advertisement - Right */}
            {variant === "Large" && (
                <div className="w-[160px] h-[600px] px-[44px] py-[313px] bg-[#ECEEEE] flex flex-col justify-center items-center rounded-[40px] gap-[8px]">
                    <span className="text-center text-[44px] font-[600] leading-[24px] text-[#CFD0D3]">
                        Add
                    </span>
                    <span className="text-center text-[20px] font-[600] leading-[24px] text-[#CFD0D3] text-nowrap">
                        160 x 600px
                    </span>
                </div>
            )}
        </div>
    );
};

export default Player;
