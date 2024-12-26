"use client"
import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function project1() {
    return (
        <div className={"group"}>
            <Link href={"/kyoto-project-center"} className={"relative z-0 "}>
                <div>
                    <Image src={"/mockup1.1.png"} alt={"KyotoMockup"} width={4000} height={2800} className={"w-full rounded-2xl drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-[102%] min-h-[240px] object-cover"}/>
                    <div className={" right-1 absolute top-4 z-50 rounded-full p-4 bg-spotify hidden group-hover:inline-block transition duration-300 ease-in-out"}>
                        <ArrowRight className={"text-black "} width={25} height={25}/>
                    </div>
                </div>
                <div className={"mt-2"}>
                    <h1>Kyoto Project Center</h1>
                    <h1 className={"text-slight-black"} id={"based"}>Explore WPI Kyoto IQPs</h1>
                </div>
            </Link>

        </div>

    )
}