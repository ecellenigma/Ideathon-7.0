import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Tracks from './pages/Tracks';
import Prizes from './pages/Prizes';
import WhatsInIt from './pages/WhatsInIt';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import DottedParticles from './components/Dotted';
import Sponsors from './pages/Sponsors';
import LoadingAnimation from './components/LoadingAnimation';

const App = () => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };

    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
            {!loadingComplete && <LoadingAnimation onLoadingComplete={handleLoadingComplete} />}
            {loadingComplete && (
                <div className="relative">
                    <div className="absolute inset-0 z-0">
                        <DottedParticles />
                    </div>
                    <div className="relative z-10">
                        <Navbar />
                        <Landing />
                        <About />
                        <Tracks />
                        <Prizes />
                        <WhatsInIt />
                        <Sponsors />
                        <FAQ />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            )}
        </div>
        
        
    );
};

export default App;