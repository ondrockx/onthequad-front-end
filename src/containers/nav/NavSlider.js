import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { isSignedIn } from '../../actions';
import config, { browseURL, accountURL } from '../../config';

var AccountCategory = ({category, childrenProps}, context) => (
  <li key='account' className={category === 'Account' ? "active" : ""}>
    <a href={accountURL} onClick={(e) => {
      e.preventDefault();
      context.router.push(accountURL);
    }} {...childrenProps}>
      <b>Your Items</b>
    </a>
  </li>
);

AccountCategory.contextTypes = {
  router: PropTypes.object.isRequired
};

AccountCategory = connect()(AccountCategory);

class NavSlider extends Component {
  changeCategory(e, id) {
    e.preventDefault();
    this.context.router.push(browseURL + '/' + id);
  }

  render() {
    const { category, childrenProps} = this.props;
    return <ul className="nav navmenu-nav hamburger-menu">
      {_.map(config.categories, (itemName, id) => {
          return (
            <li key={id} className={category === id ? "active" : ""}>
              <a href={browseURL + '/' + id} onClick={(e) => this.changeCategory(e, id)} {...childrenProps}>
                {itemName}
              </a>
            </li>
          );
      })}
      {this.props.signedIn ? <AccountCategory {...this.props} /> : ""}
    </ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    signedIn: isSignedIn(state)
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