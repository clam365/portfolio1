import PropTypes from "prop-types"

export function CustomLink({ link: link, text }) {
    return (
        <span className="text-brand-primary hover:text-button-bg-primary-hover">
            <a href={link} target="_blank" rel="opener referrer">{text}</a>
        </span>
    )
}

CustomLink.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
