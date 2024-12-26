"use client"
import Image from "next/image";
import Link from "next/link";

export default function project1() {
    return (
        <Link href={"/kyoto-project-center"}>
            <Image src={"/mockup1.1.png"} alt={"KyotoMockup"} width={4000} height={2800} className={"w-full rounded-2xl drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-[102%] min-h-[240px] object-cover"}/>
            <div className={"mt-2"}>
                <h1>Kyoto Project Center</h1>
                <h1 className={"text-newGray"} id={"based"}>Explore WPI Kyoto IQPs</h1>
            </div>
        </Link>
    )
}