import React, { PropTypes } from 'react';
import _ from 'underscore';
import { Input, ButtonInput } from 'react-bootstrap';
import config from '../config';

const PostingForm = ({ onClick }) => (
  <div className="row">
    <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
      <form>
        <Input type="text" label="Title" placeholder="Item Name"/>
        <Input type="text" label="Price" placeholder="2.00"/>
        <Input type="textarea" label="Description"/>
        <Input type="select" label="Category" placeholder="select">
          {_.map(config.submitCategories, (itemName, itemId)=>{
            var id = config.categoryToNum(itemId);
            return <option value={id} key={id}>{itemName}</option>;
          })}
        </Input>
        <ButtonInput type="submit" value="Submit" onClick={onClick} />
      </form>
    </div>
  </div>
);

export default PostingForm;