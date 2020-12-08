var components = {
    "packages": [
        {
            "name": "jquery-ui-touch-punch",
            "main": "jquery-ui-touch-punch-built.js"
        }
    ],
    "shim": {
        "jquery-ui-touch-punch": {
            "deps": [
                "jquery-ui"
            ]
        }
    },
    "baseUrl": "components"
};
if (typeof require !== "undefined" && require.config) {
    require.config(components);
} else {
    var require = components;
}
if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = components;
}