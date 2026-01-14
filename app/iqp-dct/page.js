"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/iqp-dct/project-intro";
import {ProjectBackground} from "@/app/iqp-dct/project-background";
import {ProjectNext} from "@/app/iqp-dct/project-next";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";

export default function Page() {

    return (
        <>
            <CaseStudyStart
                tag={"MAJOR QUALIFYING PROJECT"}
                title={"IQP Data Collection Tool"}
                description={"Unite all data methods into one platform"}
                imageSrc={"/mockup2.2.png"}
                imageAlt={"iqp-dct"}/>
            <div className={"flex flex-col lg:flex-row"}>
                <nav className="lg:w-1/4 hidden lg:block">
                    <ul className="space-y-4 sticky top-24 p-10">
                        <li><a href="#overview" className="hover:text-black text-newGray transition">Overview</a></li>
                        <li><a href="#challenge" className="hover:text-black text-newGray transition">Challenge</a></li>
                        <li><a href="#uxr" className="hover:text-black text-newGray transition">User Research</a></li>
                        <li><a href="#userflows" className="hover:text-black text-newGray transition">User Flows</a>
                        </li>
                        <li><a href="#designsystem" className="hover:text-black text-newGray transition">Design
                            System</a></li>
                        <li><a href="#designiterations" className="hover:text-black text-newGray transition">Design
                            Iterations</a></li>
                        <li><a href="#feedback" className="hover:text-black text-newGray transition">Feedback</a></li>
                        <li><a href="#reflections" className="hover:text-black text-newGray transition">Reflections</a></li>
                    </ul>
                </nav>
                <main className="lg:w-2/4 px-10 lg:px-0">
                    <ProjectIntro/>
                    <ProjectBackground/>
                    <ProjectNext/>
                </main>
            </div>

        </>
    );
}
