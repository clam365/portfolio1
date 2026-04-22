import React from "react";
import { twMerge } from "tailwind-merge";

export default function Quote({ children, className }) {
    return (
        <div
            className={twMerge(
                "space-y-2 border-l-4 border-secondary pl-4 text-secondary text-sm italic",
                className
            )}
        >
            {children}
        </div>
    );
}