import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import SecondaryButton from './SecondaryButton';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Layout({ children, contact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='pt-8 '>
      <div className='px-8 2xl:px-32'>
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className='px-8 mt-6'>
          <div className='relative'>{isMenuOpen && <MobileMenu />}</div>
        </div>
        <main>{children}</main>
        {!contact && (
          <div className='mt-28  md:flex md:items-center md:justify-between md:mt-16 2xl:mt-32'>
            <div className='w-60 mx-auto md:w-64'>
              <h1 className='text-3xl max-w-full inline-block font-ibarra font-bold text-center  md:text-left'>
                Interested in doing a project together?
              </h1>
            </div>
            <div className='hidden h-px md:block flex-1 pl-6 pr-2'>
              <div className='bg-primary-blue-dark  min-h-full opacity-20 '></div>
            </div>
            <Link href='/contact' passHref>
              <SecondaryButton
                btnText='contact me'
                additionalClasses='max-w-210-imp my-4 mt-10 mx-auto md:m-0 md:ml-4'
              ></SecondaryButton>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
