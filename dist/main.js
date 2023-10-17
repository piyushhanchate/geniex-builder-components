var $iA2ta$reactjsxruntime = require("react/jsx-runtime");
var $iA2ta$react = require("react");
var $iA2ta$muimaterialButton = require("@mui/material/Button");
var $iA2ta$nextlink = require("next/link");
var $iA2ta$reactscroll = require("react-scroll");
var $iA2ta$muimaterial = require("@mui/material");


function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $c5b2eceab60bd0bb$exports = {};

$parcel$export($c5b2eceab60bd0bb$exports, "MyButton", () => $aa3056714abcd11a$export$45b4da2e68d1771e);
$parcel$export($c5b2eceab60bd0bb$exports, "MyTypography", () => $0212dcc17b2f0597$export$c1c29eb9ae7b0b42);





const $aa3056714abcd11a$export$45b4da2e68d1771e = /*#__PURE__*/ (0, $iA2ta$react.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsxs)((0, $iA2ta$reactjsxruntime.Fragment), {
        children: [
            props.link && /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$nextlink))), {
                href: props.link,
                children: /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$muimaterialButton))), {
                    ...props,
                    ref: ref,
                    children: props.textValue
                })
            }),
            props.scrollTo && /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$reactscroll.Link), {
                to: props.scrollTo,
                spy: true,
                smooth: true,
                offset: -70,
                duration: 500,
                children: /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$muimaterialButton))), {
                    ...props,
                    ref: ref,
                    children: props.textValue
                })
            }),
            !props.scrollTo && !props.link && /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$muimaterialButton))), {
                ...props,
                ref: ref,
                children: props.textValue
            })
        ]
    });
});
$aa3056714abcd11a$export$45b4da2e68d1771e.displayName = "MyButton";





const $0212dcc17b2f0597$export$c1c29eb9ae7b0b42 = /*#__PURE__*/ (0, $iA2ta$react.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsxs)((0, $iA2ta$muimaterial.Typography), {
        ...props,
        ref: ref,
        children: [
            props.textValue,
            props.children
        ]
    });
});
$0212dcc17b2f0597$export$c1c29eb9ae7b0b42.displayName = "MyTypography";




$parcel$exportWildcard(module.exports, $c5b2eceab60bd0bb$exports);


//# sourceMappingURL=main.js.map
