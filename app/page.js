"use client"
import Hero from "@/components/hero/hero"
import Work from "@/components/work/Work"
import About from "@/components/about/about"
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
