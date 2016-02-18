'use strict';

var React = require('react');
var _ = require('underscore');
var {Well, Alert, Grid, Row, Col, Thumbnail, Button} = require('react-bootstrap');
var ItemDisplay;

module.exports = ItemDisplay = React.createClass({
    render: function () {
        var data;
        if (this.props.userModel.userID) {
            data = _.map(this.props.categoryModel.postings, function (item) {
                return (
                    <Col xs={6} sm={4} md={3} key={item.id}>
                        <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
                            <div className="itemdisplay-price">${item.cost.toFixed(2)}</div>
                            <p className="itemdisplay-title">{item.title}</p>
                        </Thumbnail>
                    </Col>
                );
            });
        }
        return (
            <Grid fluid>
                <Row>
                    {data}
                </Row>
            </Grid>
        );
    }
});
