import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showForm }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showForm ? 'red' : 'green'} text={showForm ? 'Lukk' : 'Legg Til'} onClick={onAdd} />
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