import React from "react";

export const ProjectBackground = () => {
    return (
        <div className={""}>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"challenge"}>
                <h1 className={"text-newGray"}>CHALLENGE</h1>
                <h1 className={"font-medium text-3xl"}>Dedicated Platform for Visibility</h1>
                <h1>
                    At Worcester Polytechnic Institute, students take part in the Interactive Qualifying
                    Project (IQP), a hands-on unique humanitarian project conducted globally on respective sites.
                    The Kyoto Project Center focuses on tourism and community dynamics, but lacked a platform to
                    showcase its many projects. This gap created the need for a tailored website which reflects
                    Kyoto&apos;s distinct identity.
                </h1>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"ideation"}>
                <h1 className={"text-newGray"}>IDEATION</h1>
                <h1 className={"font-medium text-3xl"}>Zen</h1>
                <h1>
                    In crafting a website that reflects Japanese sensibilities, we embraced Zen principles to
                    create an experience with cultural depth. Zen emphasizes mindful simplicity—removing distractions
                    to highlight what matters most through clean layouts and intentional structure. Ample white space
                    embodies "ma" (間), the meaningful pause between elements, allowing content to breathe and invoking
                    calm.
                    Standard black text ensures readability while supporting minimalist elegance.
                </h1>
            </div>

            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"finaldesigns"}>
                <h1 className={"text-newGray"}>FINAL DESIGNS</h1>
            </div>
            <img
                src={"/freelance/kyoto.PNG"}
                alt={"kyoto"}
                className={"w-full h-full border border-gray-300 mt-10"}
            />
            <img
                src={"/freelance/kyotoHome.PNG"}
                alt={"kyoto"}
                className={"w-full h-full border border-gray-300 mt-10"}
            />
            <img
                src={"/freelance/kyotoSiteInfo.PNG"}
                alt={"kyoto"}
                className={"w-full h-full border border-gray-300 mt-10"}/>
            <img
                src={"/freelance/kyotoProjects.PNG"}
                alt={"kyoto"}
                className={"w-full h-full border border-gray-300 mt-10"}/>

            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"reflections"}>
                <h1 className={"text-newGray"}>REFLECTION</h1>
                <h1 className={"font-medium text-3xl"}>What I learned</h1>
            </div>
            <div className={"mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-10"}>
                <div>
                    <h1 className={"text-newGray text-xl"}>Global Stakeholder management</h1>
                    <h1>
                        Working with different cultures challenges almost every bit of what you may consider to be okay. Assume nothing.
                    </h1>
                </div>
                <div>
                    <h1 className={"text-newGray text-xl"}>Restraint in design</h1>
                    <h1>
                        Not everything has to be there. Get what is important but have clarity in function.
                    </h1>
                </div>
            </div>
        </div>
    )

}