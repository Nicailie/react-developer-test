"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Counter = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var handleIncrement = function () {
        setCount(count + 1);
    };
    var handleDecrement = function () {
        setCount(count - 1);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null,
            "Counter: ",
            count),
        react_1["default"].createElement("button", { onClick: handleIncrement }, "Increment"),
        react_1["default"].createElement("button", { onClick: handleDecrement }, "Decrement")));
};
exports["default"] = Counter;
