import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, type, className }) => {
    return <button type={type} onClick={onClick} style={{ backgroundColor: color}} className={className}>{text}</button>
}

Button.defaultProps = {
    color: 'black',
    text: 'Button Component',
    type: 'button',
    className: 'btn'
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button