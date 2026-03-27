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
                        <h1 className={"text-newGray"}>ROLE</h1>
                        <h1>Designer &amp; Developer</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"}>TIMELINE</h1>
                        <h1>Oct 2024 - Dec 2024</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"}>TEAM</h1>
                        <h1>Jason Zhang</h1>
                        <h1>Arjun Bhat</h1>
                        <h1>Szymon Mamro</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"}>SKILLS</h1>
                        <h1>Product Design</h1>
                        <h1>Coding</h1>
                    </div>
                </div>
                {/*Overview*/}
                <div className={"mt-20 space-y-2 scroll-mt-40"} id={"overview"}>
                    <div className={"flex items-center m-auto space-x-2"}>
                        <IoSparkles className={"text-sparkle w-6 h-6"}/>
                        <h1 className={"text-newGray"}>Chris-generated Overview</h1>
                    </div>
                    <h1 className={"font-medium text-3xl"}>Study Abroad in Kyoto, Japan</h1>
                    <h1>
                        While studying abroad in Kyoto, Japan, I helped build a platform to give 40+
                        student humanitarian research projects the visibility they deserved — connecting
                        policymakers, students, and business partners with insights shaping Kyoto&apos;s
                        community.
                    </h1>
                    <div className={"inline-flex f gap-3"}>
                        <LinkButton link={"https://kyotoprojectcenter.vercel.app/"} text={"KYOTO PROJECT CENTER"}/>
                        <LinkButton
                            link={"https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"}
                            text={"WPI IQP"}/>
                    </div>
                </div>
            </div>

        </>


    )
}