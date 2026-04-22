"use client"
import { useRef } from "react";
import {motion, useInView} from "framer-motion";
import "@/app/globals.css"
import {CaseStudyHeroCard} from "@/components/caseStudyHeroCard";
import {CustomLink} from "@/components/link";

export default function work() {

    function RevealOnScroll({children, delay = 0.2, duration = 0.75}) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>
        );
    }
    return (
        <>
            <section id={"craft"} className={"grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:px-32"}>
                <RevealOnScroll>
                    <CaseStudyHeroCard
                        projectDescription={"Farm-to-Screen Design"}
                        imageSrc={"/thumbnail.png"}
                        projectName={"Todd Agriscience"}
                        pageLink={"/todd"}/>
                </RevealOnScroll>
                {/*Schneider Electric*/}
                <RevealOnScroll>
                    <CaseStudyHeroCard
                        pageLink={"/schneider-electric"}
                        imageSrc={"/schneider-electric/se_mockupe.png"}
                        projectName={"Schneider Electric"}
                        projectDescription={"From enterprise buyer to everyday homeowner"}
                    />
                </RevealOnScroll>
                {/*IQP*/}
                <RevealOnScroll>
                    <CaseStudyHeroCard
                        pageLink={"/iqp-dct"}
                        imageSrc={"/mockup2.png"}
                        projectName={"WPI Global Research Data Platform"}
                        projectDescription={"Data collection and analysis tool for WPI undergrads"}
                    />
                </RevealOnScroll>
                {/*Kyoto*/}
                <RevealOnScroll>
                    <CaseStudyHeroCard
                        pageLink={"/kyoto-project-center"}
                        imageSrc={"/mockup1.png"}
                        projectName={"Kyoto Project Center"}
                        projectDescription={"Serving policymakers, students, and business partners across Kyoto"}
                    />
                </RevealOnScroll>
            </section>
            <section id={"system"} className={"py-32 md:py-64 md:pb-64"}>
                <RevealOnScroll>
                    <h1 className={"text-2xl md:text-5xl text-center"}>
                        Curious to how this was built?
                        <br/>
                        Check out my <CustomLink link={"/design-system"} text={"orchid design system"}/>!
                    </h1>
                </RevealOnScroll>
            </section>
        </>

    )
}