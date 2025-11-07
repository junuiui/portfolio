import data from "../../../Data/educations.json";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Education() {
    return (
        <div className="bg-[#100d74] text-[#ffffff] px-4 py-12 md:px-20 font-mono">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-8 border-b text-center border-[#ffffff] pb-3 tracking-tight">
                EDUCATION
            </h1>

            {/* Table Wrapper */}
            <div className="border border-[#ffffff] rounded-lg overflow-hidden shadow-lg shadow-[#ffffff]">
                {/* Header */}
                <div className="bg-[#100d74] text-[#ffffff] grid grid-cols-5 gap-4 px-4 py-3 border-b border-[#ffffff] text-sm md:text-base font-bold">
                    <span className="font-bold">Institution</span>
                    <span className="font-bold">Program</span>
                    <span className="font-bold">Years</span>
                    <span className="font-bold">GPA</span>
                    <span className="font-bold">Notes</span>
                </div>

                {/* University Rows */}
                {data.universities.map((edu, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-5 gap-4 px-4 py-3 border-b border-[#ffffff]/20 hover:bg-[#150D11]/10 transition-colors"
                    >
                        {/* Institution */}
                        <span className="flex items-center gap-2 font-semibold">
                            <a
                                href={edu.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-[#ffffff]"
                            >
                                {edu.name}
                            </a>
                            <FaExternalLinkAlt className="w-3 h-3 opacity-60" />
                        </span>

                        {/* Program */}
                        <span className="text-sm">{edu.program}</span>

                        {/* Years */}
                        <span className="text-[#ffffff]">
                            {edu.start.month} {edu.start.year} -{" "}
                            {edu.end.month} {edu.end.year}
                        </span>

                        {/* GPA */}
                        <span>
                            {edu.gpa.value} / {edu.gpa.scale}
                        </span>

                        {/* Notes */}
                        <span className="text-sm">
                            Dean’s List × {edu.deans_list}
                        </span>
                    </div>
                ))}

                {/* Secondary School */}
                {data.secondaries.map((edu, index) => (
                    <div
                        key={`secondary-${index}`}
                        className="grid grid-cols-5 gap-4 px-4 py-3 border-b border-[#ffffff] hover:bg-[#00ff66]/5 transition-colors"
                    >
                        <span className="flex items-center gap-2 font-semibold">
                            <a
                                href={edu.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-[#ffffff]"
                            >
                                {edu.name}
                            </a>
                            <FaExternalLinkAlt className="w-3 h-3 opacity-60" />
                        </span>

                        <span className="text-sm italic text-gray-300">
                            Secondary Education
                        </span>

                        <span className="text-[#ffffff]/80">
                            {edu.start.month} {edu.start.year} -{" "}
                            {edu.end.month} {edu.end.year}
                        </span>

                        <span className="text-gray-400">—</span>
                        <span className="text-gray-400">—</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
