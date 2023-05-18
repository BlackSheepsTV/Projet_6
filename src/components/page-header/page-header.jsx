import "../../utils/scss/home.scss"
import PropTypes from 'prop-types';

export default function HomeHeader({text}) {
  return (
        <div className="home-header">
          <p>{ text }</p>
        </div>
  );
}

HomeHeader.propTypes = {
  text: PropTypes.string,
};