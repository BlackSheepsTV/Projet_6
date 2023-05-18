import { Link } from 'react-router-dom';
import '../utils/scss/notFound.scss'

export default function NotFound () {
    return (
        <div className='not-found'>
          <h1>404</h1>
          <p>Oups! La page que vous demandez n&apos;existe pas.</p>

          <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    );
}