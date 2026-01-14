import React from "react";
export const ProjectIntro = () => {
    return (
        <>
            <div className={"mt-10"}>
                {/* BASIC INFO */}
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6"}>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>ROLE</h1>
                        <h1>Product Designer</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TIMELINE</h1>
                        <h1>Sep 2025 - Present</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TEAM</h1>
                        <h1>Todd Agriscience</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>SKILLS</h1>
                        <h1>Product Design</h1>
                    </div>
                </div>
            </div>
            {/*Overview*/}
            <div className={"mt-20 space-y-2 scroll-mt-40 mb-40"} id={"overview"}>
                <h1 className={"text-newGray"}>OVERVIEW</h1>
                <h1 className={"font-medium text-3xl"}>WPI Capstone Project</h1>
                <h1>
                    As part of a small startup team, I am actively engaged in Todd's vision of partnering with
                    bio dynamic farms by envisioning their creative resources, from the design system, brand guidelines,
                    platform, and marketing website. This project is confidential, reach out to me directly to learn more!
                </h1>
            </div>
        </>
    )
}
