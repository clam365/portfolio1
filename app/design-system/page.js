"use client";
import "@/app/globals.css"
import {motion} from "framer-motion";
import CaseStudyStart from "@/components/caseStudyStart";

export default function Page() {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <div className={"flex flex-col lg:flex-row pt-10"}>
                    <nav className="lg:w-1/4 hidden lg:block">
                        <ul className="space-y-2 sticky top-24 p-10">
                            <h1 className={"font-semibold text-gray"}>FOUNDATIONS</h1>
                            <li><a href="#colors" className="hover:text-black text-gray transition">Colors</a>
                            </li>
                            <li><a href="#context" className="hover:text-black text-gray transition">Typography</a>
                            </li>

                        </ul>
                    </nav>
                    <main className="lg:w-2/4 px-10 lg:px-0">
                        <div className={"py-10 "}>
                            <h1 className={"text-2xl md:text-2xl font-medium"}>Primitive Colors</h1>
                            <h1 className={"text-md md:text-md text-gray mt-3"}>Raw color palette values. Use semantic tokens in components, not these directly.</h1>
                        </div>
                    </main>
                </div>
            </motion.div>
        </>

    );
}
