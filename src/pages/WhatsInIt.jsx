import React from 'react';
import Tilt from 'react-parallax-tilt';
import incubation from '../assets/incubation.svg';
import mentoring from '../assets/mentoring.svg';
import certificates from '../assets/certificates.svg';
import goodies from '../assets/goodies.svg';
import workshops from '../assets/workshops.svg';
import Whats from '../assets/Whats.svg';
import grand from '../assets/GrandPrize.svg';

const WhatsInIt = () => {
    const handleMouseMove = (e) => {
        const cards = document.querySelectorAll('.Tilt-inner');
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 229, 255, 0.5) 10%, transparent 70%)`;
        });
    };

    return (
        <div className="text-white relative flex flex-col items-center min-h-screen snap-start" onMouseMove={handleMouseMove}>
            <img src={Whats} alt="What's in it for you?" className="mx-auto mt-12 mb-12" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#00e5ff] rounded-lg p-8 bg-[#060d19] shadow-[0_0_4px_rgba(0,229,255,0.5)] h-48 w-48 mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(0,173,216)]">
                        <img src={incubation} alt="Incubation Icon" className="w-10 h-10 mb-6 text-[#00e5ff]" />
                        <p className="text-white font-['Montserrat'] text-[28px] text-center leading-tight">
                            Incubation Opportunity
                        </p>
                    </div>
                </Tilt>
                
                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#00e5ff] rounded-lg p-8 bg-[#060d19] shadow-[0_0_4px_rgba(0,229,255,0.5)] h-48 w-48 mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(0,173,216)]">
                        <img src={mentoring} alt="Mentoring Icon" className="w-10 h-10 mb-6 text-[#00e5ff]" />
                        <p className="text-white font-['Montserrat'] text-[28px] text-center leading-tight">
                            Mentoring Sessions
                        </p>
                    </div>
                </Tilt>
                
                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#00e5ff] rounded-lg p-8 bg-[#060d19] shadow-[0_0_4px_rgba(0,229,255,0.5)] h-48 w-48 mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(0,173,216)]">
                        <img src={workshops} alt="Workshops Icon" className="w-10 h-10 mb-6 text-[#00e5ff]" />
                        <p className="text-white font-['Montserrat'] text-[28px] text-center leading-tight">
                            Curated Workshops
                        </p>
                    </div>
                </Tilt>
                
                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#00e5ff] rounded-lg p-8 bg-[#060d19] shadow-[0_0_4px_rgba(0,229,255,0.5)] h-48 w-48 mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(0,173,216)]">
                        <img src={certificates} alt="Certificates Icon" className="w-10 h-10 mb-6 text-[#00e5ff]" />
                        <p className="text-white font-['Montserrat'] text-[28px] text-center leading-tight">
                            Certificates
                        </p>
                    </div>
                </Tilt>
                
                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#00e5ff] rounded-lg p-8 bg-[#060d19] shadow-[0_0_4px_rgba(0,229,255,0.5)] h-48 w-48 mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(0,173,216)]">
                        <img src={goodies} alt="Goodies Icon" className="w-10 h-10 mb-6 text-[#00e5ff]" />
                        <p className="text-white font-['Montserrat'] text-[28px] text-center leading-tight">
                            Goodies
                        </p>
                    </div>
                </Tilt>
                <Tilt className="Tilt" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={2000}>
                    <div className="Tilt-inner border-2 border-[#00e5ff] rounded-lg p-8 bg-[#060d19] shadow-[0_0_4px_rgba(0,229,255,0.5)] h-48 w-48 mx-auto flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-[0_0_12px_rgb(0,173,216)]">
                        <img src={grand} alt="Grand Prize Icon" className="w-10 h-10 mb-6 text-[#00e5ff]" />
                        <p className="text-white font-['Montserrat'] text-[28px] text-center leading-tight">
                            Grand Prize
                        </p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default WhatsInIt;
