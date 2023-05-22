import { NavLink } from 'react-router-dom';
import '../../utils/scss/header.scss';
import logo from '../../assets/logo.svg';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo kasa" />
            <nav>
                <ul>
                    <li><NavLink to={"/"} className={({ isActive }) =>  isActive ? "nav-active" : ""}>Acceuil</NavLink></li>
                    <li><NavLink to={"/about"} className={({ isActive }) => isActive ? "nav-active" : ""}>A propos</NavLink></li>
                </ul>
            </nav>
        </header> 
    );
}
  