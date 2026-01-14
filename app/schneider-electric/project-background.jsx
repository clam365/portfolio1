import React from "react";
import {CaseStudySection} from "@/components/caseStudy/caseStudySection";
import {Clickable} from "@/components/clickable";
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
                <img src={"/schneider-electric/before.png"} alt={"team photo"} className={"w-full mt-10 border border-gray-300"}/>
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
                <h1 className={"text-newGray"}>FOCUS AREAS</h1>
            </div>
            <CaseStudySection.SubSection>
                <CaseStudySection.SubHeader subheader={"Focus Areas"}/>
                <CaseStudySection.Content>

                    <Clickable>
                        <Clickable.Trigger>
                            <div
                                className={"bg-[#f2f2f2] rounded-xl w-full p-4 flex flex-col justify-center m-auto mt-10"}
                                id={"gallery"}>
                                <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Product Cards</p>
                                <img src={"/schneider-electric/product_Cards.png"} alt={"Image"}
                                     className={"rounded-md w-full h-auto drop-shadow-md"}/>
                            </div>
                        </Clickable.Trigger>
                        <Clickable.Content>
                            <img src={"/schneider-electric/product_Cards.png"} alt={"Image"}
                                 className={"rounded-md w-full drop-shadow-md"}/>
                        </Clickable.Content>
                    </Clickable>
                    <h1 className={"mt-4"}>
                        Product cards remain in a three-column grid on desktop, but with the placement of the left-side
                        filtering system, they now occupy 75% of the page width. Within this layout structure, the cards
                        provide more relevant information, including color swatches and SKUs, giving a clearer
                        understanding
                        of product availability at a glance.
                        <br/>
                        <br/>
                        However, as time builds upon the website, opportunities including user reviews, ratings, and
                        other
                        improvements can be added to strengthen product evaluation.
                    </h1>
                    <Clickable>
                        <Clickable.Trigger>
                            <div
                                className={"bg-[#f2f2f2] rounded-xl p-4 w-full flex flex-col justify-center m-auto mt-10"}
                                id={"gallery"}>
                                <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Filter Optimization</p>
                                <img src={"/schneider-electric/filters.png"} alt={"Image"}
                                     className={"rounded-md w-full h-auto drop-shadow-md"}/>
                            </div>
                        </Clickable.Trigger>
                        <Clickable.Content>
                            <img src={"/schneider-electric/filters.png"} alt={"Image"}
                                 className={"rounded-md w-full drop-shadow-md"}/>
                        </Clickable.Content>
                    </Clickable>
                    <h1 className={"mt-4"}>
                        Filters are now positioned in a left-aligned sidebar occupying 25% of the page width, with
                        options
                        organized into an accordion-style layout for easier navigation. Of the original 108 total
                        filters,
                        48 are related to product types. Those 48 were card-sorted into 6 clear categories, allowing
                        users to
                        quickly locate and compare items based on their needs without feeling overwhelmed by vertical
                        scroll.
                        <br/>
                        <br/>
                        In addition, text-based color options were replaced with visual swatches, promoting recognition
                        over recall
                        and enabling users to better identify product variations at a glance. Together, these fixes
                        reduce cognitive
                        load, support iterative filtering, and create a better browsing and product discovery
                        experience.
                    </h1>
                </CaseStudySection.Content>
            </CaseStudySection.SubSection>
            <div className={"mt-24"}/>
            <CaseStudySection.SubSection>
                <CaseStudySection.SubHeader subheader={"User Flow"}/>
                <CaseStudySection.Content>
                    <Clickable>
                        <Clickable.Trigger>
                            <div
                                className={"bg-[#f2f2f2] rounded-xl p-4 flex flex-col justify-center m-auto"}
                                id={"gallery"}>
                                <img src={"/schneider-electric/userflow.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md"}/>
                            </div>
                        </Clickable.Trigger>
                        <Clickable.Content>
                            <img src={"/schneider-electric/userflow.png"} alt={"Image"}
                                 className={"rounded-md drop-shadow-md"}/>
                        </Clickable.Content>
                    </Clickable>
                    <h1 className={"mt-4"}>
                        With the new filtering system in place, users are encourages to filter iteratively
                        and responsively, making product discovery far more seamless than before. By surfacing
                        filters directly in a left-hand sidebar, the need to repeatedly open, close, apply, and reset
                        a filter button is eliminated, reducing friction and cutting the average click depth from the
                        home page by 2, or 33%. The diagram above illustrates the improved user flow.
                    </h1>
                </CaseStudySection.Content>
            </CaseStudySection.SubSection>
            <div className={"mt-24"}/>
            <CaseStudySection.SubSection>
                <CaseStudySection.SubHeader subheader={"Article Readability"}/>
                <CaseStudySection.Content>
                    <div className={"bg-[#f2f2f2] rounded-xl p-4 flex flex-col justify-center m-auto"} id={"gallery"}>
                        <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Before</p>
                        <Clickable>
                            <Clickable.Trigger>
                                <img src={"/schneider-electric/before.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md"}/>
                            </Clickable.Trigger>
                            <Clickable.Content>
                                <img src={"/schneider-electric/before.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md"}/>
                            </Clickable.Content>
                        </Clickable>
                        <p className={"text-newGray text-sm mb-0.5 mt-4"} id={"based"}>After</p>
                        <Clickable>
                            <Clickable.Trigger>
                                <img src={"/schneider-electric/after18.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md"}/>
                            </Clickable.Trigger>
                            <Clickable.Content>
                                <img src={"/schneider-electric/after18.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md"}/>
                            </Clickable.Content>
                        </Clickable>
                    </div>
                    <h1 className={"mt-4"}>
                        The screenshots are much better in the Figma, yet despite that we can see the clear
                        differences between the
                        before and after of adjusting the case study principles. From 176 characters per line
                        and 20pt font, it is now 96
                        characters per line and 18pt font, a 45% decrease in characters. Users can read the text more
                        effectively, which in turn
                        comprehension is enhanced.
                    </h1>
                </CaseStudySection.Content>
            </CaseStudySection.SubSection>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"What's next?"}/>
                    <CaseStudySection.Content>
                        <h1 className={"mb-4"}>
                            Currently, the website will continue its pilot phase and move onto other countries until
                            it is fully global!
                            I had an amazing time working with amazing co-workers building and refining this
                            website, and I can't wait to
                            see it blast off. I've been able to thrive and blossom, and this where I took my
                            abilities to the next level.
                            I'm excited for the upcoming opportunities awaiting me.
                        </h1>
                        <img src={"/schneider-electric/coworkers.png"} alt={"coworkers.png"}/>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
        </div>
    )

}