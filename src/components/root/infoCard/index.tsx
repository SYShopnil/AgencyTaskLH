import React from 'react';
import ModuleStyle from './index.module.scss';
import CurveFrame from '../curveFrame';
import { CurveFrameVariantEnum, IInfoCard } from '@src/types/root';

export const InfoCard = ({
  abilities,
  category,
  height,
  weight,
  dataTestId,
}: IInfoCard) => {
  const publishedData = [
    {
      title: 'Height',
      attr: height || 'N/A',
    },
    {
      title: 'Category',
      attr: category || 'N/A',
    },
    {
      title: 'Weight',
      attr: weight || 'N/A',
    },
    {
      title: 'Abilities',
      abilities,
    },
  ];

  return (
    <span data-testid={dataTestId}>
      <CurveFrame
        borderWidth="0.313rem"
        variant={CurveFrameVariantEnum.with_gradient}
      >
        <div
          className={`${
            ModuleStyle[`container`]
          } py-[2.438rem] md:py-[2.25rem]  pl-[2.877rem]  md:pl-[3rem] bg-[#FFFFFF] duration-[0.5s] transition-all `}
        >
          {publishedData.map((finalDataWhichWillUse, ind) => {
            return (
              <div className={`${ModuleStyle['element']}`} key={ind}>
                <h3 className={`${ModuleStyle['title']}`}>
                  {finalDataWhichWillUse.title}
                </h3>
                {/* print if ability provides */}
                {finalDataWhichWillUse?.abilities && (
                  <>
                    {finalDataWhichWillUse.abilities.map((ability, ind) => {
                      return (
                        <p key={ind} className={`${ModuleStyle['attribute']}`}>
                          {ability}
                        </p>
                      );
                    })}
                  </>
                )}
                {/* print others attributes */}
                {finalDataWhichWillUse?.attr && (
                  <span className={`${ModuleStyle['attribute']} block`}>
                    {finalDataWhichWillUse.attr}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </CurveFrame>
    </span>
  );
};
