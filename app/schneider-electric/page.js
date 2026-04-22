"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/schneider-electric/project-intro";
import {ProjectBackground} from "@/app/schneider-electric/project-background";
import {ProjectNext} from "@/app/kyoto-project-center/project-next";
import CaseStudyStart from "@/components/caseStudyStart";
import {motion} from "framer-motion";
import CaseStudyNav from "@/components/caseStudyNav";

export const sesections = [
    { id: "overview", label: "Overview" },
    { id: "context", label: "Challenge" },
    { id: "problem", label: "Problem" },
    { id: "success", label: "Framing Success" },
    { id: "research", label: "Research" },
    { id: "finaldesigns", label: "Final Designs" },
    { id: "focusareas", label: "Focus Areas" },
    { id: "userflow", label: "Improved Journey Flow" },
    { id: "outcome", label: "Outcome" },
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
                    <CaseStudyNav sections={sesections}/>
                    <main className="lg:w-2/4 px-10 lg:px-0">
                        <CaseStudyStart
                            tag={"INTERNSHIP"}
                            title={"Schneider Electric"}
                            description={"From enterprise buyer to everyday homeowner"}
                            imageSrc={"/schneider-electric/se_mockup11.png"}
                            imageAlt={"schneider-electric"}
                            fields={[
                                { label: "ROLE",     values: "Product Design Intern" },
                                { label: "TIMELINE", values: "Jun 2025 - Aug 2026" },
                                { label: "TEAM",     values: "Digital Customer Relationship Team" },
                                { label: "SKILLS",   values: ["Product Design", "User Research", "Stakeholder Management"] },
                            ]}
                        />
                        <ProjectIntro/>
                        <ProjectBackground/>
                        <ProjectNext/>
                    </main>
                </div>
            </motion.div>
        </>

    );
}
