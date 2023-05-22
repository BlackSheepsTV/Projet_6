import '../../utils/scss/footer.scss'
import logo from '../../assets/logo_footer.svg';

export default function Footer () {
    return (
        <footer>
            <img src={logo} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}