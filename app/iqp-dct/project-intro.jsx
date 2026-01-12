import React from "react";
import {CaseStudyIntro} from "@/components/caseStudy/caseStudyIntro";
import {LinkButton} from "@/components/linkButton";

export const ProjectIntro = () => {
    return (
        <CaseStudyIntro>
            <CaseStudyIntro.Summary>
                <h1 className={"text-2xl"}>
                    The IQP Data Collection Tool is tailored for WPI undergrads to collect and analyze their data across
                    the globe, competing against current industry applications.
                    <br/>
                    <br/>
                    In this PERN stack app, I led the design and development of the responsive UI and conducted user
                    research and testing.
                </h1>
                <div className={"space-3 mt-10"}>
                    <LinkButton
                        link={"https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"}
                        text={"WPI IQP DESCRIPTION"}
                    />
                </div>
            </CaseStudyIntro.Summary>
            <CaseStudyIntro.Info>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Product</h1>
                    <h1>Fullstack Web Application</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Skills</h1>
                    <h1>Product Design</h1>
                    <h1>Interactive Prototyping</h1>
                    <h1>Front-End Development</h1>
                    <h1>User Research & Testing</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Tech Stack</h1>
                    <h1>
                        React, Node.js, Express.js, TypeORM, AssemblyAI, Docker, AWS, Figma, Shadcn, OpenLayersMap,
                        PostgreSQL
                    </h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>My Role</h1>
                    <h1>Product Designer</h1>
                    <h1>Lead Front-End Developer</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Timeline</h1>
                    <h1>May - October, 2024</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Team</h1>
                    <h1>Hunter Poulin, James Walden, Nate Schneider, Gus Montana</h1>
                </CaseStudyIntro.InfoSection>
            </CaseStudyIntro.Info>
        </CaseStudyIntro>

    )
}
