/**
 * Markon (ReactMarkon.js)
 * Licensed under MIT
 * 
 * Copyright (c) Nofinite Technologies Private Limited 
 * 
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /**
 * Markon (ReactMarkon.js)
 * Licensed under MIT
 * 
 * Copyright (c) Nofinite Technologies Private Limited 
 * 
 * LICENSE file in the root directory of this source tree.
 */
var ReactMarkon = function ReactMarkon(_ref) {
  var content = _ref.content;
  // Split content based on ##
  var arrayContent = content.split(/#/);

  // Regular expressions for different patterns and formattings
  var breakRegex = /\bbr\b/;
  var boldRegex = /b\[(.*?)\]/;
  var emphasizeRegex = /e\[(.*?)\]/;
  var underlineRegex = /u\[(.*?)\]/;
  var linkRegex = /link\[(.*?),(.*?)\]/;
  var listRegex = /list\[(.*?)\]/;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, arrayContent.map(function (text, index) {
    if (breakRegex.test(text)) {
      // Render line break
      return /*#__PURE__*/_react["default"].createElement("br", {
        key: index
      });
    } else if (boldRegex.test(text)) {
      // Render bold text
      var _text$match = text.match(boldRegex),
        _text$match2 = _slicedToArray(_text$match, 2),
        boldText = _text$match2[1];
      return /*#__PURE__*/_react["default"].createElement("b", {
        key: index
      }, boldText);
    } else if (emphasizeRegex.test(text)) {
      // Render Emphasize text
      var _text$match3 = text.match(emphasizeRegex),
        _text$match4 = _slicedToArray(_text$match3, 2),
        emphasizeText = _text$match4[1];
      return /*#__PURE__*/_react["default"].createElement("em", {
        key: index
      }, emphasizeText);
    } else if (underlineRegex.test(text)) {
      // Render Underline text
      var _text$match5 = text.match(underlineRegex),
        _text$match6 = _slicedToArray(_text$match5, 2),
        underlineText = _text$match6[1];
      return /*#__PURE__*/_react["default"].createElement("u", {
        key: index
      }, underlineText);
    } else if (linkRegex.test(text)) {
      // Render link
      var _text$match7 = text.match(linkRegex),
        _text$match8 = _slicedToArray(_text$match7, 3),
        linkText = _text$match8[1],
        linkUrl = _text$match8[2];
      return /*#__PURE__*/_react["default"].createElement("a", {
        key: index,
        href: linkUrl
      }, linkText);
    } else if (listRegex.test(text)) {
      // Render list
      var _text$match9 = text.match(listRegex),
        _text$match10 = _slicedToArray(_text$match9, 2),
        listText = _text$match10[1];
      var listTextArray = listText.split(",");
      return /*#__PURE__*/_react["default"].createElement("ul", {
        key: index
      }, listTextArray.map(function (item, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i
        }, item);
      }));
    }
    // Render plain text
    return text;
  }));
};
var _default = exports["default"] = ReactMarkon;