"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/iqp-dct/project-intro";
import {ProjectBackground} from "@/app/iqp-dct/project-background";
import {ProjectNext} from "@/app/iqp-dct/project-next";
import CaseStudyStart from "@/components/caseStudyStart";
import {motion} from "framer-motion";
import CaseStudyNav from "@/components/caseStudyNav";

export const iqpSections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "uxr", label: "User Research" },
    { id: "userflows", label: "User Flows" },
    { id: "designsystem", label: "Design System" },
    { id: "designiterations", label: "Design Iterations" },
    { id: "outcomes", label: "Outcomes" },
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
                    <CaseStudyNav sections={iqpSections}/>
                    <main className="lg:w-2/4 px-10 lg:px-0">
                        <CaseStudyStart
                            tag={"MQP"}
                            title={"WPI Global Research Data Platform"}
                            description={"Unite all data methods into one platform"}
                            imageSrc={"/mockup2.2.png"}
                            imageAlt={"iqp-dct"}
                            fields={[
                                { label: "ROLE",     values: "Designer & Developer" },
                                { label: "TIMELINE", values: "May 2024 - Oct 2024" },
                                { label: "TEAM",     values: ["Hunter Poulin", "James Walden", "Nate Schneider", "Gus Montana"] },
                                { label: "SKILLS",   values: ["Product Design", "Front-end Development", "UXR & Testing"] },
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
