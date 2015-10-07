/** @jsx React.DOM */
define(function (require) {
    var React = require('react'),
        DOMUtils = require("jsx!utils/DOMUtils");

    return React.createClass({
        render: function () {
            return (
                <ul className='items'>
                    <li><a onClick={this.goToCreate}>Create</a></li>
                    <li>Deploy</li>
                    <li>Optimise</li>
                    <li>Manage</li>
                </ul>
            )
        },
        
        goToCreate: function () {
            debugger;
        }
    });
});