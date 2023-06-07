import pokeballIcon from '../../assets/pokeball-icon.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import { navigationRoutes } from './Routes';
import { NavigationRoutes } from '../../utils/types/sections/Navbar.types';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {

  const location = useLocation();

  // function to move "underline line" to the navbar route
  const ul= (index: number): void => {
    const styleOrder: string = "translate3d(" + index * 100 + "%,0,0)";
    // create an array filled with every html element with class "underline"
    // let underlines = document.querySelectorAll<HTMLElement>(".underline");
    // iterating all the html elements with 'underline' class to assign a style animation
    document.querySelectorAll<HTMLElement>(".underline").forEach((underline: HTMLElement) => underline.style.transform = styleOrder)
  }

  useEffect(() => {
    // At the first page's load we want to apply style(animations) to the navbar route
    // Every route is extracted from our navbar navigation routes iterating every element with route 
    ul(navigationRoutes.findIndex(({route}) => location.pathname.includes(route)));
  }, [location.pathname])
  
  return (
    <nav>
      <div className="block">
        {/* pokeball icon */}
        <img src={pokeballIcon} alt="pokeball-icon" />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>

          {navigationRoutes.map((route: NavigationRoutes, index) => (
            <Link key={index} to={route.route}>
              <li>{route.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="block">
        {/* Hamburguer React icon */}
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar