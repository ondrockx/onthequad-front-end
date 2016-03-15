import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { Jumbotron, Button } from 'react-bootstrap';
import config from '../../config';

class NavSlider extends Component {
  changeCategory(e, id) {
    e.preventDefault();
    this.context.router.push('/browse/' + id);
  }

  render() {
    const { category } = this.props;
    return <ul className="nav navmenu-nav hamburger-menu">
      {_.map(config.categories, (itemName, id) => {
          return (
            <li key={id} className={category === id ? "active" : ""}>
              <a href="#" onClick={(e) => this.changeCategory(e, id)}>
                {itemName}
              </a>
            </li>
          );
      })}
    </ul>;
  }
}

const mapStateToProps = (state) => {
  state = state || {};
  return {
    category: state.category || ""
  };
};

NavSlider.contextTypes = {
  router: PropTypes.object.isRequired
};

NavSlider = connect(mapStateToProps)(NavSlider);

export default NavSlider;