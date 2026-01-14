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
        <>
            <section id={"craft"} className={"grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pb-20"}>
                {/*Schneider Electric*/}
                <RevealOnScroll>
                    <SelectedCraft
                        pageLink={"/schneider-electric"}
                        imageSrc={"/schneider-electric/se_mockupe.png"}
                        projectName={"Schneider Electric"}
                        projectDescription={"Ecommerce platform for French homeowners"}
                    />
                </RevealOnScroll>
                {/*IQP*/}
                <RevealOnScroll>
                    <SelectedCraft
                        pageLink={"/iqp-dct"}
                        imageSrc={"/mockup2.png"}
                        projectName={"IQP DCT"}
                        projectDescription={"Data collection and analysis tool for WPI undergrads"}
                    />
                </RevealOnScroll>
                {/*Kyoto*/}
                <RevealOnScroll>
                    <SelectedCraft
                        pageLink={"/kyoto-project-center"}
                        imageSrc={"/mockup1.png"}
                        projectName={"Kyoto Project Center"}
                        projectDescription={"Hub for student research projects"}
                    />
                </RevealOnScroll>
                <RevealOnScroll>
                    <SelectedCraft
                        projectDescription={"Designing systems and marketing website"}
                        imageSrc={"/thumbnail.png"}
                        projectName={"Todd Agriscience"}
                        pageLink={"/todd"}/>
                </RevealOnScroll>
            </section>
        </>

    )
}