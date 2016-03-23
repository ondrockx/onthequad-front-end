import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NavSlider from './NavSlider';
import { openPostModal, closePostModal } from '../../actions';
import Banner from '../../components/nav/Banner';
import MobileTitle from '../../components/nav/MobileTitle';
import DesktopFilters from '../../components/nav/DesktopFilters';
import MobileFilters from '../../components/nav/MobileFilters';
import PostingModalContainer from './PostingModalContainer';
import config, { searchURL } from '../../config';

const mapStateToProps = (state) => {
  return {
    category: config.categories[state.category] || state.category
  };
};

const MobileCategory = connect(
  mapStateToProps
)(MobileTitle);

let desktopMapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickNewPost: () => dispatch(openPostModal()),
    search: (e) => {
      e.preventDefault();
      ownProps.search();
    }
  };
};
const DesktopFilterBar = connect(
  mapStateToProps, desktopMapDispatchToProps
)(DesktopFilters);

let mobileMapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickNewPost: (e) => {
      e.preventDefault();
      ownProps.onClickNewPost();
    },
    search: (e) => {
      e.preventDefault();
      ownProps.search();
    }
  };
};
const MobileFilterBar = connect(
  ()=>({}), mobileMapDispatchToProps
)(MobileFilters);

const Navigation = (props, context) => (
  <div>
    <div className="navmenu navmenu-default navmenu-fixed-left offcanvas-md hidden-lg" role="navigation">
      <NavSlider childrenProps={{'data-toggle': 'offcanvas', 'data-target': '.navmenu'}}/>
    </div>
    <div className="navmenu navmenu-default navmenu-fixed-left visible-lg" role="navigation">
      <NavSlider/>
    </div>
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <Banner/>
        <DesktopFilterBar search={() => context.router.push(searchURL + '/' + category)}/>
        <MobileCategory/>
      </div>
    </nav>
    <PostingModalContainer/>
    <MobileFilterBar onClickNewPost={() => {
      context.router.push('/posting');
    }} search={() => context.router.push(searchURL + '/' + category)}/>
	</div>
);
Navigation.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Navigation;