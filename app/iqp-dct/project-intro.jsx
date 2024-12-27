import {ArrowUpRight} from "lucide-react";
import React from "react";

export const ProjectIntro = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 mt-10  px-10 lg:px-60 gap-x-10 gap-y-10"}>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <h1 className={"text-2xl"}>
                    In WPI&#39;s archive of IQPs, there are 7,000+ projects listed, and continuously growing. The
                    <span className="text-spotify hover:text-slight-black transition duration-300 ease-in-out">
                        <a href="https://veniceprojectcenter.org/" target="_blank" rel="opener referrer"> Venice Project Center </a>
                    </span>
                    narrows down the search, while providing a distinctive identity and description.
                    <br/>
                    <br/>
                    I led the creation of a project center website for Kyoto,
                    showcasing 40+ projects as a resource for policymakers, students, and faculty to explore
                    and gain insights for future work.
                </h1>
                <div className={"flex gap-x-3 mt-10"}>
                    <a href={"https://kyotoprojectcenter.vercel.app/"} target="_blank" rel="opener referrer"
                       className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                       id={"newLine"}>
                        <h1 className={"text-sm"}>KYOTO PROJECT CENTER</h1>
                        <ArrowUpRight
                            className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                        />
                    </a>
                    <a href={"https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"} target="_blank" rel="opener referrer"
                       className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                       id={"newLine"}>
                        <h1 className={"text-sm"}>WPI IQP</h1>
                        <ArrowUpRight
                            className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                        />
                    </a>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <div className={"mb-2"}>
                    <h1 className={"text-newGray"}>Product</h1>
                    <h1 className={""}>Website Database</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"}>Skills</h1>
                    <h1 className={""}>Product Design</h1>
                    <h1 className={""}>Stakeholder Management</h1>
                    <h1 className={""}>Front-End Development</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"}>My Role</h1>
                    <h1 className={""}>Designer & Developer</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"}>Timeline</h1>
                    <h1 className={""}>October 18 - December 13, 2024</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"}>Team</h1>
                    <h1 className={""}>Jason Zhang, Arjun Bhat, Szymon Mamro</h1>
                </div>
            </div>
        </div>
    )
}

//WPI&#34;s Interactive Qualifying Project (IQP) is one of the most distinctive project-based elements of a student&#34;s curriculum.
//                     It involves a whole term of credits to tackle science, engineering, technology, and community issues around the globe to help address
//                     the theme of sustainability, all related to development, energy, environment, education, cultural preservation, and much more.