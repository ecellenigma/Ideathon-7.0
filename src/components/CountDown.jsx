import { useState, useEffect } from "react";

export default function IdeathonCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const eventDate = new Date("2026-02-27T00:00:00"); // Set event date & time
            const now = new Date();
            const timeDiff = eventDate - now;

            if (timeDiff > 0) {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative mt-5 p-5 font-tektur text-white px-8 rounded-lg text-center select-none">
            <div className="flex flex-wrap justify-center items-baseline gap-3 md:gap-6">
                <div className="flex flex-col items-center">
                    <span className="text-[#FF6A2E] font-bold text-4xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,106,46,0.6)]">
                        {timeLeft.days}
                    </span>
                    <span className="text-sm md:text-lg text-gray-400 font-medium">days</span>
                </div>
                <span className="text-2xl md:text-4xl text-[#FF6A2E] animate-pulse">:</span>

                <div className="flex flex-col items-center">
                    <span className="text-[#FF6A2E] font-bold text-4xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,106,46,0.6)]">
                        {timeLeft.hours}
                    </span>
                    <span className="text-sm md:text-lg text-gray-400 font-medium">hours</span>
                </div>
                <span className="text-2xl md:text-4xl text-[#FF6A2E] animate-pulse">:</span>

                <div className="flex flex-col items-center">
                    <span className="text-[#FF6A2E] font-bold text-4xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,106,46,0.6)]">
                        {timeLeft.minutes}
                    </span>
                    <span className="text-sm md:text-lg text-gray-400 font-medium">mins</span>
                </div>
                <span className="text-2xl md:text-4xl text-[#FF6A2E] animate-pulse">:</span>

                <div className="flex flex-col items-center">
                    <span className="text-[#FF6A2E] font-bold text-4xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,106,46,0.6)]">
                        {timeLeft.seconds}
                    </span>
                    <span className="text-sm md:text-lg text-gray-400 font-medium">secs</span>
                </div>
            </div>
        </div>
    );
}
