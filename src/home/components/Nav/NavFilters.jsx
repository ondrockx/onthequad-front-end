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
                <div className="col-lg-4 col-xs-2 navbar-content">
                    {searchBox}
                </div> 
                
                <div className="col-lg-6 col-xs-8 navbar-content">
                    <ButtonGroup>
                        <Button bsStyle="default" className="navbar-btn" active>
                            Newest
                        </Button>
                        <Button bsStyle="default" className="navbar-btn">
                            Price (L-H)
                        </Button>
                        <Button bsStyle="default" className="navbar-btn">
                            Price (H-L)
                        </Button>
                    </ButtonGroup>
                </div>
                
                <div className="col-lg-2 col-xs-2 navbar-content">
                    <Button bsStyle="default" className="navbar-btn">
                        New Post
                    </Button>   
                </div> 
           </Row>
        );
    }
});
