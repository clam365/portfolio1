"use client";
import "@/app/globals.css"
import { useEffect } from "react";
import Lenis from "lenis";

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
        <div className={"pt-32 px-10"}>
            <div className={"grid grid-cols-1 md:grid-cols-2"}>
                <div>
                    <h1
                        id={"hero"}
                        className={"text-4xl"}>
                        I&apos;m a designer who builds with authentic expression and
                        strategy.
                    </h1>
                    <h1 className={"text-newGray mt-8"}>
                        I learned early in my study abroad in Japan that the best insights come from simply watching, not software and surveys. In grocery and coffee shops,
                        I noticed how people moved, paused, and interacted—tiny moments of friction that revealed everything and anything. With this, research became a mindset,
                        not a step in a process.
                        <br/>
                        <br/>
                        <span id={"hero"}>Design to me is noticing patterns, tuning into subtle emotions, and shaping experiences that truly resonate with real people.</span>
                    </h1>
                </div>

            </div>
        </div>
    );
}
