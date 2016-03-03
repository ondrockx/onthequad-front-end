'use strict';

var React = require('react');
var {Row, Col} = require('react-bootstrap');
var Spinner = require('react-loading');
var Loading;

module.exports = Loading = React.createClass({
    render: function () {
        return <Row>
        	<Col xs={4} xsOffset={4}>
        		<Spinner color='#000000' width={150} height={150} type='spin' />
        	</Col>
        </Row>;
    }
});	