import React from "react";
import {AppWindow, ListOrdered, Sprout} from "lucide-react";
export const ProjectBackground = () => {
    return (
        <>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"challenge"}>
                <h1 className={"text-newGray"}>CHALLENGE</h1>
                <h1 className={"font-medium text-3xl"}>From chaos to clarity</h1>
                <h1>
                    Every year, 1,200 WPI undergrads travel to 50+ global locations for 8-week
                    humanitarian projects, collecting interviews, surveys, and qualitative/quantitative
                    data across scattered platforms. The result? Disorganized workflows, lost data, and students
                    spending more time managing tools than conducting analysis.
                </h1>
            </div>
            <div className={"mt-10"}>
                <img src={"dct/disorganized.png"} alt={"team photo"} className={"w-full border border-gray-300"}/>
                <h1 className={"text-newGray mt-2"}>
                    Lots of context switching, data fragmentation, and export/compatability issues.
                </h1>
            </div>
            <div className={"mt-10 space-y-2 scroll-mt-40"}>
                <h1 className={"text-newGray"}>Solution</h1>
                <h1 className={"font-medium text-3xl"}>Build a unified platform to eliminate logistical overhead</h1>
                <h1>
                    Using a PERN stack application, we aimed to eliminate the base logistical overhead and empower our
                    fellow students to focus on what matters most: solving real world problems.
                </h1>
            </div>
            <div className={"mt-10 space-y-2 scroll-mt-40"}>
                <h1 className={"text-newGray"}>Key Expected Features</h1>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>
                    <h1>IQP teams can create/manage their own dashboard</h1>
                    <h1>Logged data will be geotagged on an interactive map</h1>
                    <h1>Store data on local storage in offline spaces until later sync</h1>
                    <h1>Export data onto .csv for further analysis</h1>
                </div>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"uxr"}>
                <h1 className={"text-newGray"}>USER RESEARCH</h1>
                <h1 className={"font-medium text-3xl"}>Student Needs &amp; Competitive Analysis</h1>
                <h1>
                    We took a three-pillar approach to understand our student needs and validate our direction.
                </h1>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"}>
                <div>
                    <div className={"flex gap-x-1 mb-2"}>
                        <ListOrdered className={"text-newGray"} id={"based"}/>
                        <h1 className={"text-newGray"} id={"based"}>Prioritization</h1>
                    </div>
                    <h1>
                        We analyzed 20 IQP papers to identify common data collection methods, with peer reviews to
                        minimize bias. This guided our feature prioritization: interviews and qualitative data first,
                        followed by surveys and quantitative metrics.
                    </h1>
                </div>
                <div>
                    <div className={"flex gap-x-1 mb-2"}>
                        <Sprout className={"text-newGray"} id={"based"}/>
                        <h1 className={"text-newGray"} id={"based"}>Viability</h1>
                    </div>
                    <h1>
                        Existing tools like Fastfield and Jotfield were costly,
                        had complex UIs, and were designed for electrical industries, not students. This validated
                        our opportunity to create a free, student-tailored solution.
                    </h1>
                </div>
                <div>
                    <div className={"flex gap-x-1 mb-2"}>
                        <AppWindow className={"text-newGray"} id={"based"}/>
                        <h1 className={"text-newGray"} id={"based"}>Revitalization</h1>
                    </div>
                    <h1>
                        WPI's existing digital interfaces
                        established familiar patterns for students. Leveraging shadcn UI modernized the visual language
                        while maintaining recognizability, reducing cognitive load for users already comfortable with
                        WPI's
                        ecosystem.
                    </h1>
                </div>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"userflows"}>
                <h1 className={"text-newGray"}>User Flows</h1>
                <h1 className={"font-medium text-3xl"}>Onboarding &amp; Platform</h1>
                <h1>
                    The platform features two core flows: onboarding (SSO login to project setup with role-based
                    permissions)
                    and data collection (form creation to map visualization with flexible access points).
                </h1>
            </div>
            <img
                src={"/dct/user_flow_login.png"}
                alt="Image"
                className="w-full mt-10 border border-gray-300"
            />
            <img
                src={"/dct/user_flow_dashboard.png"}
                alt="Image"
                className="w-full mt-10 border border-gray-300"
            />
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"designsystem"}>
                <h1 className={"text-newGray"}>DESIGN SYSTEM</h1>
                <h1>
                    The design system of the IQP DCT serves as a visual bridge between WPI's existing
                    interfaces and a refreshed, modern aesthetic from shadcn. By blending in familiarity
                    with modern minimalist principles, we ensure consistency across the platform while
                    introducing a cleaner and more intuitive student experience.
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-20 mb-4 items-stretch">
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
            <div className="">
                <img
                    src={"/dct/iqp_palette.png"}
                    alt="Image"
                    className=""
                />
            </div>
            <div className=" mt-4">
                <img
                    src={"/dct/system.png"}
                    alt="Image"
                    className="border border-gray-300"
                />
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"designiterations"}>
                <h1 className={"text-newGray"}>DESIGN ITERATIONS</h1>
                <h1>
                    After defining the design system, initial mockups visualized basic layouts for forms,
                    dashboards, and onboarding. With the team unfamiliar with Figma and shadcn's design system,
                    early mockups reflected a learning curve but provided valuable direction for the application's
                    structure.
                </h1>
            </div>
            <div className="mt-10">
                <img
                    src={"/dct/before.png"}
                    alt="Image"
                    className=""
                />
                <h1 className={"mt-2 text-newGray"}>Before</h1>
            </div>
            <div className={"mt-10 space-y-2 scroll-mt-40"}>
                <h1 className={"text-newGray"}>Iterative User Testing</h1>
                <h1>
                    With a functional full-stack prototype, we conducted 30 user testing sessions over 3 weeks
                    (10 per week) with students and faculty. This iterative approach revealed critical usability
                    issues and validated design decisions, with most actionable feedback emerging in the first
                    two weeks.
                </h1>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"}>
                <img src={"/dct/forms_after.png"} alt={"Image"}
                     className={"w-full h-auto border border-gray-300"}/>
                <div className="flex flex-col justify-end">
                    <h1 className={"text-newGray"}>Forms</h1>
                    <h1>
                        Forms were restructured into collapsible accordions instead of sidebar pages. '
                        Qualitative, quantitative, and survey forms unified under "Data Form" with integrated
                        tables and graphs, eliminating click depth and centralizing all form functions in one place.
                    </h1>
                </div>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"}>
                <img src={"/dct/dashboard.png"} alt={"Image"}
                     className={"w-full h-auto border border-gray-300"}/>
                <div className="flex flex-col justify-end">
                    <h1 className={"text-newGray"}>Dashboard</h1>
                    <h1>
                        The dashboard replaced a redundant data map with member contributions and real-time project
                        updates,
                        transforming it from a visualization duplicate into a genuine project command center.
                    </h1>
                </div>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"}>
                <img src={"/dct/interview.png"} alt={"Image"}
                     className={"w-full h-auto border border-gray-300"}/>
                <div className="flex flex-col justify-end">
                    <h1 className={"text-newGray"}>Interview Form</h1>
                    <h1>
                        The original mockup lacked visual hierarchy where all fields appeared identical and recording
                        placement was unclear. The redesigned two-panel layout splits structured form fields (left)
                        and audio recording/transcription (right), enabling multitasking and aligning with how teams
                        actually conduct interviews.
                    </h1>
                </div>
            </div>
            <div className="mt-20">
                <img
                    src={"/dct/after.png"}
                    alt="Image"
                    className=""
                />
                <h1 className={"mt-2 text-newGray"}>After</h1>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"feedback"}>
                <h1 className={"text-newGray"}>FEEDBACK</h1>
                <h1 className={"font-medium text-3xl"}>What did students think?</h1>

                <h1>
                    After a successful user testing session, we asked the last testing session to fill out an
                    experience survey of the application.
                    Below are the final screenshots of the application and stats of the Likert scale survey.
                </h1>
            </div>
            <div className={"mt-10 flex flex-col sm:flex-row flex-wrap justify-between gap-y-5 gap-x-5"}>
                <div>
                    <h1 className={"text-5xl font-medium"}>88%</h1>
                    <h1 className={"my-1"}>Overall Satisfaction </h1>
                </div>
                <div>
                    <h1 className={"text-5xl font-medium"}>100%</h1>
                    <h1 className={"my-1"}>Aesthetics</h1>
                </div>
                <div>
                    <h1 className={"text-5xl font-medium"}>87%</h1>
                    <h1 className={"my-1"}>Navigation</h1>
                </div>
                <div>
                    <h1 className={"text-5xl font-medium"}>81%</h1>
                    <h1 className={"my-1"}>Performance</h1>
                </div>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"reflections"}>
                <h1 className={"text-newGray"}>REFLECTIONS</h1>
                <h1 className={"font-medium text-3xl"}>What I learned</h1>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"}>
                <div>
                    <h1 className={"text-newGray text-xl"}>System Thinking</h1>
                    <h1>
                        Frontend and design work closely together, and I understood the capabilities of each.
                    </h1>
                </div>
                <div>
                    <h1 className={"text-newGray text-xl"}>One UI component can change everything</h1>
                    <h1>
                        What one component may work for one area may not work for another. Seeing what is out there
                        in the market helps determine your unique pick.
                    </h1>
                </div>
            </div>
        </>
    )

}