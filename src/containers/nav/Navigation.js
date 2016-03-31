import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NavSlider from './NavSlider';
import { openPostModal, closePostModal, navigate } from '../../actions';
import Banner from '../../components/nav/Banner';
import MobileTitle from '../../components/nav/MobileTitle';
import DesktopFilters from '../../components/nav/DesktopFilters';
import MobileFilters from '../../components/nav/MobileFilters';
import PostingModalContainer from './PostingModalContainer';
import config, { searchURL } from '../../config';

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
        <DesktopFilters
          onClickNewPost={props.desktopOnClickNewPost}
          search={(searchString) => {
            props.navigate(context.router, { app: 'SEARCH', search: searchString });
          }}
          category={props.displayCategory}
        />
        <MobileTitle category={props.displayCategory}/>
      </div>
    </nav>
    <PostingModalContainer/>
    <MobileFilters
      onClickNewPost={(e) => {
        e.preventDefault();
        props.navigate(context.router, { app: 'POSTING' });
      }}
      search={(searchString) => {
        props.navigate(context.router, { app: 'SEARCH', search: searchString });
      }}
      category={props.displayCategory}
    />
	</div>
);
Navigation.contextTypes = {
  router: PropTypes.object.isRequired
};
Navigation.propTypes = {
  desktopOnClickNewPost: PropTypes.func.isRequired,
  category: PropTypes.string,
  displayCategory: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    category: state.category,
    displayCategory: config.categories[state.category]  || state.category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (searchString) => dispatch(setSearch(searchString)),
    desktopOnClickNewPost: () => dispatch(openPostModal()),
    navigate: (router, props) => dispatch(navigate(router, props))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);