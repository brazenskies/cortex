define(function (require) {

    var DOMUtils = {
        /**
         * Scrolls a selected container to a specified anchor location
         * @param {DOMElement} selector Selector of the element to scroll
         * @param {DOMElement} location Selector of the element to scroll to
         */
        scrollToLocation: function (selector, location) {
            var container = document.querySelector(selector),
                location = document.queryselector(location);
                
            container.scrollIntoView(location);
        }
    };

    return DOMUtils;
});
