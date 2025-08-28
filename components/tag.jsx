import PropTypes from "prop-types"

export function Tag({ icon: Icon, label }) {
    return (
        <div className="hidden md:flex border border-[#d8d8d8] rounded-full px-3 py-1 text-xs sm:text-sm md:text-md items-center text-slight-black gap-1">
            <Icon className="w-4 h-4" />
            <p>{label}</p>
        </div>
    )
}

Tag.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
}
