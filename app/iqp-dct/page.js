"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/iqp-dct/project-intro";
import {ProjectBackground} from "@/app/iqp-dct/project-background";
import {ProjectNext} from "@/app/iqp-dct/project-next";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";

export default function Page() {

    return (
        <div>
            <CaseStudyStart
                tag={"MAJOR QUALIFYING PROJECT"}
                title={"IQP Data Collection Tool"}
                description={"Unite all data methods into one platform"}
                imageSrc={"/mockup2.2.png"}
                imageAlt={"iqp-dct"}/>
            <ProjectIntro/>
            <ProjectBackground/>
            <ProjectNext/>
        </div>
    );
}
