import React from "react";
import { motion } from "framer-motion";
import heroSvg from "../assets/icontop.svg";

import Navbar from "../components/Navbar";

import RedoAnimText from "../components/AnimatedText";


const Landing = () => {
    return (
        <section className="text-white h-screen relative overflow-hidden">

            <Navbar />

            <motion.div
                className="relative z-10 h-full container mx-auto flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >

                <div className="relative w-full flex items-center justify-center">
                    <div className="relative w-full flex items-center justify-center">
                        <motion.img
                            className="h-60 w-full relative z-10"
                            src={heroSvg}
                            alt=""
                            initial={{ scale: 1, filter: "drop-shadow(0px 0px 0px rgba(255,255,255,0))" }} 
                            whileHover={{
                                scale: 1.1, // Slight zoom effect
                                filter: "drop-shadow(0px 0px 30px rgba(255,255,255,0.8))", 
                            }}
                            transition={{ duration: 0.2, ease: "easeInOut" }} 
                        />
                    </div>
                </div>

                {/* Animated Text */}
                <div className="w-full h-[100px] flex items-center justify-center overflow-hidden">
                    <RedoAnimText />
                </div>

                <div>
                    <h1 style={{ fontFamily: 'Tektur, sans-serif' }} className="text-2xl md:text-3xl font-bold"> Entrepreneurs  ka
                        Apna  Battlefield
                    </h1>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.open("https://unstop.com/o/gsh9n8J?lb=4jXsa3G&utm_medium=Share&utm_source=shortUrl", "_blank")}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 mt-10 font-medium bg-[#00C4F4] text-white transition-all cursor-alias  shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px]  hover:translate-y-[3px]"
                >
                    Apply Now
                </motion.button>

            </motion.div>
           

        </section>
    );
};

export default Landing;





