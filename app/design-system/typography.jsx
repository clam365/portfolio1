"use client";

export default function Typography(){
    return (
        <section className={"py-10 scroll-mt-24"} id={"typography"}>
            <h1 className={"text-2xl md:text-2xl font-medium"}>Typography</h1>
            <div className={"bg-surface-raised border border-border rounded-md space-y-10 p-4 mt-10 w-full"}>
                <div className={""}>
                    <div className={"space-y-2"}>
                        <h1 className={"text-secondary text-sm font-semibold"}>DISPLAY FONT</h1>
                        <p className={"font-mono text-xs text-secondary"}>--font-display: 'Libre
                            Baskerville',
                            serif</p>
                    </div>
                    <div className={"space-y-2 mt-4"}>
                        <h1 className={"font-display font-semibold text-3xl"}>The quick brown fox</h1>
                    </div>
                </div>
                <div className={""}>
                    <div className={"space-y-2"}>
                        <h1 className={"text-secondary text-sm font-semibold"}>HEADING FONT</h1>
                        <p className={"font-mono text-xs text-secondary"}>--font-display: 'Manrope'</p>
                    </div>
                    <div className={"space-y-2 mt-4"}>
                        <h1 className={"font-base font-semibold text-4xl"}>The quick brown fox</h1>
                        <h1 className={"font-base font-semibold text-2xl"}>The quick brown fox</h1>
                        <h1 className={"font-base font-semibold text-xl"}>The quick brown fox</h1>
                    </div>
                </div>
                <div className={""}>
                    <div className={"space-y-2"}>
                        <h1 className={"text-secondary text-sm font-semibold"}>BODY FONT</h1>
                        <p className={"font-mono text-xs text-secondary"}>--font-display: 'Manrope'</p>
                    </div>
                    <div className={"space-y-2 mt-4"}>
                        <h1 className={"font-base "}>Body text - regular (16px)</h1>
                        <h1 className={"font-base text-secondary text-sm"}>Small body text - muted(14px)</h1>
                        <h1 className={"font-base text-secondary text-xs"}>Caption / label text (12px)</h1>
                    </div>
                </div>
            </div>

        </section>
    )
}