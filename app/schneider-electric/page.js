"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/schneider-electric/project-intro";
import {ProjectBackground} from "@/app/schneider-electric/project-background";
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
                            <li><a href="#context" className="hover:text-black text-gray transition">Context</a></li>
                            <li><a href="#problem" className="hover:text-black text-gray transition">Problem</a></li>
                            <li><a href="#success" className="hover:text-black text-gray transition">Framing Success</a></li>
                            <li><a href="#research" className="hover:text-black text-gray transition">Research</a>
                            </li>
                            <li><a href="#finaldesigns" className="hover:text-black text-gray transition">Final
                                Designs</a></li>
                            <li><a href="#focusareas" className="hover:text-black text-gray transition">Focus
                                Areas</a>
                            </li>
                            <li><a href="#userflow" className="hover:text-black text-gray transition">Improved Journey
                                Flow</a></li>
                            <li><a href="#outcome" className="hover:text-black text-gray transition">Outcome</a></li>
                            <li><a href="#reflections"
                                   className="hover:text-black text-gray transition">Reflections</a>
                            </li>
                        </ul>
                    </nav>
                    <main className="lg:w-2/4 px-10 lg:px-0">
                        <CaseStudyStart
                            tag={"INTERNSHIP"}
                            title={"Schneider Electric"}
                            description={"From enterprise buyer to everyday homeowner"}
                            imageSrc={"/schneider-electric/se_mockup11.png"}
                            imageAlt={"schneider-electric"}/>
                        <ProjectIntro/>
                        <ProjectBackground/>
                        <ProjectNext/>
                    </main>
                </div>
            </motion.div>
        </>

    );
}
