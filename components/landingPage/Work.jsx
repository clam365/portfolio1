"use client"
import { useRef } from "react";
import {motion, useInView} from "framer-motion";
import "@/app/globals.css"
import {SelectedCraft} from "@/components/selectedCraft";

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
        <section id={"craft"} className={"md:px-48"} >
            <br/><br/><br/>
            <div className={"flex justify-between"}>
                <h1 className={"text-slight-black font-normal text-3xl md:text-5xl "}>Selected Craft</h1>
                <h1 className={"text-newGray font-normal text-3xl md:text-5xl "} id={"based"}>23'-25'</h1>
            </div>
            <br/><br/>
            <div className="mt-10 space-y-12">
                {/*Schneider Electric*/}
                <RevealOnScroll>
                    <SelectedCraft
                        pageLink={"/schneider-electric"}
                        imageSrc={"/schneider-electric/se_backdrop.png"}
                        projectName={"Schneider Electric"}
                        projectDescription={"B2C Web Experience"}
                    />
                </RevealOnScroll>
                {/*Kyoto Project Center*/}
                <RevealOnScroll>
                    <SelectedCraft
                        pageLink={"/iqp-dct"}
                        imageSrc={"/mockup2.png"}
                        projectName={"IQP DCT"}
                        projectDescription={"Senior Capstone Project"}
                    />
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] gap-y-[3rem]">
                    {/*IQP DCT*/}
                    <RevealOnScroll delay={0.5} duration={1}>
                        <SelectedCraft
                            pageLink={"/kyoto-project-center"}
                            imageSrc={"/mockup1.1.png"}
                            projectName={"Kyoto Project Center"}
                            projectDescription={"Kyoto IQP Database"}
                        />
                    </RevealOnScroll>
                    {/*Createv*/}
                    <RevealOnScroll delay={0.6} duration={1}>
                        <SelectedCraft
                            pageLink={"https://createv.vercel.app/"}
                            imageSrc={"/createv1.png"}
                            projectName={"Createv"}
                            projectDescription={"Curated UI/UX Resource Gallery"}
                        />
                    </RevealOnScroll>
                </div>
                {/*Wildscape*/}
                <RevealOnScroll>
                    <SelectedCraft
                        pageLink={"/wildscape"}
                        imageSrc={"/mockup4.4.png"}
                        projectName={"Wildscape"}
                        projectDescription={"Discover. Share. Protect."}
                    />
                </RevealOnScroll>
            </div>

        </section>
    )
}