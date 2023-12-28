import {jsx as $4MPRY$jsx, Fragment as $4MPRY$Fragment, jsxs as $4MPRY$jsxs} from "react/jsx-runtime";
import $4MPRY$react, {forwardRef as $4MPRY$forwardRef} from "react";
import $4MPRY$nextlink from "next/link";
import {Link as $4MPRY$Link} from "react-scroll";
import $4MPRY$muimaterialButtonBase from "@mui/material/ButtonBase";
import {Typography as $4MPRY$Typography, Box as $4MPRY$Box} from "@mui/material";
import $4MPRY$nextimage from "next/image";
import {Splide as $4MPRY$Splide, SplideSlide as $4MPRY$SplideSlide} from "@splidejs/react-splide";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3a9dd622ae412ebc$exports = {};

$parcel$export($3a9dd622ae412ebc$exports, "LinkWrapper", () => $3c305224fe637f96$export$2e2bcd8739ae039);
$parcel$export($3a9dd622ae412ebc$exports, "MyButton", () => $0c1d67ad2f1340a0$export$45b4da2e68d1771e);
$parcel$export($3a9dd622ae412ebc$exports, "MyTypography", () => $267f4f6ac04912c8$export$c1c29eb9ae7b0b42);
$parcel$export($3a9dd622ae412ebc$exports, "MyImage", () => $06fd835a0408c4e6$export$8969e642ac173451);
$parcel$export($3a9dd622ae412ebc$exports, "MyCarousel", () => $ef79f65db07fa449$export$6c4fa7bc47539079);
//@ts-nocheck




function $3c305224fe637f96$export$2e2bcd8739ae039({ props: props, children: children }) {
    const { scrollTo: scrollTo, link: link, isDisabled: isDisabled } = props;
    if (!scrollTo && !link || isDisabled) return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$Fragment), {
        children: children
    });
    else if (!!link) return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$nextlink), {
        href: link,
        style: {
            textDecoration: "none"
        },
        children: children
    });
    else if (!!scrollTo) return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$Link), {
        to: scrollTo,
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
        children: children
    });
}






const $0c1d67ad2f1340a0$export$45b4da2e68d1771e = /*#__PURE__*/ (0, $4MPRY$forwardRef)((props, ref)=>{
    const { textValue: textValue, scrollTo: scrollTo, link: link, isDisabled: isDisabled, ...restProps } = props;
    return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $3c305224fe637f96$export$2e2bcd8739ae039), {
        props: props,
        children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$muimaterialButtonBase), {
            ...restProps,
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
        ref: ref,
        children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$nextimage), {
            src: src,
            alt: "next-image",
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






const $ef79f65db07fa449$export$6c4fa7bc47539079 = /*#__PURE__*/ (0, $4MPRY$forwardRef)((props, ref)=>{
    const { children: children, isNavigationEnabled: isNavigationEnabled, isPaginationEnabled: isPaginationEnabled, slidesPerView: slidesPerView, spaceBetween: spaceBetween, navButtonColor: navButtonColor, ...restProps } = props;
    return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$Box), {
        ...restProps,
        sx: {
            ...restProps.sx,
            ".swiper-button-prev": {
                color: navButtonColor
            },
            ".swiper-button-next": {
                color: navButtonColor
            }
        },
        ref: ref,
        children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$Splide), {
            options: {
                rewind: true,
                focus: "center"
            },
            "aria-label": "React Splide Example",
            children: (0, $4MPRY$react).Children.map(children, (child, index)=>{
                return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$SplideSlide), {
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: child
                });
            })
        })
    });
});
$ef79f65db07fa449$export$6c4fa7bc47539079.displayName = "MyCarousel";






export {$0c1d67ad2f1340a0$export$45b4da2e68d1771e as MyButton, $267f4f6ac04912c8$export$c1c29eb9ae7b0b42 as MyTypography, $06fd835a0408c4e6$export$8969e642ac173451 as MyImage, $ef79f65db07fa449$export$6c4fa7bc47539079 as MyCarousel};
//# sourceMappingURL=module.js.map
