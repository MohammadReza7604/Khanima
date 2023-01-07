import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./style/ProductImagesSlider.module.css";

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
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className={styles.keen_slider}>
        <div
          className={[styles.keen_slider__slide, styles.number_slide1].join(
            " "
          )}
        >
          {/* <img src="/images/giay01.jpg" /> */}
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide2].join(
            " "
          )}
        >
          2
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide3].join(
            " "
          )}
        >
          3
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide4].join(
            " "
          )}
        >
          4
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide5].join(
            " "
          )}
        >
          5
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide6].join(
            " "
          )}
        >
          6
        </div>
      </div>

      <div ref={thumbnailRef} className={[styles.keen_slider ,styles.thumbnail].join(" ")}>
        <div
          className={[styles.keen_slider__slide, styles.number_slide1].join(
            " "
          )}
        >
          1
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide2].join(
            " "
          )}
        >
          2
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide3].join(
            " "
          )}
        >
          3
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide4].join(
            " "
          )}
        >
          4
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide5].join(
            " "
          )}
        >
          5
        </div>
        <div
          className={[styles.keen_slider__slide, styles.number_slide6].join(
            " "
          )}
        >
          6
        </div>
      </div>
    </>
  );
}
