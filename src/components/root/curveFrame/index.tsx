import { CurveFrameVariantEnum, ICurveFrame } from '@src/types/root';
import React from 'react';
import styles from './index.module.scss';

const CurveFrame = ({
  children,
  variant,
  dataTestIdForCurveFrame,
  borderWidth,
}: ICurveFrame) => {
  let setBgBasedOnVariant = '';
  switch (variant) {
    case CurveFrameVariantEnum.with_gradient: {
      setBgBasedOnVariant = `bg-primaryGradient`;
      break;
    }
    case CurveFrameVariantEnum.with_out_gradient: {
      setBgBasedOnVariant = `bg-[#FFFFFF]`;
      break;
    }
    default: {
      setBgBasedOnVariant = `bg-primaryGradient`;
    }
  }
  return (
    <div
      className={`${styles.filter_container} `}
      data-testid={dataTestIdForCurveFrame}
    >
      <div
        className={`${styles.box_Outer} ${setBgBasedOnVariant}`}
        style={{ padding: borderWidth }}
      >
        <div className={`${styles.filter_container}`}>
          <div className={`${styles['box_Inner']} bg-white`}>
            <span>{children}</span>
          </div>
        </div>
      </div>
      <svg
        style={{ visibility: 'hidden', position: 'absolute' }}
        width="0"
        height="0"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default CurveFrame;
