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
        <div className="relative mt-5 p-5 font-tektur text-white px-8 rounded-lg text-center">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 md:text-lg sm:text-xl">
                <span className="whitespace-nowrap"><span className="text-[#FF6A2E] font-semibold text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(255,106,46,0.8)]"> {timeLeft.days}</span> d :</span>
                <span className="whitespace-nowrap"><span className="text-[#FF6A2E] font-semibold text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(255,106,46,0.8)]"> {timeLeft.hours}</span> h :</span>
                <span className="whitespace-nowrap"><span className="text-[#FF6A2E] font-semibold text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(255,106,46,0.8)]"> {timeLeft.minutes}</span> m :</span>
                <span className="whitespace-nowrap"><span className="text-[#FF6A2E] font-semibold text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(255,106,46,0.8)]"> {timeLeft.seconds}</span> s</span>
            </div>
        </div>
    );
}
