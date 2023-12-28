import React from "react";
import { forwardRef, type ReactNode } from "react";

import { Navigation, Virtual, Pagination } from "swiper/modules";


//@ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box } from "@mui/material";
import { MyCarouselProps } from "./types";


export const MyCarousel = forwardRef<
  HTMLButtonElement,
  MyCarouselProps
>((props, ref) => {
  const {
    children,
    isNavigationEnabled,
    isPaginationEnabled,
    slidesPerView,
    spaceBetween,
    navButtonColor,
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
      <Swiper
        modules={[Navigation, Pagination, Virtual]}
        enabled={true}
        navigation={!!isNavigationEnabled}
        pagination={!!isPaginationEnabled}
        slidesPerView={slidesPerView ? slidesPerView : 'auto'}
        centeredSlides={true}
        spaceBetween={spaceBetween}
      >
       
        {React.Children.map(children, (child, index) => {
          return (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {child}
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </Box>
  );
});



MyCarousel.displayName = "MyCarousel";
