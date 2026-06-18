import React from 'react';

interface FeatureRowProps {
    tag: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    reversed?: boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
    tag,
    title,
    description,
    imageSrc,
    imageAlt,
    reversed = false,
}) => {
    return (
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24 w-full`}>

            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left reveal w-full md:max-w-[50%]">
                <span className="px-4 py-1.5 rounded-full bg-[#C2EEFF] text-[#1E3E85] text-sm md:text-base font-bold tracking-wide mb-6">
                    {tag}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#11142D] mb-6 leading-[1.15] tracking-tight">
                    {title}
                </h2>
                <p className="text-base md:text-lg text-[#808191] leading-relaxed font-medium">
                    {description}
                </p>
            </div>

            {/* Image Content */}
            <div className={`flex-1 w-full flex ${reversed ? 'justify-start' : 'justify-end'} reveal delay-200`}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                    className="w-full max-w-[500px] lg:max-w-[550px] h-auto object-contain"
                />
            </div>

        </div>
    );
};

export default FeatureRow;