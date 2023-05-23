import "../../utils/scss/dropdown.scss"
import { useState } from "react";
import PropTypes from 'prop-types';
import arrowDown from '../../assets/arrowDown.svg'
import arrowUp from '../../assets/arrowUp.svg'

export default function DropdownMenu({ title, text }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className="dropdown-wrapper">
        <div className="dropdown-title" onClick={() => setIsOpen(!isOpen)}>
          <p>{title}</p>
          {!isOpen ? (
            <img src={arrowDown} alt="arrowDown" />
          ) : (
            <img src={arrowUp} alt="arrowUp" />

          )}
        </div>
        {isOpen && <p>{text}</p> }
      </div>
  );
}

DropdownMenu.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};