import { __assign } from "tslib";
import * as React from 'react';
import { forwardRef } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
export var MyButton = forwardRef(function (props, ref) {
    return (React.createElement(React.Fragment, null,
        props.link && (React.createElement(Link, { href: props.link },
            React.createElement(Button, __assign({}, props, { ref: ref }), props.textValue))),
        props.scrollTo && (React.createElement(ScrollLink, { to: props.scrollTo, spy: true, smooth: true, offset: -70, duration: 500 },
            React.createElement(Button, __assign({}, props, { ref: ref }), props.textValue))),
        !props.scrollTo && !props.link && (React.createElement(Button, __assign({}, props, { ref: ref }), props.textValue))));
});
MyButton.displayName = "MyButton";
//# sourceMappingURL=MyButton.js.map