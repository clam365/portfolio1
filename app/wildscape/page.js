"use client";
import "@/app/globals.css"
import { useEffect } from "react";
import Lenis from "lenis";
import {ProjectIntro} from "@/app/wildscape/project-intro";
import {ProjectBackground} from "@/app/wildscape/project-background";
import {ProjectNext} from "@/app/wildscape/project-next";
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
