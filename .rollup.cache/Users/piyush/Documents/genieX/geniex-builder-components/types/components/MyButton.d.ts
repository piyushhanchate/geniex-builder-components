import * as React from 'react';
import { ButtonProps } from "@mui/material/Button";
export interface MyButtonProps extends ButtonProps {
    link?: string;
    scrollTo?: string;
    textValue: string;
}
export declare const MyButton: React.ForwardRefExoticComponent<Omit<MyButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=MyButton.d.ts.map