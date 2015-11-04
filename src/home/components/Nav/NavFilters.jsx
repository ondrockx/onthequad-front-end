'use strict';

var React = require('react');
var NavFilters;

module.exports = NavFilters = React.createClass({
    render: function () {
        return (
            <div className="row hidden-md hidden-sm hidden-xs">
                <div className="col-lg-2 navbar-content">       
                </div>
                    
                <div className="col-lg-2 navbar-brand">
                    <p className="category-title">All Posts</p>
                </div>
                
                <div className="col-lg-2 navbar-content">
                    
                </div>
                
                <div className="col-lg-6 pull-left nav navbar-nav">
                    <li>
                    <form className="navbar-form" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                    </form>
                    </li>
                    
                    <li>
                        <span className="btn-group" data-toggle="buttons" role="group">
                          <span type="button" className="btn btn-default navbar-btn active btn-custom">
                            <input type="radio" name="options" />newest
                          </span>
                          <span type="button" className="btn btn-default navbar-btn smchar btn-custom">
                            <input type="radio" name="options" />$
                            <span className="arrow">▶</span>
                            <span className="lgchar">$</span>
                          </span>
                          <span type="button" className="btn btn-default navbar-btn lgchar btn-custom">
                            <input type="radio" name="options" />$
                            <span className="arrow">▶</span>
                            <span className="smchar">$</span>
                          </span>
                        </span>
                    </li>
                   
                    <li><button type="button" className="btn btn-default navbar-btn btn-createpost">create post</button></li>
                    
                </div>
            </div>
        );
    }
});
