import React from "react";

export function Number({number}) {
    return (
        <div className={"inline-block font-bold bg-[#f2f2f2] p-1 px-3 rounded-md text-sm"}
             id={"gallery"}>{number}
        </div>
    )
}