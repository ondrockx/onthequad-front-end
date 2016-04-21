import React, { Component, PropTypes } from 'react';
import NavFilterContainer from '../../containers/nav/NavFilterContainer';
import { Input, ButtonToolbar, ButtonGroup, Button, Row, Col } from 'react-bootstrap';

class MobileFilters extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  componentWillMount() {
    this.setState({searchSelected: false});
  }

  search(e) {
    e.preventDefault();
    this.props.search(this.refs.search.refs.input.value);
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
      nav = <Row>
        <Col xs={3} className="navbar-content">
          <Button
            onClick={() => this.setState({searchSelected: false})}
            className="navbar-btn pull-left navbar-left-button">
            <span className="glyphicon glyphicon-remove"></span>
          </Button>
        </Col>
        <Col xs={6} className="navbar-content">
          <Input style={{marginTop: "8px"}} ref="search" type="text" placeholder="Search"/>
        </Col>
        <Col xs={3} className="navbar-content">
          <Button bsStyle="default"
            className="navbar-btn pull-right navbar-right-button" 
            onClick={ this.search }>
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
  onClickNewPost: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

export default MobileFilters;