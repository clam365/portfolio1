"use client"
import {ArrowDownToLine} from "lucide-react";
import "@/app/globals.css"
import React, { useRef } from "react";
import {motion, useInView} from "framer-motion";
import {CustomLink} from "@/components/link";
import {CaseStudySection} from "@/components/caseStudy/caseStudySection";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <section id={"about"} className={"mt-20 md:px-48"} ref={ref}>
            <div className={"border-t border-t-[#e1e1e1] sidebar col-span-12 lg:col-span-5 xl:col-span-5"}
                 id={"newLine"}>
                <h1 className={"text-slight-black text-4xl md:text-5xl mt-4 font-normal xl:w-full"}>About</h1>
            </div>
            <motion.div
                className={"mt-20 mb-20 "}
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.5, delay: 0.2}}
            >
                <CaseStudySection.SubSection>
                    <img src={"/photo.jpeg"} alt={"photo of me"} className={"rounded-2xl"}/>
                    <CaseStudySection.Content>
                        <h1 className={"text-lg"}>
                            I&#39;m Chris, an early career UX designer with 2 years of experience based in Boston.
                            Currently at&nbsp;
                            <CustomLink link={"https://www.toddagriscience.com/"} text={"Todd Agriscience"}/> building
                            scalable design & brand systems. Previously with &nbsp;
                            <CustomLink link={"https://www.se.com/us/en/"} text={"Schneider Electric"}/>
                            &nbsp;advancing their sustainable design practices.
                            <br/>
                            <br/>
                            <span className={"font-medium"}>I do not design for applause, I design for outcomes and intent. I am adaptable, resilient, and always curious.</span>
                            <br/>
                            <br/>
                            I bridge the gap between user needs, design vision, and technical reality with my extensive
                            knowledge in SWE.
                            <br/>
                            <br/>
                            In my downtime, I love to explore neighborhoods around the globe and dabble in ceramics!
                        </h1>
                        <a href="/resume.pdf" target="_blank" rel="opener referrer"
                           className={"inline-flex mt-8  hover:bg-[#61E88A] transition gap-x-1.5 bg-spotify px-4 py-3 rounded-full items-center mb-20"}>
                            <ArrowDownToLine width={20} height={20} id={"antiDark"}/>
                            <h1 className={"text-xl"} id={"antiDark"}>See my resume</h1>
                        </a>

                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>


            </motion.div>
        </section>
    );
}
