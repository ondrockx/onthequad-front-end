import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import NavFilterContainer from '../../containers/nav/NavFilterContainer';
import { searchURL } from '../../config';

class DesktopFilters extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    this.props.search(this.refs.search.value);
  }

  render() {
    const { onClickNewPost, category } = this.props;
    return <div className="hidden-xs hidden-sm container">
      <Row>
        <Col md={4} lg={6}>
          <div className="navbar-brand navbar-category">
            <p className="category-title">{ category }</p>
          </div>
        </Col>
        <Col md={8} lg={6}>
          <Row>
            <Col xs={6}>
              <ButtonToolbar>
                <NavFilterContainer/>
                <ButtonGroup>
                  <Button bsStyle="default" className="navbar-btn" onClick={ onClickNewPost }>
                    <span>Create Post </span>
                    <span className="glyphicon glyphicon-plus" />
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col xs={6}>
              <form className="navbar-form" role="search" onSubmit={ this.search }>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" ref="search" />
                  <div className="input-group-btn">
                    <Button onClick={ this.search }><span className="glyphicon glyphicon-search" /></Button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>;
  }
};

DesktopFilters.propTypes = {
  onClickNewPost: PropTypes.func.isRequired,
  category: PropTypes.string,
  search: PropTypes.func.isRequired
};

export default DesktopFilters;