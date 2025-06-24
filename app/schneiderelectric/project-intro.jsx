import React from "react";

export const ProjectIntro = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 mt-10  px-10  2xl:px-72 gap-x-10 gap-y-10 mb-36" }>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <h1 className={"text-2xl"}>
                    More to come!
                </h1>

            </div>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <div className={"mb-2"}>
                    <h1 className={"text-newGray"} id={"based"}>Focus</h1>
                    <h1 className={""}>UI/UX Support</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Skills</h1>
                    <h1 className={""}>UX Heuristic Audits & Evaluations</h1>
                    <h1 className={""}>Competitive Benchmarking</h1>
                    <h1 className={""}>Figma</h1>
                    <h1 className={""}>Stakeholder Management</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>My Role</h1>
                    <h1 className={""}>UI/UX Designer</h1>
                    <h1 className={""}>Web Development Project Manager</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Timeline</h1>
                    <h1 className={""}>June 2 - Present</h1>
                </div>
            </div>
        </div>
    )
}