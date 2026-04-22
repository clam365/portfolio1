"use client";
import React, {useEffect, useState} from "react";


export const sections = [
    { id: "a", label: "Overview" },
    { id: "b", label: "Challenge" },
    { id: "c", label: "Ideation" },
    { id: "d", label: "Final Designs" },
    { id: "e", label: "Reflection" },
];

function NavLink({id, label, isActive}) {
    return (
        <li className="list-none">
            <a
                href={`#${id}`}
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
                }}
                className={`flex items-center gap-2 py-0.5 transition-all duration-200 ${
                    isActive
                        ? "text-primary font-bold"
                        : "text-secondary hover:text-primary font-normal"
                }`}
            >
                {label}
            </a>
        </li>
    );
}

function CaseStudyNavPreview({sections}) {
    const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

    useEffect(() => {
        setActiveId(sections[0]?.id ?? "");
        const observers = [];

        sections.forEach(({id}) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveId(id);
                },
                {rootMargin: "-30% 0px -60% 0px", threshold: 0}
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [sections]);

    const hasGroups = sections.some((s) => s.group);

    return (
        <nav className="lg:w-1/4 bg-surface-base border border-border rounded-md drop-shadow-md">
            <ul className="p-10">
                {hasGroups ? (
                    <div className="space-y-6">
                        {[...new Set(sections.map((s) => s.group))].map((group) => (
                            <div key={group} className="space-y-2">
                                {group && (
                                    <h1 className="font-semibold text-secondary text-xs tracking-widest">
                                        {group}
                                    </h1>
                                )}
                                {sections
                                    .filter((s) => s.group === group)
                                    .map(({id, label}) => (
                                        <NavLink key={id} id={id} label={label} isActive={activeId === id}/>
                                    ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-2">
                        {sections.map(({id, label}) => (
                            <NavLink key={id} id={id} label={label} isActive={activeId === id}/>
                        ))}
                    </div>
                )}
            </ul>
        </nav>
    );
}

export default function CaseStudyNavSection() {
    return (
        <section id={"casestudynav"} className={"py-10 scroll-mt-24"}>
            <h1 className={"text-2xl md:text-2xl font-medium"}>CaseStudyNav</h1>
            <h1 className={"text-md md:text-md text-secondary mt-2"}>
                Sticky left navigation panel used on all case study pages. Only visible on desktop (lg and above).
            </h1>
            <div className="border bg-surface-raised border-border rounded-md p-12 mt-10 flex justify-center">
                <CaseStudyNavPreview sections={sections}/>
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
                        <td className={"p-4 font-mono text-xs "}>sections</td>
                        <td className={"p-4  text-xs  text-secondary"}>{`{ id: string, label: string, group: string}[]`}</td>
                        <td className={"p-4  text-xs text-secondary"}>List of sections to render as nav items.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"bg-[#1E1F22] rounded-md p-4 mt-2"}>
                <h1 className={"font-mono text-yellow-200 text-xs"}>
                    {`const sections = [ `}
                    <br/>&nbsp;&nbsp;
                    {`{ id: "overview", label: "Overview"},`}
                    <br/>&nbsp;&nbsp;
                    {`{ id: "reflection", label: "Reflection"},`}
                    <br/>
                    {`]`}
                    <br/>
                    <br/>
                    {`<div className={"flex flex-col lg:flex-row pt-10"}>`}
                    <br/>&nbsp;&nbsp;
                    {`<CaseStudyNav sections={sections}>`}
                    <br/>&nbsp;&nbsp;
                    {`<main className={"lg:w-2/4 px-10 lg:px-0"}>`}
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                    {`...`}
                    <br/>&nbsp;&nbsp;
                    {`<main/>`}
                    <br/>
                    {`<div/>`}
                </h1>
            </div>
        </section>
    )
}

