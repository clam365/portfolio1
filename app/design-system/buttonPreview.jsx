import {ChevronRight, MoveLeft} from "lucide-react";
import {ButtonOutline, ButtonPrimary} from "@/components/button";

export default function ButtonPreview() {
    return (
        <section id={"button"} className={"py-10 scroll-mt-24"}>
            <h1 className={"text-2xl md:text-2xl font-medium"}>Button</h1>
            <h1 className={"text-md md:text-md text-secondary mt-2"}>
                Shared button component. Supports text, icon+text, and icon-only layouts. Has default, hover, active,
                focus, and disabled states.
            </h1>
            <h1 className={"font-medium mt-4"}>ButtonPrimary</h1>
            <div className="border border-border rounded-md overflow-x-auto mt-2">
                <table className={"w-full"}>
                    <thead>
                    <tr className={"bg-surface-raised  "}>
                        {["Default", "Hover", "Active", "Focus", "Disabled"].map((h) => (
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
                        <td className="py-4 px-4 align-middle"><ButtonPrimary>Label</ButtonPrimary></td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary forceState={"hover"}>Label</ButtonPrimary>
                        </td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary
                            forceState={"active"}>Label</ButtonPrimary>
                        </td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary forceState={"focus"}>Label</ButtonPrimary>
                        </td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary disabled={true}>Label</ButtonPrimary></td>
                    </tr>

                    <tr className="">
                        <td className="py-4 px-4 align-middle"><ButtonPrimary><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonPrimary></td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary forceState={"hover"}><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonPrimary></td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary forceState={"active"}><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonPrimary></td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary forceState={"focus"}><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonPrimary></td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary disabled={true}><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonPrimary></td>
                    </tr>

                    <tr className="">
                        <td className="py-4 px-4 align-middle"><ButtonPrimary iconOnly><ChevronRight
                            className={"w-4 h-4"}/></ButtonPrimary>
                        </td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary iconOnly
                                                                              forceState={"hover"}><ChevronRight
                            className={"w-4 h-4"}/></ButtonPrimary></td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary iconOnly
                                                                              forceState={"active"}><ChevronRight
                            className={"w-4 h-4"}/></ButtonPrimary></td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary iconOnly
                                                                              forceState={"focus"}><ChevronRight
                            className={"w-4 h-4"}/></ButtonPrimary></td>
                        <td className="py-4 px-4 align-middle"><ButtonPrimary disabled={true} iconOnly><ChevronRight
                            className={"w-4 h-4"}/></ButtonPrimary></td>
                    </tr>
                    </tbody>
                </table>
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
                        <td className={"p-4 font-mono text-xs border-b border-border"}>icon-only</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>boolean</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>Square padding (p-2.5) for
                            icon-only layout.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 font-mono text-xs"}>disabled</td>
                        <td className={"p-4  text-xs text-secondary"}>boolean</td>
                        <td className={"p-4  text-xs text-secondary"}>Reduces opacity and blocks interaction.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"bg-[#1E1F22] rounded-md p-4 mt-2"}>
                <h1 className={"font-mono text-yellow-200 text-xs"}>{`<ButtonPrimary>Label</ButtonPrimary>`}</h1>
                <h1 className={"font-mono text-yellow-200 text-xs"}>{`<ButtonPrimary icon-only aria-label="..."><Icon/></ButtonPrimary>`}</h1>
                <h1 className={"font-mono text-yellow-200 text-xs"}>{`<ButtonPrimary disabled="true">Label</ButtonPrimary>`}</h1>
            </div>

            <h1 className={"font-medium mt-4"}>ButtonOutline</h1>
            <div className="border border-border rounded-md overflow-x-auto mt-2">
                <table className={"w-full"}>
                    <thead>
                    <tr className={"bg-surface-raised  "}>
                        {["Default", "Hover", "Active", "Focus", "Disabled"].map((h) => (
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
                        <td className="py-4 px-4 align-middle"><ButtonOutline>Label</ButtonOutline></td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline forceState={"hover"}>Label</ButtonOutline>
                        </td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline
                            forceState={"active"}>Label</ButtonOutline>
                        </td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline forceState={"focus"}>Label</ButtonOutline>
                        </td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline disabled={true}>Label</ButtonOutline></td>
                    </tr>

                    <tr className="">
                        <td className="py-4 px-4 align-middle"><ButtonOutline><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonOutline></td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline forceState={"hover"}><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonOutline></td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline forceState={"active"}><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonOutline></td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline forceState={"focus"}><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonOutline></td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline disabled={true}><MoveLeft
                            className={"w-4 h-4"}/>Previous</ButtonOutline></td>
                    </tr>

                    <tr className="">
                        <td className="py-4 px-4 align-middle"><ButtonOutline iconOnly><ChevronRight
                            className={"w-4 h-4"}/></ButtonOutline>
                        </td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline iconOnly
                                                                              forceState={"hover"}><ChevronRight
                            className={"w-4 h-4"}/></ButtonOutline></td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline iconOnly
                                                                              forceState={"active"}><ChevronRight
                            className={"w-4 h-4"}/></ButtonOutline></td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline iconOnly
                                                                              forceState={"focus"}><ChevronRight
                            className={"w-4 h-4"}/></ButtonOutline></td>
                        <td className="py-4 px-4 align-middle"><ButtonOutline disabled={true} iconOnly><ChevronRight
                            className={"w-4 h-4"}/></ButtonOutline></td>
                    </tr>
                    </tbody>
                </table>
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
                        <td className={"p-4 font-mono text-xs border-b border-border"}>icon-only</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>boolean</td>
                        <td className={"p-4  text-xs border-b border-border text-secondary"}>Square padding (p-2.5) for
                            icon-only layout.
                        </td>
                    </tr>
                    <tr>
                        <td className={"p-4 font-mono text-xs"}>disabled</td>
                        <td className={"p-4  text-xs text-secondary"}>boolean</td>
                        <td className={"p-4  text-xs text-secondary"}>Reduces opacity and blocks interaction.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"bg-[#1E1F22] rounded-md p-4 mt-2"}>
                <h1 className={"font-mono text-yellow-200 text-xs"}>{`<ButtonOutline>Label</ButtonOutline>`}</h1>
                <h1 className={"font-mono text-yellow-200 text-xs"}>{`<ButtonOutline icon-only aria-label="..."><Icon/></ButtonOutline>`}</h1>
                <h1 className={"font-mono text-yellow-200 text-xs"}>{`<ButtonOutline disabled="true">Label</ButtonOutline>`}</h1>
            </div>
        </section>
    )
}