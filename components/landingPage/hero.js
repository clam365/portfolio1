"use client";
import Link from "next/link";
import {ArrowDown, Book, CodeXml, Smartphone} from "lucide-react";
import {Tag} from "@/components/tag"
import { motion } from "framer-motion";
import "@/app/globals.css"
import {CustomLink} from "@/components/link"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

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
        <section className="pt-14 min-h-[85vh] flex flex-col ">
            <div className={"max-w-[90rem] flex-grow"}>
                <h1
                    ref={textRef}
                    className="text-slight-black font-normal text-3xl md:text-5xl md:mr-40"
                >
                    I&#39;m Chris Lam, a UX designer who bridges the gap between user needs, design vision, and technical reality.
                    Currently with&nbsp;
                    <CustomLink link={"https://www.toddagriscience.com/"} text={"Todd"}/>, formerly with&nbsp;
                    <CustomLink link={"https://www.se.com/us/en/"} text={"Schneider Electric"}/>.
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
                <div className="flex gap-x-2 mb-3">
                    <Tag icon={Smartphone} label={"Product Design"}/>
                    <Tag icon={Book} label={"Storytelling"}/>
                    <Tag icon={CodeXml} label={"Front-End"}/>
                </div>
                <div className="flex justify-between items-center border-t border-t-[#e1e1e1] py-2 " id={"newLine"}>
                    <p className="text-newGray text-sm md:text-xl" id={"based"}>Based in Greater Boston</p>
                    <Link href={"/#craft"}>
                        <p className="text-newGray text-sm md:text-xl flex items-center " >
                            Selected Craft <span><ArrowDown className="ml-1 text-spotify" /></span>
                        </p>
                    </Link>
                </div>
            </motion.footer>
        </section>
    );
}