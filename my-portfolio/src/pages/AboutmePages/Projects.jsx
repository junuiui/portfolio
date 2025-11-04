/**
 * Showing Projects
 * TODO: 
 *  need to add github.. 
 *  expand? (DONE) / OR Collapse?
 *  categorize?
 */

import { useState } from 'react'

//  data    ##########################################
import data from '../../../Data/projects.json';

//  icon    ##########################################
import { FaGithub, FiChevronDown } from 'react-icons/fa';

export default function ProjectsPage() {

    const [visibleCount, setVisibleCount] = useState(2);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    // slicing the projects via visibleCount
    const visibleProjects = data.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-[#150DF7] text-[#00ff66] px-6 py-12 md:px-20 outline-solid">

            <h1 className="text-4xl font-bold mb-8">Projects</h1>

            <div className="grid gap-10">
                {visibleProjects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#0A0A5F] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* title + year */}
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <span className="text-sm text-gray-300">{project.year}</span>
                        </div>

                        {/* stacks */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-[#00ff66]/20 text-[#00ff66] px-2 py-1 rounded text-xs font-mono"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* details */}
                        <ul className="list-disc list-inside space-y-1 text-[#b0ff99]">
                            {project.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul>

                        {/* link */}
                        {project.url && (
                            <div className="mt-4">
                                <a
                                    href={project.url.startsWith("http") ? project.url : "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#00ff66] hover:underline"
                                >
                                    <FaGithub /> {project.url}
                                </a>
                            </div>
                        )}
                    </div>

                ))}
            </div>

            {/* Load More 버튼 */}
            {visibleCount < data.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleLoadMore}
                        className="flex items-center gap-2 text-[#00ff66] hover:text-white font-bold transition-colors"
                    >
                        Load More <FiChevronDown className="w-6 h-6 animate-bounce" />
                    </button>
                </div>
            )}
        </div>
    );
}
