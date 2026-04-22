"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/kyoto-project-center/project-intro";
import {ProjectBackground} from "@/app/kyoto-project-center/project-background";
import {ProjectNext} from "@/app/kyoto-project-center/project-next";
import CaseStudyStart from "@/components/caseStudyStart";
import {motion} from "framer-motion";
import CaseStudyNav from "@/components/caseStudyNav";

export const sections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "ideation", label: "Ideation" },
    { id: "finaldesigns", label: "Final Designs" },
    { id: "reflections", label: "Reflection" },
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
                            tag={"FREELANCE"}
                            title={"Kyoto Project Center"}
                            description={"Kyoto IQP Database"}
                            imageSrc={"/mockup1.1.png"}
                            imageAlt={"kyoto"}
                            fields={[
                                { label: "ROLE",     values: "Designer & Developer" },
                                { label: "TIMELINE", values: "Oct 2024 - Dec 2024" },
                                { label: "TEAM",     values: ["Jason Zhang", "Arjun Bhat", "Szymon Mamro"] },
                                { label: "SKILLS",   values: ["Product Design", "Front-end Development", "Stakeholder Management"]}
                            ]}  />
                        <ProjectIntro/>
                        <ProjectBackground/>
                        <ProjectNext/>
                    </main>
                </div>
            </motion.div>
        </>
    );
}
