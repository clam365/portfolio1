import {ArrowUpRight} from "lucide-react";
import React from "react";
import {CaseStudyIntro} from "@/components/caseStudy/caseStudyIntro";
import {LinkButton} from "@/components/linkButton";

export const ProjectIntro = () => {
    return (
        <CaseStudyIntro>
            <CaseStudyIntro.Summary>
                <h1 className={"text-2xl"}>
                    Wildscape is a dynamic photo-sharing platform designed for adventurous adolescents passionate about
                    the environment based on the term "I know a spot".
                    <br/>
                    <br/>
                    I led the idea and vision behind our project, along with the front-end development and mockups.
                </h1>
                <div className={"space-x-3 mt-10"}>
                    <LinkButton link={"https://wildscape.vercel.app"} text={"WILDSCAPE"}/>
                </div>
            </CaseStudyIntro.Summary>
            <CaseStudyIntro.Info>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Product</h1>
                    <h1 className={""}>Fullstack Website</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Skills</h1>
                    <h1 className={""}>Fullstack Development</h1>
                    <h1 className={""}>Motion Design</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Tech Stack</h1>
                    <h1 className={""}>Next.js, Pocketbase, Framer-Motion + GSAP, Typescript, Fly.io, OAuth, Shadcn,
                        AceturnityUI, GoogleMaps API</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>My Role</h1>
                    <h1 className={""}>Front-End Developer</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray"} id={"based"}>Timeline</h1>
                    <h1 className={""}>October 4-6, 2024</h1>
                </CaseStudyIntro.InfoSection>
                <CaseStudyIntro.InfoSection>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Team</h1>
                    <h1 className={""}>Brandon Yeu, Arnav Mishra, Jeremy Kurtz</h1>
                </CaseStudyIntro.InfoSection>
            </CaseStudyIntro.Info>
        </CaseStudyIntro>

    )
}
