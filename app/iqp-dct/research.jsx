import React from "react";
import {AppWindow, ListOrdered, Sprout} from "lucide-react";

export default function Research() {
    return (
        <>
            <h1 className={"text-spotify text-sm mt-5"} id={"spotifyText"}>Three main research pillars</h1>
            <div className={"border-t border-t-[#e1e1e1] mt-2 py-2"} id={"newLine"}>
                <div className={"flex gap-x-1 mb-2"}>
                    <ListOrdered className={"text-newGray"} id={"based"}/>
                    <h1 className={"text-newGray"} id={"based"}>Prioritization</h1>
                </div>
                <h1 className={""}>
                    We analyzed 20 unique IQP project papers to find common metrics in the way students
                    collected data. To minimize error, all team members took part in reviewing another peer's
                    overview to check
                    for any mistakes. We prioritized the highest percentages as our first sprints and progressed
                    from there. Out
                    of those 20, 90% had interviews, 90% qualitative data, 70% surveys, and 50% quantitative
                    data.
                </h1>
            </div>
            <div className={"border-t border-t-[#e1e1e1] mt-2 py-2"} id={"newLine"}>
                <div className={"flex gap-x-1 mb-2"}>
                    <Sprout className={"text-newGray"} id={"based"}/>
                    <h1 className={"text-newGray"} id={"based"}>Viability</h1>
                </div>
                <h1 className={""}>
                    Existing applications such as Fastfield and Jotfield allow form building, geotagging data,
                    and exportation,
                    but what disadvantages to they have? Not free, complicated UI, and is intended for the
                    electrical industries.
                    Our application will be tailored to WPI students as a university service for free and aim to
                    have a simple UI.
                </h1>
            </div>
            <div className={"border-t border-t-[#e1e1e1] mt-2 py-2"} id={"newLine"}>
                <div className={"flex gap-x-1 mb-2"}>
                    <AppWindow className={"text-newGray"} id={"based"}/>
                    <h1 className={"text-newGray"} id={"based"}>Revitalization</h1>
                </div>
                <h1 className={""}>
                    With current WPI pages such as the university site, planner.wpi.edu, and courselistings.wpi.edu,
                    we will revitalize the current color palette and component structures so users can recognize similar
                    layouts. Using shadcn UI, our interface brings a new level to the frontier.
                </h1>
            </div>
        </>

    )
}