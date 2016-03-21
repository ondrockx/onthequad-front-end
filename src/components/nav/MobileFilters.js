import React, { Component, PropTypes } from 'react';
import NavFilterContainer from '../../containers/nav/NavFilterContainer';
import { Input, ButtonToolbar, ButtonGroup, Button, Row, Col } from 'react-bootstrap';

class MobileFilters extends Component {
  componentWillMount() {
    this.setState({searchSelected: false});
  }

  render() {
    var nav = <Row>
      <Col xs={3} className="navbar-content">
        <Button
          onClick={() => this.setState({searchSelected: true})}
          className="navbar-btn pull-left navbar-left-button">
          <span className="glyphicon glyphicon-search"></span>
        </Button>     
      </Col>
      <Col xs={6} className="navbar-content">
        <NavFilterContainer/>
      </Col>
      <Col xs={3} className="navbar-content">
        <Button bsStyle="default"
          className="navbar-btn pull-right navbar-right-button"
          onClick={this.props.onClickNewPost}>
          <span className="glyphicon glyphicon-plus" />
        </Button>
      </Col>
    </Row>;

    if (this.state.searchSelected) {
      nav = <Row style={{marginTop: "8px"}}>
        <Col xs={3} className="navbar-content">
          <Button onClick={() => this.setState({searchSelected: false})}>
            <span className="glyphicon glyphicon-remove"></span>
          </Button>
        </Col>
        <Col xs={6} className="navbar-content">
          <Input type="text" placeholder="Search"/>
        </Col>
        <Col xs={3} className="navbar-content">
          <Button>
            <span className="glyphicon glyphicon-search"></span>
          </Button>
        </Col>
      </Row>;
    }

    return <nav className="navbar navbar-inverse navbar-fixed-bottom hidden-md hidden-lg bottom-nav" role="navigation">  
        {nav}
  	</nav>;
  }
}

MobileFilters.propTypes = {
  onClickNewPost: PropTypes.func.isRequired
};

export default MobileFilters;