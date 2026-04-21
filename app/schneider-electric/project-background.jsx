import React from "react";
import {LinkButton} from "@/components/linkButton";
import {LayoutGrid, List, Waypoints} from "lucide-react";

export const ProjectBackground = () => {
    return (
        <div className={" py-24 md:pt-20"}>
            <div>
                <img src={"/schneider-electric/teamPhoto.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-secondary mt-2"}>
                    BostonHub DCR Team!
                </h1>
            </div>
            <div className={"mt-20 scroll-mt-40 "} id={"context"}>
                <h1 className={"text-secondary mb-2"}>CONTEXT</h1>
                <h1 className={"font-medium text-3xl mb-2"}>From enterprise buyer to everyday homeowner</h1>
                <h1>
                    Schneider Electric is a global leader in energy management and automation. Their ecosystem was built
                    for enterprise buyers.
                    But the market shifted. A PWC report found that:
                </h1>
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 justify-between my-6"}>
                    <div className={"text-center"}>
                        <h1 className="text-brand-primary text-5xl font-bold">80-90%</h1>
                        <h1>B2B buyers expect B2C experiences</h1>
                    </div>
                    <div className={"text-center"}>
                        <h1 className="text-brand-primary text-5xl font-bold">73%</h1>
                        <h1>buyers say the UX matters as much as product</h1>
                    </div>
                    <div className={"text-center"}>
                        <h1 className="text-brand-primary text-5xl font-bold">49%</h1>
                        <h1>consumers say companies have a good UX</h1>
                    </div>
                </div>
                <h1>
                    Competitors like Siemens, Eaton, and Legrand were already investing in cleaner storefronts and
                    consumer-friendly journeys. SE responded by launching their own B2C
                    experience, letting homeowners browse, interact with AR, and find nearby retailers.
                </h1>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"problem"}>
                <h1 className={"text-secondary"}>PROBLEM</h1>
                <h1 className={"font-medium text-3xl"}>Reducing browsing friction</h1>
                <h1>
                    As I worked in the CMS and ran heatmap analysis in parallel, friction points kept surfacing in
                    product discovery. The experience was consumer-facing, but the conventions users rely on to orient
                    themselves were not there.
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
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
                <div>
                    <div className={"items-center flex gap-2 mb-2"}>
                        <Waypoints className={"text-secondary"}/>
                        <h1 className={"text-secondary text-xl"}>3 Step Filtering</h1>
                    </div>
                    <h1 className={""}>Open, select, apply pop-up method. No iterative feedback or visible change.
                    </h1>
                </div>
                <div>
                    <div className={"items-center flex gap-2 mb-2"}>
                        <List className={"text-secondary"}/>
                        <h1 className={"text-secondary text-xl"}>Unclear Hierarchy</h1>
                    </div>
                    <h1 className={""}>106 options with no real hierarchy and poor grouping. Immediate
                        cognitive load.
                    </h1>
                </div>
                <div>
                    <div className={"items-center flex gap-2 mb-2"}>
                        <LayoutGrid className={"text-secondary"}/>
                        <h1 className={"text-secondary text-xl"}>Product Layout</h1>
                    </div>
                    <h1 className={""}>Huge card real estate, yet no details, leading to low confidence browsing.
                    </h1>
                </div>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"success"}>
                <h1 className={"text-secondary"}>FRAMING SUCCESS</h1>
                <h1 className={"font-medium text-3xl"}>Connect user problem to business outcome</h1>
                <h1>
                    Looking at all the filtering friction, I synthesized the definition of success to frame it in a way
                    that connected
                    the user problem to the business outcome. Confidence is the missing ingredient to the stew, just
                    orient someone so that
                    they have enough control to find what they need.
                </h1>
            </div>
            <div className={"my-20 scroll-mt-40 text-center font-libreBaskerville italic text-2xl"}>
                By enabling homeowners to browse and discover products{" "}
                <span className="bg-yellow-200 hover:bg-yellow-300 transition px-1 rounded">with confidence</span>,
                Schneider Electric can{" "}
                <span className="bg-yellow-200 hover:bg-yellow-300 transition px-1 rounded">reduce drop-off</span> rate
                at the discovery stage and
                ultimately{" "}
                <span className="bg-yellow-200 hover:bg-yellow-300 transition px-1 rounded">convert a first-time visitor into a buyer</span>.
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"research"}>
                <h1 className={"text-secondary"}>RESEARCH</h1>
                <h1 className={"font-medium text-3xl"}>Pattern Alignment</h1>
                <h1>
                    Looking at our competitors through benchmarking to contextualize best practices, I found that most
                    use left-aligned filter panels. They are common
                    and exist for a reason. They stay visible as your scroll, are adjustable without losing context, and
                    do not involve pop-ups to refine search.
                </h1>
            </div>
            <div className={"my-10"}>
                <img src={"/schneider-electric/competitors.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-secondary mt-2"}>
                    Competitors similarly utilizing filter panels
                </h1>
            </div>
            <div className={"mt-10 space-y-2 scroll-mt-40 "}>
                <h1 className={" text-secondary"}>What are the returns on this UI pattern?</h1>
                <h1>
                    Fully is a D2C furniture brand that went through a filtering redesign. When they implemented a
                    filter panel to create a clearer journey,
                    it resulted in a 5.97% conversion lift. What&apos;s even more compelling it that got a 75:1 ROI from
                    this project with the agency. If they spend 10k,
                    they get 75,000 DOLLARS BACK. SE with their wide cast net can see even more with this implemented.
                </h1>
                <LinkButton link={"https://thegood.com/insights/ecommerce-product-filters/"} text={"THE GOOD"}/>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"finaldesigns"}>
                <h1 className={"text-secondary"}>FINAL DESIGNS</h1>
                <div className={"flex space-x-2"}>
                    <LinkButton
                        link={"https://www.figma.com/proto/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=110-439&t=yExnMr3mmsqno6nw-1"}
                        text={"FIGMA MOCKUP"}/>
                    <LinkButton
                        link={"https://www.figma.com/design/QPMO0cmjGXg45y2joibFH7/SE-Mockups?node-id=37-1402&t=yExnMr3mmsqno6nw-1"}
                        text={"FIGMA ANNOTATIONS"}/>
                </div>
                <h1>
                    With my findings in hand, I moved into solutions. I worked with my senior designer mentors
                    throughout this process to pressure-test decisions
                    against the design system. I presented this to my director, 2 VPs, engineers, and the regional
                    representations from France and Spain whom I collaborated with.
                </h1>
            </div>
            <div className="mt-10">
                <img
                    src={"/schneider-electric/beforeafter.png"}
                    alt="Image"
                    className=""
                />
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"focusareas"}>
                <h1 className={"text-secondary"}>FOCUS REDESIGN AREAS</h1>
            </div>
            <div className={"my-10"}>
                <img src={"/schneider-electric/popupvpanel.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-secondary mt-2"}>
                    Previous 3 Step Pop Up flow replaced with persistent filter panel anchored to left side. Gives
                    users more control and a significant decrease in drop-off rates at the stage where people would
                    leave
                    before reaching a product.
                </h1>
            </div>
            <div className={"my-10"}>
                <img src={"/schneider-electric/cardsort.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-secondary mt-2"}>
                    106 flurried options were card sorted into product types, along with color options switched to
                    visual swatches, promoting recognition
                    over recall.
                </h1>
            </div>
            <div className={"my-10"}>
                <img src={"/schneider-electric/card.png"} alt={"team photo"} className={"w-full"}/>
                <h1 className={"text-secondary mt-2"}>
                    Product cards have more information, where homeowners can now make preliminary decisions, leading to
                    more confident browsing.
                </h1>
            </div>

            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"userflow"}>
                <h1 className={"text-secondary"}>IMPROVED JOURNEY FLOW</h1>
                <h1 className={"font-medium text-3xl"}>Effective browsing</h1>
                <h1>
                    From the position of a homeowner starting from the homepage, it required a minimum of 6 discrete
                    steps to reach a filtered set of products on PLP.
                    Now, it is 33% less steps. That is 33% fewer moments someone can losing their footing, and more time
                    to find something worth buying.

                </h1>
            </div>
            <div className={"mt-10"}>
                <img src={"/schneider-electric/flow.png"} alt={"team photo"}
                     className={"w-full border border-[#D1D5D6] bg-[#f5f5f7] p-8"}/>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"outcome"}>
                <h1 className={"text-secondary"}>OUTCOME</h1>
                <h1 className={"font-medium text-3xl"}>Currently in development!</h1>
                <h1>
                    If I had more time during my internship, I would test the design with A/B and look at statistics for
                    its effectiveness. There&apos;s also opportunities
                    to continue at the E2E system areas. Working in a complex environment, tight timelines, and a big
                    stakeholder room, my project was green-lit for
                    development!
                </h1>
            </div>
            <div className={"mt-20 space-y-2 scroll-mt-40 "} id={"reflections"}>
                <h1 className={"text-secondary"}>REFLECTIONS</h1>
                <h1 className={"font-medium text-3xl"}>What I learned</h1>
            </div>
            <div className={"mt-10 grid grid-cols-1 md:grid-cols-2 gap-10"}>
                <div>
                    <h1 className={"text-secondary text-xl"}>Think holistically</h1>
                    <h1>
                        Recognizing that fixing individual pain points was not enough, the entire flow
                        needs to work together in harmony.
                    </h1>
                </div>
                <div>
                    <h1 className={"text-secondary text-xl"}>Business goals don&apos;t conflict user needs</h1>
                    <h1>
                        They can reinforce each other. Removing barriers for users also removes barriers to conversion
                        and
                        growth.
                    </h1>
                </div>
            </div>
        </div>
    )

}