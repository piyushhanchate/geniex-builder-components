var $iA2ta$reactjsxruntime = require("react/jsx-runtime");
var $iA2ta$react = require("react");
var $iA2ta$muimaterialButton = require("@mui/material/Button");
var $iA2ta$nextlink = require("next/link");
var $iA2ta$reactscroll = require("react-scroll");
var $iA2ta$muimaterial = require("@mui/material");
var $iA2ta$nextimage = require("next/image");


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
$parcel$export($c5b2eceab60bd0bb$exports, "MyImage", () => $6ede5b678d0613c7$export$8969e642ac173451);





const $aa3056714abcd11a$export$45b4da2e68d1771e = /*#__PURE__*/ (0, $iA2ta$react.forwardRef)((props, ref)=>{
    const { textValue: textValue, scrollTo: scrollTo, link: link, isDisabled: isDisabled, ...restProps } = props;
    if (!scrollTo && !link || isDisabled) return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$muimaterialButton))), {
        ...restProps,
        ref: ref,
        children: textValue
    });
    else if (!!link) return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$nextlink))), {
        href: link,
        children: /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$muimaterialButton))), {
            ...restProps,
            ref: ref,
            children: textValue
        })
    });
    else if (!!scrollTo) return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$reactscroll.Link), {
        to: scrollTo,
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
        children: /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$muimaterialButton))), {
            ...props,
            ref: ref,
            children: textValue
        })
    });
});
$aa3056714abcd11a$export$45b4da2e68d1771e.displayName = "MyButton";





const $0212dcc17b2f0597$export$c1c29eb9ae7b0b42 = /*#__PURE__*/ (0, $iA2ta$react.forwardRef)((props, ref)=>{
    const { textValue: textValue, children: children, ...restProps } = props;
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsxs)((0, $iA2ta$muimaterial.Typography), {
        ...restProps,
        ref: ref,
        children: [
            props.textValue,
            props.children
        ]
    });
});
$0212dcc17b2f0597$export$c1c29eb9ae7b0b42.displayName = "MyTypography";


// @ts-nocheck




const $6ede5b678d0613c7$export$8969e642ac173451 = /*#__PURE__*/ (0, $iA2ta$react.forwardRef)((props, ref)=>{
    const { objectFit: objectFit, width: width, src: src, height: height, imageStyles: imageStyles, ...restProps } = props;
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$muimaterial.Box), {
        position: "relative",
        ...restProps,
        width: width,
        height: height,
        ref: ref,
        children: /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$nextimage))), {
            src: src,
            alt: "image",
            fill: true,
            quality: 100,
            style: {
                objectFit: objectFit,
                ...imageStyles
            }
        })
    });
});
$6ede5b678d0613c7$export$8969e642ac173451.displayName = "MyImage";




$parcel$exportWildcard(module.exports, $c5b2eceab60bd0bb$exports);


//# sourceMappingURL=main.js.map
