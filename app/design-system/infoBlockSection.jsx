import React from "react";
import {LayoutGrid, List, Waypoints} from "lucide-react";
import InfoBlock from "@/components/InfoBlock";
export default function InfoBlockSection() {
    return(
        <section id={"infoblock"} className={"py-10 scroll-mt-24"}>
            <h1 className={"text-2xl md:text-2xl font-medium"}>InfoBlock</h1>
            <h1 className={"text-md md:text-md text-secondary mt-2"}>
                Pair this up with other InfoBlocks for quick information.
            </h1>
            <div className="border bg-surface-raised border-border m-auto rounded-md p-4 md:p-12 w-full mt-10">
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
                    <InfoBlock icon={Waypoints} title={"3 Step Filtering"}
                               description={"Open, select, apply pop-up method. No iterative feedback or visible change."}/>
                    <InfoBlock icon={List} title={"Unclear Hierarchy"}
                               description={"106 options with no real hierarchy and poor grouping. Immediate cognitive load."}/>
                    <InfoBlock icon={LayoutGrid} title={"Product Layout"}
                               description={"Huge card real estate, yet no details, leading to low confidence browsing."}/>
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
                        <td className={"p-4 font-mono text-xs border-b border-border"}>icon</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>Icon</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>Lucide-react icon.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 border-b border-border font-mono text-xs"}>title</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>string</td>
                        <td className={"p-4 border-b border-border text-xs text-secondary"}>Case study title.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 font-mono text-xs"}>description</td>
                        <td className={"p-4  text-xs text-secondary"}>string</td>
                        <td className={"p-4  text-xs text-secondary"}>Case study description.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"bg-[#1E1F22] rounded-md p-4 mt-2"}>
                <h1 className={"font-mono text-yellow-200 text-xs"}>
                    {`<InfoBlock icon={Icon} title={"Example Title"} description={"Example description"}/>`}

                </h1>
            </div>
        </section>
    )
}