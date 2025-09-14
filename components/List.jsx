import React from "react";
import {Number} from "@/components/Number";

export function List({children}) {
    return(
        <div>
            {children}
        </div>
    )
}

List.Header = function ListHeader({header}) {
    return (
        <h1 className={"text-spotify text-sm mt-12 lg:mt-0 mb-1"} id={"spotifyText"}>{header}</h1>
    )
}

List.NumberSubtitle = function ListNumberSubtitle({header, number}) {
    return (
        <div className={"items-center gap-x-2 flex mb-4"}>
            <Number number={number}/>
            <h1 className={"font-semibold text-newGray"}>{header}</h1>
        </div>

    )
}

List.Section = function ListSection({children}) {
    return(
        <div className={"border-t border-t-[#e1e1e1]  py-3 "} id={"newLine"}>
            {children}
        </div>
    )
}

