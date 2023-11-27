import { Button } from '@src/components/root';
import { BtnColorSchema } from '@src/types/root';
import React, { useState, useEffect } from 'react';
import ModuleStyle from './index.module.scss';

export const HeroSection = () => {
  const animationVariation = ['Primary', 'Secondary', 'Gradient'];
  const [activeAnimationVariationIndex, setActiveAnimationVariationIndex] =
    useState<number>(0);
  let activeButtonVariant: BtnColorSchema =
    BtnColorSchema.SolidBgPrimary500TextNeutral500;
  useEffect(() => {
    const animationLoopHandler = () => {
      setActiveAnimationVariationIndex(
        (prevIndex) => (prevIndex + 1) % animationVariation.length
      );
    };

    const interval = setInterval(animationLoopHandler, 1500);

    return () => clearInterval(interval);
  }, [animationVariation.length]);

  const activeAnimationVariation =
    animationVariation[activeAnimationVariationIndex];

  // handle the button animation part
  switch (true) {
    case activeAnimationVariation == animationVariation[0]: {
      activeButtonVariant = BtnColorSchema.SolidBgPrimary500TextNeutral500;
      break;
    }
    case activeAnimationVariation == animationVariation[1]: {
      activeButtonVariant = BtnColorSchema.SolidSecondary300TextNeutral500;
      break;
    }
    case activeAnimationVariation == animationVariation[2]: {
      activeButtonVariant = BtnColorSchema.SolidPrimaryGradientTextNeutral500;
      break;
    }
    default: {
      activeButtonVariant = BtnColorSchema.SolidBgPrimary500TextNeutral500;
    }
  }
  return (
    <div
      className={`flex justify-center items-center flex-col p-3`}
      data-testid="heroSectionCatcher"
    >
      <div className={`w-[100%] h-[auto] mb-[2.5rem]`}>
        <p className={`text-center text-3xl  text-[#E9EAEC]`}>
          <span
            className={` ${ModuleStyle['innovativeSolutionPart']} ${
              activeAnimationVariation == animationVariation[0]
                ? ModuleStyle['animate']
                : ModuleStyle['normal']
            }`}
          >
            Innovative Solutions{' '}
          </span>
          <span className={`block `}>
            for a{' '}
            <span
              className={` ${ModuleStyle['digitalWorldPart']} ${
                activeAnimationVariation == animationVariation[1]
                  ? ModuleStyle['animate']
                  : ModuleStyle['normal']
              }`}
            >
              Digital World
            </span>
          </span>
          <span
            className={`block  ${ModuleStyle['trustedAgencyPart']} ${
              activeAnimationVariation == animationVariation[2]
                ? ModuleStyle['animate']
                : ModuleStyle['normal']
            }`}
          >
            {' '}
            Trusted Agency
          </span>
        </p>
      </div>
      <div className={`mb-[5rem]`}>
        <p className={`text-center text-[#E9EAEC] text-lg`}>
          Elevate Your Brand: Powerhouse Agency for Impactful Strategies
        </p>
      </div>
      <div className={`flex justify-between space-x-[1.5rem]`}>
        <div>
          <Button.RedirectButton
            btnText="Our Service"
            colorSchema={BtnColorSchema.TransparentBgTextPrimary500}
            isArrow={false}
            isOpenNewTab={true}
            redirectLink=""
          />
        </div>
        <div>
          <Button.RedirectButton
            btnText="Work With Us"
            colorSchema={activeButtonVariant}
            isArrow={false}
            isOpenNewTab={true}
            redirectLink=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
