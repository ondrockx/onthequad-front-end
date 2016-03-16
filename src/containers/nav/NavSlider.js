import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import config from '../../config';

class NavSlider extends Component {
  changeCategory(e, id) {
    e.preventDefault();
    this.context.router.push('/browse/' + id);
  }

  render() {
    const { category, childrenProps} = this.props;
    return <ul className="nav navmenu-nav hamburger-menu">
      {_.map(config.categories, (itemName, id) => {
          return (
            <li key={id} className={category === id ? "active" : ""}>
              <a href={"/browse/" + id} onClick={(e) => this.changeCategory(e, id)} {...childrenProps}>
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

NavSlider.propTypes = {
  category: PropTypes.string,
  childrenProps: PropTypes.object
};

NavSlider.contextTypes = {
  router: PropTypes.object.isRequired
};

NavSlider = connect(mapStateToProps)(NavSlider);

export default NavSlider;