import * as React from 'react';
import { TypographyProps } from "@mui/material";
export interface MyTypographyProps extends TypographyProps {
    textValue?: string;
}
export declare const MyTypography: React.ForwardRefExoticComponent<Omit<MyTypographyProps, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
//# sourceMappingURL=MyTypography.d.ts.map