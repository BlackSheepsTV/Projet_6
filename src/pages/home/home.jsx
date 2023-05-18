import "../../utils/scss/home.scss"
import Card from "./card";
import HomeHeader from "../../components/page-header/page-header";
import { Logements }  from "../../data/logement.js"

export default function Home() {
  return (
      <>
        <HomeHeader />
        
        <div className='cards-wrapper'>
          {Logements.map((logement, index ) => (
            <Card key={index} img={logement.cover} location={logement.location} />
          ))}
        </div>
        
        
      </>
  );
}
