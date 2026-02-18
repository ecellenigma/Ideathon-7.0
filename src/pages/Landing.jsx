import React from "react";
import { motion } from "framer-motion";
import heroSvg from "../assets/ideathon7.0.svg";

import Navbar from "../components/Navbar";
import brochure from "../../public/brochure.pdf";
import RedoAnimText from "../components/AnimatedText";
import IdeathonCountdown from "@/components/CountDown";



const Landing = () => {

    return (
        <section id='home' className="text-white h-screen relative overflow-hidden snap-start">
            <Navbar />
            <motion.div
                className="relative z-10 h-full container mx-auto flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >


                <div className="relative w-full md:mt-7 flex items-center justify-center">
                    <motion.img
                        className="h-40 md:h-60 w-full px-4 md:px-0 relative z-10"
                        src={heroSvg}
                        alt=""
                        initial={{ scale: 1, filter: "drop-shadow(0px 0px 0px rgba(255, 106, 46, 0))" }}
                        whileHover={{
                            scale: 1.05,
                            filter: "drop-shadow(0px 0px 15px rgba(255, 106, 46, 0.4))",
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                </div>

                {/* <div className="w-full h-[100px] flex items-center justify-center overflow-hidden">
                    <RedoAnimText />
                </div> */}


                <motion.h1
                    className="text-4xl md:text-6xl font-tektur font-bold mt-10 md:mt-12 tracking-wider text-white drop-shadow-[0_5px_15px_rgba(255,106,46,0.4)]"
                    animate={{
                        opacity: [1, 1, 0.6, 1, 0.6, 1, 1]
                    }}
                    transition={{
                        duration: 4,
                        times: [0, 0.9, 0.92, 0.94, 0.96, 0.98, 1],
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    Uncage The Underdog Idea
                </motion.h1>


                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center w-full px-4 mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.open("https://unstop.com/competitions/ideathon-70-nitte-meenakshi-institute-of-technology-nmit-yelahanka-1642265", "_blank")}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 w-full md:w-auto rounded-xl cursor-pointer font-tektur font-bold text-lg text-white transition-all duration-300 bg-[#FF5100] hover:bg-[#FF3300] shadow-[0_0_20px_rgba(255,81,0,0.5)] hover:shadow-[0_0_40px_rgba(255,81,0,0.7)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
                    >
                        Apply Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(brochure, '_blank')} // Opens PDF in new tab
                        className="px-8 py-3 w-full md:w-auto rounded-xl cursor-pointer font-tektur font-bold text-lg text-white transition-all duration-300 bg-transparent border-2 border-[#FF5100] hover:bg-[#FF5100] hover:text-white shadow-[0_0_15px_rgba(255,81,0,0.2)] hover:shadow-[0_0_25px_rgba(255,81,0,0.5)] hover:-translate-y-1 active:translate-y-0"
                    >
                        View Brochure
                    </motion.button>
                </div>
                <div className="mt-8">
                    <IdeathonCountdown />
                </div>
            </motion.div>

        </section>
    );
};


export default Landing;
