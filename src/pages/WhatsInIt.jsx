import React from 'react';
import Tilt from 'react-parallax-tilt';
import incubation from '../assets/incubation.svg';
import mentoring from '../assets/mentoring.svg';
import certificates from '../assets/certificates.svg';
import goodies from '../assets/goodies.svg';
import workshops from '../assets/workshops.svg';
import grand from '../assets/GrandPrize.svg';

const WhatsInIt = () => {
    const handleMouseMove = (e) => {
        const cards = document.querySelectorAll('.Tilt-inner');
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 106, 46, 0.5) 10%, transparent 70%)`;
        });
    };

    return (
        <section className="text-white relative flex flex-col items-center justify-center min-h-screen snap-start py-20 px-4" onMouseMove={handleMouseMove}>
            <h1 className="mx-auto mt-10 mb-16 text-center text-4xl md:text-7xl font-[900] font-['Outfit'] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A2E] to-[#FF9A03]">
                What's in it for you?
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#FF6A2E] rounded-2xl p-8 bg-[#080302] shadow-[0_0_20px_rgba(255,106,46,0.15)] h-full w-full mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_40px_rgba(255,106,46,0.4)]">
                        <img src={incubation} alt="Incubation Icon" className="w-16 h-16 mb-6 text-[#FF6A2E]" />
                        <p className="text-white font-['Montserrat'] text-xl md:text-2xl font-bold text-center leading-tight">
                            Incubation Opportunity
                        </p>
                    </div>
                </Tilt>

                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#FF6A2E] rounded-2xl p-8 bg-[#080302] shadow-[0_0_4px_rgba(255,106,46,0.5)] h-full w-full mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(255,138,6)]">
                        <img src={mentoring} alt="Mentoring Icon" className="w-18 h-18 mb-6 text-[#FF6A2E]" />
                        <p className="text-white font-['Montserrat'] text-xl md:text-2xl font-bold text-center leading-tight">
                            Mentoring Sessions
                        </p>
                    </div>
                </Tilt>

                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#FF6A2E] rounded-2xl p-8 bg-[#080302] shadow-[0_0_4px_rgba(255,106,46,0.5)] h-full w-full mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(255,138,6)]">
                        <img src={workshops} alt="Workshops Icon" className="w-16 h-16 mb-6 text-[#FF6A2E]" />
                        <p className="text-white font-['Montserrat'] text-xl md:text-2xl font-bold text-center leading-tight">
                            Curated Workshops
                        </p>
                    </div>
                </Tilt>

                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#FF6A2E] rounded-2xl p-8 bg-[#080302] shadow-[0_0_4px_rgba(255,106,46,0.5)] h-full w-full mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(255,138,6)]">
                        <img src={certificates} alt="Certificates Icon" className="w-16 h-16 mb-6 text-[#FF6A2E]" />
                        <p className="text-white font-['Montserrat'] text-xl md:text-2xl font-bold text-center leading-tight">
                            Certificates
                        </p>
                    </div>
                </Tilt>

                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#FF6A2E] rounded-2xl p-8 bg-[#080302] shadow-[0_0_4px_rgba(255,106,46,0.5)] h-full w-full mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(255,138,6)]">
                        <img src={goodies} alt="Goodies Icon" className="w-16 h-16 mb-6 text-[#FF6A2E]" />
                        <p className="text-white font-['Montserrat'] text-xl md:text-2xl font-bold text-center leading-tight">
                            Goodies
                        </p>
                    </div>
                </Tilt>
                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#FF6A2E] rounded-2xl p-8 bg-[#080302] shadow-[0_0_4px_rgba(255,106,46,0.5)] h-full w-full mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(255,138,6)]">
                        <img src={grand} alt="Grand Prize Icon" className="w-16 h-16 mb-6 text-[#FF6A2E]" />
                        <p className="text-white font-['Montserrat'] text-xl md:text-2xl font-bold text-center leading-tight">
                            Grand Prize
                        </p>
                    </div>
                </Tilt>
            </div>
        </section>
    );
};

export default WhatsInIt;
