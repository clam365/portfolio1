"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/schneider-electric/project-intro";
import {ProjectBackground} from "@/app/schneider-electric/project-background";
import {ProjectNext} from "@/app/kyoto-project-center/project-next";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";


export default function Page() {

    return (
        <>
            <CaseStudyStart
                tag={"INTERNSHIP"}
                title={"Schneider Electric"}
                description={"B2C Web Experience"}
                imageSrc={"/schneider-electric/se_backdrop.png"}
                imageAlt={"schneider-electric"}/>
            <div className={"flex flex-col lg:flex-row"}>

                <nav className="lg:w-1/4 hidden lg:block">
                    <ul className="space-y-4 sticky top-24 p-10">
                        <li><a href="#overview" className="hover:text-black text-newGray transition ">Overview</a></li>
                        <li><a href="#problem" className="hover:text-black text-newGray">Problem</a></li>
                        <li><a href="#research" className="hover:text-black text-newGray">Research</a></li>
                        <li><a href="#finaldesigns" className="hover:text-black text-newGray">Final Designs</a></li>
                        <li><a href="#focusareas" className="hover:text-black text-newGray">Focus Areas</a></li>
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
