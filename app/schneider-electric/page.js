"use client";
import "@/app/globals.css"
import { useEffect } from "react";
import Lenis from "lenis";
import {ProjectIntro} from "@/app/schneider-electric/project-intro";
import {ProjectBackground} from "@/app/schneider-electric/project-background";
import {ProjectNext} from "@/app/kyoto-project-center/project-next";
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
                tag={"INTERNSHIP"}
                title={"Schneider Electric"}
                description={"B2C Web Experience"}
                imageSrc={"/schneider-electric/se_backdrop.png"}
                imageAlt={"schneider-electric"}/>
            <ProjectIntro/>
            <ProjectBackground/>
            <ProjectNext/>

        </div>
    );
}
