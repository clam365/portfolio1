"use client";
import "@/app/globals.css"
import {motion} from "framer-motion";
import ColorPaletteCard from "@/components/colorPaletteCard";
import SemanticTokens from "@/app/design-system/semanticTokens";

export default function Page() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <div className={"flex flex-col lg:flex-row pt-10"}>
                <nav className="lg:w-1/4 hidden lg:block">
                    <ul className="space-y-2 sticky top-24 p-10">
                        <h1 className={"font-semibold text-secondary"}>FOUNDATIONS</h1>
                        <li><a href="#colors" className="hover:text-primary text-secondary transition">Colors</a>
                        </li>
                        <li><a href="#typography"
                               className="hover:text-primary text-secondary transition">Typography</a>
                        </li>
                    </ul>
                </nav>
                <main className="lg:w-2/4 px-10 lg:px-0">
                    <h1 className={"text-2xl md:text-4xl font-medium mt-10"}>Orchid Design System</h1>
                    <h1 className={"text-md md:text-md text-secondary mt-2"}>
                        The Orchid design system is a thoughtful and scalable foundation for creating a clean,
                        consistent,
                        and welcoming portfolio experience. Built with reusable case study components, tokens, and
                        design standards.
                        I've contributed and built design systems across ALL my experiences, so here's a visualization
                        of mine :)
                    </h1>
                    <p className={"text-secondary text-sm mt-4"}>
                        NOTE: Some visualizations were assisted in&nbsp;
                        <a className={"text-[#de7356] hover:underline transition"}
                           href={"https://claude.com/product/claude-code?utm_source=google&utm_medium=paid_search_coder&utm_campaign=acq_code_us_q3&utm_term=claude%20code&gclsrc=aw.ds&gad_source=1&gad_campaignid=23253558478&gbraid=0AAAAA99jmqvbJ-Tlg9566gY3o5mO_UpG5&gclid=CjwKCAjwnZfPBhAGEiwAzg-VzFWj6_mGWKUVJ4Kn4oKoe9mymB-jeflFStY3_VB0MYhE8Bqaz07kwBoCAdUQAvD_BwE"}>Claude
                            Code</a>
                        .</p>
                    <section className={"py-10 scroll-mt-24"} id={"colors"}>
                        <h1 className={"text-2xl md:text-2xl font-medium"}>Primitive Colors</h1>
                        <h1 className={"text-md md:text-md text-secondary mt-2"}>These are raw color palette values. Use
                            semantic tokens in components.</h1>
                        <div className={"mt-8"}>
                            <h1 className={"text-secondary text-sm font-semibold"}>NEUTRALS</h1>
                            <div className={"grid grid-cols-5 md:grid-cols-10 gap-2 mt-4"}>
                                <ColorPaletteCard colorName={"white"} hexCode={"ffffff"}/>
                                <ColorPaletteCard colorName={"steel"} hexCode={"eff3f6"}/>
                                <ColorPaletteCard colorName={"sand gray"} hexCode={"d1d5d6"}/>
                                <ColorPaletteCard colorName={"gray"} hexCode={"808080"}/>
                                <ColorPaletteCard colorName={"black"} hexCode={"000000"}/>
                            </div>
                        </div>
                        <div className={"mt-8"}>
                            <h1 className={"text-secondary text-sm font-semibold"}>FRESH GREEN</h1>
                            <div className={"grid grid-cols-5 md:grid-cols-10 gap-2 mt-4"}>
                                <ColorPaletteCard colorName={"50"} hexCode={"f0fdf3"}/>
                                <ColorPaletteCard colorName={"100"} hexCode={"dcfce3"}/>
                                <ColorPaletteCard colorName={"200"} hexCode={"bbf7c9"}/>
                                <ColorPaletteCard colorName={"300"} hexCode={"87eea1"}/>
                                <ColorPaletteCard colorName={"400"} hexCode={"3cda64"}/>
                                <ColorPaletteCard colorName={"500"} hexCode={"23c44c"}/>
                                <ColorPaletteCard colorName={"600"} hexCode={"17a23b"}/>
                                <ColorPaletteCard colorName={"700"} hexCode={"167f32"}/>
                                <ColorPaletteCard colorName={"800"} hexCode={"17642c"}/>
                                <ColorPaletteCard colorName={"900"} hexCode={"145326"}/>
                            </div>
                        </div>
                        <div className={"mt-8"}>
                            <h1 className={"text-secondary text-sm font-semibold"}>BABY BLUE</h1>
                            <div className={"grid grid-cols-5 md:grid-cols-10 gap-2 mt-4"}>
                                <ColorPaletteCard colorName={"50"} hexCode={"f0f8ff"}/>
                                <ColorPaletteCard colorName={"100"} hexCode={"dff0ff"}/>
                                <ColorPaletteCard colorName={"200"} hexCode={"b8e3ff"}/>
                                <ColorPaletteCard colorName={"300"} hexCode={"33b4fd"}/>
                                <ColorPaletteCard colorName={"400"} hexCode={"33b4fd"}/>
                                <ColorPaletteCard colorName={"500"} hexCode={"099aee"}/>
                                <ColorPaletteCard colorName={"600"} hexCode={"007bcc"}/>
                                <ColorPaletteCard colorName={"700"} hexCode={"0061a5"}/>
                                <ColorPaletteCard colorName={"800"} hexCode={"045388"}/>
                                <ColorPaletteCard colorName={"900"} hexCode={"0a4570"}/>
                            </div>
                        </div>
                        <div className={"mt-10"}>
                            <h1 className={"text-2xl md:text-2xl font-medium"}>Semantic Tokens</h1>
                            <h1 className={"text-md md:text-md text-secondary mt-2 mb-10"}>Hover or tap any item to see
                                the connections!</h1>
                            <SemanticTokens/>
                        </div>
                    </section>
                    <section className={"py-10 scroll-mt-40"} id={"typography"}>
                        <h1 className={"text-2xl md:text-2xl font-medium"}>Typography</h1>
                        <div className={"bg-surface-raised border border-border rounded-md space-y-10 p-4 mt-10"}>
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
                </main>
            </div>
        </motion.div>

    );
}
