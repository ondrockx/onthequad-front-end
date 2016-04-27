import React, { Component } from 'react';
import _ from 'lodash';
import { Button, Input } from 'react-bootstrap';

class EmailButton extends Component {
	componentWillMount() {
		this.setState({ on: false });
	}

	render() {
		const email = this.props.email;
		const hidden = this.state.on ? "" : "hidden ";
		const emailBox = <input
			size={email.length + 2}
			maxSize={30}
			readOnly="readonly"
			ref='emailbox'
			className={hidden + "pull-right email-display-box"}
			value={email}/>;
		return <div>
			<Button bsStyle="primary"
		  	bsSize="small"
		  	className="pull-right edit-item-button"
			  onClick={()=>{
			  	if (!this.state.on) {
			  		_.delay(()=>{
							this.refs.emailbox.focus();
							this.refs.emailbox.select();
						}, 10);
					}
			  	this.setState({ on: !this.state.on});
			  }}>
		  	<span className="glyphicon glyphicon-envelope"/>
		  </Button>
			{emailBox}
	  </div>
	}
};

export default EmailButton;