import React from "react";
import Stats from "@/app/iqp-dct/stats";
import ProjectGoal from "@/app/iqp-dct/project-goal";
import Research from "@/app/iqp-dct/research";
import TestingNumbers from "@/app/iqp-dct/testingNumbers";
import Gallery from "@/app/iqp-dct/gallery";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  2xl:px-72 py-24 md:pt-48"}>
            <div className={"border-t border-t-[#e1e1e1] my-16  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>What&#39;s IQP DCT?</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>A
                            personalized data tool for WPI undergrads</h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            Worcester Polytechnic Institute juniors participate in a humanitarian project
                            known as the Interactive Qualifying Project (IQP) in any part of the globe. Our tool serves
                            as an
                            application that helps students collect interviews and qualitative/quantitative data, along
                            with services such as
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
                        <h1 className={"text-newGray text-2xl font-medium xl:w-full max-w-[80%]"} id={"based"}>"How do
                            we get started?"</h1>
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
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full mt-1 md:max-w-[80%]"}
                            id={"based"}>What
                            do students need?</h1>
                    </div>
                    <div>
                        <Research/>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] my-16  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>User Testing</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%] mt-1"}
                            id={"based"}>What do students think?</h1>
                    </div>
                    <div>
                        <h1 className={"text-newGray"} id={"based"}>
                            Our user testing consisted of 3 weekly sessions, aiming to do 10 tests for the first 2 weeks
                            each, and then finalize
                            with 5 test in the last (25 total). Initially in the first beta version, we knew that we
                            would have a lot of issues
                            or UI tweaks, but in our findings as we got to the second week, those bugs diminished
                            greatly. We tweaked features
                            such as collapsible accordions for form categories, Form/Link Tile Navigation, and the
                            addition of MCQs.
                        </h1>
                        <TestingNumbers/>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] my-16  py-2"} id={"newLine"}>
                <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Final Design</h1>
                <Gallery/>
            </div>
            <div className={"border-t border-t-[#e1e1e1] mt-40 py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl  font-medium xl:w-full"}>Impact</h1>
                    </div>
                    <div>
                        <h1>
                            Our overarching goal was to create a concept application backed by the use case needs of
                            students
                            and we have done exactly that. The WPI President Grace Wang & the Global Studies Dean have
                            shown
                            significant interest in our developments, and currently this project is hosted by WPI
                            servers.
                            Additionally, we were featured on the WPI Computer Science department in a newsletter for
                            our efforts.
                            <br/>
                            <br/>
                            In April 2025, our team will present our application in our MQP showcase fo further expand
                            the attention
                            and needs of the IQP Data Collection Tool.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )

}