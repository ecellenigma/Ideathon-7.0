import React from 'react';

const Prizes = () => {
    return (
        <div className="text-white relative flex flex-col items-center min-h-screen p-5 md:p-0 snap-start">
            <h1 className="mx-auto mt-24 mb-2 text-center text-5xl md:text-6xl font-[900] font-['Outfit'] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A2E] to-[#FF9A03]">
                The Finals
            </h1>
            <h2 className="mx-auto mb-2 text-center text-3xl md:text-4xl font-[700] font-['Outfit'] uppercase tracking-wider text-white">
                Prize Pool
            </h2>

            <div className="text-center mb-2">
                <p className="text-white mt-10 text-5xl md:text-6xl font-extrabold font-['Montserrat'] drop-shadow-[0_0_15px_rgba(255,106,46,0.6)]">Rs 80,000</p>
            </div>

            <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-8 scale-75 md:scale-100 origin-center mt-10 md:mt-26">
                {/* 2nd Place */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 group cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div className="absolute inset-0 bg-[#0F0502] rounded-full border-4 border-[#FF6A2E] shadow-[0_0_20px_rgba(255,106,46,0.3)] group-hover:shadow-[0_0_30px_rgba(255,106,46,0.6)] transition-shadow duration-300 flex items-center justify-center">
                        <span className="text-white text-5xl md:text-7xl font-bold font-['Montserrat'] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">2</span>
                    </div>
                </div>

                {/* 1st Place */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 mb-12 md:mb-0 group cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF6A2E] to-[#FF9A03] rounded-full p-[4px] shadow-[0_0_30px_rgba(255,106,46,0.5)] group-hover:shadow-[0_0_50px_rgba(255,106,46,0.8)] transition-shadow duration-300">
                        <div className="w-full h-full bg-[#0F0502] rounded-full flex items-center justify-center border-2 border-[#FF9A03]/50">
                            <span className="text-white text-7xl md:text-9xl font-bold font-['Montserrat'] bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,106,46,0.5)]">1</span>
                        </div>
                    </div>
                </div>

                {/* 3rd Place */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 group cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div className="absolute inset-0 bg-[#0F0502] rounded-full border-4 border-[#FF6A2E] shadow-[0_0_20px_rgba(255,106,46,0.3)] group-hover:shadow-[0_0_30px_rgba(255,106,46,0.6)] transition-shadow duration-300 flex items-center justify-center">
                        <span className="text-white text-5xl md:text-7xl font-bold font-['Montserrat'] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">3</span>
                    </div>
                </div>
            </div>

            <div className="mt-auto max-w-5xl mx-auto text-center px-4 mb-8">
                <p className="text-white font-['Montserrat'] text-[2vh] sm:text-[24px] md:text-[28px] leading-relaxed">
                    Get mentored, experience, funding and other added benefits.
                </p>
            </div>
        </div>
    );
};

export default Prizes;
