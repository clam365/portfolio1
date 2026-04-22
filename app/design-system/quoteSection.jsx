import React from "react";
import Quote from "@/components/quote";
export default function QuoteSection() {
    return(
        <section id={"quote"} className={"py-10 scroll-mt-24"}>
            <h1 className={"text-2xl md:text-2xl font-medium"}>Quote</h1>
            <h1 className={"text-md md:text-md text-secondary mt-2"}>
                My favorite quote is: "Preoccupied with a single leaf, you won&apos;t notice the tree. Preoccupied with
                a single tree, you&apos;ll miss the entire forest". Basically: understand the entire ecosystem of what you are working with. Put it all together.
            </h1>
            <div className="border bg-surface-raised border-border m-auto rounded-md p-4 md:p-12 w-full mt-10">
                <Quote>
                    Preoccupied with a single leaf, you won&apos;t notice the tree.
                    <br/>
                    <br/>
                    Preoccupied with a single tree, you&apos;ll miss the entire forest.
                    <br/>
                    <br/>
                    ~Takehiko Inoue, Vagabond manga author
                </Quote>
            </div>
        </section>
    )
}