import React from "react";
import {ArrowUpRight} from "lucide-react";

export const ProjectIntro = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 mt-10  px-10  xl:px-72 gap-x-10 gap-y-10"}>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <h1 className={"text-2xl"}>
                    In my internship as a Product Designer, I helped launch the first global B2C web experience tailored
                    for homeowners in France. Through
                    my refined high-fidelity mockups, I aimed to improve user flows in product discovery.
                    <br/>
                    <br/>
                    This was done by using UX insights from competitive benchmarking of 5+ sites, ContentSquare
                    heatmaps, and much communication from partners
                    of the United States, France, Span, and India.
                </h1>
                <div className={"rounded-full mt-10 inline-block mr-3"} id={"descriptionTag"}>
                    <a href={"https://www.se.com/fr/fr/home/"} target="_blank" rel="opener referrer"
                       className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                       id={"descriptionTag"}>
                        <h1 className={"text-sm"}>B2C WEBSITE</h1>
                        <ArrowUpRight
                            className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                        />
                    </a>
                </div>
                <div className={"rounded-full mt-10 inline-block"} id={"descriptionTag"}>
                    <a href={"https://www.figma.com/design/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=37-1402&t=LQy8kQQ3sKbNIW9E-1"} target="_blank" rel="opener referrer"
                       className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                       id={"descriptionTag"}>
                        <h1 className={"text-sm"}>FIGMA MOCKUPS</h1>
                        <ArrowUpRight
                            className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                        />
                    </a>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <div className={"mb-2"}>
                    <h1 className={"text-newGray"} id={"based"}>Focus</h1>
                    <h1 className={""}>Product Redesign</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Skills</h1>
                    <h1 className={""}>Figma, Builder.io, ContentSquare</h1>
                    <h1 className={""}>UX Heuristic Audits & Evaluations</h1>
                    <h1 className={""}>Competitive Benchmarking</h1>
                    <h1 className={""}>Stakeholder Management</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>My Role</h1>
                    <h1 className={""}>Product Designer</h1>
                    <h1 className={""}></h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Timeline</h1>
                    <h1 className={""}>June 2 - August 8</h1>
                </div>
            </div>


        </div>
    )
}