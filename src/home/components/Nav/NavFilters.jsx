'use strict';

var React = require('react');
var {Row, ButtonGroup, Button} = require('react-bootstrap');
var NavFilters;

module.exports = NavFilters = React.createClass({
    render: function () {
        var searchBox;
        if(this.props.desktop) {
            searchBox = (
                <form className="navbar-form" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                        <div className="input-group-btn">
                            <Button><span className="glyphicon glyphicon-search" /></Button>
                        </div>
                    </div>
                </form>
            );
        } else {
            searchBox = (
                <div className="col-xs-2 navbar-content">
                    <Button className="navbar-btn">
                        <span className="glyphicon glyphicon-search"></span>
                    </Button>       
                </div>
            );
        }
        return (
            <Row>
                <div className="col-lg-6 col-xs-3 navbar-content">
                    {searchBox}
                </div> 
                
                <div className="col-lg-3 col-xs-6 navbar-content">
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
                </div>
                
                <div className="col-lg-3 col-xs-3 navbar-content">
                    <Button bsStyle="default" className="navbar-btn">
                        New Post
                    </Button>   
                </div> 
           </Row>
        );
    }
});
