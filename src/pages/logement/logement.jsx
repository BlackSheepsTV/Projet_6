import '../../utils/scss/logement.scss'
import { useParams } from 'react-router-dom';
import { Logements }  from "../../data/logement.js"
import LogementGallery from '../../components/logementGallery/logementGallery'
import TagName from '../../components/tagName/tagName';
import Stars from '../../components/stars/stars';
import NotFound from "../notFound";
import { useEffect } from 'react';

export default function Logement() {

    const params = useParams();

    const logement = Logements.find((logement) =>  logement.title.replace(/[\s-]+/g, '-').toLowerCase() === params.logementName.replace(/[\s-]+/g, '-').toLowerCase());

    useEffect(() => {
       logement.tags.map((tag) => (
             console.log(tag)
        ))
    }, [])

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
                        <Stars />

                        <div className='host-wrapper'>
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} />
                        </div>

                </div>
            </div>


            

            
        </>
    )
}