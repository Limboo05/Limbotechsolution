import React, { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";
//
//
export default function Scroll_Indicator({ sections }: any) {
    const [activeSection, setActiveSection] = useState(0);
    const { scrollYProgress } = useScroll(sections[activeSection]);
useEffect(() => {
    const handleScroll = () => {
        // 1. Add a check to filter out null refs
        const sectionTops = sections
            .filter((section: any) => section.current !== null)
            .map((section: any) => section.current.offsetTop);

        const currentScroll = window.scrollY + 100; // Offset for better UX
        
        // 2. Find the current section
        const currentSection = sectionTops.findIndex(
            (top: number) => top > currentScroll
        );

        setActiveSection(
            currentSection === -1 ? sections.length - 1 : Math.max(0, currentSection - 1)
        );
    };

    // Trigger once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [sections]);

    const handleScrollToSection = (index: string | number) => {
        sections[index].current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="ScrollIndicator__Container">
            <div className="ScrollIndicator__Container__Element">
                {sections.map((section: any, index: number) => {
                    return (
                        <motion.div
                            key={index}
                            className={`ScrollIndicator__Container__Element__Item ${
                                activeSection === index ? "Active" : "Inactive"
                            }`}
                            onClick={() => handleScrollToSection(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <motion.div
                                className={`ScrollIndicator__Container__Element__Item__Dot ${
                                    activeSection === index
                                        ? "Active"
                                        : "Inactive"
                                }`}
                                initial={{ scale: 0.8 }}
                                animate={{
                                    scale: activeSection === index ? 1.2 : 0.8,
                                    transition: { duration: 0.3 },
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
