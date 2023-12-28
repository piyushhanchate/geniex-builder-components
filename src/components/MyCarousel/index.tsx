//@ts-nocheck

import React from "react";
import { forwardRef, type ReactNode } from "react";

import { Navigation, Virtual, Pagination } from "swiper/modules";

//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/material";
import { MyCarouselProps } from "./types";
import "@splidejs/react-splide/css";

//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
export const MyCarousel = forwardRef<HTMLButtonElement, MyCarouselProps>(
  (props, ref) => {
    const {
      children,
      isNavigationEnabled,
      isPaginationEnabled,
      slidesPerView,
      spaceBetween,
      navButtonColor,
      autoWidth,
      padding,
      gap,
      ...restProps
    } = props;

    return (
      <Box
        {...restProps}
        sx={{
          ...restProps.sx,
          ".swiper-button-prev": {
            color: navButtonColor,
          },
          ".swiper-button-next": {
            color: navButtonColor,
          },
        }}
        ref={ref}
      >
        <Splide
          options={{
            rewind: true,
            focus: "center",
            autoWidth: autoWidth,
            padding,
            gap,
          }}
          aria-label="React Splide Example"
        >
          {React.Children.map(children, (child, index) => {
            return (
              <SplideSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                {child}
              </SplideSlide>
            );
          })}
        </Splide>
      </Box>
    );
  }
);

MyCarousel.displayName = "MyCarousel";
