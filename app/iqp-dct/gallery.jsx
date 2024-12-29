import React from "react";

export default function Gallery() {
    return(
        <>
            <div>
                <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mt-20"} id={"gallery"}>
                    <video
                        src={"/dct/loginDashboard.mp4"}
                        className={"rounded-lg w-full h-full drop-shadow-xl"}
                        autoPlay
                        playsInline
                        loop
                        muted
                    />
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 border-t border-t-[#e1e1e1] mt-8 py-2 gap-y-4"}
                     id={"newLine"}>
                    <h1 className={"font-medium text-xl"}>Logging into your team dashboard</h1>
                    <h1 className={"text-sm"}>
                        Create your own account and login to your team's dashboard. If you do not have a team, you can
                        create/join one.
                    </h1>
                </div>
            </div>

            <div>
                <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mt-20"} id={"gallery"}>
                    <video
                        src={"/dct/form.mp4"}
                        className={"rounded-lg w-full h-full drop-shadow-xl"}
                        autoPlay
                        playsInline
                        loop
                        muted
                    />
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 border-t border-t-[#e1e1e1] mt-8 py-2 gap-y-4"}
                     id={"newLine"}>
                    <h1 className={"font-medium text-xl"}>Create your own forms</h1>
                    <h1 className={"text-sm"}>
                        Create data or interview forms with custom questions, along with attaching relevant links to
                        your project. Using AssemblyAI,
                        you can conduct your interviews, record, and transcribe your audio for further use.
                    </h1>
                </div>
            </div>

            <div>
                <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mt-20"} id={"gallery"}>
                    <video
                        src={"/dct/map.mp4"}
                        className={"rounded-lg w-full h-full drop-shadow-xl"}
                        autoPlay
                        playsInline
                        loop
                        muted
                    />
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 border-t border-t-[#e1e1e1] mt-8 py-2 gap-y-4"}
                     id={"newLine"}>
                    <h1 className={"font-medium text-xl"}>Geotag your form data</h1>
                    <h1 className={"text-sm"}>
                        With the power of OpenLayersMap and Nominatim API, you can locate your logged data entries, or
                        search it up.
                        You can also filter out data through a time frame slider.
                    </h1>
                </div>
            </div>
            <div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 grid lg:grid-cols-2 gap-5 mt-20 " id={"gallery"}>
                    <div id={"transparency"}>
                        <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Manage Your Team</p>
                        <img src={"/dct/manageTeam.PNG"} alt={"Image"} className={"rounded-md drop-shadow-md mb-5"}/>
                        <p className={"text-newGray text-sm mb-0.5"} id={"based"}>View Project Details</p>
                        <img src={"/dct/projectDetails.PNG"} alt={"Image"} className={"rounded-md drop-shadow-md"}/>
                    </div>
                    <div id={"transparency"}>
                        <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Help Page for Ease of Access</p>
                        <img src={"/dct/help.PNG"} alt={"Image"} className={"rounded-md drop-shadow-md mb-5"}/>
                        <p className={"text-newGray0 text-sm mb-0.5"} id={"based"}>Help Icon Dialog</p>
                        <img src={"/dct/question.PNG"} alt={"Image"} className={"rounded-md drop-shadow-md"}/>
                    </div>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 border-t border-t-[#e1e1e1] mt-8 py-2 gap-y-4"}
                     id={"newLine"}>
                    <h1 className={"font-medium text-xl"}>Project management and ease of access</h1>
                    <h1 className={"text-sm"}>
                        Manage your team and view their contributions, so you make sure everyone does their part.
                        To help you out with this application, there is a help page and various help icon popup
                        dialogs on specific pages needed.
                    </h1>
                </div>
            </div>
        </>
    )
}