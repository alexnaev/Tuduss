import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Legg Til' onClick={onClick} />
        </header>
  )
}

Header.defaultProps = {
    title: 'Header Component',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header