import React from "react";
import {LinkButton} from "@/components/linkButton";

export const ProjectIntro = () => {
    return (
        <>
            <div className={"mt-10 "}>
                {/* BASIC INFO */}
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6"}>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>ROLE</h1>
                        <h1>Designer &amp; Developer</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TIMELINE</h1>
                        <h1>May 2024 - Oct 2024</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TEAM</h1>
                        <h1>Hunter Poulin</h1>
                        <h1>James Walden</h1>
                        <h1>Nate Schneider</h1>
                        <h1>Gus Montana</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>SKILLS</h1>
                        <h1>Product Design</h1>
                        <h1>Front-End Development</h1>
                        <h1>UXR &amp; Testing</h1>
                    </div>
                </div>
                {/*Overview*/}
                <div className={"mt-20 space-y-2 scroll-mt-40"} id={"overview"}>
                    <h1 className={"text-newGray"}>OVERVIEW</h1>
                    <h1 className={"font-medium text-3xl"}>WPI Capstone Project</h1>
                    <h1>
                        For my major qualifying project (MQP), we created the IQP Data Collection Tool:
                        a platform that unifying data collection for 1,200+ WPI students conducting
                        humanitarian research globally. As a Product Designer and Frontend Developer, I led UXR,
                        conducted 30 testing sessions, and built a PERN stack app with offline storage, geotagging,
                        and AI transcription—achieving 88% user satisfaction.
                    </h1>
                    <div className={"inline-flex f gap-3"}>
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
