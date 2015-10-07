/** @jsx React.DOM */
define(function (require) {
    var React = require('react'),
        CoreMenu = require('jsx!components/core-menu'),
        DOMUtils = require("jsx!utils/DOMUtils");

    React.render(<CoreMenu />, document.querySelector('.menu-core'));
});