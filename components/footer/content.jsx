import React from 'react'
import "@/app/globals.css"
import Link from "next/link";
import "./footer.css"

export default function Content() {
    return (
        <div className={"footer1 bg-[#f0f0f0]  h-full "}>
            <div className='bg-[#f0f0f0] pt-10 px-10 py-[3rem] md:pt-20  justify-center' id="footer1">

                <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-0 justify-center">
                    <div className={"font-display italic"}>
                        <h1 className={"text-7xl lg:text-9xl"}>Chris Lam</h1>
                    </div>
                    <div className="grid grid-cols-2 space-x-10 md:justify-items-center">
                        <div>
                            <div className="list-container">
                                <div className="list-dot"></div>
                                <Link href={"/about"}><h1 className="list-text">About</h1></Link>
                            </div>
                            <div className="list-container">
                                <div className="list-dot"></div>
                                <Link href={"/#craft"}><h1 className="list-text">Work</h1></Link>
                            </div>
                        </div>
                        <div>
                            <div className="list-container">
                                <div className="list-dot"></div>
                                <a href={"https://www.linkedin.com/in/chrislam365"} target="_blank"><h1
                                    className="list-text">LinkedIn</h1></a>
                            </div>
                            <div className="list-container">
                                <div className="list-dot"></div>
                                <a href="/resume.pdf" target="_blank" rel="opener referrer"><h1
                                    className="list-text">Resume</h1></a>
                            </div>
                            <div className="list-container">
                                <div className="list-dot"></div>
                                <a href="mailto:christopherlam110@gmail.com" target="_blank" rel="opener referrer"><h1
                                    className="list-text text-right">Email</h1></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={"p-10 pt-14"}>
                <div
                    className={"flex justify-between py-4 text-xs md:text-sm border-t border-t-[#e1e1e1]"}
                >
                    <h1 className={"text-secondary"}>© 2026 Chris Lam</h1>
                    <h1 className={"text-secondary"}>Designed & coded by me!</h1>
                </div>
            </div>
        </div>
    );
}