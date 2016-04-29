import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { addPosting } from '../actions';
import { Col, Row, Input, ButtonInput, Nav, NavItem, Thumbnail } from 'react-bootstrap';
import ProgressBox from '../components/ProgressBox';
import config, { numToCategory, allTrue, allFalse, decodeText } from '../config';

class PostingForm extends Component {
  componentWillMount() {
    const item = this.props.item || {}
    this.setState({
      invalid: {
        image: false,
        title: false,
        cost: false,
        description: false,
        category: false
      },
      category: item.category,
      files: []
    });
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    console.log(files);
    this.setState({
      files: _.union(this.state.files, files)
    });
  }

  submitForm(files) {
    this.validateAll(() => {
      if (!allFalse(this.state.invalid)) {
        return;
      }
      const title = this.refs.title.getValue();
      const cost = parseFloat(this.refs.cost.getValue()) || 0.0;
      const description = this.refs.description.getValue();
      const category = parseInt(this.refs.category.getValue());
      const data = new FormData();
      for (var i = 0; i < files.length; i++) {
        data.append('images[]', files[i], files[i].name);
      }
      data.append('title', title);
      data.append('cost', cost);
      data.append('description', description);
      data.append('category', category);
      this.props.addPosting(data);
    });
  }

  validateAll(callback) {
    this.validate('image', () => {
      this.validate('title', () => {
        this.validate('cost', () => {
          this.validate('description', () => {
            this.validate('category', callback);
          });
        });
      });
    });
  }

  validate(ref, callback = null) {
    var valid;
    switch(ref){
      case 'image':
        valid = true;
        break;
      case 'title':
        valid = this.refs.title.getValue();
        break;
      case 'cost':
        valid = !isNaN(this.refs.cost.getValue());
        break;
      case 'description':
        valid = this.refs.description.getValue() ?
        this.refs.description.getValue().length < 1000 : false;
        break;
      case 'category':
        console.log(this.refs.category.getValue());
        this.setState({category: parseInt(this.refs.category.getValue())});
        valid = parseInt(this.refs.category.getValue());
        break;
      default:
        valid = false;
    }
    this.setState({invalid: Object.assign({}, this.state.invalid, { [ref]: !valid })}, callback);
    return valid;
  }

  render() {
    const { status, message } = this.props.postStatus;
    const { invalid, files } = this.state;
    const item = this.props.item || {};
    if (status != 0) { // 0 is default
      return <div className="row"><ProgressBox {...this.props.postStatus}/></div>;
    }
    var styles = {border: "1px solid black", width: 600, color: "black", padding: 20};
    var imageInput = <div className="form-image-upload">
      <Input
        bsStyle={ invalid['image'] ? "error" : null }
        onChange={ () => this.validate('image') }
        type="file"
        label="Image"
        capture="camera"
        accept="image/*"
        ref="image"
        multiple/>
    </div>;
    var costInput = <Input
      bsStyle={ invalid['cost'] ? "error" : null }
      onChange={ () => this.validate('cost') }
      type="text"
      label="Price"
      addonBefore="$"
      placeholder="0.00"
      defaultValue={decodeText(item.cost) || 0.00}
      ref="cost"/>;
    return <div className="row">
      <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
        <form>
          <Input
            bsStyle={ invalid['title'] ? "error" : null }
            onChange={ () => this.validate('title') }
            type="text"
            label="Title"
            placeholder="Item Name"
            defaultValue={decodeText(item.title) || null}
            ref="title"/>
          <div className='center-wrapper'>
            <div>
              <Dropzone accept="image/*" ref="dropzone" onDrop={this.onDrop} >
                <div className="upload-text">Click or Drag Image Here</div>
              </Dropzone>
              <br />
              <table className="table table-bordered table-condensed">
                <tbody>
                {_.map(files, (file, pos)=>{
                  var shortName = file.name.substring(0, 25);
                  shortName = shortName === file.name ? shortName : shortName + '...';
                  return <tr><td>{shortName}</td>
                    <td><button type="button" className="btn btn-danger btn-default btn-sm" onClick={(e)=>{
                      e.preventDefault();
                      this.setState({files: _.filter(files, (f) => {
                        return f !== file;
                      })});
                    }}>
                      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button></td>
                  </tr>;
                })}
                </tbody>
              </table>
            </div>
          </div>
          {costInput}
          <Input
            className="description-input"
            bsStyle={ invalid['description'] ? "error" : null }
            onChange={ () => this.validate('description') }
            type="textarea"
            label="Description (1000 character limit)"
            defaultValue={decodeText(item.description) || null}
            ref="description"/>
          <Input
              bsStyle={ invalid['category'] ? "error" : null }
              onChange={ () => this.validate('category') }
              type="select"
              label="Category"
              placeholder="select"
              defaultValue={decodeText(item.category) || null}
              ref="category">
            <option value={0} key={0}></option>
            {_.map(config.submitCategories, (itemName, itemId)=>{
              var id = config.categoryToNum(itemId);
              return <option value={id} key={id}>{itemName}</option>;
            })}
          </Input>
          <ButtonInput bsStyle="primary" disabled={status !== 0 || !allFalse(invalid)}
            type="submit" value="Submit"
            onClick={(e) => {
              e.preventDefault();
              this.props.alternateSubmit ? this.props.alternateSubmit(this.refs, files) : this.submitForm(files);
            }}/>
        </form>
      </div>
    </div>;
  }
};
PostingForm.propTypes = {
  alternateSubmit: PropTypes.func
};

const mapStateToProps = (state) => ({
  postStatus: state.ui.postStatus
});

const mapDispatchToProps = (dispatch) => ({
  addPosting: (payload) => dispatch(addPosting(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostingForm);