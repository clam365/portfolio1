"use client";
import "@/app/globals.css"
import PropTypes from "prop-types"
import Image from "next/image";

export default function CaseStudyStart({title, description, imageAlt, imageSrc}) {
    return (
        <>
            <div className={"py-10 pt-20 md:pt-20"}>
                <h1 className={"text-4xl md:text-4xl font-medium"}>{title}</h1>
                <h1  className={"text-xl md:text-2xl text-newGray mt-3"}>{description}</h1>
            </div>
            <Image src={imageSrc} alt={imageAlt} className={"w-full object-cover max-h-[600px]"} width={1280} height={720}/>
        </>
    )
}

CaseStudyStart.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}
