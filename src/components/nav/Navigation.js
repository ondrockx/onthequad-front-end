import React from 'react';
import Banner from './Banner';
import DesktopCategory from '../../containers/nav/DesktopCategory';;
import MobileCategory from '../../containers/nav/MobileCategory';
import MobileFilters from './MobileFilters';
import NavSlider from '../../containers/nav/NavSlider';

const Navigation = () => (
  <div>
    <div className="navmenu navmenu-default navmenu-fixed-left visible-lg" role="navigation">
      <NavSlider/>
    </div>
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <Banner/>
        <DesktopCategory/>
        <MobileCategory/>
      </div>
    </nav>
    <MobileFilters/>
	</div>
);

export default Navigation;