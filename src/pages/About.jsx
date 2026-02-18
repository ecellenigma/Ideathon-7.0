import React from 'react';

const About = () => {
    return (
        <section id='about' className="text-white relative flex flex-col items-center justify-center min-h-screen snap-start py-20 px-4 md:px-8">
            <h1 className="mx-auto mt-10 mb-12 text-center text-5xl md:text-7xl font-[900] font-['Outfit'] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A2E] to-[#FF9A03]">
                About Ideathon
            </h1>

            <div className="max-w-5xl mx-auto px-4 flex items-center">
                <p className="text-white font-['Montserrat'] text-base md:text-xl lg:text-2xl leading-relaxed border border-[#FF6A2E] p-6 md:p-10 rounded-2xl text-justify md:text-center shadow-[0_20px_50px_-12px_rgba(255,106,46,0.15)] bg-[#050201]/50 backdrop-blur-sm">
                    Ideathon is one of the flagship events of Enigma E-Cell NMIT, the Entrepreneurship cell of Nitte Meenakshi Institute of Technology. It is an innovative and intense brainstorming event that encourages individuals from all over the nation to bring forward new and modern ideas to solve real-life issues. It is a platform where creativity and true potential help shape the future. The competition typically requires participants to create a detailed business plan outlining their product or service, target market, financial projections, marketing strategy, and management structure. It is designed to encourage innovation and entrepreneurship and provide a platform for aspiring entrepreneurs to showcase their ideas and receive feedback from industry experts.
                </p>
            </div>
        </section>
    );
};

export default About;
