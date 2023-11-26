import React from 'react';
import styled from '@emotion/styled';
import { Spring } from 'react-spring/renderprops';
import { SlideCard as Card } from '../../root';

const SlideContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

const SlideCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  border-radius: 8px;
`;

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
}: any) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;

  const offsetCardClick = (i: any) => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring to={styles[index]} config={animationConfig}>
      {(style) => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 10),
          }}
        >
          <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
            {/* {content} */}
            <Card {...content} />
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

const styles: any = {
  0: {
    transform: 'scale(0.8)',
    top: '22%',
    opacity: 1,
  },
  1: {
    transform: 'scale(0.85)',
    top: '42%',
    opacity: 1,
  },
  2: {
    transform: 'scale(0.9)',
    top: '44%',
    opacity: 1,
  },
  3: {
    transform: 'scale(0.95)',
    top: '46%',
    opacity: 1,
  },
};
export default Slide;
