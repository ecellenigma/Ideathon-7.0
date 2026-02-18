import React from 'react';
import Tilt from 'react-parallax-tilt';
import sponsor1 from '../assets/sponsor_1.png';
import sponsor2 from '../assets/sponsor_2.png';
import sponsor3 from '../assets/sponsor_3.png';
import sponsor4 from '../assets/sponsor_4.png';
import sponsor5 from '../assets/sponsor_5.png';
import sponsor6 from '../assets/sponsor_6.png';
import sponsor7 from '../assets/sponsor_7.png';

export default function Sponsors() {
    return (
        <section id="sponsors" className="text-white flex flex-col items-center justify-center snap-start min-h-screen py-20 px-4">
            <div className="flex flex-col justify-center items-center w-full max-w-6xl">
                {/* Knowledge Sponsor Section */}
                <div className="text-center w-full">
                    <h2 className="text-2xl md:text-4xl font-['Montserrat'] text-[#FF6A2E] font-bold mb-10 mt-0 uppercase tracking-wider">
                        OUR KNOWLEDGE PARTNER
                    </h2>
                    <Tilt className="Tilt" tiltMaxAngleX={16} tiltMaxAngleY={16} scale={1.03} transitionSpeed={2000}>
                        <img src={sponsor1} alt="Knowledge Partner" className="mx-auto cursor-pointer border-3 border-[#FF6A2E] rounded-xl w-64 md:w-96 shadow-[0_0_20px_rgba(255,106,46,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,106,46,0.4)]" />
                    </Tilt>
                </div>

                {/* Coding Sponsor Section */}
                <div className="text-center w-full mt-16">
                    <h2 className="text-2xl md:text-4xl font-['Montserrat'] text-[#FF6A2E] font-bold mb-10 uppercase tracking-wider">
                        OUR CODING PARTNER
                    </h2>
                    <Tilt className="Tilt" tiltMaxAngleX={18} tiltMaxAngleY={25} scale={1.03} transitionSpeed={2000}>
                        <img src={sponsor2} alt="Coding Sponsor" className="mx-auto cursor-pointer border-3 border-[#FF6A2E] rounded-xl w-56 md:w-80 shadow-[0_0_20px_rgba(255,106,46,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,106,46,0.4)]" />
                    </Tilt>
                </div>

                {/* Marketing Sponsor Section */}
                <div className="text-center w-full mt-16">
                    <h2 className="text-2xl md:text-3xl font-['Montserrat'] text-[#FF6A2E] font-bold mb-10 uppercase tracking-wider">
                        OUR MARKETING PARTNER
                    </h2>
                    <Tilt className="Tilt" tiltMaxAngleX={18} tiltMaxAngleY={28} scale={1.03} transitionSpeed={2000}>
                        <img src={sponsor5} alt="Marketing Sponsor" className="mx-auto border-3 cursor-pointer border-[#FF6A2E] rounded-xl w-48 md:w-64 shadow-[0_0_20px_rgba(255,106,46,0.15)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,106,46,0.4)]" />
                    </Tilt>
                </div>

                {/* Other Sponsors Section */}
                <div className="text-center w-full mt-16">
                    <h2 className="text-xl md:text-2xl font-['Montserrat'] text-[#FF6A2E] font-bold mb-10 uppercase tracking-wider">
                        OUR OTHER PARTNERS
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <img src={sponsor7} alt="Other Sponsor 1" className="w-24 md:w-40 border-3 border-[#FF6A2E] rounded-xl shadow-[0_0_15px_rgba(255,106,46,0.1)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,106,46,0.3)]" />
                        <img src={sponsor4} alt="Other Sponsor 2" className="w-24 md:w-32 border-3 border-[#FF6A2E] rounded-xl shadow-[0_0_15px_rgba(255,106,46,0.1)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,106,46,0.3)]" />
                        <img src={sponsor3} alt="Other Sponsor 3" className="w-24 md:w-32 border-3 border-[#FF6A2E] rounded-xl shadow-[0_0_15px_rgba(255,106,46,0.1)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,106,46,0.3)]" />
                        <img src={sponsor6} alt="Other Sponsor 4" className="w-24 md:w-40 border-3 border-[#FF6A2E] rounded-xl shadow-[0_0_15px_rgba(255,106,46,0.1)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,106,46,0.3)]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
