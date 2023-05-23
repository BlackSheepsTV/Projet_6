import "../../utils/scss/about.scss"
import HomeHeader from "../../components/page-header/page-header";
import DropdownMenu from "../../components/dropdownMenu/dropdownMenu.jsx";
import  { menus } from "../../data/about.js"
import aboutImg from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'

export default function Home() {
  return (
      <>
        <HomeHeader img={aboutImg} />
        <div className="about-menus">
            {menus.map((menu, index) => (
                <DropdownMenu key={index} title={menu.title} text={menu.text} />
            ))}
        </div>
      </>
  );
}
