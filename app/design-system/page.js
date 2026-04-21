"use client";
import "@/app/globals.css"
import {motion} from "framer-motion";
import Typography from "@/app/design-system/typography";
import Colors from "@/app/design-system/colors";
import ButtonPreview from "@/app/design-system/buttonPreview";

export default function Page() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <div className={"flex flex-col lg:flex-row pt-10"}>
                <nav className="lg:w-1/4 hidden lg:block">
                    <ul className="space-y-6 sticky top-24 p-10">
                        <div className={"space-y-2"}>
                            <h1 className={"font-semibold text-secondary"}>FOUNDATIONS</h1>
                            <li><a href="#colors" className="hover:text-primary text-secondary transition">Colors</a>
                            </li>
                            <li><a href="#typography"
                                   className="hover:text-primary text-secondary transition">Typography</a></li>
                        </div>
                        <div className={"space-y-2"}>
                            <h1 className={"font-semibold text-secondary"}>COMPONENTS</h1>
                            <li><a href="#button"
                                   className="hover:text-primary text-secondary transition">Button</a></li>
                        </div>


                    </ul>
                </nav>
                <main className="lg:w-2/4 px-10 lg:px-0">
                    <h1 className={"text-2xl md:text-4xl font-medium mt-10"}>Orchid Design System</h1>
                    <h1 className={"text-md md:text-md text-secondary mt-2"}>
                        The Orchid design system is a thoughtful and scalable foundation for creating a clean,
                        consistent,
                        and welcoming portfolio experience. Built with reusable case study components, tokens, and
                        design standards.
                        I've contributed and built design systems across ALL my experiences, so here's a visualization
                        of mine :)
                    </h1>
                    <p className={"text-secondary text-sm mt-4"}>
                        NOTE: Some visualizations were assisted in&nbsp;
                        <a className={"text-[#de7356] hover:underline transition"}
                           href={"https://claude.com/product/claude-code?utm_source=google&utm_medium=paid_search_coder&utm_campaign=acq_code_us_q3&utm_term=claude%20code&gclsrc=aw.ds&gad_source=1&gad_campaignid=23253558478&gbraid=0AAAAA99jmqvbJ-Tlg9566gY3o5mO_UpG5&gclid=CjwKCAjwnZfPBhAGEiwAzg-VzFWj6_mGWKUVJ4Kn4oKoe9mymB-jeflFStY3_VB0MYhE8Bqaz07kwBoCAdUQAvD_BwE"}>Claude
                            Code</a>
                        .</p>
                    <Colors/>
                    <Typography/>
                    <ButtonPreview/>
                </main>
            </div>
        </motion.div>

    );
}
