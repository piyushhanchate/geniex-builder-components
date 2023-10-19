import type { GridProps } from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import { forwardRef, type ReactNode } from "react";
import type { SxProps } from "@mui/system";
import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";
import { Box } from "@mui/material";
import Image from "next/image";
import { MyImageProps } from "./types";

export const MyImage = forwardRef<HTMLDivElement, MyImageProps>(
  (props, ref) => {
    const { objectFit, width, src, height, imageStyles, ...restProps } = props;
    console.log("Image propss");
    console.log(objectFit);

    return (
      <Box
        position={"relative"}
        {...restProps}
        width={width}
        height={height}
        ref={ref}
      >
        <Image
          src={src}
          alt="image"
          fill
          quality={100}
          style={{ objectFit: objectFit, ...imageStyles }}
        />
      </Box>
    );
  }
);

MyImage.displayName = "MyImage";
