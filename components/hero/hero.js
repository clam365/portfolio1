"use client";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import "@/app/globals.css"

export default function Hero() {
    const lineVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0 },
    };

    const lines = [
        "I'm Chris Lam, a creative web developer",
        " driven by authentic expression. I'll be interning at ",
        <span className="text-spotify hover:text-slight-black" key="line2">
            <Link href={"https://www.se.com/us/en/"}>Schneider Electric</Link>
        </span>,
        " as a WebDev PM, previously with the ",
        <span className="text-spotify hover:text-slight-black" key="line3">
            <Link href={"https://afciviliancareers.com/"}>AFCS</Link>
        </span>,
        ".",
    ];

    return (
        <section className="pt-14 min-h-[85vh] flex flex-col">
            <motion.div
                className={"max-w-[90rem] flex-grow"}
                initial={{opacity: 0, x: 15}}
                animate={{opacity: 1, x: 0}}
                transition={{type: "spring", stiffness: 25, damping: 12}}
            >
                <motion.h1
                    className="text-slight-black font-medium text-3xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem]"
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
                <div className="flex gap-x-2" >
                    <p className="border border-[#d8d8d8] rounded-full px-2 py-1 text-md inline-block text-slight-black" id={"tags"}>
                        Front-End
                    </p>
                    <p className="border border-[#d8d8d8] rounded-full px-4 py-1 text-md inline-block text-slight-black" id={"tags"}>
                        UI/UX
                    </p>
                    <p className="border border-[#d8d8d8] rounded-full px-4 py-1 text-md inline-block text-slight-black" id={"tags"}>
                        Agile
                    </p>
                    <p className="border border-[#d8d8d8] rounded-full px-4 py-1 text-md inline-block text-slight-black" id={"tags"}>
                        Product Design
                    </p>
                </div>
                <hr className="my-3 mt-5 border border-[#A1A1A1]" />
                <div className="flex justify-between items-center">
                    <p className="text-newGray text-xl" id={"based"}>Based in Boston, MA</p>
                    <Link href={"/#craft"}>
                        <p className="text-newGray text-xl flex items-center" >
                            See Selected Craft <span><ArrowDown className="ml-1 text-spotify" /></span>
                        </p>
                    </Link>
                </div>
            </motion.footer>
        </section>
    );
}
