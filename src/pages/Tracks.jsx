import React from 'react';
import Tilt from 'react-parallax-tilt';
import prototypeIcon from '../assets/prototypetack.svg';
import ideationIcon from '../assets/ideationtrack.svg';
import trackHeader from '../assets/TracksHeader.svg';

const Tracks = () => {
    const handleMouseMove = (e) => {
        const cards = document.querySelectorAll('.Tilt-inner');
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 229, 255, 0.5) 1%, transparent 50%)`;
        });
    };

    return (
        <div className="text-white relative flex flex-col items-center min-h-screen snap-start" onMouseMove={handleMouseMove}>
            <img src={trackHeader} alt="Tracks" className="mx-auto mt-8 mb-12" />

            <div className="grid bg-[#060d19] grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <Tilt className="Tilt" tiltMaxAngleX={6.5} tiltMaxAngleY={6.5} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border border-[#00e5ff] rounded-2xl p-8 bg-[#060d19] shadow-[0_0_4px_rgba(0,229,255,0.5)] flex flex-col items-start justify-start mb-12 transition-all duration-500 cursor-pointer hover:shadow-[0_0_16px_rgb(0,173,216)] h-full">
                        <div className="bg-[#1c1c24] rounded-full p-4 mb-4 flex items-center justify-center">
                            <img src={prototypeIcon} alt="Prototype Icon" className="w-10 h-10" />
                        </div>
                        <p className="text-[32px] text-[#00e5ff] mb-3 font-['Montserrat'] text-left">
                            Prototype Track
                        </p>
                        <p className="text-white text-[28px] leading-tight font-['Montserrat'] text-left">
                            Ready to showcase your business idea? Impress judges and investors with a killer prototype that demonstrates its feasibility and uniqueness! Show off your creativity and innovation with a physical or digital model.
                        </p>
                    </div>
                </Tilt>
                <Tilt className="Tilt" tiltMaxAngleX={6.5} tiltMaxAngleY={6.5} scale={1.03} transitionSpeed={2500}>
                    <div className="Tilt-inner border border-[#00e5ff] rounded-2xl p-8 bg-[#060d19] shadow-[0_0_4px_rgba(0,229,255,0.5)] flex flex-col items-start justify-start mb-12 transition-all duration-500 cursor-pointer hover:shadow-[0_0_16px_rgb(0,173,216)] h-full">
                        <div className="bg-[#1c1c24]  rounded-full p-4 mb-4 flex items-center justify-center">
                            <img src={ideationIcon} alt="Ideation Icon" className="w-10 h-10" />
                        </div>
                        <p className="text-[32px] text-[#00e5ff] font-medium mb-3 font-['Montserrat'] text-left">
                            Ideation Track
                        </p>
                        <p className="text-white text-[28px] leading-tight font-['Montserrat'] text-left">
                            It's time to brainstorm and refine your business idea! Analyze the market, identify gaps, and use techniques like mind mapping and SWOT analysis to develop your concept. Let your creativity run wild to become a successful young entrepreneur!
                        </p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Tracks;
