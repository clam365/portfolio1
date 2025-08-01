import React from "react";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  xl:px-72 py-24 md:pt-48"}>
            <div className={"border-t border-t-[#e1e1e1] my-16  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Project Goal</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>A
                            need for personalization</h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            Worcester Polytechnic Institute juniors participate in a humanitarian project
                            known as the Interactive Qualifying Project (IQP) in any part of the globe. Whenever a
                            project is completed, its paper
                            and resources are put into the Digital EProject library, which consists of thousands of
                            projects.
                            <br/>
                            <br/>
                            The Kyoto site is unique and distinct, focusing on the growing tourism dynamics and
                            community dynamics in neighboring regions.
                            With their identity and brand set, a need for a centralized website database with THEIR
                            respective projects was born.
                            <span></span>
                        </h1>
                        <h1 className={"text-spotify text-sm mt-12 mb-1"} id={"spotifyText"}>Key Stakeholder Needs</h1>
                        <div className={"border-t border-t-[#e1e1e1]  py-3"} id={"newLine"}>
                            <h1>
                                Prospective students, faculty, and sponsors can view the Kyoto Project Center mission
                                and info.
                            </h1>
                        </div>
                        <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                            <h1>
                                A database list of Kyoto IQP projects, with search/filter functionality.
                            </h1>
                        </div>
                        <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                            <h1>
                                The website must reflect the identity of Kyoto and our work here.
                            </h1>
                        </div>

                    </div>

                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] my-16  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Ideation & Design</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>Zen </h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            In crafting a website that reflects Japanese sensibilities, embracing the principle of Zen create
                            not just a beautiful interface, but also an experience with cultural depths.
                            <br/>
                            <br/>
                            Zen emphasizes mindful simplicity, removing unnecessary distractions and highlighting what
                            matters most.
                            We need clean layouts and intentional structure. The ample white conceptualizes
                            "ma" (間)—the meaningful pause or space between elements. Content can breathe and it invokes a calm experience.
                            The standard black text offers highest readability and supports the minimalist elegance.
                            <br/>
                            <br/>

                        </h1>

                    </div>

                </div>
            </div>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"}
                 id={"gallery"}>
                <img
                    src={"/freelance/kyoto.PNG"}
                    alt={"kyoto"}
                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                />
            </div>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"}
                 id={"gallery"}>
                <img
                    src={"/freelance/kyotoHome.PNG"}
                    alt={"kyoto"}
                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                />
            </div>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"}
                 id={"gallery"}>
                <img
                    src={"/freelance/kyotoSiteInfo.PNG"}
                    alt={"kyoto"}
                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                />
            </div>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto "} id={"gallery"}>
                <img
                    src={"/freelance/kyotoProjects.PNG"}
                    alt={"kyoto"}
                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                />
            </div>


        </div>
    )

}