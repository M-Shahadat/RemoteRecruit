import React from 'react';

// Data array for clean, DRY component rendering
const faqData = [
    {
        question: "Do I have to sign a long-term contract?",
        answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    },
    {
        question: "Can I pay for a whole year?",
        answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage"
    },
    {
        question: "What if I need help?",
        answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    }
];

const FAQ: React.FC = () => {
    return (
        <section className="w-full bg-white py-24 md:py-32 flex justify-center">

            <div className="max-w-[900px] w-full mx-auto px-6 md:px-12">

                {/* Section Heading */}
                <h2 className="text-[2.5rem] md:text-5xl font-bold text-[#11142D] mb-12 md:mb-16 tracking-tight reveal">
                    Common Questions
                </h2>

                {/* FAQ Items Mapping */}
                <div className="flex flex-col gap-10 md:gap-12 mb-12 md:mb-16">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col reveal delay-${(index + 1) * 100}`}
                        >
                            <h3 className="text-xl md:text-[1.35rem] font-semibold text-[#11142D] mb-4">
                                {item.question}
                            </h3>
                            <p className="text-base md:text-[1.15rem] text-[#808191] leading-[1.8] font-medium">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Outline Action Button */}
                <div className="reveal delay-300">
                    <button
                        className="border border-[#52B4DA] text-[#253D80] font-bold text-lg px-8 py-3.5 rounded-xl hover:bg-[#F5F7FE] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#52B4DA] focus:ring-offset-2"
                        aria-label="View more questions"
                    >
                        More Questions
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FAQ;