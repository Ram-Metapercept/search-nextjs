import React from "react";

import HeroSlider from "./hero-slider-2";

// =======black theme===
import Brand from "./black-theme/brand";
import ServicesArea from "./black-theme/service-area";
import SuccessStoriesNew from "./black-theme/success-stories-new";
import Solutions from "./black-theme/feature-area";
import Industries from "./black-theme/service-are";
import Achievement from "./black-theme/achievement";
import TestimonialArea from "./black-theme/testimonial";
import BlogArea from "./black-theme/blog-area";

const HomeOne = () => {
  return (
    <>
      <HeroSlider />

      <Brand />
      <ServicesArea />
      <SuccessStoriesNew />
      <Achievement />
      <Solutions />
      <Industries />
      <TestimonialArea />
      <BlogArea />
    </>
  );
};

export default HomeOne;
