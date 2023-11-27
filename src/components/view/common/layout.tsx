import { Header } from '@src/components/compound/header';
import Footer from '@src/components/root/footer';
import { ICommonLayout } from '@src/types/view';
import React from 'react';

export const CommonLayout = ({
  children,
  headerElements,
  footerElement,
}: ICommonLayout) => {
  return (
    <div className={` w-[85%]`}>
      <header className={`mt-[1.5rem]`}>
        <Header {...headerElements} />
      </header>
      <main>{children}</main>
      <footer className={`my-[7.5rem]`}>
        <Footer {...footerElement} />
      </footer>
    </div>
  );
};
