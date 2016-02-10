'use strict';

var React = require('react');
var {ButtonToolbar, ButtonGroup, Row, Col, Button, Modal} = require('react-bootstrap');
var PostingBox = require('../../../posting/components/PostingBox');
var PostingStore = require('../../../posting/stores/PostingStore');
var config = require('../../config');
var NavFilters;

NavFilters = React.createClass({
    getInitialState: function () {
        return {
            showModal: false
        }
    },
    render: function () {
        var navbar;
        var filters = (
            <ButtonGroup>
                <Button bsStyle="default" className="navbar-btn" active>
                    <span className="glyphicon glyphicon-calendar" />
                </Button>
                <Button bsStyle="default" className="navbar-btn">
                    <span className="glyphicon glyphicon-sort-by-attributes" />
                </Button>
                <Button bsStyle="default" className="navbar-btn">
                    <span className="glyphicon glyphicon-sort-by-attributes-alt" />
                </Button>
            </ButtonGroup>
        );
        if(this.props.desktop) {
            navbar = (
                <div className="nav navbar-nav">
                    <li>
                        <form className="navbar-form" role="search">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                                <div className="input-group-btn">
                                    <Button><span className="glyphicon glyphicon-search" /></Button>
                                </div>
                            </div>
                        </form>
                    </li> 
                    
                    <li>
                        <ButtonToolbar>
                            {filters}
                            <ButtonGroup>
                                <Button bsStyle="default" className="navbar-btn" onClick={()=>{this.setState({showModal: true});}}>
                                    <span>Create Post </span>
                                    <span className="glyphicon glyphicon-plus" />
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </li>
                    <Modal show={this.state.showModal} onHide={()=>{this.setState({showModal: false});}}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Posting</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <PostingBox {...this.props}/>
                        </Modal.Body>
                    </Modal>
                </div>
            );
        } else {
            navbar = (
                <Row>
                    <Col xs={4} className="navbar-content">
                        <Button className="navbar-btn pull-left navbar-left-button">
                            <span className="glyphicon glyphicon-search"></span>
                        </Button>       
                    </Col>
                    <Col xs={4} className="navbar-content">
                        {filters}
                    </Col>
                    <Col xs={4} className="navbar-content">
                        <Button bsStyle="default" className="navbar-btn pull-right navbar-right-button" onClick={()=>{
                                window.location = config.postingURL + '/';
                        }}>
                            <span className="glyphicon glyphicon-plus" />
                        </Button>
                    </Col>
                </Row>
            );
        }
        return navbar;
    }
});

module.exports = NavFilters;