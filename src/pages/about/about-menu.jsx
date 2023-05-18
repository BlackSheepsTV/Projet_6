import "../../utils/scss/about.scss"
import PropTypes from 'prop-types';

export default function AboutMenu({ title, text }) {
  return (
      <div className="about-menu-wrapper">
        <div className="menu">
            <p>{title}</p>
        </div>
        <p>{text}</p>
      </div>
  );
}

AboutMenu.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};