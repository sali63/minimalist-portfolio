import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from './Logo';
import { Hamburger, Close } from './SVG';
import { data } from '../data';
import { useRouter } from 'next/dist/client/router';

export default function NavBar({ setIsMenuOpen, isMenuOpen }) {
  const { asPath } = useRouter();

  const evalActiveClass = (currUrl) => {
    if (asPath === currUrl) return 'text-primary-cyan';
    currUrl = (currUrl.length > 1 && currUrl.slice(1)) || currUrl;
    if (asPath.startsWith(currUrl, 1)) return 'text-primary-cyan';
  };

  const { pages } = data;
  return (
    <nav className='flex justify-between items-center'>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <div
        className='cursor-pointer md:hidden'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {(isMenuOpen && <Close />) || <Hamburger />}
      </div>
      <ul className='hidden md:flex  w-72 justify-between py-6 uppercase font-public font-light text-xs text-primary-blue-dark tracking-widest'>
        {pages.map((page) => {
          return (
            <li key={page.name}>
              <Link href={page.url}>
                <a className={evalActiveClass(page.url)}>{page.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
