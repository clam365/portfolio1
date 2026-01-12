import React from "react";
import {CaseStudyIntro} from "@/components/caseStudy/caseStudyIntro";
export const ProjectIntro = () => {
    return (
        <CaseStudyIntro>
            <CaseStudyIntro.Summary>
                <h1 className={"text-2xl"}>
                    As part of a small startup team, I am actively engaged in Todd's vision of partnering with bio dynamic
                    farms by envisioning their creative resources, from the design system, brand guidelines, platform, and marketing website.
                    <br/>
                    <br/>
                    This project is confidential, reach out to me directly to learn more!
                </h1>
                {/*<div className={"space-3 mt-10"}>*/}
                {/*    <LinkButton*/}
                {/*        link={"https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"}*/}
                {/*        text={"WEBSITE"}*/}
                {/*    />*/}
                {/*</div>*/}
            </CaseStudyIntro.Summary>
            <CaseStudyIntro.Info>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Skills</h1>
                    <h1>Design Systems</h1>
                    <h1>Brand Guidelines</h1>
                    <h1>Responsive Web Design</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>My Role</h1>
                    <h1>Product Designer</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Timeline</h1>
                    <h1>September 2025 - Present</h1>
                </CaseStudyIntro.InfoSection>

            </CaseStudyIntro.Info>
        </CaseStudyIntro>

    )
}
