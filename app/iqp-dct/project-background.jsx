import React from "react";
import Gallery from "@/app/iqp-dct/gallery";
import {CaseStudySection} from "@/components/caseStudy/caseStudySection";
import {List} from "@/components/List";
import {AppWindow, ListOrdered, Sprout} from "lucide-react";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  xl:px-72 py-24 md:pt-48"}>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"What's IQP DCT?"} subtitle={"A personalized data tool for WPI undergrads"}/>
                    <CaseStudySection.Content>
                        <h1 className={""}>
                            Worcester Polytechnic Institute juniors participate in a humanitarian project
                            known as the Interactive Qualifying Project (IQP) in any part of the globe. Our tool serves
                            as an
                            application that helps students collect interviews and qualitative/quantitative data, along
                            with services such as
                            geotagging, transcriptions, and team management.
                            <div className={"mt-10"}/>
                            <List>
                                <List.Header header={"Some numbers for context"}/>
                                <List.Section>
                                    <h1 className={"text-5xl font-medium"}>1,200</h1>
                                    <h1 className={"my-1"}>juniors travel per year</h1>
                                </List.Section>
                                <List.Section>
                                    <h1 className={"text-5xl font-medium"}>50+</h1>
                                    <h1 className={"my-1"}>project sites</h1>
                                </List.Section>
                                <List.Section>
                                    <h1 className={"text-5xl font-medium"}>8</h1>
                                    <h1 className={"my-1"}>weeks of community work</h1>
                                </List.Section>
                            </List>
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"Context"} subtitle={"How do we get started?"}/>
                    <CaseStudySection.Content>
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
                        <div className={"border-t border-t-[#e1e1e1] mt-8 mb-10 py-2"} id={"newLine"}>
                            <h1 className={"text-spotify text-sm"} id={"spotifyText"}>Project Goal</h1>
                            <h1 className={"text-3xl mt-1"}>
                                Design and build a fullstack app that will methodically standardize data collection
                                for efficient project workflow.
                            </h1>
                        </div>
                        <List>
                            <List.Header header={"Key Features"}/>
                            <List.Section>
                                <h1>
                                    IQP teams can create and manage a unique project dashboard for their needs and add
                                    in team members
                                    or faculty.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <h1>
                                    Every time a member logs data, it will be geotagged where it was taken onto the
                                    interactive map.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <h1>
                                    Many IQP data sites may not have service or wifi. Students can store data in local
                                    storage until
                                    syncing at a later time.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <h1>
                                    After collecting respective data, a student should be able to export the data onto a
                                    .csv for further analysis.
                                </h1>
                            </List.Section>
                        </List>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"UXR"} subtitle={"What do students need?"}/>
                    <CaseStudySection.Content>
                        <div className={"mt-4"}/>
                        <List>
                            <List.Header header={"Three main research pillars"}/>
                            <List.Section>
                                <div className={"flex gap-x-1 mb-2"}>
                                    <ListOrdered className={"text-newGray"} id={"based"}/>
                                    <h1 className={"text-newGray"} id={"based"}>Prioritization</h1>
                                </div>
                                <h1 className={""}>
                                    We analyzed 20 unique IQP project papers to find common metrics in the way students
                                    collected data. To minimize error, all team members took part in reviewing another
                                    peer's
                                    overview to check
                                    for any mistakes. We prioritized the highest percentages as our first sprints and
                                    progressed
                                    from there. Out
                                    of those 20, 90% had interviews, 90% qualitative data, 70% surveys, and 50%
                                    quantitative
                                    data.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <div className={"flex gap-x-1 mb-2"}>
                                    <Sprout className={"text-newGray"} id={"based"}/>
                                    <h1 className={"text-newGray"} id={"based"}>Viability</h1>
                                </div>
                                <h1 className={""}>
                                    Existing applications such as Fastfield and Jotfield allow form building, geotagging
                                    data,
                                    and exportation,
                                    but what disadvantages to they have? Not free, complicated UI, and is intended for
                                    the
                                    electrical industries.
                                    Our application will be tailored to WPI students as a university service for free
                                    and aim to
                                    have a simple UI.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <div className={"flex gap-x-1 mb-2"}>
                                    <AppWindow className={"text-newGray"} id={"based"}/>
                                    <h1 className={"text-newGray"} id={"based"}>Revitalization</h1>
                                </div>
                                <h1 className={""}>
                                    With current WPI pages such as the university site, planner.wpi.edu, and
                                    courselistings.wpi.edu,
                                    we will revitalize the current color palette and component structures so users can
                                    recognize similar
                                    layouts. Using shadcn UI, our interface brings a new level to the frontier.
                                </h1>
                            </List.Section>
                        </List>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"User Testing"} subtitle={"What do students think?"}/>
                    <CaseStudySection.Content>
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
                        <div className={"mt-10"}/>
                        <List>
                            <List.Header header={"Students rated 8 or higher on these metrics on a scale of 1-10"}/>
                            <List.Section>
                                <h1 className={"text-5xl font-medium"}>88%</h1>
                                <h1 className={"my-1"}>Overall Satisfaction </h1>
                            </List.Section>
                            <List.Section>
                                <h1 className={"text-5xl font-medium"}>100%</h1>
                                <h1 className={"my-1"}>Aesthetics</h1>
                            </List.Section>
                            <List.Section>
                                <h1 className={"text-5xl font-medium"}>87%</h1>
                                <h1 className={"my-1"}>Navigation</h1>
                            </List.Section>
                            <List.Section>
                                <h1 className={"text-5xl font-medium"}>81%</h1>
                                <h1 className={"my-1"}>Performance</h1>
                            </List.Section>
                        </List>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
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
                            In April 2025, we presented our application in our MQP showcase to drive attention, and this
                            will be continued as another MQP for the future.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )

}