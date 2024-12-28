import {ArrowUpRight} from "lucide-react";
import React from "react";

export const ProjectIntro = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 mt-10  px-10  2xl:px-60 gap-x-10 gap-y-10"}>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <h1 className={"text-2xl"}>
                    The IQP Data Collection Tool is tailored for WPI undergrads to collect and analyze their data across the globe, competing against current industry applications.
                    <br/>
                    <br/>
                    In this PERN stack app, I led the design and development of the responsive UI and conducted user research and testing.
                </h1>
                <div className={"flex gap-x-3 mt-10"}>
                    <a href={"https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"} target="_blank" rel="opener referrer"
                       className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                       id={"descriptionTag"}>
                        <h1 className={"text-sm"}>WPI IQP DESCRIPTION</h1>
                        <ArrowUpRight
                            className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                        />
                    </a>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <div className={"mb-2"}>
                    <h1 className={"text-newGray"} id={"based"}>Product</h1>
                    <h1 className={""}>Fullstack Web Application</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Skills</h1>
                    <h1 className={""}>Product Design</h1>
                    <h1 className={""}>Interactive Prototyping</h1>
                    <h1 className={""}>Front-End Development</h1>
                    <h1 className={""}>User Research & Testing</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Tech Stack</h1>
                    <h1 className={""}>
                        React, Node.js, Express.js, TypeORM, AssemblyAI, Docker, AWS, Figma, Shadcn, OpenLayersMap, PostgreSQL
                    </h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>My Role</h1>
                    <h1 className={""}>UI/UX Designer/Researcher</h1>
                    <h1 className={""}>Lead Front-End Developer</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Timeline</h1>
                    <h1 className={""}>May - October, 2024</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Team</h1>
                    <h1 className={""}>Hunter Poulin, James Walden, Nate Schneider, Gus Montana</h1>
                </div>
            </div>
        </div>
    )
}

//WPI&#34;s Interactive Qualifying Project (IQP) is one of the most distinctive project-based elements of a student&#34;s curriculum.
//                     It involves a whole term of credits to tackle science, engineering, technology, and community issues around the globe to help address
//                     the theme of sustainability, all related to development, energy, environment, education, cultural preservation, and much more.