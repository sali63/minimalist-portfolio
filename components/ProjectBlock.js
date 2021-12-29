import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useWindowSize } from './../lib/lib';
import SecondaryButton from './SecondaryButton';
import Link from 'next/link';

export default function ProjectBlock({ title, desc, src, name, odd }) {
  const mobileSize = { width: '311', height: '288' };
  const mobileSize2x = { width: '622', height: '576' };
  const tabletSize = { width: '339', height: '314' };
  const desktopSize = { width: '540', height: '500' };

  return (
    <article className='pb-16'>
      <div className={`md:flex ${odd && 'flex-row-reverse'}`}>
        <div className='relative md:w-1/2 md:self-center'>
          <Image
            src={src.large.mobile}
            alt={name}
            width={mobileSize2x.width}
            height={mobileSize2x.height}
            layout='responsive'
            // objectFit='cover'
            // objectPosition='center center'
          ></Image>
        </div>
        <div
          className={`${
            (odd && 'md:pr-8 2xl:pr-32') || 'md:pl-8 2xl:pl-16'
          } md:w-1/2 lg:min-h-full`}
        >
          <div
            className={`mt-6 pt-6 pb-5 border-t-2 border-b-2 border-secondary-gray  md:m-0 md:p-0 md:py-8 md:max-w-max lg:min-h-full ${
              odd && '2xl:ml-auto'
            }`}
          >
            <h2 className='font-ibarra font-bold text-3xl capitalize'>
              {title}
            </h2>
            <div className='2xl:w-72'>
              <p className='font-public pt-5 pb-12 text-gray-400 text-xs leading-6 2xl:max-w-max 2xl:text-base'>
                {desc}
              </p>
            </div>
            <Link href={`/portfolio/${title}`} passHref>
              <SecondaryButton
                btnText='view project'
                additionalClasses='w-44'
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
