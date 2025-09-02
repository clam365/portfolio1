"use client";
import Link from "next/link";
import {ArrowDown, Book, CodeXml, Smartphone} from "lucide-react";
import {Tag} from "@/components/tag"
import { motion } from "framer-motion";
import "@/app/globals.css"
import {CustomLink} from "@/components/link"

export default function Hero() {
    return (
        <section className="pt-14 min-h-[85vh] flex flex-col ">
            <motion.div
                className={"max-w-[90rem] flex-grow"}
                initial={{opacity: 0, x: 15}}
                animate={{opacity: 1, x: 0}}
                transition={{type: "spring", stiffness: 25, damping: 12}}
            >
                <motion.h1
                    className="text-slight-black font-normal text-3xl md:text-5xl md:mr-40"
                    initial="hidden"
                    animate="show"
                >
                    I&#39;m Chris Lam, a creative designer and developer for digital interfaces, driven by
                    <span className={"italic"}> authentic expression </span>
                    and
                    <span className={"italic"}> sustainability</span>.
                    Currently with&nbsp;
                    <CustomLink link={"https://www.toddagriscience.com/"} text={"Todd"}/>, formerly with&nbsp;
                    <CustomLink link={"https://www.se.com/us/en/"} text={"Schneider Electric"}/>.
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
