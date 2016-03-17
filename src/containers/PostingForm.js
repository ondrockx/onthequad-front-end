import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Alert, Input, ButtonInput } from 'react-bootstrap';
import { addPosting } from '../actions';
import config from '../config';

class PostingProgressBox extends Component {
  render() {
    const { status, message } = this.props;
    var style;
    console.log(this.props);
    switch (status) {
      case -1: // loading
        style = "warning";
        break;
      case 1: // submitted
        style = "success";
        break;
      default: // error/other
        style = "danger";
        break;
    }
    return <Alert bsStyle={style}>
        <strong>{message}</strong>
      </Alert>;
  }
};

class PostingForm extends Component {
  submitForm(e) {
    e.preventDefault();
    const payload = {
      title: this.refs.title.getValue(),
      cost: parseFloat(this.refs.cost.getValue()),
      description: this.refs.description.getValue(),
      category: parseInt(this.refs.category.getValue())
    };
    this.props.addPosting(payload);
  }

  render() {
    const { status, message } = this.props.postStatus;
    if (status != 0) { // 0 is default
      return <PostingProgressBox {...this.props.postStatus}/>;
    }
    return <div className="row">
      <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
        <form>
          <Input type="text" label="Title" placeholder="Item Name" ref="title"/>
          <Input type="text" label="Price" placeholder="2.00" ref="cost"/>
          <Input type="textarea" label="Description" ref="description"/>
          <Input type="select" label="Category" placeholder="select" ref="category">
            {_.map(config.submitCategories, (itemName, itemId)=>{
              var id = config.categoryToNum(itemId);
              return <option value={id} key={id}>{itemName}</option>;
            })}
          </Input>
          <ButtonInput disabled={status !== 0} type="submit" value="Submit" onClick={(e) => this.submitForm(e)}/>
        </form>
      </div>
    </div>;
  }
};

const mapStateToProps = (state) => {
  return { postStatus: state.ui.postStatus };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPosting: (payload) => dispatch(addPosting(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostingForm);