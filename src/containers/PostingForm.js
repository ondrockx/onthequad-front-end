import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Input, ButtonInput, Nav, NavItem } from 'react-bootstrap';
import { addPosting } from '../actions';
import ProgressBox from '../components/ProgressBox';
import config from '../config';

class PostingForm extends Component {
  componentWillMount() {
    this.setState({ tab: 0 });
  }

  submitForm(e) {
    e.preventDefault();
    // Need to put images here when back-end supports it.
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
      return <ProgressBox {...this.props.postStatus}/>;
    }
    var imageInput = <div className="form-image-upload"><Input type="file" capture="camera" accept="image/*" ref="picture"/></div>;
    if (this.state.tab) {
      imageInput = <Input type="text" placeholder="http://www.example.com/image.jpg" ref="picture"/>;
    }
    return <div className="row">
      <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
        <form>
          <Input type="text" label="Title" placeholder="Item Name" ref="title"/>
          <label className="control-label">Image</label>
          <Nav bsStyle="pills" activeKey={this.state.tab} onSelect={(key) => this.setState({tab: key})}>
            <NavItem eventKey={0}>Upload Image</NavItem>
            <NavItem eventKey={1}>Image URL</NavItem>
          </Nav>
          {imageInput}
          <Input type="text" label="Price" addonBefore="$" placeholder="0.00" ref="cost"/>
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