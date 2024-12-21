"use client";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-14 min-h-[85vh] flex flex-col">
            <div className="max-w-[85rem] flex-grow">
                <h1 className="text-slight-black font-medium text-4xl md:text-6xl lg:text-7xl">
                    I&#39;m Chris Lam, a creative web developer driven by authentic expression.
                    I&#39;ll be interning at{" "}
                    <span className="text-spotify hover:text-slight-black">
                        <Link href={"https://www.se.com/us/en/"}>Schneider Electric</Link>
                    </span>{" "}
                    as a WebDev PM, previously with the{" "}
                    <span className="text-spotify hover:text-slight-black">
                        <Link href={"https://afciviliancareers.com/"}>AFCS</Link>
                    </span>.
                </h1>
            </div>

            <footer>
                <div className="flex gap-x-2">
                    <p className="border border-gray-300 rounded-full px-2 py-1 text-md inline-block text-slight-black">Front-End</p>
                    <p className="border border-gray-300 rounded-full px-4 py-1 text-md inline-block text-slight-black">UI/UX</p>
                    <p className="border border-gray-300 rounded-full px-4 py-1 text-md inline-block text-slight-black">Motion</p>
                    <p className="border border-gray-300 rounded-full px-4 py-1 text-md inline-block text-slight-black">Product Design</p>
                </div>
                <hr className="my-3 mt-5" />
                <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-xl">Based in Boston, MA</p>
                    <Link href={"/#craft"}>
                        <p className="text-slight-black text-xl flex items-center">
                            See selected craft <span><ArrowDown className="ml-1 text-spotify" /></span>
                        </p>
                    </Link>
                </div>
            </footer>
        </section>
    );
}
