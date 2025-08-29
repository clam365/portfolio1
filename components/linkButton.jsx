import PropTypes from "prop-types"
import {ArrowUpRight} from "lucide-react";
import React from "react";

export function LinkButton({ link: link, text }) {
    return (
        <div className={"rounded-full mt-10 inline-block"} id={"descriptionTag"}>
            <a href={link}
               target="_blank" rel="opener referrer"
               className={"group flex items-center px-3 py-2 border border-[#e1e1e1] rounded-full hover:bg-[#e7e7e7] transition"}
               id={"descriptionTag"}>
                <h1 className={"text-sm"}>{text}</h1>
                <ArrowUpRight
                    className="text-spotify group-hover:text-[#2c8b44] transition w-5 h-5 "
                />
            </a>
        </div>
    )
}

LinkButton.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
