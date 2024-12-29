import React from "react";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  2xl:px-72 py-24 md:pt-48"}>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"} id={"gallery"}>
                <img
                    src={"/freelance/kyoto.PNG"}
                    alt={"kyoto"}
                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                />
            </div>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"} id={"gallery"}>
                <img
                    src={"/freelance/kyotoHome.PNG"}
                    alt={"kyoto"}
                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                />
            </div>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"} id={"gallery"}>
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