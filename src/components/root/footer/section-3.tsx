import { IFooter } from '@src/types/root';
import Link from 'next/link';
import React from 'react';

type typeSectionThree = Pick<IFooter, 'sectionThree'>;

export const SectionThree = ({
  sectionThree: { socialMediaLink: socialMediaLinks },
}: typeSectionThree) => {
  return (
    <div className={`flex  flex-col items-end space-y-[0.3rem]`}>
      {socialMediaLinks.map((socialMedia, index) => {
        return (
          <a
            href=""
            key={index}
            className={`block text-[#FEFEFE] hover:text-primary_500 hover:underline duration-[0.5s] text-[1.25rem]`}
          >
            <Link
              href={socialMedia.link}
              target={socialMedia.isOpenNewTab ? '_blank' : '_self'}
            >
              {socialMedia.name}
            </Link>
          </a>
        );
      })}
    </div>
  );
};
