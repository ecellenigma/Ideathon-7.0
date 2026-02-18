/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ideathonLogo from "../assets/ideathon7.0.svg";
import enigma from "../assets/enigma.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = ["home", "about", "tracks", "faqs", "contact"];
            const scrollContainer = document.getElementById("scroll-container");

            // Use container scroll values if available, otherwise fallback to window
            const scrollPosition = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
            const windowHeight = scrollContainer ? scrollContainer.clientHeight : window.innerHeight;
            const documentHeight = scrollContainer ? scrollContainer.scrollHeight : document.body.offsetHeight;

            // Offset for navbar height/trigger point
            const triggerPoint = scrollPosition + windowHeight / 3;

            // Check if we're at the bottom of the page
            if ((windowHeight + scrollPosition) >= documentHeight - 50) {
                setActiveSection("contact");
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    // Calculate element position relative to the scroll container
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;

                    if (triggerPoint >= elementTop && triggerPoint < elementBottom) {
                        setActiveSection(section);
                    }
                }
            }
        };

        const scrollContainer = document.getElementById("scroll-container");
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScrollSpy);
        } else {
            window.addEventListener("scroll", handleScrollSpy);
        }

        // Initial check
        handleScrollSpy();

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScrollSpy);
            } else {
                window.removeEventListener("scroll", handleScrollSpy);
            }
        };
    }, []);

    return (
        <nav className="bg-[#050201] md:bg-[#050201]/80 md:backdrop-blur-md border-b border-transparent md:border-[#FF6A2E]/20 text-white px-6 py-4 z-50 fixed w-full top-0 transition-all duration-300 shadow-md md:shadow-none">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleScroll("home")}>
                    <img src={ideathonLogo} alt="Ideathon 7.0" className="h-10 w-auto hover:scale-105 transition-transform duration-300" />
                </div>

                <ul className="hidden md:flex space-x-12 items-center">
                    {["Home", "About", "Tracks", "FAQs", "Contact"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => handleScroll(item.toLowerCase() === "faqs" ? "faqs" : item.toLowerCase())}
                                className={`text-sm font-['Montserrat'] font-bold tracking-widest uppercase hover:text-[#FF6A2E] transition-colors relative group ${activeSection === (item.toLowerCase() === "faqs" ? "faqs" : item.toLowerCase()) ? "text-[#FF6A2E]" : "text-gray-300"}`}
                            >
                                {item}
                                <span className={`absolute -bottom-2 left-0 w-0 h-[2px] bg-[#FF6A2E] transition-all duration-300 group-hover:w-full ${activeSection === (item.toLowerCase() === "faqs" ? "faqs" : item.toLowerCase()) ? "w-full" : ""}`}></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)} className="text-[#FF6A2E] hover:text-white transition-colors">
                        <span className="text-2xl">☰</span>
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-6">

                    {/* <button onClick={() => window.open("https://certificates.ecellnmit.in/", "_blank")} className="bg-[#FF6A2E] text-[#030B15] px-4 py-2 md:mr-20 rounded hover:bg-[#FF8A06] transition-colors duration-300">
                        Certificate
                    </button> */}
                    <button onClick={() => window.open("https://www.ecellnmit.in/", "_blank")} className="hover:opacity-80 transition-opacity">
                        <img src={enigma} alt="Enigma" className="h-8 w-auto" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-0 right-0 w-full h-full bg-[#050201]/95 backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 z-50 border-l border-[#FF6A2E]/20 shadow-2xl"
                >
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-4xl text-[#FF6A2E] hover:text-white transition-colors">
                        ✖
                    </button>

                    <a href="#home" onClick={() => handleScroll("home")} className="text-2xl font-['Montserrat'] font-bold tracking-wider hover:text-[#FF6A2E] transition-colors cursor-pointer">
                        HOME
                    </a>
                    <a href="#about" onClick={() => handleScroll("about")} className="text-2xl font-['Montserrat'] font-bold tracking-wider hover:text-[#FF6A2E] transition-colors cursor-pointer">
                        ABOUT
                    </a>
                    <a href="#tracks" onClick={() => handleScroll("tracks")} className="text-2xl font-['Montserrat'] font-bold tracking-wider hover:text-[#FF6A2E] transition-colors cursor-pointer">
                        TRACKS
                    </a>
                    <a href="#faqs" onClick={() => handleScroll("faqs")} className="text-2xl font-['Montserrat'] font-bold tracking-wider hover:text-[#FF6A2E] transition-colors cursor-pointer">
                        FAQS
                    </a>
                    <a href="#contact" onClick={() => handleScroll("contact")} className="text-2xl font-['Montserrat'] font-bold tracking-wider hover:text-[#FF6A2E] transition-colors cursor-pointer">
                        CONTACT
                    </a>

                    {/* <button onClick={() => window.open("https://certificates.ecellnmit.in/", "_blank")} className="bg-[#FF6A2E] font-sans text-[#030B15] px-6 py-3 rounded-lg hover:bg-[#FF8A06] transition-colors duration-300 font-bold text-lg">
                        Certificate
                    </button> */}

                    <div className="absolute bottom-10">
                        <button onClick={() => window.open("https://www.ecellnmit.in/", "_blank")} className="opacity-80 hover:opacity-100 transition-opacity">
                            <img src={enigma} alt="Enigma" className="h-10 w-auto" />
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
