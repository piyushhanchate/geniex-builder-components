// @ts-nocheck
import React from 'react'
import { forwardRef, type ReactNode } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { MyImageProps } from "./types";

export const MyImage = forwardRef<HTMLDivElement, MyImageProps>(
  (props, ref) => {
    const { objectFit, width, src, height, imageStyles, ...restProps } = props;

    return (
      <Box position={"relative"} {...restProps} ref={ref}>
      <Image
        src={src}
        alt="next-image"
        fill
        quality={100}
        style={{ objectFit: objectFit, ...imageStyles }}
      />
    </Box>
    );
  }
);

MyImage.displayName = "MyImage";
