import EducationPage from "../pages/AboutmePages/Education";
import ProjectsPage from "../pages/AboutmePages/Projects";
import SkillsPage from "../pages/AboutmePages/Skills";

export default function AboutMe() {

    /**
     * Todo:
     * -- 
     *  1. Education Page
     *  2. Projects Page
     *  3. Skills Page
     */

    return (
        <div className=" p-10 space-y-20 min-h-screen bg-[#100d74] text-[#ffffff]">
            <section id="education" className="">
                <EducationPage />
            </section>

            <section id="projects">
                <ProjectsPage />
            </section>

            <section id="skills">
                <SkillsPage />
            </section>
        </div>
    )
}