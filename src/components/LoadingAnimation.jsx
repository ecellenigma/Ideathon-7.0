import React, { useEffect, useState } from 'react';
import videoSrc from '../assets/enigmafinal.mp4';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onLoadingComplete }) => {
    const [loading, setLoading] = useState(true);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const typewriterTimer = setTimeout(() => {
            setShowVideo(true);
        }, 3500);

        const loadingTimer = setTimeout(() => {
            setLoading(false);
            onLoadingComplete();
        }, 8000);

        return () => {
            clearTimeout(typewriterTimer);
            clearTimeout(loadingTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#060d19] z-50">
            {loading ? (
                <>
                    <div className="relative flex flex-col items-center">
                        {showVideo && (
                            <video
                                playsInline
                                muted
                                autoPlay
                                loop
                                preload="metadata"
                                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 mb-4 transition-opacity duration-1000 ease-in-out opacity-0 absolute top-0"
                                style={{ backgroundColor: 'transparent', top: '-10rem' }}
                                onLoadedData={(e) => e.target.classList.remove('opacity-0')}
                            >
                                <source id="video-source" style={{ backgroundColor: 'transparent' }} src={videoSrc} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <div className="text-[#00e5ff] text-3xl sm:text-4xl md:text-6xl typewriter">
                            ID<span className="text-white">E</span>ATHON
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default LoadingAnimation;