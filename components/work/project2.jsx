"use client"

import Image from "next/image";
import Link from "next/link";

export default function project2() {
    return (
        <Link href={"/iqp-dct"}>
            <Image src={"/mockup2.png"} alt={"IQP"} width={4000} height={2800} className={"w-full rounded-2xl drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-[102%]"}/>
            <div className={"mt-2"}>
                <h1>IQP Data Collection Tool</h1>
                <h1 className={"text-newGray"} id={"based"}>Major Qualifying Project</h1>
            </div>
        </Link>
    )
}