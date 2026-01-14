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
                        <h1>Oct 2024 - Dec 2024</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TEAM</h1>
                        <h1>Jason Zhang</h1>
                        <h1>Arjun Bhat</h1>
                        <h1>Szymon Mamro</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>SKILLS</h1>
                        <h1>Product Design</h1>
                        <h1>Coding</h1>
                    </div>
                </div>
                {/*Overview*/}
                <div className={"mt-20 space-y-2 scroll-mt-40"} id={"overview"}>
                    <h1 className={"text-newGray"}>OVERVIEW</h1>
                    <h1 className={"font-medium text-3xl"}>Study Abroad in Kyoto, Japan</h1>
                    <h1>
                        While working on my team&apos;s humanitarian project of tourism impact in the Kikuhama neighborhood,
                        one piece of our goal was to create a dedicated platform to showcase 40+ student research projects
                        for policymakers, students, and business partners.
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