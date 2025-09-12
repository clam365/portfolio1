import {ArrowUpRight} from "lucide-react";
import React from "react";
import {CaseStudyIntro} from "@/components/caseStudy/caseStudyIntro";
import {CustomLink} from "@/components/link";
import {LinkButton} from "@/components/linkButton";

export const ProjectIntro = () => {
    return (
        <CaseStudyIntro>
            <CaseStudyIntro.Summary>
                <h1 className={"text-2xl"}>
                    In WPI&#39;s archive of IQPs, there are 7,000+ projects listed, and continuously growing. The
                    <CustomLink link={"https://veniceprojectcenter.org/"} text={" Venice Project Center "}/>
                    narrows down the search, while providing a distinctive identity and description.
                    <br/>
                    <br/>
                    I led the creation of a project center website for Kyoto,
                    showcasing 40+ projects as a resource for policymakers, students, and faculty to explore
                    and gain insights for future work.
                </h1>
                <div className={"space-x-3 mt-10"}>
                    <LinkButton link={"https://kyotoprojectcenter.vercel.app/"} text={"KYOTO PROJECT CENTER"}/>
                    <LinkButton link={"https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"} text={"WPI IQP"}/>
                </div>
            </CaseStudyIntro.Summary>
            <CaseStudyIntro.Info>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Product</h1>
                    <h1>Website Database</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Skills</h1>
                    <h1>Product Design</h1>
                    <h1>Stakeholder Management</h1>
                    <h1>Front-End Development</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray mb-2"} id={"based"}>My Role</h1>
                    <h1>Designer & Developer</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Timeline</h1>
                    <h1>October 18 - December 13, 2024</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Team</h1>
                    <h1>Jason Zhang, Arjun Bhat, Szymon Mamro</h1>
                </CaseStudyIntro.InfoSection>
            </CaseStudyIntro.Info>
        </CaseStudyIntro>

    )
}