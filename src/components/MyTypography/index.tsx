import React from 'react'
import { forwardRef, type ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";
import { MyTypographyProps } from "./types";

export const MyTypography = forwardRef<HTMLParagraphElement, MyTypographyProps>(
  (props, ref) => {
    const { textValue, children, ...restProps } = props;
    return (
      <Typography {...restProps} ref={ref}>
        {props.textValue}
        {props.children}
      </Typography>
    );
  }
);

MyTypography.displayName = "MyTypography";
