import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Input } from 'react-bootstrap';
import { deleteItem, editItem, decodeText } from '../actions';
import PostingForm from './PostingForm';

class EditForm extends Component {
	componentWillMount() {
		this.setState({ delError: false });
		this.submitEditForm = this.submitEditForm.bind(this);
	}

  submitEditForm(refs, files) {
    const title = refs.title.getValue();
    const cost = parseFloat(refs.cost.getValue()) || 0.0;
    const description = refs.description.getValue();
    const category = parseInt(refs.category.getValue());
    const data = new FormData();
    for (var i = 0; i < files.length; i++) {
      data.append('images[]', files[i], files[i].name);
    }
    const id = parseInt(this.props.item.id);
    data.append('id', id);
    data.append('title', title);
    data.append('cost', cost);
    data.append('description', description);
    data.append('category', category);
    this.props.editItem(data);
  }

	render() {
		const { item, deleteItem, editItem, closeModal } = this.props;
		const { delError } = this.state;
		return <div>
			<PostingForm alternateSubmit={this.submitEditForm} item={item}/>
			<hr />
			<Row>
				<Col xs={6} xsOffset={3}>
					<p>To Delete type 'DELETE' and click Delete:</p>
				</Col>
			</Row>
			<Row>
				<Col xs={4} xsOffset={3}>
					<Input
            bsStyle={ delError ? "error" : null }
		        type="text"
		        ref="delete"
		      />
	      </Col>
	      <Col xs={4}>
					<Button bsStyle="danger" onClick={() => {
						if (this.refs.delete.getValue().trim() == 'DELETE') {
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