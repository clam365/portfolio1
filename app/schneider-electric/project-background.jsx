import React from "react";
import {LinkButton} from "@/components/linkButton";
import SimpleParallax from "simple-parallax-js";

export const ProjectBackground = () => {
    return (
        <div className={" py-24 md:pt-20"}>
            <div>
                <img src={"/schneider-electric/teamPhoto.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-newGray mt-2"}>
                    BostonHub DCR Team!
                </h1>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"problem"}>
                <h1 className={"text-newGray"}>PROBLEM</h1>
                <h1 className={"font-medium text-3xl"}>Reducing Friction</h1>
                <h1>
                    We benchmarked the product landing pages against industry standards, combining competitive analysis
                    with heuristic evaluation and heatmaps. This revealed critical usability issues: ineffective
                    navigation
                    to products, poor browsing experiences, and weak article readability that limited user engagement.
                </h1>
            </div>
            <div className={"my-10"}>
                <video
                    src={"/schneider-electric/odace_before.mp4"}
                    className={"w-full"}
                    autoPlay
                    playsInline
                    loop
                    muted
                />
                <img src={"/schneider-electric/before.png"} alt={"team photo"}
                     className={"w-full mt-10 border border-gray-300"}/>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
                <div>
                    <h1 className={"text-newGray text-xl"}>Repetitive Flow</h1>
                    <h1 className={""}>Filters require repeated opening/closing to apply or reset,
                        creating friction that slows product discovery and discourages exploration.
                    </h1>
                </div>
                <div>
                    <h1 className={"text-newGray text-xl"}>Filter Overload</h1>
                    <h1 className={""}>108 presently uncollapsible filters displayed vertically. Super
                        overwhelming and causes exhaustive scanning.
                    </h1>
                </div>
                <div>
                    <h1 className={"text-newGray text-xl"}>Sparse Cards</h1>
                    <h1 className={""}>Product cards lacked essential details yet take excessive,
                        forcing users to scroll more while still missing information.
                    </h1>
                </div>
                <div>
                    <h1 className={"text-newGray text-xl"}>Article Readability</h1>
                    <h1 className={""}>
                        Articles span full-width with 20pt font (~176 characters/line), forcing
                        excessive eye travel that impairs readability and reduces engagement.
                    </h1>
                </div>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"research"}>
                <h1 className={"text-newGray"}>RESEARCH</h1>
                <h1 className={"font-medium text-3xl"}>Data-Driven Insights</h1>
                <h1>
                    We reviewed UX research, which contextualized my findings within best practices, using evidence to
                    identify where improvements in navigation, filtering, and readability would deliver the
                    greatest impact.
                </h1>
            </div>
            <div className={"my-10"}>
                <img src={"/schneider-electric/odace_heatmap2.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-newGray mt-2"}>
                    ContentSquare heatmaps detailing points of friction
                </h1>
            </div>
            <div className={"mt-10 space-y-2 scroll-mt-40 "} id={"problem"}>
                <h1 className={" text-newGray"}>Filter Optimization</h1>
                <h1>
                    Optimized filters can boost conversions by nearly 6%. Left-aligned filters work best
                    because they stay visible, reduce mental effort, and let users refine searches without
                    losing their place. Our current hidden filters create unnecessary friction, making them
                    accessible and visible will help users find products faster and align with proven UX
                    practices.
                </h1>
                <LinkButton link={"https://thegood.com/insights/ecommerce-product-filters/"} text={"THE GOOD"}/>
            </div>
            <div className={"mt-10 space-y-2 scroll-mt-40 "} id={"problem"}>
                <h1 className={" text-newGray"}>Article Guidelines</h1>
                <h1>
                    Baymard Institute and Carnegie Mellon recommend 45-85 characters per line with 18pt font for
                    optimal readability. Applying these guidelines to our articles will reduce eye strain,
                    improve focus, and boost engagement—directly addressing the issues we found with our current
                    desktop layout.
                </h1>
                <div className={"flex space-x-2"}>
                    <LinkButton
                        link={"https://www.freshconsulting.com/insights/blog/uiux-principle-46-text-box-width-should-help-users-read/#:~:text=In%20web%20design%2C%20one%20element,your%20content%20easy%20to%20read."}
                        text={"FRESH CONSULTING"}/>
                    <LinkButton link={"https://pielot.org/pubs/Rello2016-Fontsize.pdf"} text={"MAKE IT BIG!"}/>
                </div>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"finaldesigns"}>
                <h1 className={"text-newGray"}>FINAL DESIGNS</h1>
                <div className={"flex space-x-2"}>
                    <LinkButton
                        link={"https://www.figma.com/proto/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=110-439&t=yExnMr3mmsqno6nw-1"}
                        text={"FIGMA MOCKUP"}/>
                    <LinkButton
                        link={"https://www.figma.com/design/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=37-1402&t=yExnMr3mmsqno6nw-1"}
                        text={"FIGMA ANNOTATIONS"}/>
                </div>
                <h1>
                    Throughout my internship, 2 senior UX designers whom I connected with outside my team provided
                    invaluable mentorship through each stage. Initially, I focused on UI nitpicks, but I was guided to
                    prioritize user journey and flow. We then refined my recommendations to cohesive designs.
                </h1>
            </div>
            <div className="mt-10">
                <SimpleParallax scale={1.05}>
                    <img
                        src={"/schneider-electric/se_mockup.png"}
                        alt="Image"
                        className=""
                    />
                </SimpleParallax>
            </div>
            <div className={"grid grid-cols-1 gap-5 md:grid-cols-2 mt-5 mb-10"}>
                <div className="">
                    <img
                        src={"/schneider-electric/article_page.png"}
                        alt="Image"
                        className="w-full"
                    />
                </div>
                <div className="">
                    <img
                        src={"/schneider-electric/se_mockup1.png"}
                        alt="Image"
                        className="w-full"
                    />
                </div>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"focusareas"}>
                <h1 className={"text-newGray"}>FOCUS REDESIGN AREAS</h1>
                <h1 className={"font-medium text-3xl"}>Reducing Friction</h1>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"}>
                <img src={"/schneider-electric/product_Cards.png"} alt={"Image"}
                     className={"w-full h-auto border border-gray-300"}/>
                <div className="flex flex-col justify-end">
                    <h1 className={"text-newGray"}>Product Cards</h1>
                    <h1>
                        Product cards stay in their three-column grid at 75% width with left-side filters.
                        They now show color swatches and SKUs for clearer evaluation, with room for future
                        additions like reviews and ratings.
                    </h1>
                </div>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"}>
                <img src={"/schneider-electric/filters.png"} alt={"Image"}
                     className={"w-full h-auto border border-gray-300"}/>
                <div className="flex flex-col justify-end">
                    <h1 className={"text-newGray"}>Filter Optimization</h1>
                    <h1>
                        Filters sit in a left sidebar (25% width) with accordion navigation. 48 product
                        filters were card sorted into 6 categories, and text colors became visual swatches.
                    </h1>
                </div>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"}>
                <img src={"/schneider-electric/after18.png"} alt={"Image"}
                     className={"w-full h-auto border border-gray-300"}/>
                <div className="flex flex-col justify-end">
                    <h1 className={"text-newGray"}>Better Reading!</h1>
                    <h1>
                        The improvements are clear: from 176 characters/line at 20pt to 96 characters/line at 18pt, a
                        45% reduction.
                        This enhances readability and comprehension.
                    </h1>
                </div>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"userflow"}>
                <h1 className={"text-newGray"}>IMPROVED USER FLOW</h1>
                <h1 className={"font-medium text-3xl"}>Less clickity clackity!</h1>
                <h1>
                    The left sidebar eliminated the repeated opening, closing, and resetting of filters, therefore
                    cutting down the average click depth from the home page by 2 clicks, or 33%. Users can now
                    filter iteratively and responsively, making product discovery far more seamless.
                </h1>
            </div>
            <div className={"mt-10"}>
                <img src={"/schneider-electric/userflow.png"} alt={"team photo"}
                     className={"w-full border border-gray-300"}/>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"outcome"}>
                <h1 className={"text-newGray"}>OUTCOME</h1>
                <h1 className={"font-medium text-3xl"}>The big stage...</h1>
                <h1>
                    I presented my designs to a HUGE stakeholder crowd: 2 directors, 5 engineers, and my 2 senior designer mentors.
                    It was overwhelmingly positive, being approved for implementation in Phase 2 of the site&apos;s development. The pilot
                    launch continues in France, with plans to expand to additional countries en route to full global load out.
                </h1>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"reflections"}>
                <h1 className={"text-newGray"}>REFLECTIONS</h1>
                <h1 className={"font-medium text-3xl"}>What I learned</h1>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-10"}>
                <div>
                    <h1 className={"text-newGray text-xl"}>Think holistically</h1>
                    <h1>
                        Recognizing that fixing individual pain points was not enough, the entire flow
                        needs to work together in harmony.
                    </h1>
                </div>
                <div>
                    <h1 className={"text-newGray text-xl"}>Business goals don&apos;t conflict user needs</h1>
                    <h1>
                        They can reinforce each other. Removing barriers for users also removes barriers to conversion and
                        growth.
                    </h1>
                </div>
            </div>
        </div>
    )

}