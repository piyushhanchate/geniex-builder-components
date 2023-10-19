import type { GridProps } from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import { forwardRef, type ReactNode } from "react";
import type { SxProps } from "@mui/system";
import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
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
