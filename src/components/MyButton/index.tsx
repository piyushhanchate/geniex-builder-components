import type { GridProps } from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import { forwardRef, type ReactNode } from "react";
import type { SxProps } from "@mui/system";
import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { MyButtonProps } from "./types";

export const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(
  (props, ref) => {
    const { textValue, scrollTo, link, isDisabled, ...restProps } = props;

    if ((!scrollTo && !link) || isDisabled) {
      return (
        <Button {...restProps} ref={ref}>
          {textValue}
        </Button>
      );
    } else if (!!link) {
      return (
        <Link href={link}>
          <Button {...restProps} ref={ref}>
            {textValue}
          </Button>
        </Link>
      );
    } else if (!!scrollTo) {
      return (
        <ScrollLink
          to={scrollTo}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button {...props} ref={ref}>
            {textValue}
          </Button>
        </ScrollLink>
      );
    }
  }
);

MyButton.displayName = "MyButton";
