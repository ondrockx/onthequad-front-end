'use strict';

var React = require('react');
var _ = require('underscore');
var connectToStores = require('fluxible-addons-react/connectToStores');
var GlobalStore = require('../../shared/stores/GlobalStore');
var UserStore = require('../../shared/stores/UserStore');
var GlobalActions = require('../../shared/actions/GlobalActions');
var PostingActions = require('../actions/PostingActions');
var Navigation = require('../../shared/components/nav/Navigation');
var LoginMixin = require('../../shared/mixins/LoginMixin');
var config = require('../config');
var {Input, ButtonInput} = require('react-bootstrap');
var Wrapper;

Wrapper = React.createClass({
    mixins: [LoginMixin],
    componentWillMount: function () {
        this.props.context.executeAction(GlobalActions.setApp, "posting");
    },
    changeCategory: function (id, e) {
        if (e) {
            e.preventDefault();
        }
        window.location = config.browseURL + '/' + id + '/';
    },
    submit: function (e) {
        if (e) {
            e.preventDefault();
        }
        var payload = {
            title: this.refs.title.refs.input.value,
            cost: this.refs.cost.refs.input.value,
            description: this.refs.description.refs.input.value,
            category: this.refs.category.refs.input.value
        };
        this.props.context.executeAction(PostingActions.makePosting, payload);
    },
    render: function () {
        return (
            <div className="wrapper">
                <Navigation changeCategory={this.changeCategory} {...this.props}>
                    <div style={{marginTop: "158px", width: "600px"}}>
                        <form>
                            <Input type="text" label="Title" placeholder="Item Name" ref="title" />
                            <Input type="text" label="Price" placeholder="2.00" ref="cost" />
                            <Input type="textarea" label="Description" ref="description" />
                            <Input type="select" label="Category" placeholder="select" ref="category">
                                {_.map(config.submitCategories, (itemName, id)=>{
                                    return <option value={id} key={id}>{itemName}</option>;
                                })}
                            </Input>
                            <ButtonInput type="submit" value="Submit" onClick={this.submit} />
                        </form>
                    </div>
                </Navigation>
            </div>
        );
    }
});

Wrapper = connectToStores(Wrapper, [GlobalStore, UserStore], function (stores) {
    return {
        globalModel: context.getStore(GlobalStore).getModel(),
        userModel: context.getStore(UserStore).getModel()
    };
});

module.exports = Wrapper;
