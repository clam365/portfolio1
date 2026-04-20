"use client";
import "@/app/globals.css"
import {motion} from "framer-motion";
import ColorPaletteCard from "@/components/colorPaletteCard";

export default function Page() {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <div className={"flex flex-col lg:flex-row pt-10"}>
                    <nav className="lg:w-1/4 hidden lg:block">
                        <ul className="space-y-2 sticky top-24 p-10">
                            <h1 className={"font-semibold text-gray"}>FOUNDATIONS</h1>
                            <li><a href="#colors" className="hover:text-black text-gray transition">Colors</a>
                            </li>
                            <li><a href="#context" className="hover:text-black text-gray transition">Typography</a>
                            </li>

                        </ul>
                    </nav>
                    <main className="lg:w-2/4 px-10 lg:px-0">
                        <section className={"py-10 scroll-mt-40"} id={"colors"}>
                            <h1 className={"text-2xl md:text-2xl font-medium"}>Primitive Colors</h1>
                            <h1 className={"text-md md:text-md text-gray mt-2"}>Raw color palette values. Use semantic
                                tokens in components, not these directly.</h1>
                            <div className={"mt-8"}>
                                <h1 className={"text-gray text-sm font-semibold"}>NEUTRALS</h1>
                                <div className={"grid grid-cols-5 md:grid-cols-10 gap-2 mt-4"}>
                                    <ColorPaletteCard colorName={"white"} hexCode={"ffffff"}/>
                                    <ColorPaletteCard colorName={"steel"} hexCode={"eff3f6"}/>
                                    <ColorPaletteCard colorName={"sand gray"} hexCode={"d1d5d6"}/>
                                    <ColorPaletteCard colorName={"gray"} hexCode={"808080"}/>
                                    <ColorPaletteCard colorName={"black"} hexCode={"000000"}/>
                                </div>
                            </div>
                            <div className={"mt-8"}>
                                <h1 className={"text-gray text-sm font-semibold"}>FRESH GREEN</h1>
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
                        </section>
                    </main>
                </div>
            </motion.div>
        </>

    );
}
