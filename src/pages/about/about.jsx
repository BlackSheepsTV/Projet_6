import "../../utils/scss/dropdown.scss"
import HomeHeader from "../../components/page-header/page-header";
import DropdownMenu from "../../components/dropdownMenu.jsx";
import  { menus } from "../../data/about.js"

export default function Home() {
  return (
      <>
        <HomeHeader />
        <div className="about-menus">
            {menus.map((menu, index) => (
                <DropdownMenu key={index} title={menu.title} text={menu.text} />
            ))}
        </div>
      </>
  );
}
