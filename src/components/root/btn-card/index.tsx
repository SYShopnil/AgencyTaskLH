import { CardSize, ColorSchema, IBtnCard } from '@src/types/root';
import React from 'react';

const BtnCard = ({
  colorSchema,
  title,
  cardSize,
  fill,
  data_test_id,
}: IBtnCard) => {
  let cardSizeStyle = 'px-[1.25rem] py-[0.625rem] text-md';
  switch (cardSize) {
    case CardSize.card_lg: {
      cardSizeStyle = `px-[1.25rem] py-[0.625rem] text-md`;
      break;
    }
    case CardSize.card_sm: {
      cardSizeStyle = `px-[1.25rem] text-base`;
      break;
    }
    default: {
      cardSizeStyle = 'px-[1.25rem] py-[0.625rem] text-md';
    }
  }
  const dynamicStyle = {
    top: 0,
    left: 0,
    background: 'red',
    height: `${fill}%`,
    width: '100%',
    zIndex: -1,
  };

  //control the btn card color dynamically
  switch (colorSchema) {
    case ColorSchema.AccentBlackBgTextWhite: {
      dynamicStyle.background = '#000000';
      break;
    }
    case ColorSchema.PrimaryBlueBgTextWhite: {
      dynamicStyle.background = '#2B73B9';
      break;
    }
    case ColorSchema.SecondaryBlueBgTextWhite: {
      dynamicStyle.background = '#4592C4';
      break;
    }
    case ColorSchema.SecondaryLightGreenBgTextWhite: {
      dynamicStyle.background = '#9BCC50';
      break;
    }
    case ColorSchema.SecondaryOrangeBgTextWhite: {
      dynamicStyle.background = '#FC7C23';
      break;
    }
    case ColorSchema.AccentGrayBgTextWhite: {
      dynamicStyle.background = '#D9D9D9';
      break;
    }
    case ColorSchema.PrimaryYellowBgTextWhite: {
      dynamicStyle.background = '#FFCB05';
      break;
    }
    case ColorSchema.SecondaryLightVioletBgTextWhite: {
      dynamicStyle.background = '#B97FC9';
      break;
    }
    case ColorSchema.SecondaryDeepGreenBgTextWhite: {
      dynamicStyle.background = '#729F3F';
      break;
    }
    case ColorSchema.SecondaryPinkBgTextWhite: {
      dynamicStyle.background = '#F366B9';
      break;
    }
    case ColorSchema.LightBlueBgTextWhite: {
      dynamicStyle.background = '#3DC7EF';
      break;
    }
    default: {
      dynamicStyle.background = '#4592C4';
    }
  }
  return (
    <div className="z-0" data-testid={data_test_id ? data_test_id : 'btn-card'}>
      <span
        className={`z-[-5] relative duration-150 inline-block bg-[#BDBDBD] text-center ${cardSizeStyle}  text-white rounded-[0.25rem] !leading-normal`}
      >
        <span
          className={`absolute rounded-[0.25rem]`}
          style={dynamicStyle}
          data-testid="dynamicStyleTestId"
        ></span>
        <span className={`z-10`}>{title}</span>
      </span>
    </div>
  );
};

export default BtnCard;
