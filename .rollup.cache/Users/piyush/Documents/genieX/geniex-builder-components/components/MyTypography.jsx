import { forwardRef } from "react";
import { Typography } from "@mui/material";
export var MyTypography = forwardRef(function (props, ref) {
    return (<Typography {...props} ref={ref}>
      {props.textValue}
      {props.children}
    </Typography>);
});
MyTypography.displayName = "MyTypography";
//# sourceMappingURL=MyTypography.jsx.map