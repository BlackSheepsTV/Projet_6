import "../../utils/scss/home.scss";
import PropTypes from 'prop-types';

export default function HomeHeader({text, img}) {
  return (
        <div className="page-header">
          <img src={img} alt=""/>
          <p>{ text }</p>
        </div>
  );
}

HomeHeader.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string.isRequired
};