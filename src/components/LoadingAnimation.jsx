import React, { useEffect, useState } from 'react';
import ideathonLogo from '../assets/ideathon7.0.svg';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onLoadingComplete }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoading(false);
            onLoadingComplete();
        }, 3500);

        return () => {
            clearTimeout(loadingTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#050201] z-50">
            {loading ? (
                <>
                    <div className="relative flex flex-col items-center w-full max-w-[90%] md:max-w-3xl">
                        <img
                            src={ideathonLogo}
                            alt="Ideathon 7.0"
                            className="w-full h-auto reveal-content"
                        />
                        <div className="scanner-line"></div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default LoadingAnimation;