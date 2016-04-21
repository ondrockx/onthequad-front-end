import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Input } from 'react-bootstrap';
import { deleteItem, editItem } from '../actions';

class EditForm extends Component {
	componentWillMount() {
		this.setState({ delError: false });
	}

	render() {
		const { item, deleteItem, editItem, closeModal } = this.props;
		const { delError } = this.state;
		return <div>
			<form>
			</form>
			<p>To Delete type 'DELETE' and click Delete:</p>
			<Row>
				<Col xs={6}>
					<Input
            bsStyle={ delError ? "error" : null }
		        type="text"
		        ref="delete"
		      />
	      </Col>
	      <Col xs={6}>
					<Button bsStyle="danger" onClick={() => {
						if (this.refs.delete.getValue() == 'DELETE') {
							deleteItem(item.id);
						} else {
							this.setState({ delError: true });
						}
					}}>Delete</Button>
				</Col>
			</Row>
			{ closeModal ? <Button onClick={closeModal}>Cancel</Button>: "" }
		</div>;
	}
}

const mapStateToProps = (state) => ({
	item: state.ui.selectedItem
});

const mapDispatchToProps = (dispatch) => ({
	deleteItem: (itemId) => dispatch(deleteItem(itemId)),
	editItem: (item) => dispatch(editItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);