import '../../utils/scss/stars.scss'
import PropTypes from 'prop-types';
import starPink from '../../assets/star-pink.svg'
import starWhite from '../../assets/star-white.svg'
import { useEffect } from 'react';


export default function Stars({ rate }) {

    const pinkStars = Array(rate)
    .fill('')
    .map((_, index) => <img key={index} src={starPink} alt="star pink" />);

    const whiteStars = Array(5 - rate)
    .fill('')
    .map((_, index) => <img key={index} src={starWhite} alt="star white" />);

    useEffect(() => {
        console.log(rate)
    }, [])

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