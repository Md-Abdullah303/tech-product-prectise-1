"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const Banner = () => {
  const bannerRef = useRef();

  useEffect(() => {
    const animation = () => {
      const element = bannerRef.current;

      gsap.to(element, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    };
    animation();
  }, []);

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          ref={bannerRef}
          className="bg-[url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e)] font-henny-penny bg-no-repeat bg-cover bg-center mt-20 py-45 px-20 rounded-lg relative"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75 rounded-lg "></div>

          {/* banner context */}
          <div className="text-white grid grid-cols-2 gap-5 relative z-10 ">
            <div className="col-span-2 md:col-span-1 space-y-3">
              <h1 className="text-4xl md:text-7xl font-bold ">
                Best tech products in BD
              </h1>
              <p className="text-xl md:text-3xl text-gray-400 font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus aliquid velit corrupti quis adipisci optio sunt aliquam
                id! Voluptatum laborum ea quidem id!
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          ref={bannerRef}
          className="bg-[url(https://images.unsplash.com/photo-1546435770-a3e426bf472b)] font-henny-penny bg-no-repeat bg-cover bg-center mt-20 py-45 px-20 rounded-lg relative"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75 rounded-lg "></div>

          {/* banner context */}
          <div className="text-white grid grid-cols-2 gap-5 relative z-10 ">
            <div className="col-span-2 md:col-span-1 space-y-3">
              <h1 className="text-4xl md:text-7xl font-bold ">
                Best tech products in BD
              </h1>
              <p className="text-xl md:text-3xl text-gray-400 font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus aliquid velit corrupti quis adipisci optio sunt aliquam
                id! Voluptatum laborum ea quidem id!
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          ref={bannerRef}
          className="bg-[url(https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0)] font-henny-penny bg-no-repeat bg-cover bg-center mt-20 py-45 px-20 rounded-lg relative"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75 rounded-lg "></div>

          {/* banner context */}
          <div className="text-white grid grid-cols-2 gap-5 relative z-10 ">
            <div className="col-span-2 md:col-span-1 space-y-3">
              <h1 className="text-4xl md:text-7xl font-bold ">
                Best tech products in BD
              </h1>
              <p className="text-xl md:text-3xl text-gray-400 font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus aliquid velit corrupti quis adipisci optio sunt aliquam
                id! Voluptatum laborum ea quidem id!
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
