import * as React from 'react';

import { forwardRef, type ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";
import { MyTypographyProps } from './MyTypography';


export const MyTypography = forwardRef<HTMLParagraphElement, MyTypographyProps>((props: MyTypographyProps, ref) => {
  return (
    <Typography {...props} ref={ref}>
      {props.textValue}
      {props.children}
    </Typography>
  );
});

MyTypography.displayName = "MyTypography";
