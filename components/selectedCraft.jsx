"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "@/app/globals.css";
import PropTypes from "prop-types";

export function SelectedCraft({ pageLink, imageSrc, projectDescription, projectName }) {
    return (
        <div className="group relative">
            <Link href={pageLink} className="relative block">
                <div className="relative">
                    {/* Image */}
                    <Image
                        src={imageSrc}
                        alt={projectName}
                        width={1920}
                        height={1080}
                        className="w-full drop-shadow-lg min-h-[240px] max-h-[1080px] object-cover"
                    />

                    {/* Highlight overlay */}
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Arrow button */}
                    <div
                        className="absolute right-10 bottom-10 z-50 rounded-full p-2 bg-spotify opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-4 transition duration-300 ease-in-out"
                        id="arrowButton"
                    >
                        <ArrowRight className="text-black" width={25} height={25} />
                    </div>
                </div>

                {/* Text */}
                <div className="mt-2">
                    <h1 className={"text-xl"}>{projectName}</h1>
                    <h1 className="text-newGray" id="based">
                        {projectDescription}
                    </h1>
                </div>
            </Link>
        </div>
    );
}

SelectedCraft.propTypes = {
    pageLink: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
};
