import React from "react";
import {CaseStudyHeroCard} from "@/components/caseStudyHeroCard";
export default function CaseStudyHeroCardSection() {
    return(
        <section id={"casestudyherocard"} className={"py-10 scroll-mt-24"}>
            <h1 className={"text-2xl md:text-2xl font-medium"}>CaseStudyHeroCard</h1>
            <h1 className={"text-md md:text-md text-secondary mt-2"}>
                Landing page case study card. Hovering over reveals animation to go to case study. Takes in the case
                study URL, cover image, title, and description.
            </h1>
            <div className="border bg-surface-raised border-border m-auto rounded-md p-4 md:p-12 w-full mt-10">
                <div className={"scale-75"}>
                    <CaseStudyHeroCard
                        pageLink={"#casestudyherocard"}
                        imageSrc={"/schneider-electric/se_mockupe.png"}
                        projectName={"Schneider Electric"}
                        projectDescription={"From enterprise buyer to everyday homeowner"}
                    />
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
                        <td className={"p-4 font-mono text-xs border-b border-border"}>pagelink</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>string</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>Portfolio case study URL.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 border-b border-border font-mono text-xs"}>imageSrc</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>string</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>Image file location.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 border-b border-border font-mono text-xs"}>projectName</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>string</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>Case study title.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 font-mono text-xs"}>projectDescription</td>
                        <td className={"p-4  text-xs text-secondary"}>string</td>
                        <td className={"p-4  text-xs text-secondary"}>Case study description.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"bg-[#1E1F22] rounded-md p-4 mt-2"}>
                <h1 className={"font-mono text-yellow-200 text-xs"}>
                    {`<CaseStudyHeroCard>`}
                    <br/>&nbsp;&nbsp;
                    {`pagelink="/schneider-electric"`}
                    <br/>&nbsp;&nbsp;
                    {`imageSrc="/schneider-electric/..."`}
                    <br/>&nbsp;&nbsp;
                    {`projectName="Schneider Electric."`}
                    <br/>&nbsp;&nbsp;
                    {`projectDescription="From enterprise buyer to everyday homeowner"`}
                    <br/>
                    {`<CaseStudyHeroCard/>`}
                </h1>
            </div>
        </section>
    )
}