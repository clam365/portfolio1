import React from "react";
import {CaseStudySection} from "@/components/caseStudy/caseStudySection";
import {List} from "@/components/List";
import {Clickable} from "@/components/clickable";
import {LinkButton} from "@/components/linkButton";
import SimpleParallax from "simple-parallax-js";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  xl:px-72 py-24 md:pt-32"}>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"Context"}/>
                    <CaseStudySection.Content>
                        <h1 className={""}>
                            Schneider Electric has long operated as a B2B, offering energy management and
                            automation solutions. With the new launch of their consumer-facing application,
                            Schneider began expanding into B2C by giving homeowners direct access to products.
                            During my internship, I played a key role in this initiative, especially in the app's
                            pilot launch in France. Over the first six 6 weeks, I was responsible for driving content
                            through Builder.io CMS while contributing UI suggestions and implementing design fixes
                            across the site.
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"Defining the Problem"} subtitle={"Reducing Friction"}/>
                    <CaseStudySection.Content>
                        <h1>
                            Over the summer, I conducted competitive benchmarking to evaluate Schneider's desktop
                            product landing pages (PLPs) against industry standards and best practices. Paired with
                            heuristic analysis, I identified key usability pain points: users struggled to reach the
                            product section and often found it difficult to browse or locate the items they needed.
                            I also uncovered opportunities to improve article readability in order to better engage and
                            inform readers.
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
                <CaseStudySection.SubSection spaced={true}>
                    <CaseStudySection.SubHeader subheader={"Filter Optimization & Product Details"}>
                        <Clickable>
                            <Clickable.Trigger>
                                <div className={"bg-[#f2f2f2] rounded-xl p-4 flex flex-col justify-center m-auto mt-10"}
                                     id={"gallery"}>
                                    <video
                                        src={"/schneider-electric/odace_before.mp4"}
                                        className={"rounded-lg w-full h-full drop-shadow-xl"}
                                        autoPlay
                                        playsInline
                                        loop
                                        muted
                                    />
                                </div>
                            </Clickable.Trigger>
                            <Clickable.Content>
                                <div className={"bg-[#f2f2f2] rounded-xl p-4 flex flex-col justify-center m-auto"}
                                     id={"gallery"}>
                                    <video
                                        src={"/schneider-electric/odace_before.mp4"}
                                        className="rounded-lg w-auto max-w-full h-auto drop-shadow-xl md:scale-150"
                                        autoPlay
                                        playsInline
                                        loop
                                        muted
                                    />
                                </div>
                            </Clickable.Content>
                        </Clickable>
                    </CaseStudySection.SubHeader>
                    <div>
                        <h1>
                            The Odace Collection serves as a representative to all PLPs, as they are the same
                            component structure. However, finding the product is not so easy. The formatting
                            unintentionally assumes the user knows EXACTLY what they want.
                            <br/>
                            <br/>
                        </h1>
                        <List>
                            <List.Header header={"Key Usability Issues"}/>
                            <List.Section>
                                <List.NumberSubtitle number={1} header={"Repetitive Filter Flow"}/>
                                <h1>
                                    Filters were accessed through a button that requires users to repeatedly open and
                                    close in order to apply or reset options. This interaction pattern makes the flow
                                    cumbersome and repetitive, especially for users who want to refine their search
                                    multiple times.
                                    This introduces unnecessary friction, slowing product discovery time and potentially
                                    discouraging exploration with PLPs.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <List.NumberSubtitle number={2} header={"Overwhelming Filter Options"}/>
                                <h1>
                                    The interface presented users with 108 possible filters, all displayed vertically
                                    at once with no option to collapse. This creates a visually overwhelming experience
                                    and forces users to meticulously scan through the entire list just to find the
                                    filters
                                    relevant to their needs, especially in product types. Without grouping,
                                    prioritization,
                                    or collapsible sections, the system increases cognitive load and slows down the
                                    decision-making
                                    for product discovery.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <List.NumberSubtitle number={3} header={"Blank Product Card Design"}/>
                                <h1>
                                    Product Cards lacked essential details, leaving users without enough information to
                                    evaluate products at a glance. At the same time, they occupy an excessive amount of
                                    real estate (especially in List Card View) reducing number of products visible at
                                    once.
                                    The imbalance creates a frustrating browsing experience as they are forced to scroll
                                    more
                                    while still not getting the clarity needed for informed decisions.
                                </h1>
                            </List.Section>
                            <List.Section>
                                <List.NumberSubtitle number={4} header={"Excessive Value Proposition"}/>
                                <h1>
                                    Users on desktop must scroll through 4,288 pixels of value proposition and CTAs
                                    before
                                    ever reaching the products on the PLPs. Extended journeys delay access to core
                                    content and
                                    risks frustration, contributing to bounce rate. It may feel repetitive and
                                    obstructive when the
                                    primary goal is to browse or purchase products.
                                </h1>
                            </List.Section>
                        </List>
                    </div>
                </CaseStudySection.SubSection>
                <CaseStudySection.SubSection spaced={true}>
                    <CaseStudySection.SubHeader subheader={"Article Readability"}>
                        <Clickable>
                            <Clickable.Trigger>
                                <div
                                    className={"bg-[#f2f2f2] rounded-xl p-4 flex flex-col justify-center m-auto mt-10"}
                                    id={"gallery"}>
                                    <img
                                        src={"/schneider-electric/before.png"}
                                        alt={"article"}
                                        className={"rounded-lg w-full h-full drop-shadow-xl"}
                                    />
                                </div>
                            </Clickable.Trigger>
                            <Clickable.Content>
                                <img
                                    src={"/schneider-electric/before.png"}
                                    alt={"article"}
                                    className={"rounded-lg w-full h-full drop-shadow-xl"}
                                />
                            </Clickable.Content>
                        </Clickable>
                    </CaseStudySection.SubHeader>
                    <h1>
                        Articles are located on the landing page, product detail pages (PDPs), and PLPs in order to
                        provide context, educate users, and guide decision-making. However, their current presentation
                        creates usability challenges. On desktop, article text spans the full width of the screen,
                        constrained
                        only by 96 pixels (6rem) of padding. With a 20pt font and an average of 176 characters per line,
                        user's
                        eyes must travel long distances, making it difficult to track lines and maintain focus. This
                        slows reading
                        speed, increase cognitive load, and reduce engagement, undermining the article intent.
                    </h1>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"UXR"} subtitle={"Supplementing Insights"}/>
                    <CaseStudySection.Content>
                        <h1 className={""}>
                            To better understand user behavior and validate our design priorities, I leveraged
                            ContentSquare heatmaps to observe interaction patterns across the landing page, PDPs, and
                            PLPs. I also reviewed relevant UX articles and research to contextualize these patterns
                            within best practices. This approach allowed me to supplement our initial findings with
                            concrete
                            evidence, highlighting where users struggled and where improvements could have the greatest
                            impact on navigation, filtering, and content readability.
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
                <CaseStudySection.SubSection spaced={true}>
                    <CaseStudySection.SubHeader subheader={"ContentSquare Heatmaps"}/>
                    <CaseStudySection.Content>
                        <Clickable>
                            <Clickable.Trigger>
                                <div
                                    className={"bg-[#f2f2f2] rounded-xl p-4 w-full flex flex-col justify-center m-auto"}
                                    id={"gallery"}>
                                    <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Value Proposition
                                        Section </p>
                                    <img src={"/schneider-electric/odace_heatmap1.png"} alt={"Image"}
                                         className={"rounded-md drop-shadow-md w-full"}/>
                                </div>
                            </Clickable.Trigger>
                            <Clickable.Content>
                                <img src={"/schneider-electric/odace_heatmap1.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md"}/>
                            </Clickable.Content>
                        </Clickable>
                        <h1 className={"mt-4"}>
                            In the PLP value proposition section, it takes up 4,288 pixels of vertical real estate.
                            There are 3 main value proposition statements, all containing a CTA button linking to the
                            products after the section. However, as users scroll, attention on the value proposition and
                            CTAs diminishes, suggesting that after the first value proposition the overall section is
                            being
                            skipped. This could be condensed into a concise paragraph, reducing vertical real estate
                            while still
                            conveying key messages effectively.
                        </h1>
                        <Clickable>
                            <Clickable.Trigger>
                                <div
                                    className={"bg-[#f2f2f2] rounded-xl p-4 flex flex-col justify-center m-auto mt-10"}
                                    id={"gallery"}>
                                    <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Product Collection Section
                                        & Filter Button</p>
                                    <img src={"/schneider-electric/odace_heatmap2.png"} alt={"Image"}
                                         className={"rounded-md drop-shadow-md"}/>
                                </div>
                            </Clickable.Trigger>
                            <Clickable.Content>
                                <img src={"/schneider-electric/odace_heatmap2.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md"}/>
                            </Clickable.Content>
                        </Clickable>
                        <h1 className={"mt-4"}>
                            In the product collection section, the filter button as expected emerges as a clear friction
                            point. Users must actively click to access filters, which interrupts the browsing flow.
                            Making filters more visible and accessible on-screen will help users refine their search
                            more efficiently without unnecessary clicks.
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.SubHeader subheader={"UX Supplemental Articles"}/>
                    <CaseStudySection.Content>
                        <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%] mb-2"}
                            id={"based"}>Filter Optimization</h1>
                        <LinkButton link={"https://thegood.com/insights/ecommerce-product-filters/"} text={"THE GOOD"}/>
                        <h1 className={"mt-2"}>
                            Highlighted in "25 Ecommerce Product Filters with UX Design Strategies", filters are a
                            critical
                            component of product discoverability, enabling a seamless and frictionless browsing
                            experience. When
                            optimized for a client, these improvements led to a 5.97% increase in conversion rate.
                            Left-aligned filters
                            in particular are widely adopted in ecommerce because they reduce cognitive load, remain
                            visible during browsing,
                            and support iterative filtering without losing context.
                            <br/>
                            <br/>
                            This reinforces the usability issues we observed in our Product Collection section: the
                            current filter button
                            adds friction and hides options that could guide users more efficiently. By making filters
                            more accessible and
                            visible, we can improve product discoverability, reduce user effort, and align the
                            experience with UX practices.
                        </h1>
                        <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%] mt-10 mb-2"}
                            id={"based"}>Article Readability</h1>
                        <div className={"space-x-3"}>
                            <LinkButton
                                link={"https://www.freshconsulting.com/insights/blog/uiux-principle-46-text-box-width-should-help-users-read/#:~:text=In%20web%20design%2C%20one%20element,your%20content%20easy%20to%20read."}
                                text={"FRESH CONSULTING"}/>
                            <LinkButton link={"https://pielot.org/pubs/Rello2016-Fontsize.pdf"} text={"MAKE IT BIG!"}/>
                        </div>
                        <h1 className={"mt-2"}>
                            Research from the Baymard Institute, along with a study from Carnegie Mellon, suggests that
                            the optimal line length for text is between 45-85 characters, with a recommended font size
                            of 18pt.
                            Applying these guidelines can have a significant impact on the comprehension for the B2C
                            articles, directly
                            addressing the issues we identified with long lines and font size in our desktop layout.
                            Aligning article design
                            will reduce eye strain, improve focus, and encourage users to engage more deeply with the
                            content.
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <CaseStudySection>
                <CaseStudySection.SubSection>
                    <CaseStudySection.Title title={"Final Designs"}>
                        <div className={"inline-flex flex-col md:flex-row gap-3 mt-4"}>
                            <LinkButton
                                link={"https://www.figma.com/proto/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=110-439&t=yExnMr3mmsqno6nw-1"}
                                text={"FIGMA MOCKUP"}/>
                            <LinkButton
                                link={"https://www.figma.com/design/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=37-1402&t=yExnMr3mmsqno6nw-1"}
                                text={"FIGMA ANNOTATIONS"}/>
                        </div>
                    </CaseStudySection.Title>
                    <CaseStudySection.Content>
                        <h1>
                            Throughout my internship, I had the privilege of being guided by two senior UX designers
                            outside of my department
                            whose mentorship was invaluable to my growth. They not only gave me feedback at each stage
                            of my process but also
                            helped me validate design decisions with a critical and professional lens. My initial
                            findings focused on the nitpicks
                            of the UI, but through them did I figure out that the user journey and flow was the end
                            goal. With their guidance, I refined
                            my recommendations into a cohesive set of solutions that were presented to my managers and
                            Schneider Electric&#39;s B2C stakeholders
                            + developers as part of my final deliverables.
                            <br/>
                            <br/>
                            Their reactions were incredibly positive, where my work is now slated for implementation in
                            the Phase 2 updates.
                            Knowing my contributions will influence a live, global product was rewarding and motivating
                            as a designer. On a more
                            personal level, the sense of accomplishment seeing my designs evolve from the UX research
                            insights to a solution was thrilling.
                            This experience not only reinforced my passion for UX, but also gave me more confidence in
                            the value I can bring to complex
                            projects.
                        </h1>
                    </CaseStudySection.Content>
                </CaseStudySection.SubSection>
            </CaseStudySection>
            <div className="-mx-10 xl:-mx-72 mt-12">
                <SimpleParallax scale={1.05}>
                    <img
                        src={"/schneider-electric/se_mockup.png"}
                        alt="Image"
                        className="w-screen max-w-none"
                    />
                </SimpleParallax>
            </div>
            <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 -mx-10 xl:-mx-72 mt-4 mb-16"}>
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
            <CaseStudySection.SubSection >
                <CaseStudySection.SubHeader subheader={"Focus Areas"}/>
                <CaseStudySection.Content>
                    <Clickable>
                        <Clickable.Trigger>
                            <div
                                className={"bg-[#f2f2f2] rounded-xl p-4 w-full flex flex-col justify-center m-auto"}
                                id={"gallery"}>
                                <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Value Proposition Section</p>
                                <img src={"/schneider-electric/value_proposition.png"} alt={"Image"}
                                     className={"rounded-md w-full h-auto drop-shadow-md"}/>
                            </div>
                        </Clickable.Trigger>
                        <Clickable.Content>
                            <img src={"/schneider-electric/value_proposition.png"} alt={"Image"}
                                 className={"rounded-md  w-full drop-shadow-md"}/>
                        </Clickable.Content>
                    </Clickable>
                    <h1 className={"mt-4"}>
                        The value proposition was condensed into a single, concise header and supporting paragraph, previously from
                        three separate mini sections. With this fix, redundant CTAs with identical functionality were removed,
                        allowing users to move past the hero section and reach products more quickly and without distraction.
                    </h1>
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
                        provide more relevant information, including color swatches and SKUs, giving a clearer understanding
                        of product availability at a glance.
                        <br/>
                        <br/>
                        However, as time builds upon the website, opportunities including user reviews, ratings, and other
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
                        Filters are now positioned in a left-aligned sidebar occupying 25% of the page width, with options
                        organized into an accordion-style layout for easier navigation. Of the original 108 total filters,
                        48 are related to product types. Those 48 were card-sorted into 6 clear categories, allowing users to
                        quickly locate and compare items based on their needs without feeling overwhelmed by vertical scroll.
                        <br/>
                        <br/>
                        In addition, text-based color options were replaced with visual swatches, promoting recognition over recall
                        and enabling users to better identify product variations at a glance. Together, these fixes reduce cognitive
                        load, support iterative filtering, and create a better browsing and product discovery experience.
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