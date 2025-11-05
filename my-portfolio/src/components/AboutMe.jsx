import EducationPage from "../pages/AboutmePages/Education";
import ProjectsPage from "../pages/AboutmePages/Projects";
import SkillsPage from "../pages/AboutmePages/Skills";

export default function AboutMe() {

    /**
     * Todo:
     * -- 
     *  1. Projects Page
     *  2. Education Page
     *  3. Skills Page
     */

    return (
        <div className=" p-10 space-y-20 min-h-screen bg-[#100d74] text-[#ffffff]">
            <section id="projects">
                <ProjectsPage />
            </section>

            <section id="education">
                <EducationPage />
            </section>

            <section id="skills">
                <SkillsPage />
            </section>
        </div>
    )
}