"use client";
import "@/app/globals.css"
import PropTypes from "prop-types"
import Image from "next/image";
import {twMerge} from "tailwind-merge";

function ProjectMeta({fields}) {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
                {fields.map(({label, values}) => (
                    <div key={label}>
                        <h1 className="text-secondary">{label}</h1>
                        {Array.isArray(values)
                            ? values.map((v) => <h1 key={v}>{v}</h1>)
                            : <h1>{values}</h1>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function CaseStudyStart({title, description, imageAlt, imageSrc, fields, className}) {
    return (
        <>
            <div className={twMerge("py-10 pt-20", className) }>
                <h1 className={"text-4xl md:text-4xl font-medium"}>{title}</h1>
                <h1 className={"text-xl md:text-2xl text-secondary mt-3"}>{description}</h1>
            </div>
            <Image src={imageSrc} alt={imageAlt} className={"w-full object-cover max-h-[600px]"} width={1280}
                   height={720}/>
            {fields && <ProjectMeta fields={fields}/>}
        </>
    )
}

CaseStudyStart.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        values: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    })),
}
