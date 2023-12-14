import { BoxProps } from "@mui/material";
import { ReactNode } from "react";

export interface MyCarouselProps extends BoxProps {
  children: ReactNode,
  isNavigationEnabled?: boolean,
  isPaginationEnabled?: boolean,
  slidesPerView?: number | "auto" | undefined,
  spaceBetween?: number,
  navButtonColor?: string,
}
