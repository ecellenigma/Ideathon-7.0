import React from 'react';
import Tilt from 'react-parallax-tilt';
import prototypeIcon from '../assets/prototypetack.svg';
import ideationIcon from '../assets/ideationtrack.svg';

const Tracks = () => {
    const handleMouseMove = (e) => {
        const cards = document.querySelectorAll('.Tilt-inner');
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 106, 46, 0.5) 1%, transparent 50%)`;
        });
    };

    return (
        <section id="tracks" className="text-white relative flex flex-col items-center justify-center min-h-screen snap-start py-20 px-4">
            <h1 className="mx-auto mt-10 mb-16 text-center text-5xl md:text-7xl font-[900] font-['Outfit'] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A2E] to-[#FF9A03]">
                Tracks
            </h1>

            <div className="grid p-5  grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <Tilt className="Tilt" tiltMaxAngleX={6.5} tiltMaxAngleY={6.5} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border border-[#FF6A2E] rounded-2xl p-8 bg-[#080302] shadow-[0_0_20px_rgba(255,106,46,0.15)] flex flex-col items-start justify-start mb-0 transition-all duration-500 cursor-pointer hover:shadow-[0_0_40px_rgba(255,106,46,0.4)] h-full">
                        <div className="bg-[#1a0a05] rounded-full p-4 mb-4 flex items-center justify-center">
                            <img src={prototypeIcon} alt="Prototype Icon" className="w-10 h-10" />
                        </div>
                        <p className="text-2xl md:text-3xl lg:text-4xl text-[#FF6A2E] mb-3 font-['Montserrat'] text-left font-bold">
                            Prototype Track
                        </p>
                        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-['Montserrat'] text-left">
                            Ready to showcase your business idea? Impress judges and investors with a killer prototype that demonstrates its feasibility and uniqueness! Show off your creativity and innovation with a physical or digital model.
                        </p>
                    </div>
                </Tilt>
                <Tilt className="Tilt" tiltMaxAngleX={6.5} tiltMaxAngleY={6.5} scale={1.03} transitionSpeed={2500}>
                    <div className="Tilt-inner border border-[#FF6A2E] rounded-2xl p-8 bg-[#080302] shadow-[0_0_20px_rgba(255,106,46,0.15)] flex flex-col items-start justify-start mb-0 transition-all duration-500 cursor-pointer hover:shadow-[0_0_40px_rgba(255,106,46,0.4)] h-full">
                        <div className="bg-[#1a0a05]  rounded-full p-4 mb-4 flex items-center justify-center">
                            <img src={ideationIcon} alt="Ideation Icon" className="w-10 h-10" />
                        </div>
                        <p className="text-2xl md:text-3xl lg:text-4xl text-[#FF6A2E] font-bold mb-3 font-['Montserrat'] text-left">
                            Ideation Track
                        </p>
                        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-['Montserrat'] text-left">
                            It's time to brainstorm and refine your business idea! Analyze the market, identify gaps, and use techniques like mind mapping and SWOT analysis to develop your concept. Let your creativity run wild to become a successful young entrepreneur!
                        </p>
                    </div>
                </Tilt>
            </div>
        </section>
    );
};

export default Tracks;
