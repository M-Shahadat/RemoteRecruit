import React from 'react';
import heroBg from '../assets/hero.svg';

const Hero: React.FC = () => {
    return (
        <section
            className="relative w-full min-h-[85svh] sm:min-h-[90vh] md:min-h-[65vh] flex flex-col items-center justify-center text-center overflow-hidden pt-28 pb-32 sm:pt-32 sm:pb:48"
            aria-labelledby="hero-heading"
        >
            <img
                src={heroBg}
                alt="RemoteRecruit platform background"
                loading="eager"
                fetchPriority="high"
                className="absolute inset-0 z-0 h-full w-full object-cover object-bottom pointer-events-none"
                width="1200"
                sizes="(max-width: 768px) 100vw, 1200px"
            />

            <div className="relative z-10 w-full max-w-[1000px] px-5 sm:px-6 flex flex-col items-center -mt-4 sm:-mt-10 md:-mt-20">

                <h1
                    id="hero-heading"
                    className="text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight mb-4 sm:mb-6 md:mb-8"
                >
                    RemoteRecruit's Difference
                </h1>

                <p className="w-full max-w-[95%] sm:max-w-[850px] text-[0.95rem] sm:text-base md:text-xl lg:text-[1.25rem] text-white/95 leading-[1.6] sm:leading-relaxed md:leading-[1.8] font-medium">
                    RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there's nothing but you, your talents, and the next step in your career.
                </p>
            </div>

        </section>
    );
};

export default Hero;