"use client";
import "@/app/globals.css"
import {useEffect} from "react";
import Lenis from "lenis";
import Image from "next/image";
import {CustomLink} from "@/components/link";

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
        <div className={"py-32 px-32"}>
            <div className={"grid grid-cols-1 md:grid-cols-2"}>
                <div className={"items-center m-auto"}>
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
                        <span id={"hero"}>Design to me is noticing patterns, tuning into subtle emotions, and shaping experiences that truly resonate with real people.</span>
                    </h1>
                    <br/>
                    <div>
                        Currently designing at <CustomLink link={"https://toddagriscience.com/en"} text={"Todd"}/>.
                        Previously at&nbsp;
                        <CustomLink link={"https://www.se.com/ww/en/"} text={"Schneider Electric"}/> and <CustomLink
                        link={"https://www.airforce.com/"} text={"Air Force"}/>.
                        <br/>
                        Based in Greater Boston.
                    </div>
                </div>
                <Image src={"/polaroid.png"} alt={"Me!"} height={500} width={350} className={"m-auto rotate-2"}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={""}>

            </div>


        </div>
    );
}
