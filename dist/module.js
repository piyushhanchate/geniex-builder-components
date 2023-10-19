import {jsx as $4MPRY$jsx, jsxs as $4MPRY$jsxs} from "react/jsx-runtime";
import {forwardRef as $4MPRY$forwardRef} from "react";
import $4MPRY$muimaterialButton from "@mui/material/Button";
import $4MPRY$nextlink from "next/link";
import {Link as $4MPRY$Link} from "react-scroll";
import {Typography as $4MPRY$Typography, Box as $4MPRY$Box} from "@mui/material";
import $4MPRY$nextimage from "next/image";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3a9dd622ae412ebc$exports = {};

$parcel$export($3a9dd622ae412ebc$exports, "MyButton", () => $0c1d67ad2f1340a0$export$45b4da2e68d1771e);
$parcel$export($3a9dd622ae412ebc$exports, "MyTypography", () => $267f4f6ac04912c8$export$c1c29eb9ae7b0b42);
$parcel$export($3a9dd622ae412ebc$exports, "MyImage", () => $06fd835a0408c4e6$export$8969e642ac173451);





const $0c1d67ad2f1340a0$export$45b4da2e68d1771e = /*#__PURE__*/ (0, $4MPRY$forwardRef)((props, ref)=>{
    const { textValue: textValue, scrollTo: scrollTo, link: link, isDisabled: isDisabled, ...restProps } = props;
    if (!scrollTo && !link || isDisabled) return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$muimaterialButton), {
        ...restProps,
        ref: ref,
        children: textValue
    });
    else if (!!link) return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$nextlink), {
        href: link,
        children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$muimaterialButton), {
            ...restProps,
            ref: ref,
            children: textValue
        })
    });
    else if (!!scrollTo) return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$Link), {
        to: scrollTo,
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
        children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$muimaterialButton), {
            ...props,
            ref: ref,
            children: textValue
        })
    });
});
$0c1d67ad2f1340a0$export$45b4da2e68d1771e.displayName = "MyButton";





const $267f4f6ac04912c8$export$c1c29eb9ae7b0b42 = /*#__PURE__*/ (0, $4MPRY$forwardRef)((props, ref)=>{
    const { textValue: textValue, children: children, ...restProps } = props;
    return /*#__PURE__*/ (0, $4MPRY$jsxs)((0, $4MPRY$Typography), {
        ...restProps,
        ref: ref,
        children: [
            props.textValue,
            props.children
        ]
    });
});
$267f4f6ac04912c8$export$c1c29eb9ae7b0b42.displayName = "MyTypography";


// @ts-nocheck




const $06fd835a0408c4e6$export$8969e642ac173451 = /*#__PURE__*/ (0, $4MPRY$forwardRef)((props, ref)=>{
    const { objectFit: objectFit, width: width, src: src, height: height, imageStyles: imageStyles, ...restProps } = props;
    return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$Box), {
        position: "relative",
        ...restProps,
        width: width,
        height: height,
        ref: ref,
        children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$nextimage), {
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
$06fd835a0408c4e6$export$8969e642ac173451.displayName = "MyImage";






export {$0c1d67ad2f1340a0$export$45b4da2e68d1771e as MyButton, $267f4f6ac04912c8$export$c1c29eb9ae7b0b42 as MyTypography, $06fd835a0408c4e6$export$8969e642ac173451 as MyImage};
//# sourceMappingURL=module.js.map
