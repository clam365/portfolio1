"use client"
import Project1 from "./project1"
import Project2 from "./project2"
import Project3 from "./project3"
import { useRef } from "react";
import {motion, useInView} from "framer-motion";
import "@/app/globals.css"

export default function work() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id={"craft"} className={"xl:px-48 "} >
            <br/><br/><br/>
            <div className={"flex justify-between"}>
                <h1 className={"text-slight-black font-normal text-3xl md:text-5xl "}>Selected Craft</h1>
                <h1 className={"text-newGray font-normal text-3xl md:text-5xl "} id={"based"}>23'-25'</h1>
            </div>
            <br/><br/>
            <div className={"mt-10"} ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.75, delay: 0.2 }}
                >
                    <Project1/>
                </motion.div>

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] lg:mt-16 gap-y-[3rem] mt-12 "}>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        <Project2/>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 1, delay: 0.6}}
                    >
                        <Project3/>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}