/// <reference types="react" />
import { ButtonProps } from "@mui/material/Button";
export interface MyButtonProps extends ButtonProps {
    link?: string;
    scrollTo?: string;
    textValue: string;
}
export declare const MyButton: import("react").ForwardRefExoticComponent<Omit<MyButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
