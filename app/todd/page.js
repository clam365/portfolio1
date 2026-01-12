"use client";
import "@/app/globals.css"
import { useEffect } from "react";
import Lenis from "lenis";
import {ProjectIntro} from "@/app/todd/project-intro";
import CaseStudyStart from "@/components/caseStudy/caseStudyStart";

export default function Page() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

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
