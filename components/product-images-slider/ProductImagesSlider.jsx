import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";
import Image from "next/image";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function ProductImagesSlider() {
  const PhotoLarge = styled.div`
    width: 566px;
    height: 476px;
    border-radius: 15px;
  `;
  const PhotoSmall = styled.div`
    width: 94px;
    height: 82px;
    border-radius: 10px;
  `;
  const Test = styled.div`
    cursor: pointer;
  `;
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      rtl: true,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <PhotoLarge className="keen-slider__slide">
          <Image
            width={576}
            height={476}
            alt="photo-carousel"
            src="/images/giay01.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoLarge>
        <PhotoLarge className="keen-slider__slide">
          <Image
            width={576}
            height={476}
            alt="photo-carousel"
            src="/images/giay02.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoLarge>
        <PhotoLarge className="keen-slider__slide">
          <Image
            width={576}
            height={476}
            alt="photo-carousel"
            src="/images/giay03.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoLarge>
        <PhotoLarge className="keen-slider__slide">
          <Image
            width={576}
            height={476}
            alt="photo-carousel"
            src="/images/giay04.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoLarge>
        <PhotoLarge className="keen-slider__slide">
          <Image
            width={576}
            height={476}
            alt="photo-carousel"
            src="/images/giay05.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoLarge>
        <PhotoLarge className="keen-slider__slide">
          <Image
            width={576}
            height={476}
            alt="photo-carousel"
            src="/images/giay06.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoLarge>
      </div>

      <Test ref={thumbnailRef} className="keen-slider thumbnail">
        <PhotoSmall className="keen-slider__slide">
          <Image
            width={94}
            height={82}
            alt="photo-carousel"
            src="/images/giay01.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoSmall>
        <PhotoSmall className="keen-slider__slide">
          <Image
            width={94}
            height={82}
            alt="photo-carousel"
            src="/images/giay02.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoSmall>
        <PhotoSmall className="keen-slider__slide">
          <Image
            width={94}
            height={82}
            alt="photo-carousel"
            src="/images/giay03.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoSmall>
        <PhotoSmall className="keen-slider__slide">
          <Image
            width={94}
            height={82}
            alt="photo-carousel"
            src="/images/giay04.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoSmall>
        <PhotoSmall className="keen-slider__slide">
          <Image
            width={94}
            height={82}
            alt="photo-carousel"
            src="/images/giay05.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoSmall>
        <PhotoSmall className="keen-slider__slide">
          <Image
            width={94}
            height={82}
            alt="photo-carousel"
            src="/images/giay06.jpg"
            style={{ borderRadius: "10px" }}
          />
        </PhotoSmall>
      </Test>
    </>
  );
}
