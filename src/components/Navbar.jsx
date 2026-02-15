import React from "react";
import ideathon from "../assets/ideathon.svg";
import six from "../assets/6.0.svg";
import icon from "../assets/icontop.svg";
import enigma from "../assets/enigma.svg";

const Navbar = () => {
    return (
        <nav className="bg-[#030B15] text-white px-1 py-1 z-30 absolute w-full">
            <div class="grid grid-cols-[1fr_2fr_1fr] gap-4 w-full p-4">
                <div>
                    <div className="flex items-center mr-2.5 space-x-2">
                        <img
                            src={icon}
                            alt="Ideathon Logo"
                            className="h-6 w-auto"
                        />
                        <img
                            src={ideathon}
                            alt="Ideathon Logo"
                            className="h-4 -auto"
                        />
                        <img    
                            src={six}
                            alt="Ideathon 6.0 Logo"
                            className="h-4 w-auto"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <ul className="hidden md:flex space-x-10 mx-auto">
                        <li><a href="#home" className="hover:text-[#00C4F4] transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-[#00C4F4] transition-colors">About</a></li>
                        <li><a href="#tracks" className="hover:text-[#00C4F4] transition-colors">Tracks</a></li>
                        <li><a href="#faqs" className="hover:text-[#00C4F4] transition-colors">FAQs</a></li>
                        <li><a href="#contact" className="hover:text-[#00C4F4] transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div >
                    <div className="flex justify-evenly space-x-4">
                        <div>
                            <button className="bg-[#00E0FF] text-[#030B15] px-4 py-2 rounded hover:bg-[#00C4F4] transition-colors duration-300">
                                Certificate
                            </button>
                        </div>
                        <button onClick={() => window.open("https://www.ecellnmit.in/", "_blank")} className="flex items-center">
                            
                            <img
                                src={enigma}
                                alt="Ideathon Logo"
                                className="h-8 w-auto "
                            />
                        </button>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
