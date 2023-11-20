import React from "react";
import { forwardRef, type ReactNode } from "react";
// import Button, { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/ButtonBase";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { MyButtonProps } from "./types";
import LinkWrapper from "../utils/LinkWrapper";

export const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(
  (props, ref) => {
    const { textValue, scrollTo, link, isDisabled, ...restProps } = props;

    return (
      <LinkWrapper props={props}>
        <Button {...restProps} ref={ref}>
          {textValue}
        </Button>
      </LinkWrapper>
    );
  }
);

MyButton.displayName = "MyButton";
