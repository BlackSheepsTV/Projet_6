import "../utils/scss/dropdown.scss"
import PropTypes from 'prop-types';

export default function DropdownMenu({ title, text }) {
  return (
      <div className="dropdown-wrapper">
        <div className="dropdown-title">
            <p>{title}</p>
           <div className="arrow"></div>
        </div>
        <p>{text}</p>
      </div>
  );
}

DropdownMenu.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};