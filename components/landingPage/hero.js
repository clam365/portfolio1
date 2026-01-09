"use client";
import Link from "next/link";
import {ArrowDown} from "lucide-react";
import { motion } from "framer-motion";
import "@/app/globals.css"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import {CustomLink} from "@/components/link";

gsap.registerPlugin(SplitText);

export default function Hero() {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const split = new SplitText(textRef.current, {
                type: "lines",
                linesClass: "line"
            });

            gsap.from(split.lines, {
                duration: 1.2,
                opacity: 0,
                y: 50,
                ease: "power3.out",
                stagger: 0.15
            });

            return () => {
                split.revert();
            };
        }
    }, []);

    return (
        <section className="pt-40 lg:px-32 min-h-[60vh] flex flex-col ">
            <div className={"max-w-[90rem] flex-grow"}>
                <h1
                    id={"hero"}
                    ref={textRef}
                    className="text-black font-mono text-3xl md:text-5xl md:mr-40"
                >
                    I&#39;m Chris Lam,
                    a UX designer <br/> who builds with <span className={"italic"}>authentic expression</span> and <span
                    className={"italic"}>strategy</span>.
                </h1>

            </div>

            <motion.footer
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {opacity: 0},
                    show: {opacity: 1, transition: {duration: 0.75}},
                }}
            >
                <div className={"text-sm text-newGray flex justify-between items-center pb-2"}>
                    <div>
                        Currently designing at <CustomLink link={"https://toddagriscience.com/en"} text={"Todd"}/>. Previously at&nbsp;
                        <CustomLink link={"https://www.se.com/ww/en/"} text={"Schneider Electric"}/>.
                        <br/>
                        Based in Greater Boston.
                    </div>
                    <Link href={"/#craft"} className={"hidden lg:block"}>
                        <p className="text-newGray flex items-center">
                            Selected Projects <span><ArrowDown className="ml-1 text-spotify" /></span>
                        </p>
                    </Link>
                </div>
                <div className="flex justify-between items-center border-t border-t-[#e1e1e1] py-2 " id={"newLine"}/>
            </motion.footer>
        </section>
    );
}