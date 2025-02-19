import React from "react";
import EmblaCarousel from "../Carousel/Carousel";

function TestimonialsCarousel() {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={{}} />
    </div>
  );
}

export default TestimonialsCarousel;
