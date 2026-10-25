"use client";
import "@/app/globals.css"
import Image from "next/image";
import {ArrowDownToLine, Presentation} from "lucide-react";
import {motion} from "framer-motion";
import {ButtonPrimary} from "@/components/button";
import React from "react";

export default function Page() {

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <div className={"py-32 px-10 lg:w-1/2 m-auto"}>

                    <div className={" gap-y-10 gap-x-12"}>
                        <div className={"items-center m-auto order-2 md:order-1"}>
                            <div className={"mb-8 m-auto"}>
                                <Image src={"/photo.jpg"} alt={"Me!"} height={1000} width={750}
                                       className={"rounded-md w-full h-auto"}/>
                            </div>
                            <h1 className={"text-2xl text-[#d1d5dc] font-semibold tracking-wide mb-2"}>ABOUT ME</h1>
                            <h1 className="font-display text-4xl">Hi there, I'm Chris!</h1>
                            <h1 className={"text-secondary text-sm mt-8"}>
                                I&apos;m a designer with an engineering foundation, driven by authentic expression and
                                strategy.
                                <br/>
                                <br/>
                                I learned early in my study abroad in Japan that the best insights come from simply
                                watching. Not software and surveys, but in coffee shops — noticing how people moved,
                                paused, and interacted. Those tiny moments revealed everything. Research
                                and system thinking is a mindset, not a step in a process.
                                <br/>
                                <br/>
                                <span className="text-brand-primary">
                                Design to me 
                                is noticing patterns, tuning into subtle emotions, and shaping experiences that truly resonate with real people. 
                                </span>
                                <br/>
                                <br/>
                                That same sensibility carries into how I work: translating complex technical systems
                                into clear,
                                human-centered workflows, partnering closely with engineering to ship scalable, adoption
                                ready products. I create spaces for design where
                                it has not flourished yet.
                                <br/>
                                <br/>
                            </h1>
                            <div className={"space-y-2 mt-10"}>
                                <h1 className={"text-secondary font-semibold"}>Experience</h1>
                                <div className={"flex justify-between m-auto"}>
                                    <p className={"text-sm text-brand-primary"}>Pegasystems • <span
                                        className={"text-secondary"}> Product Design</span></p>
                                    <p className={"text-secondary"}>2026</p>
                                </div>
                                <div className={"flex justify-between m-auto"}>
                                    <p className={"text-sm text-brand-primary"}>Todd • <span
                                        className={"text-secondary"}> Product Design</span></p>
                                    <p className={"text-secondary"}>2025-26</p>
                                </div>
                                <div className={"flex justify-between m-auto"}>
                                    <p className={"text-sm text-brand-primary"}>Schneider Electric • <span
                                        className={"text-secondary"}> Product Design</span></p>
                                    <p className={"text-secondary"}>2025</p>
                                </div>
                                <div className={"flex justify-between m-auto"}>
                                    <p className={"text-sm text-brand-primary"}>Universal Education Initiative • <span
                                        className={"text-secondary"}> Content Design</span></p>
                                    <p className={"text-secondary"}>2023-25</p>
                                </div>
                                <div className={"flex justify-between m-auto"}>
                                    <p className={"text-sm text-brand-primary"}>Air Force • <span
                                        className={"text-secondary"}> Data Analyst</span></p>
                                    <p className={"text-secondary"}>2024</p>
                                </div>
                            </div>
                            <div className={"space-y-2 mt-4"}>
                                <h1 className={"text-secondary font-semibold"}>Education</h1>
                                <div className={"flex justify-between m-auto"}>
                                    <p className={"text-sm text-brand-primary"}>WPI • <span
                                        className={"text-secondary"}> Computer Science</span></p>
                                    <p className={"text-secondary"}>2022-25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="gap-x-4 flex">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <ButtonPrimary aria-label="See my resume">
                                <ArrowDownToLine/> Resume
                            </ButtonPrimary>
                        </a>
                        <a href="https://www.figma.com/deck/ALzY9sh2H4tz1r1Pwu70rC/Porfolio?node-id=1-42&viewport=-754%2C59%2C0.32&t=FKBdQJUSog1U2qUU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                           target="_blank" rel="noopener noreferrer">
                            <ButtonPrimary aria-label="See my resume">
                                <Presentation/> Case studies
                            </ButtonPrimary>
                        </a>
                    </div>
                    <br/>
                    <br/>
                    <br/>


                </div>
            </motion.div>
        </>

    );
}
