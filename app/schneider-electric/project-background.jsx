import React from "react";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  xl:px-72 py-24 md:pt-48"}>
            <div className={"border-t border-t-[#e1e1e1]   py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Context</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>10
                            week duration</h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            Schneider Electric has traditionally operated as a B2B, offering energy management and
                            automation solutions. With the
                            new launch of their new product application, we expand into B2C flows directly to the
                            homeowners with direct access to products.
                            Currently, this app is piloted in France! For the first 6 weeks of my internship, I had a
                            huge stake in driving the content in Builder.io,
                            while making UI suggestions and fixes across the site.
                        </h1>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] my-16  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 mb-10"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Defining the Problem</h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            I identified a common pain points across the desktop product landing pages (PLP) using
                            competitive benchmarking insights and ContentSquare heatmaps,
                            where users struggled to get to the product section and even browse/find the products they
                            need. Additionally, article readability needed to be enhanced to better engage and inform
                            readers.
                        </h1>
                    </div>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 mb-10 "}>
                        <div>
                            <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                                id={"based"}>Filter
                                Optimization & Product Details</h1>

                            <h1 className={"pr-10"}>
                                <br/>
                                The Odace Collection serves as a representative to all PLPs, as they are the same
                                component
                                structure.
                                However, finding the product is not so easy. The formatting unintentionally assumes the
                                user
                                knows EXACTLY what they want.
                            </h1>
                        </div>
                        <div>

                            <h1 className={"text-spotify text-sm mt-12 lg:mt-0 mb-1"} id={"spotifyText"}>Key Usability
                                Issues</h1>
                            <div className={"border-t border-t-[#e1e1e1]  py-3"} id={"newLine"}>
                                <h1>
                                    Filters are accessed through a button and require an open/close functionality while
                                    the
                                    user has to navigate through up to 108 possible filters.
                                    With no search bar included, they must continuously scroll for options, impacting
                                    product journey and overwhelming them.
                                </h1>
                            </div>
                            <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                                <h1>
                                    Product Cards have no relevant specific details and take up massive amounts of
                                    screen real estate, especially in List Card View.
                                </h1>
                            </div>
                            <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                                <h1>
                                    Use must scroll through 4288 pixels of height or click CTAs before accessing
                                    products.
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mt-10"}
                             id={"gallery"}>
                            <video
                                src={"/schneider-electric/odace_before.mp4"}
                                className={"rounded-lg w-full h-full drop-shadow-xl"}
                                autoPlay
                                playsInline
                                loop
                                muted
                            />
                        </div>
                    </div>
                </div>


                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16 mt-16"}>
                    <div>
                        <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                            id={"based"}>Article Readability</h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            Article text spans the entire width of the desktop while only limited by 96 pixels of
                            padding. With a 20pt font and an average of
                            176 characters per line, users&#39; eyes are forced to travel greater distances across the
                            screen. It becomes harder to track lines,
                            and even the need to move the head or head occurs.
                        </h1>
                    </div>
                </div>
            </div>



            <div>
                <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto "}
                     id={"gallery"}>
                    <img
                        src={"/schneider-electric/before.png"}
                        alt={"article"}
                        className={"rounded-lg w-full h-full drop-shadow-xl"}
                    />
                </div>
                
            </div>

        </div>
    )

}