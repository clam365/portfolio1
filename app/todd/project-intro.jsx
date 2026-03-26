import React from "react";
import {IoLockClosed, IoSparkles} from "react-icons/io5";

export const ProjectIntro = () => {
    return (
        <>
            <div className={"mt-10"}>
                {/* BASIC INFO */}
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6"}>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>ROLE</h1>
                        <h1>Product Designer</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TIMELINE</h1>
                        <h1>Sep 2025 - Mar 2026</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>TEAM</h1>
                        <h1>Todd Agriscience</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>SKILLS</h1>
                        <h1>Product Design</h1>
                    </div>
                </div>
            </div>
            {/*Overview*/}
            <div className={"mt-20 space-y-2 mb-20 scroll-mt-40"} id={"overview"}>
                <div className={"flex items-center m-auto space-x-2"}>
                    <IoSparkles className={"text-newGray w-6 h-6"}/>
                    <h1 className={"text-newGray"}>Chris-generated Overview</h1>
                </div>
                <h1 className={"font-medium text-3xl"}>Designing end-to-end product experience for an AI-driven
                    agricultural analytics platform</h1>
                <h1>
                    This past year, I joined Todd Agriscience as a product designer to own the full design of their
                    onboarding and core platform experience.
                    Working closely with engineers, I architected the design system foundations, brand guidelines, and
                    analytics workflows, translating complex AI-driven
                    insights into interfaces that help farms make confident operational decisions.
                    <br/>
                    <br/>
                    Along the way, I mentored two product design interns, providing feedback, aligning their
                    deliverables with the broader product direction, and helping
                    them grow their intuition in an environment where ambiguity is the default.
                    <br/>
                    <br/>
                    Grateful to the many collaborators and their dedication to bring a product that impacts our own
                    lives directly!
                </h1>
            </div>
            <div className={"mt-20 space-y-2 border-l-4 border-gray-300 pl-4"}>
                <h1 className={"text-newGray italic"}>
                    Chris helped me and Todd translate all of our messy ideas into Figma designs, user flows, and
                    a
                    brand identity that allowed me to develop solutions for our customers much quicker. Chris is great
                    at
                    taking an abstract idea and laying it out in a way that I, someone with only a little practical
                    experience
                    in UI/UX could easily understand.
                    <br/>
                    <br/>
                    Furthermore, he laid out all of the foundational framework for future UI/UX development, and gave me
                    a standard to build new features off of via Figma.
                    <br/>
                    <br/>
                    ~ Oscar Gaske, Founding Software Engineer
                </h1>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"reflections"}>
                <h1 className={"text-newGray"}>REFLECTIONS</h1>
                <h1 className={"font-medium text-3xl"}>What I learned</h1>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"}>
                <div>
                    <h1 className={"text-newGray text-xl"}>Navigating Ambiguity</h1>
                    <h1>
                        There are no established playbooks at a pre-seed startup. I learned to move forward
                        with incomplete information, but always making design decisions that are grounded in
                        user needs and are defensible/reversible.
                    </h1>
                </div>
                <div>
                    <h1 className={"text-newGray text-xl"}>Creating a Space for Design</h1>
                    <h1>
                        Design isn't always seen as a priority in many environments at first. The value of my work shows
                        up
                        in rationale and consistency, until the work spoke for itself.
                    </h1>
                </div>
            </div>
            <div className={"bg-[#f2f2f2] rounded-lg p-16 scroll-mt-40 mb-40 space-y-2"}>
                <div className={"bg-white p-4 inline-block rounded-[20rem] drop-shadow-sm"}>
                    <IoLockClosed className={"text-newGray w-6 h-6"}/>
                </div>
                <h1 className={"text-2xl"}>This work is confidential.</h1>
                <h1 className={"text-xl text-newGray"}>Please
                    <a className="hover:text-blue-400 transition" href="mailto:christopherlam110@gmail.com"> email
                        me </a>
                    if you'd like to chat!</h1>
            </div>
        </>
    )
}
