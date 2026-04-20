"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/todd/project-intro";
import CaseStudyStart from "@/components/caseStudyStart";
import {ProjectNext} from "@/app/todd/project-next";
import {motion} from "framer-motion";

export default function Page() {

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <div className={"flex flex-col lg:flex-row"}>
                    <nav className="lg:w-1/4 hidden lg:block">
                        <ul className="space-y-4 sticky top-24 p-10">
                            <li><a href="#overview" className="hover:text-black text-gray transition">Overview</a></li>
                            <li><a href="#reflections" className="hover:text-black text-gray transition">Reflections</a></li>

                        </ul>
                    </nav>
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
