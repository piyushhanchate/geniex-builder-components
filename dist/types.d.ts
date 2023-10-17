import * as React from "react";
import { MyButtonProps } from "./MyButton";
import { MyTypographyProps } from "./MyTypography";
export const MyButton: React.ForwardRefExoticComponent<Omit<MyButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export const MyTypography: React.ForwardRefExoticComponent<Omit<MyTypographyProps, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

//# sourceMappingURL=types.d.ts.map
