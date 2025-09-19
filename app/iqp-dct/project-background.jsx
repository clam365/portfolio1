import React from "react";
import Gallery from "@/app/iqp-dct/gallery";
import {CaseStudySection} from "@/components/caseStudy/caseStudySection";
import {List} from "@/components/List";
import {AppWindow, ListOrdered, Sprout} from "lucide-react";
import {Clickable} from "@/components/clickable";
export const ProjectBackground = () => {
    return (
        <div className={"px-10  xl:px-72 py-24 md:pt-48"}>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"What's IQP DCT?"}
                                            subtitle={"A personalized data tool for WPI undergrads"}/>
                    <CaseStudySection.Content>
                        <h1 className={""}>
                            Worcester Polytechnic Institute undergraduates participate in a humanitarian project
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
                                    <h1 className={"my-1"}>students travel per year</h1>
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
                    <CaseStudySection.Title title={"Defining the Problem"} subtitle={"From Chaos to Clarity"}/>
                    <CaseStudySection.Content>
                        <h1 id={"based"}>
                            For many projects, teams must gather large volumes of diverse data, those being
                            qualitative/quantitative
                            inputs, surveys, and interviews. With this information logged and scattered across multiple
                            platforms and applications,
                            the process can quickly become disorganized and inefficient, making it harder to develop
                            cohesive solutions.
                            <br/>
                            <br/>
                            In 2023, the IQP Iceland Team began addressing this challenge by creating an app to reduce
                            the overhead of data management. However, their solution remained confined to its project
                            archive.
                            Building on their vision, we aim to establish a standardized workflow that empowers future
                            teams to
                            spend less time on logistics and more time on meaningful analysis.
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
                    <CaseStudySection.Title title={"UXR"} subtitle={"Student Needs & Competitive Analysis"}/>
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
            <CaseStudySection.SubSection>
                <CaseStudySection.SubHeader subheader={"User Flows"}/>
                <CaseStudySection.Content>
                    <h1>
                        Building on those insights, we designed the following user flows to directly address the
                        challenges.
                        Below, the first flow on the left details the onboarding process for a student, guiding users
                        from SSO login to project selection.
                        Students can create a new project, join with a PIN provided by a team, or view an existing
                        project. Role-based permissions
                        ensures that project leads maintain oversight while the members collaborate efficiently.
                        <br/>
                        <br/>
                        The second flow on the right focuses on how users engage with the forms, starting from the
                        project dashboard and branching into
                        options such as creating, reusing, editing, and adding data. Through the mapping page, we can
                        visualize the geotagged data over time.
                        Forms are accessible through both pages.
                    </h1>
                </CaseStudySection.Content>
            </CaseStudySection.SubSection>
            <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 -mx-10 xl:-mx-72 my-20 mb-40"}>
                <div className="">
                    <img
                        src={"/dct/user_flow_login.png"}
                        alt="Image"
                        className="w-full"
                    />
                </div>
                <div className="">
                    <img
                        src={"/dct/user_flow_dashboard.png"}
                        alt="Image"
                        className="w-full"
                    />
                </div>
            </div>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"Design System"}/>
                    <CaseStudySection.Content>
                        <h1>
                            The design system of the IQP DCT serves as a visual bridge between WPI&#39;s existing
                            interfaces and
                            a refreshed, modern aesthetic from shadcn. By blending in familiarity with modern minimalist
                            principles,
                            we ensure consistency across the platform while introducing a cleaner and more intuitive
                            student experience.
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 -mx-10 xl:-mx-72 mt-20 mb-4 items-stretch">
                <div className="flex flex-col h-full">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <img src="/dct/eye.png" alt="Image" className="w-full"/>
                        <img src="/dct/createForm.png" alt="Image" className="w-full"/>
                    </div>
                    <img src="/dct/card.png" alt="Image" className="w-full flex-1 object-cover"/>
                </div>
                <div className="h-full">
                    <img src="/dct/icons.png" alt="Image" className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className="-mx-10 xl:-mx-72">
                <img
                    src={"/dct/iqp_palette.png"}
                    alt="Image"
                    className="w-screen max-w-none"
                />
            </div>
            <div className="-mx-10 xl:-mx-72 mt-4 mb-40">
                <img
                    src={"/dct/system.png"}
                    alt="Image"
                    className="w-screen max-w-none"
                />
            </div>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"Design Iterations"}/>
                    <CaseStudySection.Content>
                        <h1>
                            After defining the design system, we began to explore how the core flows would look in
                            practice. The initial mockups
                            helped visualize basic layouts for forms, dashboards, and project onboarding. These early
                            drawings focused on functionality,
                            making sure all the required steps were represented.
                            <br/>
                            <br/>
                            As a note, all of us were unfamiliar with Figma and the fact that shadcn has their own Figma
                            design system in place. As a
                            result, our early mockups were limited by the initial learning curve, but never the less
                            this provided a valuable learning
                            experience on how to format our application.
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <div className="-mx-10 xl:-mx-72 mt-4 mb-20">
                <img
                    src={"/dct/before.png"}
                    alt="Image"
                    className="w-screen max-w-none"
                />
            </div>
            <CaseStudySection.SubSection>
                <CaseStudySection.SubHeader subheader={"A/B User Testing"}/>
                <CaseStudySection.Content>
                    <h1>
                        With our starting full-stack prototype reflecting our first iteration mockups, we began
                        conducting
                        A/B user testing to uncover usability issues and validate design decisions. This phase allowed
                        us
                        to directly compare different interface variations, helping us identify which layouts,
                        navigation patterns,
                        and UI best aligned with student expectations.
                        <br/>
                        <br/>
                        Our user testing was done over three weeks with a goal of completing 10 tests in each week, for
                        a total of 30 sessions. Most of our feedback came from the first two weeks.
                        <br/>
                        <br/>
                    </h1>
                    <List>
                        <List.Header header={"Student & Faculty Feedback"}/>
                        <List.Section>
                            <List.NumberSubtitle number={1} header={"Form Tiles & Sections"}/>
                            <Clickable>
                                <Clickable.Trigger>
                                    <div
                                        className={"bg-[#f2f2f2] rounded-xl p-4 flex flex-col justify-center m-auto mb-4"}
                                        id={"gallery"}>
                                        <img src={"/schneider-electric/value_proposition.png"} alt={"Image"}
                                             className={"rounded-md drop-shadow-md"}/>
                                    </div>
                                </Clickable.Trigger>
                                <Clickable.Content>
                                    <img src={"/schneider-electric/value_proposition.png"} alt={"Image"}
                                         className={"rounded-md drop-shadow-md"}/>
                                </Clickable.Content>
                            </Clickable>
                            <h1>
                                Our previous design on the Forms Page contained a table of forms, filterable through the
                                top filters.
                                However, this approach quickly became cluttered and made it difficult for users to
                                distinguish between
                                different types of forms.
                            </h1>
                            <Clickable>
                                <Clickable.Trigger>
                                    <div
                                        className={"bg-[#f2f2f2] rounded-xl p-4 flex flex-col justify-center m-auto  mt-4 mb-4"}
                                        id={"gallery"}>
                                        <img src={"/schneider-electric/value_proposition.png"} alt={"Image"}
                                             className={"rounded-md drop-shadow-md"}/>
                                    </div>
                                </Clickable.Trigger>
                                <Clickable.Content>
                                    <img src={"/schneider-electric/value_proposition.png"} alt={"Image"}
                                         className={"rounded-md drop-shadow-md"}/>
                                </Clickable.Content>
                            </Clickable>
                            <h1>
                                In the new design, each category of forms (Data, Interview, Links) is organized into
                                collapsible
                                accordions, allowing teams to expand only the sections most relevant to their focus
                                area. This not only
                                reduces visual noise, but also makes navigation more intuitive. A prominent green button
                                now provides
                                a clear entry point for data collection as a primary button. Additionally, supporting
                                functions for data
                                analysis and project management are placed on the right hand side, giving quick access
                                to secondary actions
                                without overwhelming the main workflow.
                            </h1>
                        </List.Section>
                    </List>
                </CaseStudySection.Content>
            </CaseStudySection.SubSection>
            <div className="-mx-10 xl:-mx-72 mt-20">
                <img
                    src={"/dct/after.png"}
                    alt="Image"
                    className="w-screen max-w-none"
                />
            </div>
            <div className="-mx-10 xl:-mx-72 mt-4 mb-20">
                <img
                    src={"/dct/iqp_mockup.png"}
                    alt="Image"
                    className="w-screen max-w-none"
                />
            </div>

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