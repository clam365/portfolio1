import React from "react";
import { twMerge } from "tailwind-merge";

export default function InfoBlock({title, description, icon: Icon, className,}) {
    return (
        <div className={twMerge(className)}>
            <div className={"items-center flex gap-2 mb-2"}>
                {Icon && <Icon className="text-secondary"/>}
                <h1 className="text-secondary text-xl">{title}</h1>
            </div>
            <p>{description}</p>
        </div>
    );
}
