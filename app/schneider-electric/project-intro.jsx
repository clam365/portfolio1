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
                        <h1>Product Designer Intern</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TIMELINE</h1>
                        <h1>Jun 2025 - Aug 2025</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TEAM</h1>
                        <h1>Digital Customer Relationship Team</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>SKILLS</h1>
                        <h1>Product Design</h1>
                        <h1>User Research</h1>
                        <h1>Stakeholder Management</h1>
                    </div>
                </div>
                {/*Overview*/}
                <div className={"mt-20 space-y-2 scroll-mt-40"} id={"overview"}>
                    <h1 className={"text-newGray"}>OVERVIEW</h1>
                    <h1 className={"font-medium text-3xl"}>My Summer @ Schneider Electric</h1>
                    <h1>
                        Over the summer, I interned in Boston with Schneider Electric&apos;s Digital Customer
                        Relationship Team, collaborating with partners across France, Spain, and the U.S. Together,
                        we launched their first global E2E B2C web experience for homeowners, beginning with a Pilot in
                        France.
                        <br/><br/>
                        I focused on improving product discovery through heuristic audits, competitive benchmarking of 5+ platforms, and
                        heatmap analysis. By redesigning key user flows and optimizing filter architecture, I reduced click
                        depth by 33%, helping homeowners find products faster and supporting conversion goals while ensuring
                        WCAG AA accessibility standards.

                    </h1>
                    <div className={"inline-flex f gap-3"}>
                        <LinkButton
                            link={"https://www.se.com/fr/fr/home/"}
                            text={"B2C WEBSITE"}
                        />
                        <LinkButton
                            link={"https://www.figma.com/design/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=37-1402&t=LQy8kQQ3sKbNIW9E-1"}
                            text={"FIGMA MOCKUPS"}
                        />
                    </div>
                </div>
            </div>
        </>


    )
}