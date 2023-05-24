import '../../utils/scss/logement.scss'
import { useParams } from 'react-router-dom';
import { Logements }  from "../../data/logement.js"
import LogementGallery from '../../components/logementGallery/logementGallery'
import NotFound from "../notFound";

export default function Logement() {

    const params = useParams();

    const logementPictures = Logements.find((logement) =>  logement.title.replace(/[\s-]+/g, '-').toLowerCase() === params.logementName.replace(/[\s-]+/g, '-').toLowerCase());

    if(!logementPictures) {
        return <NotFound />
    }
    
    return (
        <>
            <LogementGallery images={logementPictures.pictures} title={logementPictures.title} />
        </>
    )
}