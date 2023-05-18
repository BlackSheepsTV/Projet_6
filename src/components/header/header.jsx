import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1 className='kasa'>Kasa</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"} activeClassName="nav-active">Acceuil</NavLink></li>
                    <li><NavLink to={"/about"} activeClassName="nav-active">A propos</NavLink></li>
                </ul>
            </nav>
        </header> 
    );
  }
  
  export default Header;