import { useKeenSlider } from "keen-slider/react";
import styled from "styled-components";
import { WeblogBoxMobile } from "../../surfaces/mobile/WeblogBoxMobile";

export const WeblogBoxCarouselMobile = () => {
  const Test = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-bottom:20px;
  `;
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    rtl: true,
    slides: {
      perView: 2.5,
      spacing: 15,
    },
  });

  return (
    <Test ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
      <div className="keen-slider__slide">
        <WeblogBoxMobile />
      </div>
    </Test>
  );
};