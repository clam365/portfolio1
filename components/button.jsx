"use client";
import PropTypes from "prop-types";

//Shared base styling
const base =
    "inline-flex items-center justify-center gap-x-1.5 rounded-full font-medium text-sm " +
    "transition-all duration-150 cursor-pointer select-none " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary " +
    "disabled:opacity-40 disabled:pointer-events-none";

//Shared base sizing
const sizing = {
    default: "px-4 py-2.5",
    "icon-only": "p-2.5",
};

//STRICTLY FOR PORTFOLIO DESIGN SYSTEM PREVIEW
//These keep the hover, active, and focus states in place with no animation.
const forceStateStyles = {
    outline: {
        hover: "bg-surface-raised",
        active: "bg-[#f5f8fa] hover:bg-surface-raised scale-[0.97]",
        focus: "hover:bg-surface-raised outline-none ring-2 ring-offset-2 ring-brand-primary",
    },
    primary: {
        hover: "bg-button-bg-primary-hover",
        active: "bg-[#bbf7c9] scale-[0.97] hover:bg-button-bg-primary-hover",
        focus: "hover:bg-button-bg-primary-hover outline-none ring-2 ring-offset-2 ring-brand-primary",
    },
};

export function ButtonPrimary({
    children,
    onClick,
    disabled = false,
    iconOnly = false,
    "aria-label": ariaLabel,
    type = "button",
    forceState,
                              }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={[
                base,
                iconOnly ? sizing["icon-only"] : sizing.default,
                "bg-button-bg-primary text-button",
                !forceState && "hover:bg-button-bg-primary-hover",
                !forceState && "active:scale-[0.97] active:bg-[#bbf7c9] hover:bg-button-bg-primary-hover",
                forceState && forceStateStyles.primary[forceState],
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </button>
    );
}


ButtonPrimary.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    iconOnly: PropTypes.bool,
    "aria-label": PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    forceState: PropTypes.oneOf(["hover", "active", "focus"]),
};

export function ButtonOutline({
                                  children,
                                  onClick,
                                  disabled = false,
                                  iconOnly = false,
                                  "aria-label": ariaLabel,
                                  type = "button",
                                  forceState,
                              }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={[
                base,
                iconOnly ? sizing["icon-only"] : sizing.default,
                "border border-border text-primary",
                !forceState && "hover:bg-surface-raised",
                !forceState && "active:scale-[0.97] active:bg-[#f5f8fa] hover:bg-button-bg-primary-hover",
                forceState && forceStateStyles.outline[forceState],
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </button>
    );
}

ButtonOutline.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    iconOnly: PropTypes.bool,
    "aria-label": PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    forceState: PropTypes.oneOf(["hover", "active", "focus"]),
};

// export function TextLink({href, children, external = true}) {
//     return (
//         <a
//             href={href}
//             target={external ? "_blank" : undefined}
//             rel={external ? "noopener noreferrer" : undefined}
//             className="text-brand-primary hover:text-button-bg-primary-hover transition-colors duration-150 underline-offset-2 hover:underline"
//         >
//             {children}
//         </a>
//     );
// }
//
// TextLink.propTypes = {
//     href: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
//     external: PropTypes.bool,
// };