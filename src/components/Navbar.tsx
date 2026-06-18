import React from 'react';
import Button from './Button';
import Logo from '../assets/Logo.svg';

const Navbar: React.FC = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
            <nav className="max-w-[1920px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
                {/* RemoteRecruit Logo */}
                <img src={Logo} alt="RemoteRecruit Logo" className="h-8 md:h-10 reveal" />

                <div className="flex items-center gap-1 reveal" style={{ display: 'none' }}>
                    <span className="text-2xl md:text-3xl font-extrabold text-[#52B4DA] tracking-tight">
                        Remote
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight -ml-1">
                        Recruit
                    </span>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4 md:gap-6 reveal delay-100">
                    <Button
                        text="Sign In"
                        variant="text"
                    />
                    <Button
                        text="Sign Up"
                        variant="solid"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;