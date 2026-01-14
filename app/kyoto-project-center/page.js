"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/kyoto-project-center/project-intro";
import {ProjectBackground} from "@/app/kyoto-project-center/project-background";
import {ProjectNext} from "@/app/kyoto-project-center/project-next";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";

export default function Page() {

    return (
        <>
            <CaseStudyStart
                tag={"FREELANCE"}
                title={"Kyoto Project Center"}
                description={"Kyoto IQP Database"}
                imageSrc={"/mockup1.1.png"}
                imageAlt={"kyoto"}/>
            <div className={"flex flex-col lg:flex-row"}>

                <nav className="lg:w-1/4 hidden lg:block">
                    <ul className="space-y-4 sticky top-24 p-10">
                        <li><a href="#overview" className="hover:text-black text-newGray transition">Overview</a></li>
                        <li><a href="#challenge" className="hover:text-black text-newGray transition">Challenge</a></li>
                        <li><a href="#ideation" className="hover:text-black text-newGray transition">Ideation</a></li>
                        <li><a href="#finaldesigns" className="hover:text-black text-newGray transition">Final Designs</a></li>
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
