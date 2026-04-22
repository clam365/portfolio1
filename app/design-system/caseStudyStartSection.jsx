import React from "react";
import CaseStudyStart from "@/components/caseStudyStart";
export default function CaseStudyStartSection() {
    return(
        <section id={"casestudystart"} className={"py-10 scroll-mt-24"}>
            <h1 className={"text-2xl md:text-2xl font-medium"}>CaseStudyStart</h1>
            <h1 className={"text-md md:text-md text-secondary mt-2"}>
                Base starting information for a case study. Contains the title, description, image, role, timeline,
                team, and skills used during the project.
            </h1>
            <div className="border bg-surface-raised border-border m-auto rounded-md w-full mt-10">
                <div className={"scale-75"}>
                    <CaseStudyStart
                        className={"pt-0"}
                        tag={"FREELANCE"}
                        title={"Kyoto Project Center"}
                        description={"Kyoto IQP Database"}
                        imageSrc={"/mockup1.1.png"}
                        imageAlt={"kyoto"}
                        fields={[
                            {label: "ROLE", values: "Designer & Developer"},
                            {label: "TIMELINE", values: "Oct 2024 - Dec 2024"},
                            {label: "TEAM", values: ["Jason Zhang", "Arjun Bhat", "Szymon Mamro"]},
                            {
                                label: "SKILLS",
                                values: ["Product Design", "Front-end Development", "Stakeholder Management"]
                            }
                        ]}/>
                </div>
            </div>
            <div className={"border border-border rounded-md overflow-x-auto mt-2"}>
                <table className={"w-full"}>
                    <thead>
                    <tr className={"bg-surface-raised  "}>
                        {["Prop", "Type", "Description"].map((h) => (
                            <th
                                key={h}
                                className="text-[10px] text-left font-semibold text-primary p-2 px-4 border-b border-border"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"p-4 font-mono text-xs border-b border-border"}>tag</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>string</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>Job, freelance, part time, internship, etc.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 font-mono text-xs border-b border-border"}>title</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>string</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>Portfolio case study title.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 font-mono text-xs border-b border-border"}>description</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>string</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>Portfolio case study
                            description.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 border-b border-border font-mono text-xs"}>imageSrc</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>string</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>Image file location.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 border-b border-border font-mono text-xs"}>imageAlt</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>string</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>Image alt tag.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 font-mono text-xs"}>fields</td>
                        <td className={"p-4  text-xs text-secondary"}>{`{ label: "string", values: [string] }[]`}</td>
                        <td className={"p-4  text-xs text-secondary"}>List of roles, timeline, team, and skills.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"bg-[#1E1F22] rounded-md p-4 mt-2"}>
                <h1 className={"font-mono text-yellow-200 text-xs"}>
                    {`<CaseStudyStart>`}
                    <br/>&nbsp;&nbsp;
                    {`tag="INTERNSHIP"`}
                    <br/>&nbsp;&nbsp;
                    {`imageSrc="/schneider-electric/..."`}
                    <br/>&nbsp;&nbsp;
                    {`imageAlt="schneider-electric"`}
                    <br/>&nbsp;&nbsp;
                    {`title="Schneider Electric"`}
                    <br/>&nbsp;&nbsp;
                    {`description="From enterprise buyer to everyday homeowner"`}
                    <br/>&nbsp;&nbsp;
                    {`fields="{["`}
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                    {` {label: "ROLE", values: "Designer & Developer"},`}
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                    {` {label: "TIMELINE", values: "Oct 2024 - Dec 2024"},`}
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                    {` {label: "TEAM", values: ["Jason Zhang", "Arjun Bhat", "Szymon Mamro"]},`}
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                    {` {label: "SKILLS", values: ["Product Design", "Front-end Development", "Stakeholder Management"]}`}
                    <br/>
                    {`<CaseStudyStart/>`}
                </h1>
            </div>
        </section>
    )
}