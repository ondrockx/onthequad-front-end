import React from 'react';
import UserStatus from '../../containers/nav/UserStatus';

const Banner = ({goToBrowse}) => (
	<div className="row navbar-cust1">
		<div className="col-xs-2 col-sm-3 hidden-lg navbar-content">
      <button type="button" className="btn btn-default navbar-btn pull-left" data-toggle="offcanvas" data-target=".navmenu">
        <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
      </button>
    </div>

    <div className="navbar-header col-xs-8 col-sm-6 col-lg-offset-3">
     	<a href='/browse/all' className="navbar-brand navbar-center mybrand" onClick={goToBrowse}>on the quad</a>
    </div>
      
    <div className="col-xs-2 col-sm-3 nav-user">
    	<div className="pull-right">
        <UserStatus/>
     	</div>
    </div>
  </div>
);

export default Banner;