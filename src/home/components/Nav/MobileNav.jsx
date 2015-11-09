'use strict';

var React = require('react');
var MobileNavCategories = require('./MobileNavCategories');
var MobileNav;

module.exports = MobileNav = React.createClass({
    render: function () {
        return (
            <div>
                <MobileNavCategories {...this.props} />
            </div>
        );
    }
});
