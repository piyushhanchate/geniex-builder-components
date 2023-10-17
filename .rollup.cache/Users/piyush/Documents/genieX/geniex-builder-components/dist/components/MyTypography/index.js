import { __assign } from "tslib";
import * as React from 'react';
import { forwardRef } from "react";
import { Typography } from "@mui/material";
export var MyTypography = forwardRef(function (props, ref) {
    return (React.createElement(Typography, __assign({}, props, { ref: ref }),
        props.textValue,
        props.children));
});
MyTypography.displayName = "MyTypography";
//# sourceMappingURL=index.js.map