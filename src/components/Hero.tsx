// import React from 'react';
// import heroBg from '../assets/hero.svg';

// const Hero: React.FC = () => {
//     return (
//         <section className="relative w-full min-h-[90vh] md:min-h-[65vh]  flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-48">

//             <img
//                 src={heroBg}
//                 alt=""
//                 aria-hidden="true" // Hiding from screen readers for perfect Accessibility score since it's presentational
//                 loading="lazy"
//                 className="absolute pointer-events-none"
//             />

//             <div className="relative z-10 max-w-[1000px] px-6 flex flex-col items-center -mt-10 md:-mt-20">
//                 <h1 className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tight mb-6 md:mb-8 reveal">
//                     RemoteRecruit’s Difference
//                 </h1>

//                 <p className="max-w-[850px] text-base md:text-xl lg:text-[1.25rem] text-white/95 leading-relaxed md:leading-[1.8] reveal delay-200 font-medium">
//                     RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
//                 </p>
//             </div>

//         </section>
//     );
// };

// export default Hero;


import React from 'react';
import heroBg from '../assets/hero.svg';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-[85svh] sm:min-h-[90vh] md:min-h-[65vh] flex flex-col items-center justify-center text-center overflow-hidden pt-28 pb-32 sm:pt-32 sm:pb-48">

            {/* 
              Crucial Responsive Fix: 
              Added inset-0, w-full, h-full, and object-cover to guarantee the SVG 
              scales dynamically and crops perfectly on phones and tablets.
            */}
            <img
                src={heroBg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 z-0 h-full w-full object-cover object-bottom pointer-events-none"
            />

            {/* 
              Margin Fix: Scaled the negative top margin so it doesn't pull the text 
              too high up into the navbar area on small mobile screens.
            */}
            <div className="relative z-10 w-full max-w-[1000px] px-5 sm:px-6 flex flex-col items-center -mt-4 sm:-mt-10 md:-mt-20">

                {/* Scaled the base text to 4xl for mobile to prevent awkward word breaks */}
                <h1 className="text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tight mb-4 sm:mb-6 md:mb-8 reveal">
                    RemoteRecruit’s Difference
                </h1>

                {/* Scaled line-height and base font size to keep the paragraph highly readable on narrow widths */}
                <p className="w-full max-w-[95%] sm:max-w-[850px] text-[0.95rem] sm:text-base md:text-xl lg:text-[1.25rem] text-white/95 leading-[1.6] sm:leading-relaxed md:leading-[1.8] reveal delay-200 font-medium">
                    RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
                </p>
            </div>

        </section>
    );
};

export default Hero;