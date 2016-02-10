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
                    <Col xs={6} md={3} key={item.id}>
                        <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>
                                <Button bsStyle="primary">${item.cost.toFixed(2)}</Button>
                            </p>
                            <small>Posted: {item.timestamp}</small>
                        </Thumbnail>
                    </Col>
                );
            });
        }
        return (
            <Grid>
                <Row>
                    {data}
                </Row>
            </Grid>
        );
    }
});
