"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/kyoto-project-center/project-intro";
import {ProjectBackground} from "@/app/kyoto-project-center/project-background";
import {ProjectNext} from "@/app/kyoto-project-center/project-next";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";

export default function Page() {

    return (
        <div>
            <CaseStudyStart
                tag={"FREELANCE"}
                title={"Kyoto Project Center"}
                description={"Kyoto IQP Database"}
                imageSrc={"/mockup1.1.png"}
                imageAlt={"kyoto"}/>
            <ProjectIntro/>
            <ProjectBackground/>
            <ProjectNext/>
        </div>
    );
}
