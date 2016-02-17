'use strict';

var React = require('react');
var _ = require('underscore');
var PostingActions = require('../actions/PostingActions');
var PostingStore = require('../stores/PostingStore');
var {Input, ButtonInput} = require('react-bootstrap');
var connectToStores = require('fluxible-addons-react/connectToStores');
var config = require('../config');

var PostingBox = React.createClass({
    submit: function (e) {
        if (e) {
            e.preventDefault();
        }
        var payload = {
            title: this.refs.title.refs.input.value,
            cost: parseFloat(this.refs.cost.refs.input.value),
            description: this.refs.description.refs.input.value,
            category: parseInt(this.refs.category.refs.input.value)
        };
        this.props.context.executeAction(PostingActions.makePosting, payload);
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                    <form>
                        <Input type="text" label="Title" placeholder="Item Name" ref="title" />
                        <Input type="text" label="Price" placeholder="2.00" ref="cost" />
                        <Input type="textarea" label="Description" ref="description" />
                        <Input type="select" label="Category" placeholder="select" ref="category">
                            {_.map(config.submitCategories, (itemName, itemId)=>{
                                var id = config.categoryToNum(itemId);
                                return <option value={id} key={id}>{itemName}</option>;
                            })}
                        </Input>
                        <ButtonInput disabled={this.props.postingModel.isLoading} type="submit" value="Submit" onClick={this.submit} />
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = PostingBox = connectToStores(PostingBox, [PostingStore], function (stores) {
    return {
        postingModel: context.getStore(PostingStore).getModel()
    };
});