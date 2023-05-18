import '../../utils/scss/card.scss'
import PropTypes from 'prop-types';

export default function Card({ img, location}) {
    return(
        <div className="card-wrapper">
            <img src={img} alt="Photo de logement" />
            <p>{location}</p>
        </div> 
    )   
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  };
