import "../../utils/scss/home.scss"
import Card from "./card";
import { Logements }  from "../../data/logement.js"

export default function Home() {
  return (
      <>
        <div className="home-header">
          <p>Chez vous, partout et ailleurs</p>
        </div>
        {Logements.map((logement, index ) => (
          <Card key={index} img={logement.cover} location={logement.location} />
        ))}
        
      </>
  );
}
