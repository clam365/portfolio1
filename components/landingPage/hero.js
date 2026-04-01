"use client";
import Link from "next/link";
import Image from "next/image";
import {ArrowDown} from "lucide-react";
import {motion} from "framer-motion";
import "@/app/globals.css"
import {useRef, useEffect} from "react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {CustomLink} from "@/components/link";

gsap.registerPlugin(SplitText);

export default function Hero() {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;
        let split;
        const runAnimation = async () => {
            await document.fonts.ready;
            split = new SplitText(textRef.current, {
                type: "words",
                wordsClass: "word"
            });
            gsap.from(split.words, {
                duration: 1,
                opacity: 0,
                y: 40,
                ease: "power3.out",
                stagger: 0.05
            });
        };

        runAnimation().then();

        return () => {
            if (split) split.revert();
        };
    }, []);

    return (
        <section className="pt-40 lg:px-32 min-h-[60vh] flex flex-col relative overflow-hidden">
            <div className={"max-w-[90rem] flex-grow"}>
                <h1
                    ref={textRef}
                    className="text-black font-libreBaskerville text-3xl md:text-5xl md:mr-44"
                >
                    I&#39;m Chris Lam,
                    a product designer who builds with <span className={"italic"}>authentic expression</span> and <span
                    className={"italic"}>strategy</span>.
                </h1>
            </div>
            <motion.div
                className="absolute hidden lg:block lg:top-[15%] lg:right-[15%] z-10"
                initial={{opacity: 0, scale: 0.9}}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0],
                    rotate: [-5, 5, -5],
                }}
                transition={{
                    opacity: {duration: 0.8, delay: 0.5},
                    scale: {duration: 0.8, delay: 0.5},
                    y: {duration: 4, repeat: Infinity, ease: "easeInOut"},
                    rotate: {duration: 5, repeat: Infinity, ease: "easeInOut"},
                }}
            >
                <Image
                    src="/dragon.png"
                    alt="Dragon"
                    width={100}
                    height={100}
                    className="select-none"
                    priority
                />
            </motion.div>
            <motion.div
                className="absolute hidden lg:block lg:top-[5%] lg:left-[25%] z-10"
                initial={{opacity: 0, scale: 0.9}}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0],

                }}
                transition={{
                    opacity: {duration: 0.8, delay: 0.5},
                    scale: {duration: 0.8, delay: 0.5},
                    y: {duration: 4, repeat: Infinity, ease: "easeInOut"},
                    rotate: {duration: 5, repeat: Infinity, ease: "easeInOut"},
                }}
            >
                <Image
                    src="/smiski.png"
                    alt="smiski"
                    width={100}
                    height={100}
                    className="select-none"
                    priority
                />
            </motion.div>
            <motion.div
                className="absolute hidden lg:block lg:bottom-[15%] lg:left-[20%] xl:bottom-[30%] xl:left-[10%] z-10"
                initial={{opacity: 0, scale: 0.9}}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0],
                    rotate: [5, -5, 5],
                }}
                transition={{
                    opacity: {duration: 0.8, delay: 0.5},
                    scale: {duration: 0.8, delay: 0.5},
                    y: {duration: 4, repeat: Infinity, ease: "easeInOut"},
                    rotate: {duration: 5, repeat: Infinity, ease: "easeInOut"},
                }}
            >
                <Image
                    src="/flower.png"
                    alt="flower"
                    width={50}
                    height={50}
                    className="select-none"
                    priority
                />
            </motion.div>
            <motion.div
                className=" absolute hidden lg:block xl:bottom-[20%] xl:right-[30%] lg:bottom-[30%] lg:right-[20%] z-10"
                initial={{opacity: 0, scale: 0.9}}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -12, 0],

                }}
                transition={{
                    opacity: {duration: 0.8, delay: 0.5},
                    scale: {duration: 0.8, delay: 0.5},
                    y: {duration: 4, repeat: Infinity, ease: "easeInOut"},
                    rotate: {duration: 5, repeat: Infinity, ease: "easeInOut"},
                }}
            >
                <Image
                    src="/musicGuy.png"
                    alt="musicGuy"
                    width={100}
                    height={100}
                    className="select-none"
                    priority
                />
            </motion.div>

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
                        Currently designing at <CustomLink link={"https://toddagriscience.com/en"} text={"Todd"}/>.
                        Previously at&nbsp;
                        <CustomLink link={"https://www.se.com/ww/en/"} text={"Schneider Electric"}/>.
                        <br/>
                        Based in Greater Boston.
                    </div>
                    <Link href={"/#craft"} className={"hidden lg:block"}>
                        <p className="text-newGray flex items-center">
                            Selected Projects <span><ArrowDown className="ml-1 text-spotify"/></span>
                        </p>
                    </Link>
                </div>
                <div className="flex justify-between items-center border-t border-t-[#e1e1e1] py-2 "/>
            </motion.footer>
        </section>
    );
}