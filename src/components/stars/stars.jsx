import '../../utils/scss/stars.scss'
import PropTypes from 'prop-types';
import starPink from '../../assets/star-pink.svg'
import starWhite from '../../assets/star-white.svg'

export default function Stars({ rate }) {

    const pinkStars = Array(rate)
    .fill('')
    .map((_, index) => <img key={index} src={starPink} alt="star pink" />);

    const whiteStars = Array(5 - rate)
    .fill('')
    .map((_, index) => <img key={index} src={starWhite} alt="star white" />);

    return (
        <div className="stars-wrapper">
            {pinkStars}
            {whiteStars}
        </div>
    )
}

Stars.propTypes = {
    rate: PropTypes.number.isRequired,
}