import '../../utils/scss/card.scss'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Card({ img, title}) {
    const navigate = useNavigate()
    const transformedTitle = title.replace(/[\s-]+/g, '-').toLowerCase();

    return(
        <div className="card" onClick={() => navigate(`/logement/${transformedTitle}`)}>
            <img src={img} alt={title} />
            <p>{title}</p>
        </div> 
    )   
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
