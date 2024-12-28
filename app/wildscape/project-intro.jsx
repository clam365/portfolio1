import {ArrowUpRight} from "lucide-react";
import React from "react";

export const ProjectIntro = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 mt-10  px-10  2xl:px-60 gap-x-10 gap-y-10"}>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <h1 className={"text-2xl"}>
                    Wildscape is a dynamic photo-sharing platform designed for adventurous adolescents passionate about
                    the environment based on the term "I know a spot".
                    <br/>
                    <br/>
                    I led the idea and vision behind our project, along with the front-end development and mockups.
                </h1>
                <div className={"rounded-full mt-10 inline-block"} id={"descriptionTag"}>
                    <a href={"https://wildscape.vercel.app/"} target="_blank" rel="opener referrer"
                       className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                       id={"descriptionTag"}>
                        <h1 className={"text-sm"}>WILDSCAPE</h1>
                        <ArrowUpRight
                            className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                        />
                    </a>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <div className={"mb-2"}>
                    <h1 className={"text-newGray"} id={"based"}>Product</h1>
                    <h1 className={""}>Fullstack Website</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Skills</h1>
                    <h1 className={""}>Fullstack Development</h1>
                    <h1 className={""}>Motion Design</h1>
                    <h1 className={""}>HUGE TIME MANAGEMENT</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Tech Stack</h1>
                    <h1 className={""}>Next.js, Pocketbase, Framer-Motion + GSAP, Typescript, Fly.io, OAuth, Shadcn, AceturnityUI, GoogleMaps API</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>My Role</h1>
                    <h1 className={""}>Front-End Developer</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Timeline</h1>
                    <h1 className={""}>October 4-6, 2024</h1>
                </div>
                <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                    <h1 className={"text-newGray mb-2"} id={"based"}>Team</h1>
                    <h1 className={""}>Brandon Yeu, Arnav Mishra, Jeremy Kurtz</h1>
                </div>
            </div>
        </div>
    )
}
