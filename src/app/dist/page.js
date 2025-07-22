"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var HomePage_1 = require("@/components/Home/HomePage");
var HeroSection_1 = require("@/components/Home/HeroSection");
exports.metadata = {
    title: "Intelix Tech Limited | Home"
};
function Home() {
    return (React.createElement("div", null,
        React.createElement(HeroSection_1["default"], null),
        React.createElement(HomePage_1["default"], null)));
}
exports["default"] = Home;
