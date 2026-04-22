import ColorPaletteCard from "@/components/colorPaletteCard";
import SemanticTokens from "@/app/design-system/semanticTokens";

export default function Colors() {
    return (
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
    )
}