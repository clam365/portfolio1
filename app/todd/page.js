"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/todd/project-intro";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";

export default function Page() {

    return (
        <div className={"mb-48"}>
            <CaseStudyStart
                tag={"PART TIME"}
                title={"Todd Agriscience"}
                description={"Designing systems and marketing website"}
                imageSrc={"/todd.png"}
                imageAlt={"todd"}/>
            <ProjectIntro/>
        </div>
    );
}
