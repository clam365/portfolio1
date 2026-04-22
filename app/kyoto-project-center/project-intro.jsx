import React from "react";
import {IoSparkles} from "react-icons/io5";
import {ButtonOutline} from "@/components/button";
import {ArrowUpRight} from "lucide-react";

export const ProjectIntro = () => {
    return (
        <>
            <div className={"mt-10 "}>
                {/*Overview*/}
                <div className={"mt-20 space-y-2 scroll-mt-40"} id={"overview"}>
                    <div className={"flex items-center m-auto space-x-2"}>
                        <IoSparkles className={"text-surface-decorative w-6 h-6"}/>
                        <h1 className={"text-secondary"}>Chris-generated Overview</h1>
                    </div>
                    <h1 className={"font-medium text-3xl"}>Study Abroad in Kyoto, Japan</h1>
                    <h1>
                        While studying abroad in Kyoto, Japan, I helped build a platform to give 40+
                        student humanitarian research projects the visibility they deserved — connecting
                        policymakers, students, and business partners with insights shaping Kyoto&apos;s
                        community.
                    </h1>
                    <div className={"inline-flex f gap-3"}>
                        <a href={"https://kyotoprojectcenter.vercel.app/"}
                           target="_blank" rel="opener referrer">
                            <ButtonOutline aria-label={"Kyoto Project Center"}>KYOTO PROJECT
                                CENTER<ArrowUpRight/></ButtonOutline>
                        </a>
                        <a href={"https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"}
                           target="_blank" rel="opener referrer">
                            <ButtonOutline aria-label={"WPI IQP"}>WPI IQP<ArrowUpRight/></ButtonOutline>
                        </a>
                    </div>
                </div>
            </div>

        </>


    )
}