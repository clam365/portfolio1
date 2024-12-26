"use client"

import Image from "next/image";
import Link from "next/link";

export default function project3() {
    return (
        <Link href={"/spotify-clone"}>
            <Image src={"/mockup3.png"} alt={"Spotify"} width={4000} height={2800} className={"w-full rounded-2xl drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-[102%]"}/>
            <div className={"mt-2"}>
                <h1>Spotify Clone</h1>
                <h1 className={"text-newGray"} id={"based"}>Digital Music Service</h1>
            </div>
        </Link>
    )
}