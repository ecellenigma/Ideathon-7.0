import React from "react";
/* eslint-disable-next-line */
import { motion } from "framer-motion";
import heroSvg from "../assets/ideathon6.0.svg";

import Navbar from "../components/Navbar";
import brochure from "../../public/brochure.pdf"
import RedoAnimText from "../components/AnimatedText";


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

                <div className="relative w-full flex items-center justify-center">
                    <div className="relative w-full flex items-center justify-center">
                        <motion.img
                            className="h-60 relative z-10"
                            src={heroSvg}
                            alt=""
                            initial={{ scale: 1, filter: "drop-shadow(0px 0px 0px rgba(255,255,255,0))" }}
                            whileHover={{
                                scale: 1.1,
                                filter: "drop-shadow(0px 0px 30px rgba(255,255,255,0.8))",
                            }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                        />
                    </div>
                </div>
                <div className="w-full h-[100px] flex items-center justify-center overflow-hidden">
                    <RedoAnimText />
                </div>

                <div>
                    <h1 className="text-2xl font-[Montserrat] md:text-3xl font-bold"> Innovators  Ka
                        Apna  Battlefield
                    </h1>
                </div>
                <div className="flex gap-7 md:gap-8 items-center justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.open("https://unstop.com/o/gsh9n8J?lb=4jXsa3G&utm_medium=Share&utm_source=shortUrl", "_blank")}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded cursor-pointer mt-10 font-medium bg-[#00C4F4] text-white transition-all cursor-alias  shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px]  hover:translate-y-[3px]"
                    >
                        Apply Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(brochure, '_blank')} // Opens PDF in new tab
                        className="px-6 py-2 rounded cursor-pointer mt-10 font-medium bg-[#00C4F4] text-white transition-all cursor-alias shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:bg-[#00C4F4] hover:translate-y-[3px]"
                    >
                        View Brochure
                    </motion.button>
                    
                </div>

            </motion.div>


        </section>
    );
};

export default Landing;





