import React from "react";
export function CaseStudySection({children}) {
    return (
        <div className={"border-t border-t-[#e1e1e1] my-16 py-2"} id={"newLine"}>
            {children}
        </div>
    )
}

CaseStudySection.Title = function CaseStudySectionTitle({title, subtitle, children}) {
    return (
        <div>
            <h1 className={"text-slight-black text-4xl font-medium xl:w-full"}>{title}</h1>
            <h1 className={"text-newGray text-3xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>{subtitle}</h1>
            {children}
        </div>
    )
}

CaseStudySection.SubHeader = function CaseSTudySectionSubHeader({subheader, children}) {
    return (
        <div>
            <h1 className={"text-newGray text-2xl font-medium xl:w-full md:max-w-[80%]"} id={"based"}>{subheader}</h1>
            {children}
        </div>

    )
}

CaseStudySection.Content = function CaseStudySectionContent({title, children}) {
    return (
        <div>
            {children}
        </div>
    )
}

CaseStudySection.SubSection = function CaseStudySubSection({ children, spaced = false }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 ${spaced ? "my-16" : ""}`}>
            {/* Left side - sticky */}
            <div className="md:sticky md:top-24 self-start">
                {children[0]} {/* usually Title/SubHeader */}
            </div>

            {/* Right side - scrolls normally */}
            <div>{children[1]}</div>
        </div>
    );
};
