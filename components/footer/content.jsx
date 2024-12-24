import React from 'react'
import "@/app/globals.css"
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import "./footer.css"

export default function Content() {
    return (
        <div className={"footer1 bg-[#f0f0f0]  h-full "} id={"footer1"}>
            <div className='bg-[#f0f0f0] pt-12 px-16 lg:px-32 xl:px-64 py-[3rem] md:pt-20  justify-center' id="footer1">
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-0 justify-center" id="footerContent">
                    <div id={"footer1"}>
                        <Link href={"/"} className={"inline-block"}>
                            <Image
                                src="/choso3.png"
                                alt="logo"
                                width={87}
                                height={48}
                                className="rounded-lg items-center transition transform hover:-translate-y-1 duration-200"
                            />
                        </Link>
                    </div>
                    <h1 className="text-3xl md:text-[2.5rem] lg:text-5xl">
                        Let's Talk
                        <a className="flex space-x-1 cursor-pointer group" id="footerContent" href="mailto:christopherlam110@gmail.com">
                            <h1 className="group-hover:text-[#a3a3a3] transition">Drop me a ping</h1>
                            <ArrowUpRight
                                className="text-spotify group-hover:text-[#2c8b44] transition w-9 h-9 md:w-10 md:h-10 lg:w-14 lg:h-14"
                            />
                        </a>
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:pt-16 lg:pt-8" id="footer1">
                    <div id={"footer1"}></div>
                    <div id={"footer1"} className={"grid grid-cols-2 space-x-4"}>
                        <div id={"footer1"}>
                            <div id={"footer1"} className="list-container">
                                <div className="list-dot"></div>
                                <Link href={"/#about"}><h1 className="list-text">About</h1></Link>
                            </div>
                            <div id={"footer1"} className="list-container">
                                <div className="list-dot"></div>
                                <Link href={"/#craft"}><h1 className="list-text">Work</h1></Link>
                            </div>
                            <div id={"footer1"} className="list-container">
                                <div className="list-dot"></div>
                                <Link href={"/photography"}><h1 className="list-text">Photography</h1></Link>
                            </div>
                        </div>
                        <div id={"footer1"}>
                            <div id={"footer1"} className="list-container">
                                <div className="list-dot"></div>
                                <a href={"https://www.linkedin.com/in/chrislam365"} target="_blank"><h1 className="list-text">LinkedIn</h1></a>
                            </div>
                            <div id={"footer1"} className="list-container">
                                <div className="list-dot"></div>
                                <a href="/resume.pdf" target="_blank" rel="opener referrer"><h1 className="list-text">See my CV</h1></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={"footer1"} className={"px-4 md:px-14 lg:px-28 xl:px-52"}>
                <div
                    className={"flex justify-between px-6 py-4 text-sm border-t border-t-[#e1e1e1]"}
                    id={"footer1"}>
                    <h1 className={"text-newGray"} id={"newLine"}>© 2024 Chris Lam</h1>
                    <h1 className={"text-newGray"} id={"newLine"}>I used all my Uji Matcha to make this</h1>
                </div>
            </div>

        </div>

    );
}
