import React from "react";
import {CaseStudySection} from "@/components/caseStudy/caseStudySection";
import {List} from "@/components/List";

export const ProjectBackground = () => {
    return (
        <div className={"px-10 xl:px-72 py-24 md:pt-48"}>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"Design Goal"} subtitle={"Dedicated Platform for Visibility"}/>
                    <CaseStudySection.Content>
                        <h1 className={"mb-10"}>
                            At Worcester Polytechnic Institute, students take part in the Interactive Qualifying Project (IQP)—
                            a hands-on, humanitarian project that can take place anywhere in the world. Each IQP project contains
                            a published report and accompanying resources, all of which are stored in WPI&#39;s Digital E-Project library,
                            a website repository of thousands of projects.
                            <br/>
                            <br/>
                            The Kyoto Project Center stands out as a unique site, with students tackling on projects tied to the region&#39;s
                            evolving tourism industry and community dynamics. While the center had a strong identity and brand presence within the university,
                            there was no dedicated way to centralize and showcase the Kyoto-specific projects to prospective business partners and students. This
                            gap sparked the idea for a tailored platform with one that could present and preserve the site in a way that reflects its distinct
                            character.
                        </h1>
                        <List>
                            <List.Header header={"Key Stakeholder Needs"}/>
                            <List.Section>
                                <h1>
                                    Prospective students, faculty, and sponsors can view the Kyoto Project Center
                                    mission
                                    and info.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <h1>
                                    A database list of Kyoto IQP projects, with search/filter functionality.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <h1>
                                    The website must reflect the identity of Kyoto and our work here.
                                </h1>
                            </List.Section>
                        </List>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"Ideation & Design"} subtitle={"Zen"}/>
                    <CaseStudySection.Content>
                        <h1 className={""}>
                            In crafting a website that reflects Japanese sensibilities, embracing the principle of Zen
                            create
                            not just a beautiful interface, but also an experience with cultural depths.
                            <br/>
                            <br/>
                            Zen emphasizes mindful simplicity, removing unnecessary distractions and highlighting what
                            matters most.
                            We need clean layouts and intentional structure. The ample white conceptualizes
                            "ma" (間)—the meaningful pause or space between elements. Content can breathe and it invokes
                            a calm experience.
                            The standard black text offers highest readability and supports the minimalist elegance.
                            <br/>
                            <br/>

                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"}
                 id={"gallery"}>
                <img
                    src={"/freelance/kyoto.PNG"}
                    alt={"kyoto"}
                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                />
            </div>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"}
                 id={"gallery"}>
                <img
                    src={"/freelance/kyotoHome.PNG"}
                    alt={"kyoto"}
                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                />
            </div>
            <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mb-24"}
                 id={"gallery"}>
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