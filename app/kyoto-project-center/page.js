"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/kyoto-project-center/project-intro";
import {ProjectBackground} from "@/app/kyoto-project-center/project-background";
import {ProjectNext} from "@/app/kyoto-project-center/project-next";
import CaseStudyStart from "@/components/caseStudyStart";
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
                            <li><a href="#overview" className="hover:text-black text-gray transition">Overview</a>
                            </li>
                            <li><a href="#challenge" className="hover:text-black text-gray transition">Challenge</a>
                            </li>
                            <li><a href="#ideation" className="hover:text-black text-gray transition">Ideation</a>
                            </li>
                            <li><a href="#finaldesigns" className="hover:text-black text-gray transition">Final
                                Designs</a></li>
                            <li><a href="#reflections"
                                   className="hover:text-black text-gray transition">Reflections</a></li>
                        </ul>
                    </nav>
                    <main className="lg:w-2/4 px-10 lg:px-0">
                        <CaseStudyStart
                            tag={"FREELANCE"}
                            title={"Kyoto Project Center"}
                            description={"Kyoto IQP Database"}
                            imageSrc={"/mockup1.1.png"}
                            imageAlt={"kyoto"}/>
                        <ProjectIntro/>
                        <ProjectBackground/>
                        <ProjectNext/>
                    </main>
                </div>
            </motion.div>
        </>
    );
}
