"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/todd/project-intro";
import CaseStudyStart from "@/components/caseStudyStart";
import {ProjectNext} from "@/app/todd/project-next";
import {motion} from "framer-motion";
import CaseStudyNav from "@/components/caseStudyNav";

export const sections = [
    { id: "overview", label: "Overview" },
    { id: "reflections", label: "Reflections" },
];

export default function Page() {

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <div className={"flex flex-col lg:flex-row"}>
                    <CaseStudyNav sections={sections}/>
                    <main className="lg:w-2/4 px-10 lg:px-0">
                        <CaseStudyStart
                            tag={"PART TIME"}
                            title={"Todd Agriscience"}
                            description={"Farm-to-screen design"}
                            imageSrc={"/todd.png"}
                            imageAlt={"todd"}/>
                        <ProjectIntro/>
                        <ProjectNext/>
                    </main>
                </div>
            </motion.div>
        </>
    );
}
