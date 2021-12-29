import React from 'react';
import Layout from './../components/Layout';
import Head from 'next/head';

import { promises as fs } from 'fs';
import path from 'path';

import { data } from '../data';
import { arrToObject } from '../lib/lib';
import ProjectBlock from './../components/ProjectBlock';

export default function Portfolio({ portfolioImages }) {
  const [portfolioPage] = data.pages.filter(
    (page) => page.name === 'portfolio'
  );

  const { name: pageName, images } = portfolioPage;
  const { mobile, tablet, desktop } = arrToObject(portfolioImages);

  return (
    <>
      <Head>
        <title>{pageName}</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Layout>
        <section className='mt-10 md:mt-16'>
          {images.map((image, index) => {
            const { name } = image;
            const modulusZero = index % 2;
            const odd = (modulusZero !== 0 && true) || false;
            return <ProjectBlock key={name} {...image} odd={odd} />;
          })}
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  //Get all images for this page for all devices in the devices array
  const sizeOf = require('image-size');
  const devices = ['mobile', 'tablet', 'desktop'];

  const allDevicesImages = devices.map(async (device) => {
    const portfolioDirectory = path.join(
      process.cwd(),
      `public/images/portfolio/${device}`
    );
    let filenames = await fs.readdir(portfolioDirectory);

    // filenames = filenames.filter((filename) => !filename.includes('@'));

    const imageData = filenames.map(async (filename) => {
      const filePath = path.join(portfolioDirectory, filename);
      const dimensions = await sizeOf(filePath);

      const imageRelativeDir = /\\images.*/gi
        .exec(portfolioDirectory)
        .join()
        .replace(/\\/g, '/');

      const imageRelativePath = `${imageRelativeDir}/${filename}`;
      const filenameShort = filename.match(/\w+@?\w+(?=\.)/gi).join();

      return {
        filename,
        imageRelativePath,
        dimensions,
        filenameShort,
      };
    });

    return {
      [device]: await Promise.all(imageData),
      device,
    };
  });

  return {
    props: {
      portfolioImages: await Promise.all(allDevicesImages),
    },
  };
}