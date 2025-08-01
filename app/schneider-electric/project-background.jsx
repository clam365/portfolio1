import React from "react";
import {ArrowUpRight} from "lucide-react";

export const ProjectBackground = () => {
    return (
        <div className={"px-10  xl:px-72 py-24 md:pt-48"}>
            <div className={"border-t border-t-[#e1e1e1]   py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Context</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>10
                            week duration</h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            Schneider Electric has traditionally operated as a B2B, offering energy management and
                            automation solutions. With the
                            new launch of their new product application, we expand into B2C flows directly to the
                            homeowners with direct access to products.
                            Currently, this app is piloted in France! For the first 6 weeks of my internship, I had a
                            huge stake in driving the content in Builder.io,
                            while making UI suggestions and fixes across the site.
                        </h1>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] my-16  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16 mb-10"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Defining the Problem</h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            Over the course of the summer, I identified common pain points across the desktop product
                            landing pages (PLP),
                            where users struggled to get to the product section and even browse/find the products they
                            need. Additionally, article readability needed to be enhanced to better engage and inform
                            readers.
                        </h1>
                    </div>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 mb-10 mt-20"}>
                        <div>
                            <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                                id={"based"}>Filter
                                Optimization & Product Details</h1>


                        </div>
                        <div>
                            <h1>
                                The Odace Collection serves as a representative to all PLPs, as they are the same
                                component
                                structure.
                                However, finding the product is not so easy. The formatting unintentionally assumes the
                                user
                                knows EXACTLY what they want.
                                <br/>
                                <br/>
                            </h1>
                            <h1 className={"text-spotify text-sm mt-12 lg:mt-0 mb-1"} id={"spotifyText"}>Key Usability
                                Issues</h1>
                            <div className={"border-t border-t-[#e1e1e1]  py-3"} id={"newLine"}>
                                <h1>
                                    Filters are accessed through a button and require an open/close functionality to
                                    apply and reset,
                                    making the flow the repetitive.
                                </h1>
                            </div>
                            <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                                <h1>
                                    108 possible filters are present and no way to collapse them, meaning the user must
                                    meticulously choose
                                    a filter.
                                </h1>
                            </div>
                            <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                                <h1>
                                    Product Cards have no specific details and take up massive amounts of
                                    screen real estate, especially in List Card View.
                                </h1>
                            </div>
                            <div className={"border-t border-t-[#e1e1e1] py-3"} id={"newLine"}>
                                <h1>
                                    Use must scroll through 4288 pixels of value proposition or click CTAs before
                                    accessing
                                    products.
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mt-10"}
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
                    </div>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-16"}>
                        <div>
                            <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                                id={"based"}>Article Readability</h1>
                        </div>
                        <div>
                            <h1 className={""}>
                                Article text spans the entire width of the desktop while only limited by 96 pixels of
                                padding. With a 20pt font and an average of
                                176 characters per line, users&#39; eyes are forced to travel greater distances across
                                the
                                screen. It becomes harder to track lines,
                                and even the need to move the head or head occurs.
                            </h1>
                        </div>
                    </div>
                    <div>
                        <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mt-16"}
                             id={"gallery"}>
                            <img
                                src={"/schneider-electric/before.png"}
                                alt={"article"}
                                className={"rounded-lg w-full h-full drop-shadow-xl"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1]   py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>UXR</h1>
                        <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>What
                            can we pull?</h1>
                    </div>
                    <div>
                        <h1 className={""}>
                            Starting off my project, I did competitive benchmarking of 5+ sites to understand where ours
                            lied in terms of usability and the
                            product navigation flow. Sites with strong filtering systems scored the highest in the
                            benchmark matrix, while our site was relatively low.

                            <br/>
                            <br/>
                            Now that I knew where to start, I needed user data to fully back up the approaches. Having
                            the site being launched mid-July, I could
                            only rely on ContentSqaure heatmaps to show the paths of our users as a baseline.
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 grid lg:grid-cols-2 gap-5 mt-20 " id={"gallery"}>
                    <div id={"transparency"}>
                        <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Value Proposition Section </p>
                        <img src={"/schneider-electric/odace_heatmap1.png"} alt={"Image"}
                             className={"rounded-md drop-shadow-md mb-5"}/>

                    </div>
                    <div id={"transparency"}>
                        <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Product Collection Section & Filter
                            Button</p>
                        <img src={"/schneider-electric/odace_heatmap2.png"} alt={"Image"}
                             className={"rounded-md drop-shadow-md mb-5"}/>

                    </div>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 border-t border-t-[#e1e1e1] mt-8 py-2 gap-y-4"}
                     id={"newLine"}>
                    <h1 className={"font-medium text-xl"}>What do these heatmaps tell us?</h1>
                    <h1 className={"text-sm"}>
                        In the hero & value proposition sections, the CTAs lead us to the products. Less and less
                        concentrations on the CTAs are shown as we scroll,
                        meaning this is being skipped. Value Proposition can be easily be condensed into a paragraph,
                        and alleviating the vertical real estate.
                        <br/>
                        <br/>
                        In the Product Collection Section, we can clearly see the filter button acting as a friction
                        point. Why not open it up to be more accessible
                        and allow users to see the filters on the screen?
                    </h1>
                </div>
            </div>
            <div>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-16"}>
                    <div>
                        <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                            id={"based"}>Filter Optimization Case Study</h1>
                        <div className={"mt-4"}>
                            <div className={"rounded-full inline-block mr-3"} id={"descriptionTag"}>
                                <a href={"https://thegood.com/insights/ecommerce-product-filters/"} target="_blank" rel="opener referrer"
                                   className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                                   id={"descriptionTag"}>
                                    <h1 className={"text-sm"}>THE GOOD</h1>
                                    <ArrowUpRight
                                        className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={""}>
                            In the good&#39;s &#34;25 Ecommerce Product Filters With UX Design Strategies&#34;, it
                            states filters are the key component to
                            product discoverability in a seamless frictionless manner. When optimized through a client,
                            they experienced a 5.97% conversion rate.
                            Left-side filters are already accustomed to the Ecommerce world, as it reduces cognitive
                            load, stays visible, and encourages iterative
                            filtering without losing context.
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-16"}>
                    <div>
                        <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                            id={"based"}>Readability Case Study</h1>
                        <div className={"mt-4"}>
                            <div className={"rounded-full inline-block mr-3"} id={"descriptionTag"}>
                                <a href={"https://www.freshconsulting.com/insights/blog/uiux-principle-46-text-box-width-should-help-users-read/#:~:text=In%20web%20design%2C%20one%20element,your%20content%20easy%20to%20read."}
                                   target="_blank"
                                   rel="opener referrer"
                                   className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                                   id={"descriptionTag"}>
                                    <h1 className={"text-sm"}>FRESH CONSULTING</h1>
                                    <ArrowUpRight
                                        className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                                    />
                                </a>
                            </div>
                            <div className={"rounded-full inline-block mr-3"} id={"descriptionTag"}>
                                <a href={"https://pielot.org/pubs/Rello2016-Fontsize.pdf"}
                                   target="_blank"
                                   rel="opener referrer"
                                   className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                                   id={"descriptionTag"}>
                                    <h1 className={"text-sm"}>MAKE IT BIG!</h1>
                                    <ArrowUpRight
                                        className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={""}>
                            According to the Baymard Institute & a research study from Carnegie Mellon, the average text
                            line length should contain 45-85 characters
                            and the best font size is 18pt. Combining both these studies can have significant effects on
                            the comprehension and readability of
                            the B2C's articles.
                        </h1>
                    </div>
                </div>
            </div>
            <div className={"border-t border-t-[#e1e1e1] mt-16  py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                    <div>
                        <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>Final Designs</h1>
                        <div className={"mt-4"}>
                            <div className={"rounded-full inline-block mr-3"} id={"descriptionTag"}>
                                <a href={"https://www.figma.com/proto/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=110-439&t=yExnMr3mmsqno6nw-1"}
                                   target="_blank"
                                   rel="opener referrer"
                                   className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                                   id={"descriptionTag"}>
                                    <h1 className={"text-sm"}>FIGMA MOCKUP</h1>
                                    <ArrowUpRight
                                        className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                                    />
                                </a>
                            </div>
                            <div className={"rounded-full inline-block mr-3"} id={"descriptionTag"}>
                                <a href={"https://www.figma.com/design/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=37-1402&t=yExnMr3mmsqno6nw-1"}
                                   target="_blank"
                                   rel="opener referrer"
                                   className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
                                   id={"descriptionTag"}>
                                    <h1 className={"text-sm"}>FIGMA ANNOTATIONS</h1>
                                    <ArrowUpRight
                                        className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>
                            Through Schneider Electric&#39;s amazing mentorship, I had two senior UX designer mentor me
                            in my process and
                            validate the designs. It was presented to my managers and the project global stakeholders as
                            part of my final presentations.
                            These will be implemented in their phase 2 edits! On a personal level, I felt a strong sense
                            of accomplishment seeing my work
                            being incorporated and making an impact on a global scale.

                        </h1>
                    </div>
                </div>
                <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mt-10"}
                     id={"gallery"}>
                    <iframe className="w-full h-[500px]" width={1000} height={750}
                            src="https://embed.figma.com/design/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=37-1402&embed-host=share"
                            allowFullScreen></iframe>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-16"}>
                        <div>
                            <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                                id={"based"}>Focus Areas</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 "}>
                        <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto "}
                             id={"gallery"}>
                            <img
                                src={"/schneider-electric/value_proposition.png"}
                                alt={"article"}
                                className={"rounded-lg w-full h-full drop-shadow-xl"}
                            />
                        </div>
                        <div className={"flex item-center m-auto"}>
                            <h1>
                                The value proposition is shrunk to a concise paragraph and header, outlining what was
                                three mini-sections into
                                one. With this, CTAs with the same functionality are removed, and users can easily see
                                the products once moving past
                                the hero section.
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 "}>
                        <div className={"flex item-center m-auto order-2 lg:order-1"}>
                            <h1>
                                Product cards are still in their desktop 3-grid column, but due to the left filtering
                                system, it is now
                                confined to 75% width of the full body div. With more information including color
                                swatches and the SKUs,
                                we communicate what&#39;s available in an effective way. The list view has more info
                                including the product category,
                                but overall both could things such as reviews and small amounts of detailed info, based
                                on the view.
                            </h1>
                        </div>
                        <div
                            className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto order-1 lg:order-2"}
                            id={"gallery"}>
                            <img
                                src={"/schneider-electric/product_Cards.png"}
                                alt={"article"}
                                className={"rounded-lg w-full h-full drop-shadow-xl"}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 "}>
                        <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto "}
                             id={"gallery"}>
                            <img
                                src={"/schneider-electric/filters.png"}
                                alt={"article"}
                                className={"rounded-lg w-full h-full drop-shadow-xl"}
                            />
                        </div>
                        <div className={"flex item-center m-auto"}>
                            <h1>
                                Filters are now placed in an 25% width aside, with options put into an accordion style.
                                Specifically within the
                                108 filters, 48 are product type related. The 48 product types are card sorted into 6
                                respective categories in order to
                                easily locate and compare items to their needs. Additionally, the color texts are
                                replaced with color swatches to promote recognition
                                over recall, not recall over recognition.
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"}>
                        <div>
                            <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                                id={"based"}>User Flow</h1>
                        </div>
                        <div>
                            <h1 className={""}>
                                With the new filtering system in-place, it encourages iterative and responsive
                                filtering, allowing users to browse in a more frictionless
                                manner. The diagram below shows the average user flow from the homepage, and it cuts
                                down the click depth by 2. They no longer need
                                to open a button, the filters are right there in the aside.
                            </h1>
                        </div>
                    </div>
                    <div>
                        <div className={"bg-[#f2f2f2] rounded-xl p-4 md:p-10 flex flex-col justify-center m-auto mt-16"}
                             id={"gallery"}>
                            <img
                                src={"/schneider-electric/userflow.png"}
                                alt={"article"}
                                className={"rounded-lg w-full h-full drop-shadow-xl"}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"}>
                        <div>
                            <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"}
                                id={"based"}>Article Readability</h1>
                        </div>
                        <div>
                            <h1 className={""}>
                                The screenshots are much better in the Figma, yet despite that we can see the clear
                                differences between the
                                before and after of adjusting the case study principles. From 176 characters per line
                                and 20pt font, it is now 96
                                characters per line and 18pt font, a 45% in characters. Users can read the text more
                                effectively, which in turn
                                comprehension is enhanced.
                            </h1>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 grid lg:grid-cols-2 gap-5 mt-20 "
                             id={"gallery"}>
                            <div id={"transparency"}>
                                <p className={"text-newGray text-sm mb-0.5"} id={"based"}>Before </p>
                                <img src={"/schneider-electric/before.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md mb-5"}/>

                            </div>
                            <div id={"transparency"}>
                                <p className={"text-newGray text-sm mb-0.5"} id={"based"}>After</p>
                                <img src={"/schneider-electric/after18.png"} alt={"Image"}
                                     className={"rounded-md drop-shadow-md mb-5"}/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={"border-t border-t-[#e1e1e1] mt-16  py-2"} id={"newLine"}>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16"}>
                        <div>
                            <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>What's next?</h1>
                            <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"}
                                id={"based"}></h1>
                        </div>
                        <div>
                            <h1 className={"mb-4"}>
                                Currently, the website will continue its pilot phase and move onto other countries until it is fully global!
                                I had an amazing time working with amazing co-workers building and refining this website, and I can't wait to
                                see it blast off. I've been able to thrive and blossom, and this where I took my abilities to the next level.
                                I'm excited for the upcoming opportunities awaiting me.
                            </h1>
                            <img src={"/schneider-electric/coworkers.png"} alt={"coworkers.png"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}