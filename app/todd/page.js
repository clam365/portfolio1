"use client";
import "@/app/globals.css"
import {ProjectIntro} from "@/app/todd/project-intro";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";
import {ProjectNext} from "@/app/todd/project-next";


export default function Page() {

    return (
        <>
            <CaseStudyStart
                tag={"PART TIME"}
                title={"Todd Agriscience"}
                description={"Designing systems and marketing website"}
                imageSrc={"/todd.png"}
                imageAlt={"todd"}/>
            <div className={"flex flex-col lg:flex-row"}>
                <nav className="lg:w-1/4 hidden lg:block">
                    <ul className="space-y-4 sticky top-24 p-10">
                        <li><a href="#overview" className="hover:text-black text-newGray transition">Overview</a></li>
                    </ul>
                </nav>
                <main className="lg:w-2/4 px-10 lg:px-0">
                    <ProjectIntro/>
                    <ProjectNext/>
                </main>
            </div>
        </>
    );
}
