"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Header.css");
var Header = function (_a) {
    var title = _a.title;
    return (react_1["default"].createElement("header", null,
        react_1["default"].createElement("h1", null, title)));
};
exports["default"] = Header;
