import React from "react";
import {LinkButton} from "@/components/linkButton";
import {IoSparkles} from "react-icons/io5";

export const ProjectIntro = () => {
    return (
        <>
            <div className={"mt-10 "}>
                {/* BASIC INFO */}
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6"}>
                    <div>
                        <h1 className={"text-gray"}>ROLE</h1>
                        <h1>Designer &amp; Developer</h1>
                    </div>
                    <div>
                        <h1 className={"text-gray"}>TIMELINE</h1>
                        <h1>May 2024 - Oct 2024</h1>
                    </div>
                    <div>
                        <h1 className={"text-gray"}>TEAM</h1>
                        <h1>Hunter Poulin</h1>
                        <h1>James Walden</h1>
                        <h1>Nate Schneider</h1>
                        <h1>Gus Montana</h1>
                    </div>
                    <div>
                        <h1 className={"text-gray"}>SKILLS</h1>
                        <h1>Product Design</h1>
                        <h1>Front-End Development</h1>
                        <h1>UXR &amp; Testing</h1>
                    </div>
                </div>
                {/*Overview*/}
                <div className={"mt-20 space-y-2 scroll-mt-40"} id={"overview"}>
                    <div className={"flex items-center m-auto space-x-2"}>
                        <IoSparkles className={"text-surface-decorative w-6 h-6"}/>
                        <h1 className={"text-gray"}>Chris-generated Overview</h1>
                    </div>
                    <h1 className={"font-medium text-3xl"}>One home for Global IQP Research</h1>
                    <h1>
                        Our team delivered the IQP Data Collection Tool: a unified workspace for interviews,
                        surveys, and field data for 1,200+ students across 50+ global project sites. I led product
                        design and frontend development, including 30 usability sessions, shipping a PERN stack
                        application with offline storage, geotagging, and AI-assisted transcription. After user
                        testing, we presented to the WPI President and Global School Dean, and the application was
                        officially integrated into WPI&apos;s servers, putting it in reach of the full student population
                        annually!
                    </h1>
                    <div className={"inline-flex gap-3"}>
                        <LinkButton
                            link={"https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"}
                            text={"WPI IQP"}
                        />
                    </div>
                </div>
            </div>
        </>


    )
}
