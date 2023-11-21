import { btnCardMockProps } from '@root/__mock-props__/component/root/btn-card';
import BtnCard from '@src/components/root/btn-card';
import { render } from '@testing-library/react';

let btnCount = 0; //keep track the btn card's serial

/**
 *  DONE
 *
 * Take Snapshot
 * Check Fill works or not
 *
 *
 */

/**
 * TO DO
 *
 *
 *
 */

describe.each(btnCardMockProps)(
  'When all button card variants has been rendered',
  (card) => {
    btnCount++;
    // test start
    it(`Expect Btn card ${btnCount} Rendered Successfully`, () => {
      const { getAllByTestId } = render(<BtnCard {...card} />);
      const btnCardElements = getAllByTestId(card.data_test_id || 'btn-card');
      expect(btnCardElements).toMatchSnapshot();
    });
    it(`Expect Fill of Btn card ${btnCount}'s fill functionality worked perfectly`, () => {
      const { getByTestId } = render(<BtnCard {...card} />);
      const dynamicStyleWrapperSpanInHtml = getByTestId('dynamicStyleTestId');
      const appliedHeight =
        dynamicStyleWrapperSpanInHtml.style.height.split('%')[0];
      expect(card.fill?.toString()).toEqual(appliedHeight);
    });
  }
);
