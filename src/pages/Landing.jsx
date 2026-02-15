import React, { useState } from "react";
import { motion } from "framer-motion";
import heroSvg from "../assets/ideathon6.0.svg";

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
                        className="h-60 w-full relative z-10"
                        src={heroSvg}
                        alt=""
                        initial={{ scale: 1, filter: "drop-shadow(0px 0px 0px rgba(255,255,255,0))" }}
                        whileHover={{
                            scale: 1.1,
                            filter: "drop-shadow(0px 0px 30px rgba(255,255,255,0.8))",
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
                </div>

                <div className="w-full h-[100px] flex items-center justify-center overflow-hidden">
                    <RedoAnimText />
                </div>


                <h1 className="text-2xl font-tektur md:text-3xl font-bold">
                    Innovators Ka Apna Battlefield
                </h1>


                <div className="flex gap-7 md:gap-8 items-center justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => {
                            e.preventDefault();  // Prevent default action if any link behavior exists
                            e.stopPropagation(); // Stop event bubbling
                            setShowModal(true);
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded cursor-pointer mt-10 font-medium bg-[#00C4F4] text-white transition-all cursor-alias shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
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
                <IdeathonCountdown/>
            </motion.div>

            {showModal && <Modal setShowModal={setShowModal} />}
        </section>
    );
};


const Modal = ({ setShowModal }) => {
    return (
        <div className="fixed inset-0 md:p-0 p-3   bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-[#030B15] md:p-6 p-10 p-x-3rounded-lg shadow-lg md:w-1/3 z-[100]">
                <h2 className="text-xl text-[#00C4F4] font-bold mb-4">Registration Closed</h2>
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
