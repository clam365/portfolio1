"use client";
import Link from "next/link";
import {ArrowDown, Book, CodeXml, Smartphone} from "lucide-react";
import { motion } from "framer-motion";
import "@/app/globals.css"

export default function Hero() {
    const lineVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0 },
    };

    const lines = [
        "I'm Chris Lam, a creative designer & developer",
        " driven by authentic expression. Currently with ",
        <span key="line2" className="selection-group">
        <span className="text-spotify hover:text-slight-black">
            <a href="https://www.se.com/us/en/" target="_blank" rel="opener referrer">Schneider Electric </a>
        </span>
            as a Product Designer Intern.
    </span>,
    ];



    return (
        <section className="pt-14 min-h-[85vh] flex flex-col ">
            <motion.div
                className={"max-w-[90rem] flex-grow"}
                initial={{opacity: 0, x: 15}}
                animate={{opacity: 1, x: 0}}
                transition={{type: "spring", stiffness: 25, damping: 12}}
            >
                <motion.h1
                    className="text-slight-black font-normal text-3xl md:text-5xl lg:text-6xl xl:text-7xl "
                    initial="hidden"
                    animate="show"
                >
                    {lines.map((line, i) => (
                        <motion.span
                            key={i}
                            variants={lineVariants}
                            initial="hidden"
                            animate="show"
                            custom={i}
                            transition={{
                                delay: i * 0.1, // Stagger the lines
                                duration: 0.6,
                            }}
                        >
                            {line}
                        </motion.span>
                    ))}
                </motion.h1>
            </motion.div>

            <motion.footer
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {opacity: 0},
                    show: {opacity: 1, transition: {duration: 0.75}},
                }}
            >
                <div className="flex gap-x-2 mb-3">
                    <div
                        className={"border border-[#d8d8d8] rounded-full px-3 py-1 text-xs sm:text-sm md:text-md flex items-center text-slight-black gap-1"}>
                        <Smartphone className={"w-4 h-4"}/>
                        <p id={"tags"}>Product Design</p>

                    </div>
                    <div
                        className={"border border-[#d8d8d8] rounded-full px-3 py-1 text-xs sm:text-sm md:text-md flex items-center text-slight-black gap-1"}>
                        <Book className={"w-4 h-4"}/>
                        <p id={"tags"}>Storytelling</p>
                    </div>
                    <div
                        className={"border border-[#d8d8d8] rounded-full px-3 py-1 text-xs sm:text-sm md:text-md flex items-center text-slight-black gap-1"}>
                        <CodeXml className={"w-4 h-4"}/>
                        <p id={"tags"}>Front-End Development</p>
                    </div>
                </div>
                <div className="flex justify-between items-center border-t border-t-[#e1e1e1] py-2 " id={"newLine"}>
                    <p className="text-newGray text-sm md:text-xl" id={"based"}>Based in Boston, MA</p>
                    <Link href={"/#craft"}>
                        <p className="text-newGray text-sm md:text-xl flex items-center " >
                            See Selected Craft <span><ArrowDown className="ml-1 text-spotify" /></span>
                        </p>
                    </Link>
                </div>
            </motion.footer>
        </section>
    );
}
