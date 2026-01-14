"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/wildscape/project-intro";
import {ProjectBackground} from "@/app/wildscape/project-background";
import {ProjectNext} from "@/app/wildscape/project-next";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";

export default function Page() {

    return (
        <div>
            <CaseStudyStart
                tag={"HACKATHON"}
                title={"Wildscape"}
                description={"Discover. Share. Protect."}
                imageSrc={"/mockup4.4.png"}
                imageAlt={"wildscape"}/>
            <ProjectIntro/>
            <ProjectBackground/>
            <ProjectNext/>
        </div>
    );
}
