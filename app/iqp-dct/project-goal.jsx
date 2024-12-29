export default function ProjectGoal() {
    return (
        <div className={"border-t border-t-[#e1e1e1] mt-8 py-2"} id={"newLine"}>
            <div>
                <h1 className={"text-spotify text-sm"} id={"spotifyText"}>Project Goal</h1>
                <h1 className={"text-3xl mt-1"}>
                    Design and build a fullstack app that will methodically standardize data collection
                    for efficient project workflow.
                </h1>
            </div>
            <h1 className={"text-spotify text-sm mt-12 mb-1"} id={"spotifyText"}>Key Features</h1>
            <div className={"border-t border-t-[#e1e1e1]  py-3"} id={"newLine"}>
                <h1>
                    IQP teams can create and manage a unique project dashboard for their needs and add in team members
                    or faculty.
                </h1>
            </div>
            <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                <h1>
                    Every time a member logs data, it will be geotagged where it was taken onto the interactive map.
                </h1>
            </div>
            <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                <h1>
                    Many IQP data sites may not have service or wifi. Students can store data in local storage until
                    syncing at a later time.
                </h1>
            </div>
            <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                <h1>
                    After collecting respective data, a student should be able to export the data onto a .csv for further analysis.
                </h1>
            </div>
        </div>
    )
}