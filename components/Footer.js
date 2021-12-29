import React from 'react';
import { Github, LinkedIn, Twitter } from './SVG';
import { Logo } from './Logo';
import { data } from '../data';
import Link from 'next/link';

export default function Footer() {
  const { pages } = data;
  return (
    <footer className='mt-20 pt-10 pb-11  bg-primary-blue-dark text-center md:p-0'>
      <section className='flex flex-col items-center md:flex-row md:justify-around'>
        <div className='md:flex md:items-center'>
          <div className='max-w-max mx-auto md:pr-6'>
            <Logo fill='#fafafa'></Logo>
          </div>
          <ul className='py-6 uppercase font-public font-light text-xs text-secondary-gray tracking-widest md:flex md:flex-row'>
            {pages.map((page) => {
              return (
                <li key={page.name} className='py-3 md:px-4'>
                  <Link href={page.url}>
                    <a>{page.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='w-20 '>
          <div className='flex min-w-full justify-between'>
            <Github fill='#fafafa' />
            <Twitter fill='#fafafa' />
            <LinkedIn fill='#fafafa' />
          </div>
        </div>
      </section>
    </footer>
  );
}
