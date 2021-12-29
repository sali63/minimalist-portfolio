import React from 'react';
import Link from 'next/link';
import { data } from '../data';

export default function MobileMenu() {
  const { pages } = data;
  return (
    <div className='w-52 absolute z-10 right-0 bg-primary-blue-dark '>
      <ul className='py-5 text-center uppercase h-full  font-public font-light text-xs text-secondary-gray tracking-widest'>
        {pages.map((page) => {
          return (
            <li key={page.name} className='py-3'>
              <Link href={page.url}>
                <a>{page.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
