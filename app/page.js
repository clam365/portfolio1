"use client"
import Hero from "@/components/landingPage/hero"
import Work from "@/components/landingPage/Work"
import About from "@/components/landingPage/about"
import Lenis from "lenis"
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, []);

  return (
      <div className={"px-10 pt-10"}>
          <Hero/>
          <Work/>
          <About/>
      </div>
  );
}
