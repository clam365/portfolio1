"use client"
import {ArrowDownToLine} from "lucide-react";
import "@/app/globals.css"
import { useRef } from "react";
import {motion, useInView} from "framer-motion";
import {CustomLink} from "@/components/link";
import Tooltip from "@/components/clickable";

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
                className={"mt-20 "}
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.5, delay: 0.2}}
            >
                <h1 className={" text-xl md:text-2xl lg:text-3xl font-thin"}>
                    <span className={"font-semibold"}>Chris Lam</span> fell in love with <span
                    className={"italic font-medium"}>design</span> and <span className={"italic font-medium"}>code</span> in 6th grade when he
                    built a webpage for Halo 5 in Replit.
                </h1>
                <br/>
                <h1 className={"text-md"}>
                    OK, no more third person.
                    <br/>
                    <br/>
                    It was straight up a fan page for Master Chief and Blue Team, experimenting with the semantic tags.
                    It is lost somewhere in the archives, and all I can remember is that every image was used with
                    absolute positioning, nothing else.
                    <br/>
                    <br/>
                    Since then, I&#39;ve grown up alongside the web and design — death of Flash, skeuomorphism, dark
                    mode, and now potentially glassmorphism with Apple.
                    Along the way, I completed my computer science degree in 3 years, focusing on UI/UX and telling
                    digital stories that resemble your mission and audience.
                    <br/>
                    <br/>
                    Currently, I&#39;m with <CustomLink link={"https://www.toddagriscience.com/"} text={"Todd"}/> to digitize agriscience, formerly with
                    <CustomLink link={"https://www.se.com/ww/en/"} text={" Schneider Electric"}/> advancing sustainable energy solutions. Before that, I
                    was a Visual & Content Designer for the
                    <CustomLink link={"https://wp.wpi.edu/sustainabilitycompetition15/2023/04/06/ug08-universal-education-initiative/"} text={" Universal Education Initiative"}/>,
                    supporting the brand and classroom for students in Merida, Venezuela.
                    <br/>
                    <br/>
                    I live and thrive in the Greater Boston area. I&#39;ve been to Japan two times. I love minimalism. I abuse Pinterest. Tuna Crudo from Riverhouse in Portsmouth, NH is the best.
                    Go Patriots and Drake Maye.
                </h1>

                <a href="/resume.pdf" target="_blank" rel="opener referrer"
                   className={"inline-flex mt-8  hover:bg-[#61E88A] transition gap-x-1.5 bg-spotify px-4 py-3 rounded-full items-center mb-20"}>
                    <ArrowDownToLine width={20} height={20} id={"antiDark"}/>
                    <h1 className={"text-xl"} id={"antiDark"}>See my resume</h1>
                </a>

            </motion.div>
        </section>
    );
}
