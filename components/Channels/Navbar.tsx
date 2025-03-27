import React, { useState } from "react";
import { navbarItems, rightItems } from "../../types/navbar";

interface NavbarProps {
    variant: "Default" | "Large";
}

const Navbar: React.FC<NavbarProps> = ({ variant }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white">
            <div
                className={`flex items-center whitespace-nowrap mx-auto 
                ${variant === "Default" ? 
                "h-[94px] px-[24px] gap-[104px] w-full justify-between" : 
                "lg:py-[14px] lg:px-[50px] lg:justify-between lg:max-w-[1920px] lg:w-full"}`}
            >
                {variant === "Default" ? (
                    // ✅ Mobile Navbar
                    <>
                        {/* ✅ Burger Menu */}
                        <button className="bg-transparent focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                            <img src="/images/BurgerMenu.svg" alt="Menu" className="w-[32px] h-[32px]" />
                        </button>

                        {/* ✅ Logo */}
                        <a href="/">
                            <img className="w-[56px] h-[26px]" src="/images/StarNet.svg" alt="StarNet Logo" />
                        </a>

                        {/* ✅ Call Button */}
                        <a href="/" className="bg-transparent focus:outline-none">
                            <img 
                                src="/images/Call.svg" 
                                alt="Call" 
                                className="w-8 h-8 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
                            />
                        </a>
                    </>
                ) : (
                    // ✅ Desktop Navbar
                    <>
                        {/* ✅ Left Section: Logo & Navigation */}
                        <div className="lg:flex lg:items-center lg:gap-[40px]">
                            {/* ✅ Logo */}
                            <a href="/" className="lg:flex lg:items-center lg:justify-center">
                                <img className="lg:w-[112px] lg:h-[52px]" src="/images/StarNet.svg" alt="StarNet Logo"/>
                            </a>

                            {/* ✅ Navigation */}
                            <div className="lg:flex lg:items-center lg:gap-[40px]">
                                {navbarItems.map((item) => (
                                    <a key={item.id} href={item.link} className="lg:text-black hover:text-yellow-500 transition">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* ✅ Right Section: Icons, Language & Call */}
                        <div className="lg:flex lg:items-center lg:gap-[20px]">
                            {/* ✅ Icons */}
                            <div className="lg:flex lg:items-center lg:gap-[16px]">
                                {rightItems.filter(item => !["Language", "Business", "Call"].includes(item.name))
                                    .map(item => (
                                        <a key={item.id} href="/">
                                            <img 
                                                src={item.icon} 
                                                alt={item.name || "icon"} 
                                                className="lg:w-[24px] lg:h-[24px] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
                                            />
                                        </a>
                                    ))}
                            </div>

                            {/* ✅ Language & Business Links */}
                            {rightItems.filter(item => ["Language", "Business"].includes(item.name))
                                .map(item => (
                                    <a key={item.id} href="/" className="flex items-center gap-2">
                                        <span className="lg:text-black lg:text-lg font-medium hover:text-yellow-500 cursor-pointer">
                                            {item.name}
                                        </span>
                                    </a>
                                ))}

                            {/* ✅ Call Button */}
                            <a href="/" className="lg:flex lg:items-center lg:gap-2 lg:bg-yellow-100 lg:rounded-full lg:px-3 lg:py-1 hover:bg-yellow-200 transition-all duration-300">
                                <div className="lg:w-10 lg:h-10 flex items-center justify-center bg-yellow-400 rounded-full">
                                    <img src="/images/Call.svg" alt="Call" className="lg:w-6 lg:h-6" />
                                </div>
                                <span className="lg:text-black lg:text-base font-medium">Solicită apel</span>
                            </a>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
