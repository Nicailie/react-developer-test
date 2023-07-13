"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var react_svg_1 = require("./assets/react.svg");
var Header_1 = require("./components/Header");
var Counter_1 = require("./components/Counter");
var vite_svg_1 = require("/vite.svg");
require("./App.css");
var TodoList_1 = require("./components/TodoList");
var App = function () {
    var todos = [
        { id: 1, text: 'Do laundry', completed: false },
        { id: 2, text: 'Buy groceries', completed: false },
        { id: 3, text: 'Clean the room', completed: false },
        { id: 4, text: 'Go in the town', completed: false },
    ];
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(Header_1["default"], { title: "My App Header" }),
        react_2["default"].createElement("div", null,
            react_2["default"].createElement("a", { href: "https://vitejs.dev", target: "_blank" },
                react_2["default"].createElement("img", { src: vite_svg_1["default"], className: "logo", alt: "Vite logo" })),
            react_2["default"].createElement("a", { href: "https://react.dev", target: "_blank" },
                react_2["default"].createElement("img", { src: react_svg_1["default"], className: "logo react", alt: "React logo" }))),
        react_2["default"].createElement("h2", null, "Vite + React"),
        react_2["default"].createElement("div", { className: "card" },
            react_2["default"].createElement(Counter_1["default"], null),
            react_2["default"].createElement("p", null,
                "Edit ",
                react_2["default"].createElement("code", null, "src/App.tsx"),
                " and save to test HMR")),
        react_2["default"].createElement("h1", null, " Todo List"),
        react_2["default"].createElement(TodoList_1["default"], { todos: todos }),
        react_2["default"].createElement("p", { className: "read-the-docs" }, "Click on the Vite and React logos to learn more")));
};
exports["default"] = App;
