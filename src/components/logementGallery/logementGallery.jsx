import '../../utils/scss/logementGallery.scss'
import { useState } from 'react';
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import PropTypes from 'prop-types';

export default function LogementGallery({images, title}) {

    const [index, setIndex] = useState(0)

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

    return (
        <div className="logement-gallery">
            {images.map((image, idx) => (
                idx === index && 
                <img key={idx} src={image} alt={title} />
            ))}
            {images.length > 1 && (
                <>
                    <img className='arrow arrow-left' src={arrowLeft} alt='arrowLeft' onClick={handlePrevious}/>
                    <img className='arrow arrow-right' src={arrowRight} alt='arrowRight' onClick={handleNext}/>
                    <p>{index + 1}/{images.length}</p>
                </>
            )}   
        </div>
    )
}

LogementGallery.propTypes = {
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};