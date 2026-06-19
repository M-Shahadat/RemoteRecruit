import React from 'react';
import FeatureRow from './FeatureRow';

import feature1 from '../assets/feature-1.png';
import feature2 from '../assets/feature-2.png';
import feature3 from '../assets/feature-3.png';

const Features: React.FC = () => {
    return (
        <section className="fade-up-on-load w-full bg-white py-24 md:py-32 lg:py-32 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32 lg:gap-40">

                <FeatureRow
                    tag="Global Reach"
                    title="The First Fully Global Job Board, Anywhere, Ever"
                    description="RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be."
                    imageSrc={feature1}
                    imageAlt="UI displaying candidate search and global remote workers"
                />

                <FeatureRow
                    tag="Actually Fee Free"
                    title="Fee-Free Forever"
                    description="We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved."
                    imageSrc={feature2}
                    imageAlt="UI showing premium membership tier with unlimited features"
                    reversed={true} // Flips layout for a zig-zag effect
                />

                <FeatureRow
                    tag="Custom Profile"
                    title="Showcase Your Talents"
                    description="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
                    imageSrc={feature3}
                    imageAlt="UI displaying a customizable user profile with a video introduction"
                />

            </div>
        </section>
    );
};

export default Features;