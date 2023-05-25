import PropTypes from 'prop-types';
import '../../utils/scss/tagName.scss'

export default function TagName({ tagName }) {

    return (
        <p className='tagName'>{tagName}</p>
    )
}

TagName.propTypes = {
    tagName: PropTypes.string.isRequired
}