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
            const eventDate = new Date("2025-04-04T00:00:00"); // Set event date & time
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
        <div className="relative bg-gradient-to-r mt-5 p-5 font-tektur text-white px-8 rounded-lg shadow-lg text-center">
            <p className="md:text-lg sm:text-xl">
                <span className="text-[#00C4F4] font-semibold text-3xl"> {timeLeft.days}</span> d : 
                <span className="text-[#00C4F4] font-semibold text-3xl"> {timeLeft.hours}</span> h :
                <span className="text-[#00C4F4] font-semibold text-3xl"> {timeLeft.minutes}</span> m : 
                <span className="text-[#00C4F4] font-semibold text-3xl"> {timeLeft.seconds}</span> s 
            </p>
        </div>
    );
}
