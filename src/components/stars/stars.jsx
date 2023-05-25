import '../../utils/scss/stars.scss'
import starPink from '../../assets/star-pink.svg'
import starWhite from '../../assets/star-white.svg'

export default function Stars() {
    return (
        <div className="stars-wrapper">
            <img src={starPink} alt='star pink' />
            <img src={starWhite} alt='star white' />
        </div>
    )
}