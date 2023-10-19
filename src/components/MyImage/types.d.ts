import { BoxProps, SxProps } from "@mui/material";

export interface MyImageProps extends BoxProps {
  objectFit: "fill" | "contain" | "cover" | "none" | "scale-down";
  imageStyles?: SxProps;
  src: string;
}
