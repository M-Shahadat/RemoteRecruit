import React from 'react';

type ButtonProps = {
    text: string;
    variant?: 'solid' | 'text';
    onClick?: () => void;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    text,
    variant = 'solid',
    onClick,
    className = ''
}) => {
    const baseClasses = "font-medium text-sm md:text-base transition-all duration-300 focus:outline-none rounded-2xl px-6 py-2.5";

    const variants = {
        solid: "bg-[#52B4DA] text-white hover:bg-[#43A4CA]",
        text: "text-white hover:text-gray-200 bg-transparent",
    };

    const currentVariantClasses = variants[variant];

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${currentVariantClasses} ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;