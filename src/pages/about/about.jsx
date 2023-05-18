import "../../utils/scss/about.scss"
import HomeHeader from "../../components/page-header/page-header";
import AboutMenu from "./about-menu";
import  { menus } from "../../data/about.js"

export default function Home() {
  return (
      <>
        <HomeHeader />
        <div className="az">
            {menus.map((menu, index) => (
                <AboutMenu key={index} title={menu.title} text={menu.text} />
            ))}
        </div>
        
        
      </>
  );
}
