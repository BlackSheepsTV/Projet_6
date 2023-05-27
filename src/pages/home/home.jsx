import "../../utils/scss/home.scss"
import Card from "../../components/card/card.jsx";
import HomeHeader from "../../components/page-header/page-header";
import { Logements }  from "../../data/logement.js"
import homeImg from '../../assets/home.png';

export default function Home() {

  return (
      <>
        <HomeHeader text="Chez vous, partout et ailleurs" img={homeImg} />

        <div className='cards-wrapper'>
          {Logements.map((logement, index ) => (
            <Card key={index} id={logement.id} img={logement.cover} title={logement.title}/>
          ))}
        </div>
        
        
      </>
  );
}
