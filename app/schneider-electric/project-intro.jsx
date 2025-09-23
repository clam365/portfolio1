import React from "react";
import {LinkButton} from "@/components/linkButton";
import {CaseStudyIntro} from "@/components/caseStudy/caseStudyIntro";

export const ProjectIntro = () => {
    return (
        <CaseStudyIntro>
            <CaseStudyIntro.Summary>
                <h1 className={"text-2xl"}>
                    In my internship as a UX Product Designer, I aided in launching their first global B2C web experience
                    tailored for homeowners in France. Through my refined high-fidelity mockups, I improved user
                    flows in product discovery, validated by senior UX designers.
                    <br/>
                    <br/>
                    This was done by using UX insights from competitive benchmarking of 5+ sites, heuristic analysis, ContentSquare
                    heatmaps, Builder.io CMS, and much collaboration from partners
                    of the United States, France, Spain, and India.
                </h1>
                <div className={"inline-flex flex-col md:flex-row gap-3 mt-10"}>
                    <LinkButton
                        link={"https://www.se.com/fr/fr/home/"}
                        text={"B2C WEBSITE"}
                    />
                    <LinkButton
                        link={"https://www.figma.com/design/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=37-1402&t=LQy8kQQ3sKbNIW9E-1"}
                        text={"FIGMA MOCKUPS"}
                    />
                </div>
            </CaseStudyIntro.Summary>
            <CaseStudyIntro.Info>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Focus</h1>
                    <h1>Product Redesign</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Skills</h1>
                    <h1>Figma, Builder.io, ContentSquare</h1>
                    <h1>UX Heuristic Audits & Evaluations</h1>
                    <h1>Competitive Benchmarking</h1>
                    <h1>Stakeholder Management</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>My Role</h1>
                    <h1>UX Product Designer</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Timeline</h1>
                    <h1>June 2 - August 8</h1>
                </CaseStudyIntro.InfoSection>
            </CaseStudyIntro.Info>
        </CaseStudyIntro>

    )
}