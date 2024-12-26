import Link from "next/link";

export default function About() {
    return (
        <section id={"#about"} className={"xl:px-48 2xl:px-60"}>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-x-8 pb-20"}>
                <div className={"border-t border-t-[#e1e1e1] sidebar col-span-12 lg:col-span-5 xl:col-span-5"} id={"newLine"}>
                    <h1 className={"text-slight-black text-4xl md:text-5xl mt-4 font-normal xl:w-full"}>About</h1>
                </div>
                <div className={"mt-20 lg:mt-6 col-span-12 lg:col-span-7 xl:col-span-7 lg:max-w-[45rem]"}>
                    <h1 className={"text-2xl lg:text-3xl font-thin"}>
                        I&#39;m a creative web developer studying CS at Worcester Polytechnic Institute. In 2025, I will
                        be interning with
                        <span className="text-spotify hover:text-slight-black">
                            <Link href={"https://www.se.com/us/en/"}> Schneider Electric </Link>
                        </span>
                        as a WebDev PM, heading teams in the LifeIsOn vision.
                        <br />
                        <br />
                        I&#39;m driven by the endless possibilities of design and art in our world. My mission is to
                        design products and applications that tell
                        YOUR story. Authentic expression stems from the depth of human imagination and emotion. Through
                        my creativity, I inspire and uplift
                        individuals and communities.
                        <br />
                        <br />
                        Before Schneider Electric, I worked as a Data Analyst intern at
                        <span className="text-spotify hover:text-slight-black">
                            <Link href={"https://afciviliancareers.com/"}> AFCS</Link>
                        </span>
                        , creating interactive dashboards and restructuring personnel tracking data to enhance decision-making for team members.
                        <br />
                        <br />
                        In my downtime, I love to olympic lift, watch anime, and explore new cafes!
                    </h1>
                </div>
            </div>
        </section>
    );
}