import '../../utils/scss/card.scss'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Card({id, img, title}) {
    const navigate = useNavigate()

    return(
        <div className="card" onClick={() => navigate(`/logement/${id}`)}>
            <img src={img} alt={title} />
            <p>{title}</p>
        </div> 
    )   
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    
};
