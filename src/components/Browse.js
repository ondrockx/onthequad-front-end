import React from 'react';

export default React.createClass({
	render() {
		return <div>Browse: { this.props.params.category }</div>;
	}
});