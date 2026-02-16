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
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="bg-[#050201] text-white px-4 py-3 z-30 fixed w-full">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={ideathonLogo} alt="Ideathon 7.0" className="h-10 w-auto" />
                </div>

                <ul className="hidden font-[Montserrat] md:flex space-x-10">
                    <li>
                        <a
                            href="#home"
                            onClick={() => handleScroll("home")}
                            className={`hover:text-[#FF6A2E] transition-colors cursor-pointer ${activeSection === "home" ? "text-[#FF6A2E]" : ""
                                }`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={() => handleScroll("about")}
                            className={`hover:text-[#FF6A2E] transition-colors cursor-pointer ${activeSection === "about" ? "text-[#FF6A2E]" : ""
                                }`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tracks"
                            onClick={() => handleScroll("tracks")}
                            className={`hover:text-[#FF6A2E] transition-colors cursor-pointer ${activeSection === "tracks" ? "text-[#FF6A2E]" : ""
                                }`}
                        >
                            Tracks
                        </a>
                    </li>
                    <li>
                        <a
                            href="#faqs"
                            onClick={() => handleScroll("faqs")}
                            className={`hover:text-[#FF6A2E] transition-colors cursor-pointer ${activeSection === "faqs" ? "text-[#FF6A2E]" : ""
                                }`}
                        >
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => handleScroll("contact")}
                            className={`hover:text-[#FF6A2E] transition-colors cursor-pointer ${activeSection === "contact" ? "text-[#FF6A2E]" : ""
                                }`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)}>
                        <span className="text-lg mr-3">☰</span>
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-4">

                    {/* <button onClick={() => window.open("https://certificates.ecellnmit.in/", "_blank")} className="bg-[#FF6A2E] text-[#030B15] px-4 py-2 md:mr-20 rounded hover:bg-[#FF8A06] transition-colors duration-300">
                        Certificate
                    </button> */}
                    <button onClick={() => window.open("https://www.ecellnmit.in/", "_blank")}>
                        <img src={enigma} alt="Enigma" className="h-8 w-auto" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed top-0 font-[Montserrat]  w-full h-full bg-[#050201] text-white flex flex-col items-start space-y-6 p-6 z-40 shadow-lg"
                >
                    <button onClick={() => setIsOpen(false)} className="text-2xl self-end">
                        ✖
                    </button>

                    <a href="#home" onClick={() => handleScroll("home")} className="hover:text-[#FF6A2E] cursor-pointer">
                        Home
                    </a>
                    <a href="#about" onClick={() => handleScroll("about")} className="hover:text-[#FF6A2E] cursor-pointer">
                        About
                    </a>
                    <a href="#tracks" onClick={() => handleScroll("tracks")} className="hover:text-[#FF6A2E] cursor-pointer">
                        Tracks
                    </a>
                    <a href="#faqs" onClick={() => handleScroll("faqs")} className="hover:text-[#FF6A2E] cursor-pointer">
                        Faqs
                    </a>
                    <a href="#contact" onClick={() => handleScroll("contact")} className="hover:text-[#FF6A2E] cursor-pointer">
                        Contact
                    </a>

                    <button onClick={() => window.open("https://certificates.ecellnmit.in/", "_blank")} className="bg-[#FF6A2E] font-sans text-[#030B15] px-4 py-2 rounded hover:bg-[#FF8A06] transition-colors duration-300">


                        Certificate
                    </button>
                    <button onClick={() => window.open("https://www.ecellnmit.in/", "_blank")}>
                        <img src={enigma} alt="Enigma" className="h-8 w-auto" />
                    </button>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
