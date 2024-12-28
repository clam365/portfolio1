import {ArrowUpRight} from "lucide-react";
import React from "react";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  2xl:px-72 py-24 md:pt-48"}>
            <video
                src={"/freelance/wildscape_landingPage.mp4"}
                className={"rounded-lg w-full h-full drop-shadow-xl"}
                autoPlay
                playsInline
                loop
                muted
            />
            <div className={"border-t border-t-[#e1e1e1] my-24 md:my-36 py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Background</h1>
                    <h1>
                        The SASE Hackathon had 31 team submissions and approximately 124 participants involved, all
                        competing for $3,750 in prizes. 2024's theme was LifeHacks, focusing on the 4 stages of growth:
                        Childhood, Adolescence, Adult, and Elderly. Teams could choose ONE track and come up with an idea following its sub-topic
                        guidelines, and we chose the adolescence track with an environmental social impact side.
                    </h1>
                </div>
            </div>
            <video
                src={"/freelance/wildscape_dashboard.mp4"}
                className={"rounded-lg w-full h-full drop-shadow-xl"}
                autoPlay
                playsInline
                loop
                muted
            />
            <div className={"border-t border-t-[#e1e1e1] my-24 md:my-36 py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Idea & Pitch</h1>
                    <h1>
                        We created Wildscape, a dynamic photo-sharing platform designed for adventurous adolescents
                        passionate about the environment. Have a favorite outdoor spot that you just know is special? With
                        Wildscape, you can showcase your secret nature havens by uploading stunning photos and creating personal "spot"
                        locations on a visually immersive homepage.
                        <br/>
                        <br/>
                        But it's more than just about sharing—Wildscape empowers young users to make an impact. Every
                        spot you create can include a personal description and, for those passionate about conservation,
                        an option to add a donation link to help protect the area. Whether it's a hidden waterfall, a
                        secluded hiking trail, or a breathtaking overlook, Wildscape gives you the tools to inspire
                        others and protect the places you love.
                    </h1>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1]  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <h1 className={"text-slight-black text-4xl  font-medium xl:w-full"}>Making the Vision</h1>
                    <div>
                        <h1>
                            Our UI team had a really great job funneling how we wanted this to go, and the majority of
                            our whiteboard mockups transitioned smoothly into what it is now. Seeing how we wanted a quick
                            database and backend setup, we selected Pocketbase.
                        </h1>
                        <div className={"rounded-lg my-14"}>
                            <video src={"/freelance/wildscape_create.mp4"} className={"rounded-lg w-full h-full drop-shadow-xl"} autoPlay playsInline loop muted/>
                            <h1 className={"text-newGray text-sm mt-3"} id={"based"}>
                                Individuals can upload their own spots, fill in the data, and link the location and any
                                possible donations.
                            </h1>
                        </div>
                        <div className={"rounded-lg my-14"}>
                            <img src={"/freelance/mapPage.PNG"} className={"rounded-lg w-full h-full drop-shadow-xl"} alt={"eikhgbegv"}/>
                            <h1 className={"text-newGray text-sm mt-3"} id={"based"}>
                                With the power of Google Maps API, users can see from a post and the map hot icon to
                                view where spots and national parks are.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] my-12 py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl  font-medium xl:w-full"}>Future Goals</h1>
                        <h1 className={"text-newGray text-3xl font-medium mt-1"} id={"based"}>Sustainability First.</h1>
                    </div>
                    <div>
                        <h1>
                            We believe Wildscape has a great user concept behind it. In the future, we really want to
                            expand beyond the time limit we were given. Wildscape deserves a more integrated approach
                            with
                            Google Maps API, such that it can go directly in POV mode to see the spot. Additionally,
                            implementing AI to
                            differentiate between real nature photos, AI photos, and spam photos would help keep our
                            dashboard and mission
                            values rich. It would also be great to turn this into a mobile app, along with partnering
                            with environmental sustainability
                            stakeholders, such as the National Park Service.
                        </h1>
                        <div className={"flex gap-x-3 mt-5"}>
                            <a href={"https://wildscape.vercel.app/"}
                               target="_blank" rel="opener referrer"
                               className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                               id={"descriptionTag"}>
                                <h1 className={"text-sm"}>WILDSCAPE</h1>
                                <ArrowUpRight
                                    className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <img src={"/freelance/supportParks.PNG"} className={"rounded-lg w-full h-full drop-shadow-xl mt-10"}
                     alt={"eikhgbegv"}/>
            </div>
        </div>
    )

}