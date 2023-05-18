import { NavLink } from 'react-router-dom';
import '../../utils/scss/header.scss'

function Header() {
    return (
        <header>
            <h1 className='kasa'>Kasa</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"} className={({ isActive }) =>  isActive ? "nav-active" : ""}>Acceuil</NavLink></li>
                    <li><NavLink to={"/about"} className={({ isActive }) => isActive ? "nav-active" : ""}>A propos</NavLink></li>
                </ul>
            </nav>
        </header> 
    );
  }
  
  export default Header;