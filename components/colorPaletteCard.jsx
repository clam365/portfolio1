"use client";
import "@/app/globals.css"
import PropTypes from "prop-types"

export default function ColorPaletteCard({colorName, hexCode}) {
    return (
        <>
            <div className={"border border-surface-raised rounded-md"}>
                <div style={{backgroundColor: `#${hexCode}`}} className={`min-h-10 rounded-t-md`}/>
                <div className={"p-2  border-t border-surface-raised"}>
                    <p className={"text-xs font-semibold truncate"}>{colorName}</p>
                    <p className={"text-[10px] text-secondary truncate"}>#{hexCode}</p>
                </div>
            </div>
        </>
    )
}

ColorPaletteCard.propTypes = {
    colorName: PropTypes.string.isRequired,
    hexCode: PropTypes.string.isRequired,
}
