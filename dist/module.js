import {jsxs as $4MPRY$jsxs, Fragment as $4MPRY$Fragment, jsx as $4MPRY$jsx} from "react/jsx-runtime";
import {forwardRef as $4MPRY$forwardRef} from "react";
import $4MPRY$muimaterialButton from "@mui/material/Button";
import $4MPRY$nextlink from "next/link";
import {Link as $4MPRY$Link} from "react-scroll";
import {Typography as $4MPRY$Typography} from "@mui/material";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3a9dd622ae412ebc$exports = {};

$parcel$export($3a9dd622ae412ebc$exports, "MyButton", () => $0c1d67ad2f1340a0$export$45b4da2e68d1771e);
$parcel$export($3a9dd622ae412ebc$exports, "MyTypography", () => $267f4f6ac04912c8$export$c1c29eb9ae7b0b42);





const $0c1d67ad2f1340a0$export$45b4da2e68d1771e = /*#__PURE__*/ (0, $4MPRY$forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0, $4MPRY$jsxs)((0, $4MPRY$Fragment), {
        children: [
            props.link && /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$nextlink), {
                href: props.link,
                children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$muimaterialButton), {
                    ...props,
                    ref: ref,
                    children: props.textValue
                })
            }),
            props.scrollTo && /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$Link), {
                to: props.scrollTo,
                spy: true,
                smooth: true,
                offset: -70,
                duration: 500,
                children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$muimaterialButton), {
                    ...props,
                    ref: ref,
                    children: props.textValue
                })
            }),
            !props.scrollTo && !props.link && /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$muimaterialButton), {
                ...props,
                ref: ref,
                children: props.textValue
            })
        ]
    });
});
$0c1d67ad2f1340a0$export$45b4da2e68d1771e.displayName = "MyButton";





const $267f4f6ac04912c8$export$c1c29eb9ae7b0b42 = /*#__PURE__*/ (0, $4MPRY$forwardRef)((props, ref)=>{
    return /*#__PURE__*/ (0, $4MPRY$jsxs)((0, $4MPRY$Typography), {
        ...props,
        ref: ref,
        children: [
            props.textValue,
            props.children
        ]
    });
});
$267f4f6ac04912c8$export$c1c29eb9ae7b0b42.displayName = "MyTypography";






export {$0c1d67ad2f1340a0$export$45b4da2e68d1771e as MyButton, $267f4f6ac04912c8$export$c1c29eb9ae7b0b42 as MyTypography};
//# sourceMappingURL=module.js.map
