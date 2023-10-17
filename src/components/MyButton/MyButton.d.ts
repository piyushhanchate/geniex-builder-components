import { ButtonProps } from "@mui/material";

export interface MyButtonProps extends ButtonProps {
    link?: string;
    scrollTo?: string;
    textValue: string;
  }