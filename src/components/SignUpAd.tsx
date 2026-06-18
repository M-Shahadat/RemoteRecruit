// import React from 'react';
// import dashboardImg from '../assets/Find Work.png';
// import bottomBlob from '../assets/Ellipse 12.png';

// const SignUpAd: React.FC = () => {
//     return (
//         <section className="relative overflow-hidden bg-[#EEF1FB] py-12 md:py-16 lg:py-20">
//             {/* Background Assets */}
//             <div className="pointer-events-none absolute inset-0 z-0">
//                 {/* Top-left blob */}
//                 <div className="absolute -left-[100px] -top-[100px] h-[250px] w-[250px] rounded-full bg-white/45 md:-left-[160px] md:-top-[130px] md:h-[360px] md:w-[360px]" />

//                 {/* Top-right blob */}
//                 <div className="absolute -right-[80px] -top-[100px] h-[300px] w-[300px] rounded-full bg-white/45 md:-right-[120px] md:-top-[155px] md:h-[430px] md:w-[430px]" />

//                 {/* Bottom-left / center blob */}
//                 <img
//                     src={bottomBlob}
//                     alt=""
//                     aria-hidden="true"
//                     className="absolute left-[10%] top-[65%] w-[250px] select-none md:left-[25%] md:top-[60%] md:w-[350px] lg:left-[31%] lg:top-[58%] lg:w-[493px]"
//                     draggable={false}
//                 />

//                 {/* Yellow orb */}
//                 <div className="absolute left-[8%] top-[3%] h-[40px] w-[40px] rounded-full bg-[linear-gradient(135deg,#FFD94A_0%,#F39A2E_100%)] shadow-[0_12px_24px_rgba(242,154,46,0.22)] md:left-[19%] md:top-[2%] md:h-[56px] md:w-[56px]" />

//                 {/* Blue orb */}
//                 <div className="absolute bottom-[4%] right-[10%] h-[20px] w-[20px] rounded-full bg-[linear-gradient(135deg,#4EB4DB_0%,#2B62B6_100%)] shadow-[0_12px_24px_rgba(43,98,182,0.22)] md:bottom-[8%] md:right-[18%] md:h-[30px] md:w-[30px]" />
//             </div>

//             {/* Main Content Grid */}
//             <div className="relative z-10 mx-auto max-w-[1600px] px-0">
//                 <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-0">

//                     {/* Left Side: Dashboard Image */}
//                     <div className="px-5 sm:px-8 lg:col-span-7 lg:px-0">
//                         <img
//                             src={dashboardImg}
//                             alt="RemoteRecruit Dashboard Interface"
//                             className="block w-full max-w-[800px] mx-auto object-contain object-center lg:mx-0 lg:object-left"
//                             draggable={false}
//                         />
//                     </div>

//                     {/* Right Side: Text & CTA */}
//                     <div className="px-6 pb-12 sm:px-12 md:pb-16 lg:col-span-5 lg:px-0 lg:pb-8 lg:pr-16 xl:pr-24">
//                         <div className="mx-auto max-w-[520px] lg:mx-0">
//                             <p className="mb-3 text-[14px] md:text-[16px] font-bold text-[#28478D] md:mb-5">
//                                 Are you ready?
//                             </p>

//                             <h2 className="text-[38px] sm:text-[46px] md:text-[52px] lg:text-[44px] font-semibold md:leading-[0.98] tracking-[-0.05em] text-[#15193A]">
//                                 Help is only a few
//                                 <br />
//                                 clicks away!
//                             </h2>

//                             <p className="mt-6 md:mt-8 max-w-[440px] text-[16px] md:text-[18px] leading-[1.45] md:leading-[1.35] tracking-[-0.03em] text-[#7E8191]">
//                                 Click Below to get set up super quickly and find help now!
//                             </p>

//                             <button
//                                 className="mt-8 md:mt-12 flex items-center rounded-full bg-[#CFE0FF] py-2 pl-2 pr-6 md:py-3 md:pl-3 md:pr-8 shadow-[0_10px_30px_rgba(137,166,226,0.18)] transition-transform hover:scale-[1.02]"
//                                 aria-label="Get Started"
//                             >
//                                 <span className="flex h-[50px] w-[50px] md:h-[62px] md:w-[62px] shrink-0 items-center justify-center rounded-full bg-[#51B7E0]">
//                                     <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                                         <path d="M4 12H20" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </span>
//                                 <span className="ml-3 md:ml-4 text-[18px] md:text-[24px] font-semibold tracking-[-0.03em] text-[#2A4A8D]">
//                                     Get Started
//                                 </span>
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SignUpAd;

import React from 'react';
import dashboardImg from '../assets/Find Work.png';
import bottomBlob from '../assets/Ellipse 12.png';

const SignUpAd: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-[#EEF1FB] py-16 md:py-24 lg:py-32">
            {/* Background Assets */}
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* Top-left blob */}
                <div className="absolute -left-[100px] -top-[100px] h-[250px] w-[250px] rounded-full bg-white/45 md:-left-[160px] md:-top-[130px] md:h-[360px] md:w-[360px]" />


                {/* Top-right blob */}
                <div className="absolute -right-[80px] -top-[100px] h-[300px] w-[300px] rounded-full bg-white/45 md:-right-[120px] md:-top-[155px] md:h-[430px] md:w-[430px]" />


                {/* Bottom-left / center blob */}
                <img
                    src={bottomBlob}
                    alt=""
                    aria-hidden="true"
                    className="absolute left-[10%] top-[65%] w-[250px] select-none md:left-[25%] md:top-[60%] md:w-[350px] lg:left-[31%] lg:top-[58%] lg:w-[493px]"
                    draggable={false}
                />


                {/* Yellow orb */}
                <div className="absolute left-[8%] top-[3%] h-[40px] w-[40px] rounded-full bg-[linear-gradient(135deg,#FFD94A_0%,#F39A2E_100%)] shadow-[0_12px_24px_rgba(242,154,46,0.22)] md:left-[19%] md:top-[2%] md:h-[56px] md:w-[56px]" />


                {/* Blue orb */}
                <div className="absolute bottom-[4%] right-[10%] h-[20px] w-[20px] rounded-full bg-[linear-gradient(135deg,#4EB4DB_0%,#2B62B6_100%)] shadow-[0_12px_24px_rgba(43,98,182,0.22)] md:bottom-[8%] md:right-[18%] md:h-[30px] md:w-[30px]" />
            </div>


            {/* Main Content Grid */}
            <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-8 lg:px-0">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-0">


                    {/* Left Side: Dashboard Image */}
                    <div className="px-0 lg:col-span-7 lg:px-0 lg:pr-12">
                        <img
                            src={dashboardImg}
                            alt="RemoteRecruit Dashboard Interface"
                            className="block w-full max-w-[800px] mx-auto object-contain object-center lg:mx-0 lg:object-left"
                            draggable={false}
                        />
                    </div>


                    {/* Right Side: Text & CTA */}
                    <div className="px-0 pb-12 lg:col-span-5 lg:px-0 lg:pb-0">
                        <div className="mx-auto max-w-[520px] lg:mx-0">
                            <p className="mb-4 text-[14px] md:text-[16px] font-bold text-[#28478D] md:mb-6">
                                Are you ready?
                            </p>


                            <h2 className="text-[38px] sm:text-[40px] md:text-[40px] lg:text-[44px] font-semibold leading-[50px]  tracking-[-0.05em] text-[#15193A]">
                                Help is only a few
                                <br />
                                clicks away!
                            </h2>


                            <p className="mt-2 md:mt-5 max-w-[440px] text-[18px] md:text-[18px] leading-[33px] tracking-[0] text-[#7E8191]">
                                Click Below to get set up super
                                <br />
                                quickly and find help now!
                            </p>


                            <button
                                className="mt-8 md:mt-12 flex items-center rounded-full bg-[#CFE0FF] py-2 pl-2 pr-6 md:py-3 md:pl-3 md:pr-8 shadow-[0_10px_30px_rgba(137,166,226,0.18)] transition-transform hover:scale-[1.02]"
                                aria-label="Get Started"
                            >
                                <span className="flex h-[50px] w-[50px] md:h-[62px] md:w-[62px] shrink-0 items-center justify-center rounded-full bg-[#51B7E0]">
                                    <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M4 12H20" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="ml-3 md:ml-4 text-[18px] md:text-[24px] font-semibold tracking-[-0.03em] text-[#2A4A8D]">
                                    Get Started
                                </span>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};


export default SignUpAd;