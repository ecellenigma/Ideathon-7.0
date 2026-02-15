import React from 'react';
import AboutIdeathonHeader from '../assets/AboutIdeathon.svg'; 

const About = () => {
    return (
        <div className="text-white relative flex flex-col items-center min-h-screen snap-start">
            <img src={AboutIdeathonHeader} alt="About Ideathon" className="mx-auto mt-8 mb-8" />
            <div className="max-w-5xl mx-auto px-4">
                <p className="text-white mt-4 font-['Montserrat'] text-[28px] leading-relaxed text-center">
                    Ideathon is one of the flagship events of Enigma E-Cell NMIT, the Entrepreneurship cell of Nitte Meenakshi Institute of Technology. It is an innovative and intense brainstorming event that encourages individuals from all over the nation to bring forward new and modern ideas to solve real-life issues. It is a platform where creativity and true potential help shape the future. The competition typically requires participants to create a detailed business plan outlining their product or service, target market, financial projections, marketing strategy, and management structure. It is designed to encourage innovation and entrepreneurship and provide a platform for aspiring entrepreneurs to showcase their ideas and receive feedback from industry experts.
                </p>
            </div>
        </div>
    );
};

export default About;
