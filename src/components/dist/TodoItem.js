"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TodoList = function (_a) {
    var todos = _a.todos;
    var _b = react_1.useState(new Map()), checkedItems = _b[0], setCheckedItems = _b[1];
    var handleChange = function (event, id) {
        var newCheckedItems = new Map(checkedItems);
        newCheckedItems.set(id, event.target.checked);
        setCheckedItems(newCheckedItems);
    };
    return (react_1["default"].createElement("ul", null, todos.map(function (todo) { return (react_1["default"].createElement("li", { key: todo.id },
        react_1["default"].createElement("input", { type: "checkbox", checked: checkedItems.get(todo.id) || false, onChange: function (event) { return handleChange(event, todo.id); } }),
        react_1["default"].createElement("span", null, todo.text),
        todo.completed && react_1["default"].createElement("span", null, "\u00A0(completed)"))); })));
};
exports["default"] = TodoList;
