"use client";
import {useState, useRef, useEffect, useCallback} from "react";

//Data
const primitives = [
    {
        group: "Neutrals",
        items: [
            {id: "p-white", label: "--color-white", swatch: "#ffffff", swatchBorder: true},
            {id: "p-steel", label: "--color-steel", swatch: "#EFF3F6", swatchBorder: true},
            {id: "p-sand-gray", label: "--color-sand-gray", swatch: "#D1D5D6", swatchBorder: true},
            {id: "p-gray", label: "--color-gray", swatch: "#808080", swatchBorder: true},
            {id: "p-black", label: "--color-black", swatch: "#000000", swatchBorder: true},

        ],
    },
    {
        group: "Fresh Green",
        items: [
            {id: "p-fg-50", label: "--color-fresh-green-50", swatch: "#f0fdf3", swatchBorder: true}, //no usage currently
            {id: "p-fg-300", label: "--color-fresh-green-300", swatch: "#87eea1", swatchBorder: true},
            {id: "p-fg-400", label: "--color-fresh-green-400", swatch: "#3cda64", swatchBorder: true},
            {id: "p-fg-500", label: "--color-fresh-green-500", swatch: "#23c44c", swatchBorder: true}, //no usage currently; but prob for icon hovers
        ],
    },
    {
        group: "Baby Blue",
        items: [
            {id: "p-bb-300", label: "--color-baby-blue-300", swatch: "#90D5FF", swatchBorder: true},
        ],
    },
];

const tokens = [
    {
        group: "Brand",
        items: [
            {id: "t-brand-primary", label: "--color-brand-primary", swatch: "#3cda64", swatchBorder: true},
        ],
    },
    {
        group: "Surface",
        items: [
            {id: "t-surface-base", label: "--color-surface-base", swatch: "#ffffff", swatchBorder: true},
            {id: "t-surface-decorative", label: "--color-surface-decorative", swatch: "#90D5FF", swatchBorder: true},
            {id: "t-surface-raised", label: "--color-surface-raised", swatch: "#EFF3F6", swatchBorder: true},

        ],
    },
    {
        group: "Text",
        items: [
            {id: "t-text-primary", label: "--color-text-primary", swatch: "#000000", swatchBorder: true},
            {id: "t-text-secondary", label: "--color-text-secondary", swatch: "#808080", swatchBorder: true},
            {id: "t-text-tertiary", label: "--color-text-tertiary", swatch: "#3cda64", swatchBorder: true},
        ],
    },
    {
        group: "Border",
        items: [
            {id: "t-border", label: "--color-border", swatch: "#D1D5D6", swatchBorder: true},
        ],
    },
    {
        group: "Button",
        items: [
            {id: "t-button-text", label: "--color-button-text", swatch: "#000000", swatchBorder: true},
            {id: "t-button-bg-primary", label: "--color-button-bg-primary", swatch: "#3cda64", swatchBorder: true},
            {
                id: "t-button-bg-primary-hover",
                label: "--color-button-bg-primary-hover",
                swatch: "#87eea1",
                swatchBorder: true
            },
            {
                id: "t-button-bg-outline-hover",
                label: "--color-button-bg-outline-hover",
                swatch: "#EFF3F6",
                swatchBorder: true
            },


        ],
    },
];

const usedIn = [
    {
        group: "Buttons",
        items: [
            {id: "u-btn-outline", label: "ButtonOutline"},
            {id: "u-btn-primary", label: "ButtonPrimary"},
        ],
    },
    {
        group: "Case Study Format",
        items: [
            {id: "u-caseStudyHeroCard", label: "CaseStudyHeroCard"},
            {id: "u-caseStudyStart", label: "CaseStudyStart"},
            {id: "u-caseStudyNav", label: "CaseStudyNav"},
        ],
    },
    {
        group: "Decorative",
        items: [
            {id: "u-infoBlock", label: "InfoBlock"},
            {id: "u-quote", label: "Quote"},
        ],
    },
    {
        group: "Layout",
        items: [
            {id: "u-header", label: "Header"},
        ],
    },
];

const connections = [
    {from: "p-white", to: "t-surface-base"},
    {from: "p-steel", to: "t-surface-raised"},
    {from: "p-steel", to: "t-button-bg-outline-hover"},
    {from: "p-sand-gray", to: "t-border"},
    {from: "p-gray", to: "t-text-secondary"},
    {from: "p-black", to: "t-text-primary"},
    {from: "p-black", to: "t-button-text"},
    {from: "p-fg-300", to: "t-button-bg-primary-hover"},
    {from: "p-fg-400", to: "t-button-bg-primary"},
    {from: "p-fg-400", to: "t-brand-primary"},
    {from: "p-fg-400", to: "t-text-tertiary"},
    {from: "p-bb-300", to: "t-surface-decorative"},

    {from: "t-button-text", to: "u-btn-outline"},
    {from: "t-button-bg-primary", to: "u-btn-outline"},
    {from: "t-surface-base", to: "u-btn-outline"},
    {from: "t-border", to: "u-btn-outline"},
    {from: "t-button-bg-outline-hover", to: "u-btn-outline"},

    {from: "t-button-text", to: "u-btn-primary"},
    {from: "t-button-bg-primary", to: "u-btn-primary"},
    {from: "t-button-bg-primary-hover", to: "u-btn-primary"},

    {from: "t-surface-raised", to: "u-caseStudyHeroCard"},
    {from: "t-brand-primary", to: "u-caseStudyHeroCard"},
    {from: "t-button-text", to: "u-caseStudyHeroCard"},

    {from: "t-text-primary", to: "u-caseStudyStart"},
    {from: "t-text-secondary", to: "u-caseStudyStart"},

    {from: "t-text-primary", to: "u-caseStudyNav"},
    {from: "t-text-secondary", to: "u-caseStudyNav"},

    {from: "t-text-primary", to: "u-infoBlock"},
    {from: "t-text-secondary", to: "u-infoBlock"},

    {from: "t-text-secondary", to: "u-quote"},

    {from: "t-surface-base", to: "u-header"},
    {from: "t-surface-raised", to: "u-header"},
    {from: "t-text-primary", to: "u-header"},

];


function TokenItem({id, label, swatch, swatchBorder, activeId, highlightedIds, onEnter, onLeave}) {
    const ref = useRef(null);
    const isActive = activeId === id;
    const isHighlighted = highlightedIds.has(id);
    const isDimmed = activeId && !isActive && !isHighlighted;

    return (
        <div
            ref={ref}
            data-token-id={id}
            onMouseEnter={() => onEnter(id)}
            onMouseLeave={onLeave}
            onTouchStart={(e) => {
                e.preventDefault();
                onEnter(id);
            }}
            className={[
                "flex items-center gap-2 px-2.5 py-1.5 rounded-md border cursor-pointer select-none",
                "transition-all duration-150 h-8",
                isActive
                    ? "bg-surface-raised border-border "
                    : isHighlighted
                        ? "bg-surface-raised border-border"
                        : isDimmed
                            ? "opacity-30 border-transparent"
                            : "border-transparent hover:bg-surface-raised hover:border-border",
            ].join(" ")}
        >
            {swatch && (
                <span
                    className={["w-5 h-5 rounded-md flex-shrink-0", swatchBorder ? "border border-border" : ""].join(" ")}
                    style={{backgroundColor: swatch}}
                />
            )}
            <span className={[
                "font-mono tracking-wide text-[12px] truncate",
                isActive || isHighlighted
                    ? "text-neutral-900"
                    : "text-neutral-500",
            ].join(" ")}>
        {label}
      </span>
        </div>
    );
}

function UsedInItem({id, label, activeId, highlightedIds, onEnter, onLeave}) {
    const isActive = activeId === id;
    const isHighlighted = highlightedIds.has(id);
    const isDimmed = activeId && !isActive && !isHighlighted;

    return (
        <div
            data-token-id={id}
            onMouseEnter={() => onEnter(id)}
            onMouseLeave={onLeave}
            onTouchStart={(e) => {
                e.preventDefault();
                onEnter(id);
            }}
            className={[
                "flex items-center px-2.5 py-1.5 rounded-md border cursor-pointer select-none",
                "transition-all duration-150 h-8",
                isActive
                    ? "bg-surface-raised border-border"
                    : isHighlighted
                        ? "bg-surface-raised border-border"
                        : isDimmed
                            ? "opacity-30 border-transparent"
                            : "border-transparent hover:bg-surface-raised hover:border-border",
            ].join(" ")}
        >
      <span className={[
          "text-[13px] font-medium",
          isHighlighted
              ? "text-primary"
              : "text-primary",
      ].join(" ")}>
        {label}
      </span>
        </div>
    );
}

function GroupLabel({children}) {
    return (
        <p className="text-[10px] font-semibold tracking-widest uppercase text-secondary pt-3 pb-1 ">
            {children}
        </p>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SemanticTokens() {
    const [activeId, setActiveId] = useState(null);
    const [curves, setCurves] = useState([]);
    const containerRef = useRef(null);

    // Walk the full chain from any node in both directions.
    // e.g. hovering a primitive also resolves its tokens → their usedIn.
    // Hovering a usedIn resolves its tokens ← their primitives.
    const getFullChain = useCallback((id) => {
        const visited = new Set([id]);
        const edgesInChain = new Set();

        // Expand in one direction along connections, collecting edges
        const expand = (ids, direction) => {
            const next = new Set();
            connections.forEach((c) => {
                const match = direction === "forward" ? ids.has(c.from) : ids.has(c.to);
                const neighbor = direction === "forward" ? c.to : c.from;
                const edgeKey = `${c.from}→${c.to}`;
                if (match && !visited.has(neighbor)) {
                    visited.add(neighbor);
                    edgesInChain.add(edgeKey);
                    next.add(neighbor);
                } else if (match && visited.has(neighbor)) {
                    // Edge between already-visited nodes still belongs in the chain
                    edgesInChain.add(edgeKey);
                }
            });
            return next;
        };

        // Also capture direct edges from/to the hovered node
        connections.forEach((c) => {
            if (c.from === id || c.to === id) edgesInChain.add(`${c.from}→${c.to}`);
        });

        // Forward: primitive → token → usedIn
        let frontier = new Set([id]);
        for (let i = 0; i < 2; i++) frontier = expand(frontier, "forward");

        // Backward: usedIn → token → primitive
        frontier = new Set([id]);
        for (let i = 0; i < 2; i++) frontier = expand(frontier, "backward");

        const relevantEdges = connections.filter(
            (c) => edgesInChain.has(`${c.from}→${c.to}`)
        );

        return {highlightedIds: visited, relevantEdges};
    }, []);

    const {highlightedIds, relevantEdges} = activeId
        ? getFullChain(activeId)
        : {highlightedIds: new Set(), relevantEdges: []};

    const getPort = useCallback((id, side) => {
        const el = containerRef.current?.querySelector(`[data-token-id="${id}"]`);
        if (!el || !containerRef.current) return null;
        const er = el.getBoundingClientRect();
        const cr = containerRef.current.getBoundingClientRect();
        return {
            x: side === "right" ? er.right - cr.left : er.left - cr.left,
            y: er.top - cr.top + er.height / 2,
        };
    }, []);

    const buildCurves = useCallback(
        (id) => {
            const {relevantEdges} = getFullChain(id);
            const dots = new Map();
            const paths = [];

            relevantEdges.forEach(({from, to}) => {
                const a = getPort(from, "right");
                const b = getPort(to, "left");
                if (!a || !b) return;

                const dx = (b.x - a.x) * 0.45;
                paths.push(`M${a.x},${a.y} C${a.x + dx},${a.y} ${b.x - dx},${b.y} ${b.x},${b.y}`);

                const aKey = `${a.x},${a.y}`;
                const bKey = `${b.x},${b.y}`;
                if (!dots.has(aKey)) dots.set(aKey, a);
                if (!dots.has(bKey)) dots.set(bKey, b);
            });

            setCurves({paths, dots: [...dots.values()]});
        },
        [getPort, getFullChain]
    );

    const handleEnter = useCallback(
        (id) => {
            setActiveId(id);
            buildCurves(id);
        },
        [buildCurves]
    );

    const handleLeave = useCallback(() => {
        setActiveId(null);
        setCurves([]);
    }, []);

    // Recalculate on resize
    useEffect(() => {
        if (!activeId) return;
        const ro = new ResizeObserver(() => buildCurves(activeId));
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [activeId, buildCurves]);

    const itemProps = {activeId, highlightedIds, onEnter: handleEnter, onLeave: handleLeave};

    return (
        <section className="w-full ">
            <div className={"overflow-x-auto"}>
                <div className={"min-w-[37.5rem] min-h-[40rem]"}>
                    {/* Main grid + SVG overlay */}
                    <div ref={containerRef} className="grid grid-cols-3 relative gap-x-10 xl:gap-x-44">
                        {/* SVG overlay for curves */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                            aria-hidden="true"
                        >
                            {curves.paths?.map((d, i) => (
                                <path
                                    key={i}
                                    d={d}
                                    fill="none"
                                    stroke="#3cda64"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            ))}
                            {curves.dots?.map((pt, i) => (
                                <circle key={i} cx={pt.x} cy={pt.y} r="3" fill="#3cda64"/>
                            ))}
                        </svg>

                        {/* Col 0 — Primitives */}
                        <div className="inline-flex flex-col items-start gap-2">
                            <h1 className="text-[10px] font-semibold tracking-widest uppercase text-secondary">Primitive</h1>
                            {primitives.map(({group, items}) => (
                                <div key={group}>
                                    <GroupLabel>{group}</GroupLabel>
                                    {items.map((item) => (
                                        <TokenItem key={item.id} {...item} {...itemProps} />
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Col 1 — Tokens */}
                        <div className="inline-flex flex-col items-start gap-2">
                            <h1 className="text-[10px] font-semibold tracking-widest uppercase text-secondary">Token</h1>
                            {tokens.map(({group, items}) => (
                                <div key={group}>
                                    <GroupLabel>{group}</GroupLabel>
                                    {items.map((item) => (
                                        <TokenItem key={item.id} {...item} {...itemProps} />
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Col 2 — Used in */}
                        <div className="inline-flex flex-col items-start gap-2">
                            <h1 className="text-[10px] font-semibold tracking-widest uppercase text-secondary">Used In</h1>
                            {usedIn.map(({group, items}) => (
                                <div key={group}>
                                    <GroupLabel>{group}</GroupLabel>
                                    {items.map((item) => (
                                        <UsedInItem key={item.id} {...item} {...itemProps} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}