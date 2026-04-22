"use client";
import {useEffect, useState} from "react";

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

export default function CaseStudyNav({sections}) {
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
        <nav className="lg:w-1/4 hidden lg:block">
            <ul className="sticky top-24 p-10">
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