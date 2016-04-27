import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';

class EmailButton extends Component {
	componentWillMount() {
		this.setState({ on: false });
	}

	render() {
		var emailField = "";
		if (this.state.on) {
			emailField = <input className="pull-right email-display-box" value={this.props.email} />;
		}
		return <div>
			<Button bsStyle="primary"
		  	bsSize="small"
		  	className="pull-right edit-item-button"
			  onClick={(e) => {
			  	e.preventDefault();
			  	this.setState({ on: !this.state.on});
			  }}>
		  	<span className="glyphicon glyphicon-envelope"/>
		  </Button>
			{emailField}
	  </div>
	}
};

export default EmailButton;