/* global require: false */
define('main', function () {
    var scriptBase = 'scripts/',
        packageBase = 'node_modules/',
        appConfig;
    
    appConfig = {
        'baseUrl': scriptBase,
        'paths': {
            "jquery"            : packageBase + 'jquery/dist/jquery',
            "react"             : packageBase + 'react/dist/react-with-addons',
            "text"              : packageBase + 'requirejs-plugins/lib/text',
            "json"              : packageBase + 'requirejs-plugins/src/json',
            "JSXTransformer"    : packageBase + 'react/dist/JSXTransformer',
            "jsx"               : "jsx"
        },
        "jsx": {
            "fileExtension": ".jsx",
            "harmony": true,
            "sourceMap": true
        }
    };

    require.config(appConfig);
    require(['app']);
});