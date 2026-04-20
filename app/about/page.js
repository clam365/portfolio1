"use client";
import "@/app/globals.css"
import Image from "next/image";
import {CustomLink} from "@/components/link";
import {ArrowDownToLine, Presentation} from "lucide-react";
import {motion} from "framer-motion";

export default function Page() {

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <div className={"py-32 px-10 lg:px-32"}>
                    <h1 className={"text-2xl text-[#d1d5dc] font-semibold tracking-wide mb-2"}>ABOUT ME</h1>
                    <h1 className="font-libreBaskerville text-4xl">Hi there, I'm Chris!</h1> 
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-10"}>
                        <div className={"items-center m-auto order-2 md:order-1"}>
                            <h1 className={"text-gray text-sm mt-8"}>
                                I&apos;m a designer with an engineering foundation, driven by authentic expression and strategy.
                                <br/>
                                <br/> 
                                I learned early in my study abroad in Japan that the best insights come from simply
                                watching. Not software and surveys, but in coffee shops — noticing how people moved,
                                paused, and interacted. Those tiny moments revealed everything. Research
                                and system thinking became a mindset for me, not a step in a process. 
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
                            <div className={"text-gray"}>
                                Previously at&nbsp;<CustomLink link={"https://toddagriscience.com/en"}
                                                               text={"Todd"}/>,&nbsp;
                                <CustomLink link={"https://www.se.com/ww/en/"}
                                            text={"Schneider Electric"}/>, and <CustomLink
                                link={"https://www.airforce.com/"} text={"Air Force"}/>.
                                <br/>
                                Based in Greater Boston.
                            </div>
                        </div>
                        <Image src={"/polaroid.png"} alt={"Me!"} height={500} width={350}
                               className={" m-auto md:justify-self-end order-1 md:order-2"}/>
                    </div>
                    <br/>
                    <div className="gap-x-4 flex">
                        <a href="/resume.pdf" target="_blank" rel="opener referrer"
                        className={"inline-flex hover:bg-[#61E88A] transition gap-x-1.5 bg-brand-primary px-4 py-3 rounded-full items-center"}>
                            <ArrowDownToLine width={20} height={20}/>
                            <h1 className={"text-sm"}>See my resume</h1>
                        </a>
                        <a href="https://www.figma.com/deck/ALzY9sh2H4tz1r1Pwu70rC/Porfolio?node-id=1-42&viewport=-754%2C59%2C0.32&t=FKBdQJUSog1U2qUU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="opener referrer"
                        className={"inline-flex hover:bg-[#61E88A] transition gap-x-1.5 bg-brand-primary px-4 py-3 rounded-full items-center"}>
                            <Presentation width={20} height={20}/>
                            <h1 className={"text-sm"}>See my case studies presentation</h1>
                        </a>
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>
                    <h1 id={"hero"} className={"text-lg mb-6 mt-10"}>
                        Places I loved visiting and connecting location and emotion together...
                    </h1>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}>
                        <div
                            className={" w-full flex flex-col justify-center m-auto"}>
                            <img src={"/place1.png"} alt={"Image"}
                                 className={" w-full"}/>
                            <p className={"text-gray text-sm mt-2 text-center"} id={"based"}>Weekender's Coffee,
                                Kyoto Japan</p>
                        </div>
                        <div
                            className={"w-full flex flex-col justify-center m-auto"}>
                            <img src={"/place2.png"} alt={"Image"}
                                 className={" w-full"}/>
                            <p className={"text-gray text-sm mt-2 text-center"} id={"based"}>Mt. Fuji, Japan</p>
                        </div>
                        <div
                            className={"w-full flex flex-col justify-center m-auto"}>
                            <img src={"/place3.png"} alt={"Image"}
                                 className={" w-full"}/>
                            <p className={"text-gray text-sm mt-2 text-center"} id={"based"}>Venice!</p>
                        </div>
                        <div
                            className={"w-full flex flex-col justify-center m-auto"}>
                            <img src={"/place4.png"} alt={"Image"}
                                 className={" w-full"}/>
                            <p className={"text-gray text-sm mt-2 text-center"} id={"based"}>Jay Peak, VT!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>

    );
}
