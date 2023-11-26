import React, { Component, useState } from 'react';
import VerticalCarousel from './VerticalCarousel';
import { config } from 'react-spring';
import { IVerticalCarouselSectionMain } from '@src/types/compound/vertical-slider-section';
import { useInView } from 'react-intersection-observer';

export default function VerticalCarouselMain({
  slides,
}: IVerticalCarouselSectionMain) {
  const [offsetRadius, setOffsetRadius] = useState(5);
  const [showNavigation, setShowNavigation] = useState(false);
  const [configSet, setConfig] = useState(config.gentle);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        minHeight: '86rem',
        margin: '0 auto',
        overflowX: 'hidden',
        overflowY: 'clip',
      }}
      ref={ref}
    >
      <VerticalCarousel
        slides={slides}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={configSet}
        inView={inView}
      />
    </div>
  );
}
