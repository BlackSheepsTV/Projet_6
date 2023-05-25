import '../../utils/scss/logement.scss'
import { useParams } from 'react-router-dom';
import { Logements }  from "../../data/logement.js"
import LogementGallery from '../../components/logementGallery/logementGallery'
import TagName from '../../components/tagName/tagName';
import Stars from '../../components/stars/stars';
import DropDownMenu from '../../components/dropdownMenu/dropdownMenu.jsx'
import NotFound from "../notFound";

export default function Logement() {

    const params = useParams();

    const logement = Logements.find((logement) =>  logement.title.replace(/[\s-]+/g, '-').toLowerCase() === params.logementName.replace(/[\s-]+/g, '-').toLowerCase());

    if(!logement) {
        return <NotFound />
    }
    
    return (
        <>
            <LogementGallery images={logement.pictures} title={logement.title} />

            <div className='logement-header-wrapper'>

                <div className='title-wrapper'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>

                    <div className='tags-wrapper'>
                        {logement.tags.map((tag, index) => (
                            <TagName key={index} tagName={tag} />
                        ))}
                    </div>
                    
                </div>
                
                <div className='header-bottom'> 
                        <Stars rate={parseInt(logement.rating)} />

                        <div className='host-wrapper'>
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} />
                        </div>

                </div>
            </div>

            <div className='logement-dropdown-wrapper'>
                <DropDownMenu  title='Description' text={logement.description} />
                <DropDownMenu  title='Équipements' array={logement.equipments} />
            </div>


            

            
        </>
    )
}