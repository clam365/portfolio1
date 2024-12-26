"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "@/app/globals.css"
export default function Project1() {
    return (
        <div className="group">
            <Link href="/spotify-clone" className="relative z-0">
                <div>
                    <Image src="/mockup3.png" alt="KyotoMockup" width={4000} height={2800} className="w-full rounded-2xl drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-[102%] min-h-[240px] object-cover"/>
                    <div className="right-4 absolute top-4 z-50 rounded-full p-4 bg-spotify opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-4 transition duration-300 ease-in-out" id={"arrowButton"}>
                        <ArrowRight className="text-black" width={25} height={25} />
                    </div>
                </div>
                <div className="mt-2">
                    <h1>Spotify Clone</h1>
                    <h1 className="text-newGray" id="based">
                        Digital Music Service
                    </h1>
                </div>
            </Link>
        </div>
    );
}
