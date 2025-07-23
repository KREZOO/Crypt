'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { Slide } from './Slide/Slide';
import { SwapSlideBtn } from '@/components/ui/buttons/SwapSlideBtn/SwapSlideBtn';

import slides from '@/data/sliders/cf-slider.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Style from './CFSlider.module.scss';

export function CFSlider() {
  const { t } = useTranslation();

  const swiperRef = useRef<any>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className={Style.container}>
      <div className={Style.buttons}>
        <SwapSlideBtn
          direction='prev'
          positioning='horizontal'
          onClick={handlePrev}
        />
        <SwapSlideBtn
          direction='next'
          positioning='horizontal'
          onClick={handleNext}
        />
      </div>

      <div className={Style.swiperContainer}>
        <Swiper
          className={Style.swiper}
          modules={[Navigation, Scrollbar]}
          spaceBetween={30}
          scrollbar={{ draggable: true, hide: false }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            420: {
              slidesPerView: 2.54,
              spaceBetween: 60,
            },
            570: {
              slidesPerView: 2.43,
              spaceBetween: 30,
            },
            811: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.4,
            },
            1280: {
              slidesPerView: 3.7,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slide
                title={t(slide.title)}
                desc={t(slide.desc)}
                imageSrc={slide.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
