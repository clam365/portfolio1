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
                        <h1>Product Designer Intern</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"}>TIMELINE</h1>
                        <h1>Jun 2025 - Aug 2025</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"}>TEAM</h1>
                        <h1>Digital Customer Relationship Team</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"}>SKILLS</h1>
                        <h1>Product Design</h1>
                        <h1>User Research</h1>
                        <h1>Stakeholder Management</h1>
                    </div>
                </div>
                {/*Overview*/}
                <div className={"mt-20 space-y-2 scroll-mt-40"} id={"overview"}>
                    <div className={"flex items-center m-auto space-x-2"}>
                        <IoSparkles className={"text-sparkle w-6 h-6"}/>
                        <h1 className={"text-newGray"}>Chris-generated Overview</h1>
                    </div>
                    <h1 className={"font-medium text-3xl"}>2025 @ Schneider Electric</h1>
                    <h1>
                        Over the 2025 summer, I interned in Boston with Schneider Electric&apos;s Digital Customer
                        Relationship Team, collaborating with partners across France, Spain, and the U.S. Together,
                        we launched their first global E2E B2C web experience for homeowners.
                        <br/>
                        <br/>
                        My focus was product discovery, the stage where users were dropping off before reaching the checkout. Through 
                        competitive benchmarking, heatmap analysis, and heuristic audits, I redesigned the filter system, product taxonomy,
                        and product cards, reducing the journey steps by 33%. Benchmarking data shows comparative converstion lifts of nearly 6% and
                        returns of 75:1.
                    </h1>
                    <div className={"inline-flex f gap-3"}>
                        <LinkButton
                            link={"https://www.se.com/fr/fr/home/"}
                            text={"B2C WEBSITE"}
                        />
                    </div>
                </div>
                <div className={"mt-20 space-y-2 border-l-4 border-gray-300 pl-4"}>
                    <h1 className={"text-newGray italic"}>
                        I had the pleasure of working with Chris during his 10-week internship on our B2C Web Experience projects, and he
                        quickly proved himself to be an invaluable contributor.
                        <br/>
                        <br/>
                        He brought fresh perspectives, strong attention to detail, and an impressive ability to translate ideas into clear,
                        practical outputs in Figma. Chris not only supported design work but also provided thoughtful recommendations that
                        improved out user experience approach.
                        <br/>
                        <br/>
                        His curiosity, professionalism, and collaborative spirit made him a great addition to the team.
                        <br/>
                        <br/>
                        ~ Oz Hassan, Director of Digital Transformation & Strategic Communications
                    </h1>
                </div>
            </div>
        </>


    )
}