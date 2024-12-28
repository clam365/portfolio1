
export const ProjectBackground = () => {
    return (
        <div className={"px-10  2xl:px-60 py-24 md:pt-48"}>
            <video
                src={"/freelance/wildscape_landingPage.mp4"}
                className={"rounded-lg w-full h-full drop-shadow-xl"}
                autoPlay
                playsInline
                loop
                muted
            />
            <div className={"border-t border-t-[#e1e1e1] my-24 md:my-48 py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <h1 className={"text-slight-black text-4xl font-normal xl:w-full"}>Background</h1>
                    <h1>
                        The SASE Hackathon had 31 team submissions and approximately 124 participants involved, all
                        competing for $3,750 in prizes.
                        2024's theme was LifeHacks, focusing on the 4 stages of growth: Childhood, Adolescence, Adult,
                        and Elderly. Teams could choose ONE track and come up with an idea following its sub-topic
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
            <div className={"border-t border-t-[#e1e1e1] my-24 md:my-48 py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <h1 className={"text-slight-black text-4xl  font-normal xl:w-full"}>Idea & Pitch</h1>
                    <h1>
                        We created Wildscape, a dynamic photo-sharing platform designed for adventurous adolescents
                        passionate
                        about the environment. Have a favorite outdoor spot that you just know is special? With
                        Wildscape, you can
                        showcase your secret nature havens by uploading stunning photos and creating personal "spot"
                        locations on a
                        visually immersive homepage.
                        <br/>
                        <br/>
                        But it's more than just about sharing—Wildscape empowers young users to make an impact. Every
                        spot you create can include a personal description and, for those passionate about conservation,
                        an option to add a donation link to help protect the area. Whether it's a hidden waterfall, a
                        secluded hiking trail, or a breathtaking overlook, Wildscape gives you the tools to inspire
                        others
                        and protect the places you love.
                    </h1>
                </div>
            </div>
        </div>
    )

}