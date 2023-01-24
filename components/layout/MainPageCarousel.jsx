import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BoxItemsCarousel } from "./BoxItemesCarousel";
import { ExpertsBox } from "../surfaces/ExpertsBox";
import styled from "styled-components";
import { BoxItemsShopCarousel } from "./‌BoxItemesShopCarousel";
import { WeblogBox } from "../surfaces/WeblogBox";

export const MainPageCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: true,
    slides: {
      perView: 5.3,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <BoxItemsCarousel off="true" />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel off="true" />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel off="true" />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel off="true" />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel off="true" />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel off="true" />
      </div>
    </div>
  );
};
export const MainPageAdCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: true,
    slides: {
      perView: 5.3,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <BoxItemsCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsCarousel />
      </div>
    </div>
  );
};
export const MainPageShopCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: true,
    slides: {
      perView: 5.3,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
    </div>
  );
};
export const MainPageGroupCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: true,
    slides: {
      perView: 4.8,
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
      <div className="keen-slider__slide">
        <BoxItemsShopCarousel />
      </div>
    </div>
  );
};
export const ExpertBoxCarousel = () => {
  const Test = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  `;
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: true,
    slides: {
      perView: 7.3,
      spacing: 15,
    },
  });

  return (
    <Test ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
      <div className="keen-slider__slide">
        <ExpertsBox />
      </div>
    </Test>
  );
};

export const WeblogBoxCarousel = () => {
  const Test = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  `;
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: true,
    slides: {
      perView: 7.3,
      spacing: 15,
    },
  });

  return (
    <Test ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
    </Test>
  );
};
export const WeblogSingletBoxCarousel = () => {
  const Test = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  `;
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: true,
    slides: {
      perView: 7.3,
      spacing: 15,
    },
  });

  return (
    <Test ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
      <div className="keen-slider__slide">
        <WeblogBox />
      </div>
    </Test>
  );
};
