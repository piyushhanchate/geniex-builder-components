import React from "react";
import { MyButtonProps, MyTypographyProps, MyImageProps } from "./types";
export const MyButton: React.ForwardRefExoticComponent<MyButtonProps & React.RefAttributes<HTMLButtonElement>>;
export const MyTypography: React.ForwardRefExoticComponent<MyTypographyProps & React.RefAttributes<HTMLParagraphElement>>;
export const MyImage: React.ForwardRefExoticComponent<Omit<MyImageProps, "ref"> & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=types.d.ts.map
