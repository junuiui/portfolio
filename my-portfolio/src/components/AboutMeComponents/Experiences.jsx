import data from "../../../Data/experiences.json";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiArrowDown } from "react-icons/fi";

export default function Experiences() {

    // for expand details
    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const handleRowClick = (index) => {
        setExpandedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) // if opened already, close
                : [...prev, index] // if close, open
        );
    };

    return (
        <div className="bg-[#100d74] text-[#ffffff] px-4 py-12 md:px-20 font-mono">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-8 border-b text-center border-[#ffffff] pb-3 tracking-wider">
                EXPERIENCES
            </h1>

            {/* Table Wrapper */}
            <div className="border border-[#ffffff] rounded-lg overflow-hidden shadow-lg shadow-[#ffffff]">
                {/* Header */}
                <div
                    className="bg-[#100d74] text-[#ffffff] grid px-4 py-3 border-b border-[#ffffff] text-sm md:text-base font-bold"
                    style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr" }}
                >
                    <span>Role</span>
                    <span>Company</span>
                    <span>Location</span>
                    <span>Date</span>
                </div>

                {/* Body */}
                {data.experiences.map((experience, index) => {
                    const isOpen = expandedIndexes.includes(index);
                    return (
                        <div key={index} className="border-b border-[#ffffff]/20">
                            <div
                                onClick={() => handleRowClick(index)}
                                className="grid px-4 py-3 cursor-pointer hover:bg-[#150D11]/10 transition-all items-center"
                                style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr" }}
                            >
                                <span className="flex items-center gap-2 font-semibold">
                                    {experience.title}
                                    {isOpen ? (
                                        <FiChevronUp className="w-4 h-4" />
                                    ) : (
                                        <FiChevronDown className="w-4 h-4" />
                                    )}
                                </span>
                                <span className="truncate">{experience.company}</span>
                                <span>{experience.location}</span>
                                <span className="whitespace-nowrap">
                                    {experience.start.month} {experience.start.year} –{" "}
                                    {experience.end
                                        ? `${experience.end.month} ${experience.end.year}`
                                        : "Present"}
                                </span>
                            </div>

                            {/* details Row */}
                            {isOpen && (
                                <div className="bg-[#100d74]/5 text-[#ffffff] px-8 py-2 text-sm animate-fadeIn">
                                    <ul className="list-disc list-inside space-y-1">
                                        {experience.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

