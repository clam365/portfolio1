"use client";
import "@/app/globals.css"
import {useEffect} from "react";
import Lenis from "lenis";
import Image from "next/image";
import {CustomLink} from "@/components/link";
import {ArrowDownToLine} from "lucide-react";

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
        <div className={"py-32 px-10 lg:px-32"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-10"}>
                <div className={"items-center m-auto order-2 md:order-1"}>
                    <h1
                        id={"hero"}
                        className={"text-4xl"}>
                        I&apos;m a designer who builds with authentic expression and
                        strategy.
                    </h1>
                    <h1 className={"text-newGray mt-8"}>
                        I learned early in my study abroad in Japan that the best insights come from simply watching.
                        Not software and surveys, but in coffee shops.
                        I noticed how people moved, paused, and interacted—tiny moments of friction that revealed
                        everything and anything. With this, research to me became a mindset,
                        not a step in a process.
                        <br/>
                        <br/>
                        <span>Design to me is noticing patterns, tuning into subtle emotions, and shaping experiences that truly resonate with real people.</span>
                        <br/>
                        <br/>
                        In my free time, I love doing ceramics, watching football breakdowns, and cooking!
                    </h1>
                    <br/>
                    <div className={"text-newGray"}>
                        Currently designing at <CustomLink link={"https://toddagriscience.com/en"} text={"Todd"}/>.
                        Previously at&nbsp;
                        <CustomLink link={"https://www.se.com/ww/en/"} text={"Schneider Electric"}/> and <CustomLink
                        link={"https://www.airforce.com/"} text={"Air Force"}/>.
                        <br/>
                        Based in Greater Boston.
                    </div>
                </div>
                <Image src={"/polaroid.png"} alt={"Me!"} height={500} width={350} className={" m-auto md:justify-self-end md:rotate-2 order-1 md:order-2"}/>
            </div>
            <br/>
            <a href="/resume.pdf" target="_blank" rel="opener referrer"
               className={"inline-flex hover:bg-[#61E88A] transition gap-x-1.5 bg-spotify px-4 py-3 rounded-full items-center"}>
                <ArrowDownToLine width={20} height={20} id={"antiDark"}/>
                <h1 className={"text-sm"} id={"antiDark"}>See my resume</h1>
            </a>
            <br/>
            <br/>
            <br/>
            <h1 id={"hero"} className={"text-lg mb-6 mt-10"}>
                Places I loved visiting and connecting location and emotion together...
            </h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}>
                <div
                    className={"bg-[#f2f2f2] rounded-xl p-4 w-full flex flex-col justify-center m-auto"}
                    id={"gallery"}>
                    <img src={"/place1.png"} alt={"Image"}
                         className={"rounded-md drop-shadow-md w-full"}/>
                    <p className={"text-newGray text-sm mt-2 text-center"} id={"based"}>Weekender's Coffee, Kyoto Japan</p>
                </div>
                <div
                    className={"bg-[#f2f2f2] rounded-xl p-4 w-full flex flex-col justify-center m-auto"}
                    id={"gallery"}>
                    <img src={"/place2.png"} alt={"Image"}
                         className={"rounded-md drop-shadow-md w-full"}/>
                    <p className={"text-newGray text-sm mt-2 text-center"} id={"based"}>Mt. Fuji, Japan</p>
                </div>
                <div
                    className={"bg-[#f2f2f2] rounded-xl p-4 w-full flex flex-col justify-center m-auto"}
                    id={"gallery"}>
                    <img src={"/place3.png"} alt={"Image"}
                         className={"rounded-md drop-shadow-md w-full"}/>
                    <p className={"text-newGray text-sm mt-2 text-center"} id={"based"}>Venice!</p>
                </div>
                <div
                    className={"bg-[#f2f2f2] rounded-xl p-4 w-full flex flex-col justify-center m-auto"}
                    id={"gallery"}>
                    <img src={"/place4.png"} alt={"Image"}
                         className={"rounded-md drop-shadow-md w-full"}/>
                    <p className={"text-newGray text-sm mt-2 text-center"} id={"based"}>Jay Peak, VT!</p>
                </div>
            </div>


        </div>
    );
}
