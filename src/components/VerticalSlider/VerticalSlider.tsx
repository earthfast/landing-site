"use client";
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineAttachMoney } from 'react-icons/md';

const slides = [
  {
    id: 1,
    content: (
      <div className="dark:bg-primary-dark/[0.16] bg-primary-light/[0.72] max-w-[538px] h-full w-full rounded-2xl border-2 border-primary-dark/[0.72] p-10 flex flex-col gap-4 justify-center">
        <div className="text-white text-2xl flex items-center gap-1">
          <MdOutlineAttachMoney size={30} />
          npm run build
        </div>
        <div className="text-white text-2xl flex items-center gap-1">
          <MdOutlineAttachMoney size={30} />
          npx armada-cli bundle create
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <Image
        alt="Earthfast Dashboard"
        src="/project-setup.png"
        width={538}
        height={128}
      />
    ),
  },
];

const VerticalSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    if (deltaY > 50) {
      sliderRef.current?.slickPrev();
      setIsDragging(false);
    } else if (deltaY < -50) {
      sliderRef.current?.slickNext();
      setIsDragging(false);
    }
  }, [isDragging, startY]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseUp]);

  const handleSlideChange = useCallback((index: number) => {
    sliderRef.current?.slickGoTo(index);
  }, []);

  return (
    <div
      className="relative h-[170px] max-w-[560px] overflow-hidden w-full"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex items-center justify-center h-[180px] w-full pb-5"
          >
            {slide.content}
          </div>
        ))}
      </Slider>
      <div className="flex flex-col items-center justify-center absolute bottom-1/2 -right-1 translate-y-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`rounded-full mx-1 my-1 ${
              index === currentSlide
                ? "bg-primary-dark size-3"
                : "dark:bg-white/[0.32] bg-primary-light/[0.32] size-2"
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(VerticalSlider);
