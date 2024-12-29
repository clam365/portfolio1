import {ArrowUpRight} from "lucide-react";
import React from "react";
import Stats from "@/app/iqp-dct/stats";
import ProjectGoal from "@/app/iqp-dct/project-goal";
import Research from "@/app/iqp-dct/research";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  2xl:px-72 py-24 md:pt-48"}>
            <div className={"border-t border-t-[#e1e1e1] my-16  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>What&#39;s IQP DCT?</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>A personalized data tool for WPI undergrads</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>
                            Worcester Polytechnic Institute juniors participate in a humanitarian project
                            known as the Interactive Qualifying Project (IQP) in any part of the globe. Our tool serves as an
                            application that helps students collect interviews and qualitative/quantitative data, along with services such as
                            geotagging, transcriptions, and team management.
                        </h1>
                        <Stats/>
                    </div>

                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] my-24 md:my-36 py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-2xl font-medium xl:w-full"}>Context</h1>
                        <h1 className={"text-newGray text-2xl font-medium xl:w-full max-w-[80%]"} id={"based"}>"How do we get started?"</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>
                            Depending on the project, usually teams must collect vast amounts of different types of data
                            ranging from qualitative,
                            quantitative, surveys, and interviews. With multiple platforms and applications tracking
                            this data, it becomes easy to be disorganized
                            and inefficient while putting together their comprehensive solutions.
                            <br/>
                            <br/>
                            The 2023 Iceland Team initially tried to tackle on this massive overhead cost but the app
                            was confined to its project archive.
                            We sought out to continue their vision and create a standardized flow for juniors so that
                            they can focus on the analysis that is
                            important.
                        </h1>
                        <ProjectGoal/>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1]  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>UXR</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>What do students need?</h1>
                    </div>
                    <div>
                        <Research/>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] mt-12 py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl  font-medium xl:w-full"}>Future Goals</h1>
                        <h1 className={"text-newGray text-3xl font-medium mt-1"} id={"based"}>Sustainability First.</h1>
                    </div>
                    <div>
                        <h1>
                            We believe Wildscape has a great user concept behind it. In the future, we really want to
                            expand beyond the time limit we were given. Wildscape deserves a more integrated approach
                            with
                            Google Maps API, such that it can go directly in POV mode to see the spot. Additionally,
                            implementing AI to
                            differentiate between real nature photos, AI photos, and spam photos would help keep our
                            dashboard and mission
                            values rich. It would also be great to turn this into a mobile app, along with partnering
                            with environmental sustainability
                            stakeholders, such as the National Park Service.
                        </h1>
                        <div className={"flex gap-x-3 mt-5"}>
                            <a href={"https://wildscape.vercel.app/"}
                               target="_blank" rel="opener referrer"
                               className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                               id={"descriptionTag"}>
                                <h1 className={"text-sm"}>WILDSCAPE</h1>
                                <ArrowUpRight
                                    className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                                />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )

}