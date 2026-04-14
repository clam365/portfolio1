import React from "react";
import {AppWindow, ListOrdered, MapPinned, PieChart, Sparkles, Sprout, WifiOff} from "lucide-react";
export const ProjectBackground = () => {
    return (
        <>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"challenge"}>
                <h1 className={"text-newGray"}>CHALLENGE</h1>
                <h1 className={"font-medium text-3xl"}>No playbook. No system. Figure it out.</h1>
                <h1>
                    Imagine landing in a country you&apos;ve never been to, with 8 weeks to deliver
                    real research, but there is no system for how to collect, organize, or store any of it.
                    IQP teams improvise, stitching together platforms that don&apos;talk to each other. The most
                    critical weeks of the project get quietly eaten up by logistics, not research.
                </h1>
            </div>
            <div className={"mt-10"}>
                <img src={"dct/disorganized.png"} alt={"team photo"} className={"w-full border border-gray-300"}/>
                <h1 className={"text-newGray mt-2"}>
                    Lots of context switching, data fragmentation, and export/compatability issues between platforms.
                </h1>
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
                        Analyzed 20 IQP papers to identify common data collection methods, guiding sprint feature
                        prioritization.
                    </h1>
                </div>
                <div>
                    <div className={"flex gap-x-1 mb-2"}>
                        <Sprout className={"text-newGray"} id={"based"}/>
                        <h1 className={"text-newGray"} id={"based"}>Viability</h1>
                    </div>
                    <h1>
                        Existing tools were costly, had complex UIs, and were designed for enterprise industries, not
                        students. This validated
                        our opportunity for a free, student-tailored solution.
                    </h1>
                </div>
                <div>
                    <div className={"flex gap-x-1 mb-2"}>
                        <AppWindow className={"text-newGray"} id={"based"}/>
                        <h1 className={"text-newGray"} id={"based"}>Revitalization</h1>
                    </div>
                    <h1>
                        Using existing WPI digital foundations allows a natural extension of the ecosystem.
                    </h1>
                </div>
            </div>
            <div className={"mt-10 space-y-2 scroll-mt-40"}>
                <h1 className={"text-newGray"}>Solution</h1>
                <h1 className={"font-medium text-3xl"}>
                    Create a unified platform that standardizes data collection to
                    <span className="bg-yellow-200 hover:bg-yellow-300 transition px-1 rounded">streamline project workflows</span> and
                    <span className="bg-yellow-200 hover:bg-yellow-300 transition px-1 rounded">
                    eliminate logistical overhead
                    </span>.
                </h1>
                <h1>
                    Using a PERN stack application, we aimed to eliminate the base logistical overhead and empower our
                    fellow students to focus on what matters most: solving real world problems.
                </h1>
            </div>
            <div className={"mt-10 space-y-2 scroll-mt-40"}>
                <h1 className={"text-newGray"}>Key Expected Features</h1>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <div>
                        <div className={"flex gap-2 items-center text-newGray"}>
                            <PieChart/>
                            <h1>Team Dashboard</h1>
                        </div>
                        <h1>
                            Manage team contributions and data.
                        </h1>
                    </div>
                    <div>
                        <div className={"flex gap-2 items-center text-newGray"}>
                            <MapPinned/>
                            <h1>Geotagging</h1>
                        </div>
                        <h1>
                            Data entries are geotagged onto map for location context.
                        </h1>
                    </div>
                    <div>
                        <div className={"flex gap-2 items-center text-newGray"}>
                            <WifiOff/>
                            <h1>Offline Usage</h1>
                        </div>
                        <h1>
                            Data linked to local storage when outages occur.
                        </h1>
                    </div>
                    <div>
                        <div className={"flex gap-2 items-center text-newGray"}>
                            <Sparkles/>
                            <h1>AI Forms</h1>
                        </div>
                        <h1>
                            Dynamic form building and AI assisted interviews.
                        </h1>
                    </div>
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
            <div className={"my-10"}>
                <img src={"/dct/dashboard1.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-newGray mt-2"}>
                    The original forms flat table buried forms in click depth, so we restructured how students actually worked from start to finish in task flow: collapsible
                    accordion groups with entry counts and actions visible.
                </h1>
            </div>
            <div className={"my-10"}>
                <img src={"/dct/interview1.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-newGray mt-2"}>
                    Interview process literally had no IA structure. There is now 2 panels with structured fields on the left, and AI-assisted recording
                    and notes on the right for separate context and multitasking abilities.
                </h1>
            </div>
            <div className="mt-20">
                <img
                    src={"/dct/after.png"}
                    alt="Image"
                    className=""
                />
                <h1 className={"mt-2 text-newGray"}>After</h1>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40"} id={"outcomes"}>
                <h1 className={"text-newGray"}>OUTCOMES</h1>
                <h1 className={"font-medium text-3xl"}>System-wide Integration</h1>

                <h1>
                    After a successful user testing session, we presented our solutions to the WPI President and Global
                    School Dean.
                    Our application was then officially integrated into WPI&apos;s servers, making it accessible to more
                    than
                    1,200 students across 50+ project sites worldwide!
                </h1>
            </div>
            {/*<div className={"mt-10 flex flex-col sm:flex-row flex-wrap justify-between gap-y-5 gap-x-5"}>*/}
            {/*    <div>*/}
            {/*        <h1 className={"text-5xl font-medium"}>88%</h1>*/}
            {/*        <h1 className={"my-1"}>Overall Satisfaction </h1>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h1 className={"text-5xl font-medium"}>100%</h1>*/}
            {/*        <h1 className={"my-1"}>Aesthetics</h1>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h1 className={"text-5xl font-medium"}>87%</h1>*/}
            {/*        <h1 className={"my-1"}>Navigation</h1>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h1 className={"text-5xl font-medium"}>81%</h1>*/}
            {/*        <h1 className={"my-1"}>Performance</h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
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