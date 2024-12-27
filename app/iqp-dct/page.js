"use client";
import "@/app/globals.css"
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

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
            <div className={"p-12 pt-36 px-8 md:px-16 lg:px-36 xl:px-64"}>
                <motion.div
                    className={"px-3 py-1 bg-spotify rounded-full inline-block mb-2 text-sm"}
                    initial={{clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 25, }}
                    animate={{clipPath: "inset(0% 0% 0% 0%)", opacity: 1, y: 0,}}
                    transition={{type: "spring", stiffness: 40, damping: 10, delay: 0.4,}}
                    id={"projectTag"}
                >
                    <h1 id={"antiDark"}>MAJOR QUALIFYING PROJECT</h1>
                </motion.div>
                <motion.h1
                    className={"text-4xl md:text-6xl font-medium leading-[3rem] md:leading-[4.8rem] lg:leading-[5.5rem]"}
                    initial={{clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 25, }}
                    animate={{clipPath: "inset(0% 0% 0% 0%)", opacity: 1, y: 0,}}
                    transition={{type: "spring", stiffness: 40, damping: 10, delay: 0.2,}}
                >
                    IQP Data Collection Tool
                </motion.h1>
                <motion.h1
                    className={"text-2xl md:text-3xl text-newGray mt-3"}
                    initial={{clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 25, }}
                    animate={{clipPath: "inset(0% 0% 0% 0%)", opacity: 1, y: 0,}}
                    transition={{type: "spring", stiffness: 40, damping: 10, delay: 0.5,}}
                    id={"based"}
                >
                    Unite all data methods into one platform
                </motion.h1>
            </div>
            <motion.div
                className="relative overflow-hidden "
                initial={{clipPath: "inset(0% 0% 100% 0%)"}}
                animate={{clipPath: "inset(0% 0% 0% 0%)"}}
                transition={{duration: 0.75, ease: "easeInOut", delay: 0.75}}
            >
                <Image
                    src={"/mockup2.2.png"}
                    alt={"kyoto"}
                    width={4000}
                    height={2800}
                    className={"w-full object-cover min-h-[500px]"}
                />
            </motion.div>
            <div >
                helo
            </div>
        </div>
    );
}
