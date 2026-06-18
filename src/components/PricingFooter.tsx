import React from "react";
import footerBg from "../assets/FOOTER.svg";
import rrIcon from "../assets/RR Icon Logo.png";
import logoImg from "../assets/Logo.svg";

const CheckIcon = ({ muted = false }: { muted?: boolean }) => (
    <span
        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${muted ? "bg-[#A0A2B7]" : "bg-[#3B82C4]"
            }`}
    >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            {muted ? (
                <path d="M2.2 2.2L9.8 9.8M9.8 2.2L2.2 9.8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            ) : (
                <path d="M1.2 6.2L4.4 9.2L10.8 2.8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
        </svg>
    </span>
);

const SocialBtn = ({ children }: { children: React.ReactNode }) => (
    <a
        href="#"
        className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#57BFE8]"
    >
        {children}
    </a>
);

const PricingFooter = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white">

            {/* Absolute SVG Background */}
            <div className="absolute bottom-0 left-1/2 z-0 w-full min-w-[1440px] -translate-x-1/2 pointer-events-none">
                <img src={footerBg} alt="" className="h-auto w-full" />
            </div>

            {/* Main Pricing Cards Container */}
            <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-[80px]">
                <h2 className="text-center text-[clamp(34px,4vw,54px)] font-bold tracking-tight text-[#11142D]">
                    Help Is One Click Away
                </h2>

                <div className="relative mt-[70px] flex flex-col gap-8 lg:flex-row lg:justify-center">

                    {/* Free Plan */}
                    <div className="flex-1 rounded-[32px] bg-white p-[28px] shadow-[0_10px_45px_rgba(17,20,45,0.08)]">
                        <div className="flex flex-col gap-7 sm:flex-row">
                            <div className="flex h-[220px] w-full sm:w-[190px] shrink-0 flex-col items-center justify-center rounded-[22px] bg-[#EDF2FF]">
                                <div className="text-[#55B8E6]">
                                    <div className="text-center text-[3rem] font-bold leading-none">Free</div>
                                    <div className="mt-3 text-center text-[1.15rem] font-medium text-[#8A8FA7]">Basic</div>
                                </div>
                            </div>

                            <div className="pt-3">
                                <ul className="space-y-5">
                                    <li className="flex items-center gap-3">
                                        <CheckIcon />
                                        <span className="text-[1.02rem] font-semibold text-[#11142D]">1 Active Job</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckIcon />
                                        <span className="text-[1.02rem] font-semibold text-[#11142D]">Basic List Placement</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckIcon muted />
                                        <span className="text-[1.02rem] font-medium text-[#8A8FA7]">Unlimited Job Applicants</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckIcon muted />
                                        <span className="text-[1.02rem] font-medium leading-[1.45] text-[#8A8FA7]">
                                            Invite Anyone to Apply to
                                            <br />
                                            Your Jobs
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button className="mt-9 h-[86px] w-full rounded-[26px] border-2 border-[#52B4DA] text-[1.15rem] font-bold text-[#253D80] hover:bg-[#F5F7FE] transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="flex-1 rounded-[32px] bg-white p-[28px] shadow-[0_16px_60px_rgba(37,61,128,0.16)]">
                        <div className="flex flex-col gap-7 sm:flex-row">
                            <div className="relative flex h-[220px] w-full sm:w-[190px] shrink-0 flex-col items-center rounded-[22px] bg-[#EDF2FF] pt-[52px]">
                                <div className="absolute left-1/2 top-[-1px] flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-[#BFE8FF] to-[#D4F1FF] px-4 py-2 shadow-[0_3px_14px_rgba(82,180,218,0.18)]">
                                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                                            <path d="M6.8 1L1.2 8.4H5.6L4.6 15L10.2 7.6H5.8L6.8 1Z" fill="#1E3A8A" />
                                        </svg>
                                    </span>
                                    <span className="text-[0.95rem] font-bold text-[#11142D]">Premium</span>
                                </div>

                                <div className=" px-3 py-1">
                                    <div className="text-center text-[2.6rem] font-bold leading-none text-[#8E80FC]">$79.99</div>
                                </div>
                                <div className="mt-3 text-[1.05rem] font-medium text-[#8A8FA7]">Per Month</div>
                            </div>

                            <div className="pt-3">
                                <ul className="space-y-5">
                                    <li className="flex items-center gap-3">
                                        <CheckIcon />
                                        <span className="text-[1.02rem] font-semibold text-[#11142D]">Unlimited Job Posts</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckIcon />
                                        <span className="text-[1.02rem] font-semibold text-[#11142D]">Instant Job Post Approval</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckIcon />
                                        <span className="text-[1.02rem] font-semibold text-[#11142D]">Premium List Placement</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckIcon />
                                        <span className="text-[1.02rem] font-semibold text-[#11142D]">Unlimited Job Applicants</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button className="mt-9 h-[86px] w-full rounded-[26px] bg-[#253D80] text-[1.15rem] font-bold text-white shadow-[0_4px_20px_rgba(37,61,128,0.28)] hover:bg-[#1E3E85] transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Footer Overlay */}
            <div className="relative z-10 mx-auto mt-[100px] max-w-[1440px] px-6 pb-[110px] md:mt-[180px]">
                <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

                    {/* Left Side: Replaced Text Logo with Imported SVG */}
                    <div className="flex items-center shrink-0">
                        <img
                            src={logoImg}
                            alt="RemoteRecruit Logo"
                            className="h-10 md:h-14 w-auto object-contain"
                        />
                    </div>

                    {/* Right Side: Social Container */}
                    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
                        <SocialBtn>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10V22h4v-8.5z" />
                            </svg>
                        </SocialBtn>

                        <SocialBtn>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </SocialBtn>

                        <SocialBtn>
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.682 10.622 20.34 3h-1.576l-5.78 6.618L8.366 3H3.04l7.006 10.057L3.04 21h1.576l6.103-6.985L15.65 21h5.326l-7.294-10.378zm-2.164 2.477-.707-1.002-5.59-7.925h2.42l4.522 6.408.707 1.002 5.86 8.307h-2.42l-4.792-6.79z" />
                            </svg>
                        </SocialBtn>

                        <SocialBtn>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4a8.22 8.22 0 01-2.612.996 4.16 4.16 0 00-3.054-1.32c-2.33 0-4.22 1.884-4.22 4.208 0 .33.037.652.108.961C8.312 8.663 5.19 6.99 3.12 4.475a4.184 4.184 0 00-.57 2.115c0 1.46.744 2.748 1.875 3.504a4.137 4.137 0 01-1.91-.527v.053c0 2.036 1.45 3.736 3.376 4.123a4.192 4.192 0 01-1.905.072c.536 1.67 2.093 2.886 3.937 2.92A8.406 8.406 0 012 18.41a11.902 11.902 0 006.435 1.88c7.72 0 11.94-6.383 11.94-11.915 0-.181 0-.362-.012-.541A8.536 8.536 0 0022.162 5.656z" />
                            </svg>
                        </SocialBtn>

                        <SocialBtn>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452z" />
                            </svg>
                        </SocialBtn>

                        <SocialBtn>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.054 2.122c-1.636 0-3.14.651-4.238 1.832-1.026 1.103-1.572 2.624-1.543 4.296l.012 1.092c.026 2.316-.305 3.018-.696 3.424-.467.485-1.258.74-2.228.718a.333.333 0 00-.317.518c.677 1.01 1.944 1.776 3.666 2.217.472.122.951.348 1.159.544.153.143.179.351.171.503-.021.576.467 1.047 1.034 1.047h.183c.789 0 1.258.452 1.488 1.002.261.624.811 1.041 1.449 1.041h-.002c.642 0 1.229-.441 1.483-1.096.223-.578.694-1.045 1.505-1.045h.194c.571 0 1.053-.474 1.035-1.053-.008-.152.016-.357.171-.502.206-.193.687-.421 1.157-.543 1.724-.442 2.991-1.206 3.668-2.216a.332.332 0 00-.317-.518c-.97.022-1.761-.233-2.227-.718-.392-.407-.722-1.109-.696-3.425l.012-1.092c.029-1.673-.518-3.195-1.543-4.298-1.1-1.181-2.603-1.83-4.24-1.83z" />
                            </svg>
                        </SocialBtn>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[24px] left-1/2 z-10 -translate-x-1/2">
                <img src={rrIcon} alt="RemoteRecruit Icon" className="h-8 md:h-10 w-auto object-contain" />
            </div>

        </section>
    );
};

export default PricingFooter;