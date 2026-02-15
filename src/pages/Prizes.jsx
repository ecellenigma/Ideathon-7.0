import React from 'react';
import TheFinalsHeader from '../assets/TheFinals.svg'; 
import PrizePoolHeader from '../assets/prizepool.svg'; 

const Prizes = () => {
    return (
        <div className="text-white relative flex flex-col items-center min-h-screen p-5 md:p-0 snap-start">
            <img src={TheFinalsHeader} alt="The Finals" className="mx-auto mt-24 mb-6" />
            <img src={PrizePoolHeader} alt="Prize Pool" className="mx-auto mb-2" />
            
            <div className="text-center mb-2">
                <p className="text-[#ffffff] mt-10 text-5xl font-['Delivery']">Rs 80,000</p>
            </div>
            
            <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="relative w-24 h-24 mt-26 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-[#046299] rounded-full flex items-center justify-center text-[#fff] text-7xl font-['Delivery'] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                    <div className="absolute inset-1 bg-[#046299] rounded-full border-3 border-[#00E0FF] flex items-center justify-center">
                        2
                    </div>
                </div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-[#046299] rounded-full flex items-center justify-center text-[#fff] text-9xl font-['Delivery'] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                    <div className="absolute inset-1 bg-[#046299] rounded-full border-3 border-[#00E0FF] flex items-center justify-center">
                        1
                    </div>
                </div>
                <div className="relative w-24 h-24 mt-26 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-[#046299] rounded-full flex items-center justify-center text-[#fff] text-7xl font-['Delivery'] transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                    <div className="absolute inset-1 bg-[#046299] rounded-full border-3 border-[#00E0FF] flex items-center justify-center">
                        3
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
