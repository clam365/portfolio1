"use client"
import Image from "next/image";
import React from "react";

export default function HeaderSection() {
    return (
        <section id="header" className="py-10 scroll-mt-24">
            <h1 className="text-2xl font-medium">Header</h1>

            <h1 className="text-md text-secondary mt-2">
                Sticky site header rendered globally via layout.js.
                Contains the logo and navigation links.
            </h1>

            <div className="border bg-surface-raised border-border rounded-md p-4 md:p-12 w-full mt-10">
                <div className="drop-shadow-md bg-surface-base border border-border rounded-md
                                flex justify-between items-center
                                px-4 py-3 md:px-10 md:py-5">

                    <Image
                        src="/flower1.png"
                        alt="logo"
                        width={70}
                        height={38}
                        className="md:w-[87px] md:h-[48px] object-cover rounded-lg"
                    />

                    <div className="flex items-center gap-4 md:gap-8 text-sm md:text-base cursor-pointer">
                        <h1>WORK</h1>
                        <h1>ABOUT</h1>
                        <h1>RESUME</h1>
                    </div>

                </div>
            </div>
        </section>
    );
}