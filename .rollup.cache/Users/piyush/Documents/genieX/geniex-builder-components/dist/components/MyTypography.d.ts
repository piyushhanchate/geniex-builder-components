/// <reference types="react" />
import { TypographyProps } from "@mui/material";
export interface MyTypographyProps extends TypographyProps {
    textValue?: string;
}
export declare const MyTypography: import("react").ForwardRefExoticComponent<Omit<MyTypographyProps, "ref"> & import("react").RefAttributes<HTMLParagraphElement>>;
