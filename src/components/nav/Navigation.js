import React from 'react';
import Banner from './Banner';
import DesktopFilters from './DesktopFilters';
import MobileTitle from './MobileTitle';
import MobileFilters from './MobileFilters';
import NavSlider from '../../containers/NavSlider';

const Navigation = ({ category }) => (
  <div>
    <div className="navmenu navmenu-default navmenu-fixed-left visible-lg" role="navigation">
      <NavSlider/>
    </div>
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <Banner/>
        {console.log(category)}
        <DesktopFilters category={category}/>
        <MobileTitle category={category}/>
      </div>
    </nav>
    <MobileFilters/>
	</div>
);

export default Navigation;