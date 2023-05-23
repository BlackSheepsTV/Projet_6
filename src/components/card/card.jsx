import '../../utils/scss/card.scss'
import PropTypes from 'prop-types';

export default function Card({ img, title}) {
    return(
        <div className="card">
            <img src={img} alt={title} />
            <p>{title}</p>
        </div> 
    )   
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
