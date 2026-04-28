import React from "react";
import {IoSparkles} from "react-icons/io5";
import {ButtonOutline} from "@/components/button";
import {ArrowUpRight} from "lucide-react";
import {CustomLink} from "@/components/link";

export const ProjectIntro = () => {
    return (
        <>
            <div className={"mt-10 "}>
                <div className={"mt-10 scroll-mt-40"}>
                    <h1 className={"text-secondary my-2"}>
                        Curious about the deeper processes with this case study? Check out my&nbsp;
                        <CustomLink
                            link={"https://www.figma.com/deck/ALzY9sh2H4tz1r1Pwu70rC/Porfolio?node-id=1-42&viewport=-754%2C59%2C0.32&t=FKBdQJUSog1U2qUU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"}
                            text={"presentation here"}/>
                        , or shoot me an email!
                    </h1>
                </div>
                {/*Overview*/}
                <div className={"mt-20 space-y-2 scroll-mt-40"} id={"overview"}>
                    <div className={"flex items-center m-auto space-x-2"}>
                        <IoSparkles className={"text-surface-decorative w-6 h-6"}/>
                        <h1 className={"text-secondary"}>Chris-generated Overview</h1>
                    </div>
                    <h1 className={"font-medium text-3xl"}>One home for Global IQP Research</h1>
                    <h1>
                        Our team delivered the IQP Data Collection Tool: a unified workspace for interviews,
                        surveys, and field data for 1,200+ students across 50+ global project sites. I led product
                        design and frontend development, including 30 usability sessions, shipping a PERN stack
                        application with offline storage, geotagging, and AI-assisted transcription. After user
                        testing, we presented to the WPI President and Global School Dean, and the application was
                        officially integrated into WPI&apos;s servers, putting it in reach of the full student
                        population
                        annually!
                    </h1>
                    <div className={"inline-flex gap-3"}>
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
