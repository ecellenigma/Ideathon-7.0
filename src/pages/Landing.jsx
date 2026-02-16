import React, { useState } from "react";
import { motion } from "framer-motion";
import heroSvg from "../assets/ideathon7.0.svg";

import Navbar from "../components/Navbar";
import brochure from "../../public/brochure.pdf";
import RedoAnimText from "../components/AnimatedText";
import IdeathonCountdown from "@/components/CountDown";



const Landing = () => {
    const [showModal, setShowModal] = useState(false);

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
                            scale: 1.1,
                            filter: "drop-shadow(0px 0px 25px rgba(255, 106, 46, 0.5))",
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
                </div>

                {/* <div className="w-full h-[100px] flex items-center justify-center overflow-hidden">
                    <RedoAnimText />
                </div> */}


                <h1 className="text-2xl font-tektur md:text-3xl font-bold">
                    Innovators Ka Apna Battlefield
                </h1>


                <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center justify-center w-full px-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => {
                            e.preventDefault();  // Prevent default action if any link behavior exists
                            e.stopPropagation(); // Stop event bubbling
                            setShowModal(true);
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 w-full md:w-auto rounded-xl cursor-pointer mt-5 md:mt-10 font-tektur font-bold text-lg text-white transition-all duration-300 bg-[#FF5100] hover:bg-[#FF3300] shadow-[0_4px_15px_rgba(255,81,0,0.4)] hover:shadow-[0_6px_20px_rgba(255,81,0,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
                    >
                        Apply Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(brochure, '_blank')} // Opens PDF in new tab
                        className="px-8 py-3 w-full md:w-auto rounded-xl cursor-pointer mt-0 md:mt-10 font-tektur font-bold text-lg text-white transition-all duration-300 bg-transparent border-2 border-[#FF5100] hover:bg-[#FF5100] hover:text-white shadow-[0_0_15px_rgba(255,81,0,0.2)] hover:shadow-[0_0_20px_rgba(255,81,0,0.5)] hover:-translate-y-1 active:translate-y-0"
                    >
                        View Brochure
                    </motion.button>
                </div>
                <IdeathonCountdown />
            </motion.div>

            {showModal && <Modal setShowModal={setShowModal} />}
        </section>
    );
};


const Modal = ({ setShowModal }) => {
    return (
        <div className="fixed inset-0 md:p-0 p-3   bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-[#050201] md:p-6 p-10 p-x-3rounded-lg shadow-lg md:w-1/3 z-[100]">
                <h2 className="text-xl text-[#FF6A2E] font-bold mb-4">Registration Closed</h2>
                <p className="mb-4">   Registrations for the Ideathon are now closed. Thank you for your interest! We look forward to seeing you in our future events. Stay tuned!.</p>
                <button
                    className="bg-[#1d2227] text-white px-4 py-2 rounded"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};


export default Landing;
