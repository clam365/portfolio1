"use client"
import {ArrowDownToLine} from "lucide-react";
import "@/app/globals.css"
import { useRef } from "react";
import {motion, useInView} from "framer-motion";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <section id={"about"} className={"xl:px-48 2xl:px-60 mt-20"}  ref={ref}>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-x-8 pb-20"}>
                <div className={"border-t border-t-[#e1e1e1] sidebar col-span-12 lg:col-span-5 xl:col-span-5"} id={"newLine"}>
                    <h1 className={"text-slight-black text-4xl md:text-5xl mt-4 font-normal xl:w-full"}>About</h1>
                </div>
                <motion.div
                    className={"mt-20 lg:mt-6 col-span-12 lg:col-span-7 xl:col-span-7 lg:max-w-[45rem]"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className={" text-xl md:text-2xl lg:text-3xl font-thin"}>
                        I&#39;m a creative web developer studying CS at Worcester Polytechnic Institute. I am
                        currently with
                        <span className="text-spotify hover:text-slight-black">
                            <a href={"https://www.se.com/us/en/"} target="_blank" rel="opener referrer"> Schneider Electric </a>
                        </span>
                        as a WebDev PM Intern, supporting missions in web development and design.
                        <br />
                        <br />
                        I&#39;m driven by the endless possibilities of design and art in our world. My mission is to
                        create products and applications that tell
                        YOUR story. Authentic expression stems from the depth of human imagination and emotion. Through
                        my creativity, I inspire and uplift
                        individuals and communities.
                        <br />
                        <br />
                        Before Schneider Electric, I worked as a Data Analyst intern at
                        <span className="text-spotify hover:text-slight-black">
                            <a href={"https://afciviliancareers.com/"} target="_blank" rel="opener referrer"> AFCS</a>
                        </span>
                        , creating interactive dashboards and restructuring personnel tracking data to enhance decision-making for team members.
                        <br />
                        <br />
                        In my downtime, I love to thrift, cook, watch anime, and explore new cafes!
                    </h1>
                    <a href="/resume.pdf" target="_blank" rel="opener referrer" className={"inline-flex mt-8  hover:bg-[#61E88A] transition   gap-x-1.5 bg-spotify px-4 py-3 rounded-full items-center"}>
                        <ArrowDownToLine width={20} height={20} id={"antiDark"}/>
                        <h1 className={"text-xl"} id={"antiDark"}>Download CV</h1>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}