"use client";
import "@/app/globals.css"
import {motion} from "framer-motion";
import Typography from "@/app/design-system/typography";
import Colors from "@/app/design-system/colors";
import ButtonPreview from "@/app/design-system/buttonPreview";
import HeaderSection from "@/app/design-system/headerSection";
import CaseStudyNav from "@/components/caseStudyNav";
import CaseStudyNavSection from "@/app/design-system/caseStudyNavSection";
import QuoteSection from "@/app/design-system/quoteSection";
import CaseStudyHeroCardSection from "@/app/design-system/caseStudyHeroCardSection";
import InfoBlockSection from "@/app/design-system/infoBlockSection";
import CaseStudyStartSection from "@/app/design-system/caseStudyStartSection";

export const designSystemSections = [
    { id: "colors", label: "Colors", group: "FOUNDATIONS" },
    { id: "typography", label: "Typography", group: "FOUNDATIONS" },
    { id: "button", label: "Button", group: "COMPONENTS" },
    { id: "header", label: "Header", group: "COMPONENTS" },
    { id: "infoblock", label: "InfoBlock", group: "COMPONENTS" },
    { id: "casestudyherocard", label: "CaseStudyHeroCard", group: "COMPONENTS" },
    { id: "casestudystart", label: "CaseStudyStart", group: "COMPONENTS" },
    { id: "casestudynav", label: "CaseStudyNav", group: "COMPONENTS" },
    { id: "quote", label: "Quote", group: "COMPONENTS" },

];

export default function Page() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <div className={"flex flex-col lg:flex-row pt-10"}>
                <CaseStudyNav sections={designSystemSections}/>
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
                    <HeaderSection/>
                    <InfoBlockSection/>
                    <CaseStudyHeroCardSection/>
                    <CaseStudyStartSection/>
                    <CaseStudyNavSection/>
                    <QuoteSection/>
                    <div className={"pb-48"}></div>
                </main>
            </div>
        </motion.div>

    );
}
