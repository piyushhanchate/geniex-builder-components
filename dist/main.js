var $iA2ta$reactjsxruntime = require("react/jsx-runtime");
var $iA2ta$react = require("react");
var $iA2ta$nextlink = require("next/link");
var $iA2ta$reactscroll = require("react-scroll");
var $iA2ta$muimaterialButtonBase = require("@mui/material/ButtonBase");
var $iA2ta$muimaterial = require("@mui/material");
var $iA2ta$nextimage = require("next/image");
var $iA2ta$splidejsreactsplide = require("@splidejs/react-splide");


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

$parcel$export($c5b2eceab60bd0bb$exports, "LinkWrapper", () => $4c14b01934830225$export$2e2bcd8739ae039);
$parcel$export($c5b2eceab60bd0bb$exports, "MyButton", () => $aa3056714abcd11a$export$45b4da2e68d1771e);
$parcel$export($c5b2eceab60bd0bb$exports, "MyTypography", () => $0212dcc17b2f0597$export$c1c29eb9ae7b0b42);
$parcel$export($c5b2eceab60bd0bb$exports, "MyImage", () => $6ede5b678d0613c7$export$8969e642ac173451);
$parcel$export($c5b2eceab60bd0bb$exports, "MyCarousel", () => $0e28bbd7eaf26498$export$6c4fa7bc47539079);
//@ts-nocheck




function $4c14b01934830225$export$2e2bcd8739ae039({ props: props, children: children }) {
    const { scrollTo: scrollTo, link: link, isDisabled: isDisabled } = props;
    if (!scrollTo && !link || isDisabled) return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$reactjsxruntime.Fragment), {
        children: children
    });
    else if (!!link) return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$nextlink))), {
        href: link,
        style: {
            textDecoration: "none"
        },
        children: children
    });
    else if (!!scrollTo) return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$reactscroll.Link), {
        to: scrollTo,
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
        children: children
    });
}






const $aa3056714abcd11a$export$45b4da2e68d1771e = /*#__PURE__*/ (0, $iA2ta$react.forwardRef)((props, ref)=>{
    const { textValue: textValue, scrollTo: scrollTo, link: link, isDisabled: isDisabled, ...restProps } = props;
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $4c14b01934830225$export$2e2bcd8739ae039), {
        props: props,
        children: /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$muimaterialButtonBase))), {
            ...restProps,
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
        ref: ref,
        children: /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, ($parcel$interopDefault($iA2ta$nextimage))), {
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
$6ede5b678d0613c7$export$8969e642ac173451.displayName = "MyImage";






const $0e28bbd7eaf26498$export$6c4fa7bc47539079 = /*#__PURE__*/ (0, $iA2ta$react.forwardRef)((props, ref)=>{
    const { children: children, isNavigationEnabled: isNavigationEnabled, isPaginationEnabled: isPaginationEnabled, slidesPerView: slidesPerView, spaceBetween: spaceBetween, navButtonColor: navButtonColor, ...restProps } = props;
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$muimaterial.Box), {
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
        children: /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$splidejsreactsplide.Splide), {
            options: {
                rewind: true,
                focus: "center"
            },
            "aria-label": "React Splide Example",
            children: (0, ($parcel$interopDefault($iA2ta$react))).Children.map(children, (child, index)=>{
                return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$splidejsreactsplide.SplideSlide), {
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
$0e28bbd7eaf26498$export$6c4fa7bc47539079.displayName = "MyCarousel";




$parcel$exportWildcard(module.exports, $c5b2eceab60bd0bb$exports);


//# sourceMappingURL=main.js.map
