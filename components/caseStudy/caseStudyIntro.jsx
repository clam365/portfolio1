import React from "react"

//main Case Study Container
export function CaseStudyIntro({children}) {
    return(
        <div className={"grid grid-cols-1 md:grid-cols-2 mt-10  px-10  xl:px-96 gap-x-10 gap-y-10"}>
            {children}
        </div>
    )
}

//Left Column, Intro and Summary
//h1 text size is text-2xl
CaseStudyIntro.Summary = function CaseStudyIntroSummary({children}) {
    return(
        <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
            {children}
        </div>
    )
}

//Right column
CaseStudyIntro.Info = function CaseStudyIntroInfo({children}) {
    return(
        <div>
            {children}
        </div>
    )
}

//Right Column Skill Section (Individual Component for focus, skills, etc)
//goes inside CaseStudyIntro.Info
CaseStudyIntro.InfoSection = function CaseStudyIntroInfoSection({title, children}) {
    return(
        <div className="border-t border-t-[#e1e1e1] py-2" id="newLine">
            <h1 className="text-newGray" id="based">
                {title}
            </h1>
            <div className="space-y-1">{children}</div>
        </div>
    )
}

