import React from 'react';
import Layout from './../../components/Layout';
import { data, getProjects, getProjectPage } from '../../data';
// import { getProjectPage } from './../../data';
import Image from 'next/image';
import SecondaryButton from './../../components/SecondaryButton';

import { ProjectNavigate } from '../../components/ProjectNavigate';
import Link from 'next/link';

export default function Project({
  currProjectData: { name, desc, categories, tags, projectBackground, images },
  beforeAfterProjects,
}) {
  const [prevProject, nextProject] = beforeAfterProjects;
  const [hero, previewOne, previewTwo] = images;
  const mobileSize = { width: '311', height: '288' };
  const mobileSize2x = { width: '622', height: '576' };
  const tabletSize = { width: '339', height: '314' };
  const desktopSize = { width: '540', height: '500' };

  return (
    <Layout>
      <section className='mt-10 mb-11 col-span-2 '>
        <article className=''>
          <div className='relative w-full'>
            <Image
              src={hero.src.large.tablet}
              width='622'
              height='280'
              layout='responsive'
              alt={hero.name}
            />
          </div>
        </article>

        <div className='2xl:grid 2xl:grid-cols-2 2xl:pt-20 2xl:grid-rows-portfolio-layout'>
          <div className='2xl:pr-32'>
            <article className='mt-8 pt-6 pb-5 2xl:pt-10 2xl:pb-8 border-t-2 border-b-2 border-secondary-gray md:grid grid-cols-2 2xl:grid-cols-1'>
              <h2 className='font-ibarra font-bold text-3xl capitalize'>
                {name}
              </h2>
              <p className='font-public pt-4 pb-12 2xl:pb-4 text-gray-400 text-sm laptop-lg:text-base leading-7 laptop-lg:leading-9 row-span-5'>
                {desc}
              </p>
              <div className='md:pt-6'>
                <p className='font-public font-bold text-xs laptop-lg:text-sm text-primary-cyan capitalize'>
                  {categories.map((category, index, arr) => {
                    const slash = (index !== arr.length - 1 && '/') || '';
                    return `${category} ${slash && slash} `;
                  })}
                </p>
                <p className='font-public pt-3 pb-6  font-bold text-xs laptop-lg:text-sm text-primary-cyan uppercase'>
                  {tags.map((tag, index, arr) => {
                    const slash = (index !== arr.length - 1 && '/') || '';
                    return `${tag} ${slash && slash} `;
                  })}
                </p>
              </div>
              <SecondaryButton
                btnText='visit website'
                additionalClasses='w-44'
              />
            </article>
          </div>

          <article className='pb-10 pt-8'>
            <h3 className='font-ibarra font-normal text-2xl capitalize'>
              project background
            </h3>
            <p className='font-public pt-4  text-gray-400 text-sm laptop-lg:text-base laptop-lg:leading-9 tracking-wider leading-7 '>
              {projectBackground}
            </p>
          </article>
          <article className='2xl:col-start-2'>
            <h3 className='font-ibarra font-normal text-2xl capitalize'>
              static previews
            </h3>
            <div className='pt-8 pb-6'>
              <Image
                src={previewOne.src.large.tablet}
                width='1378'
                height='868'
                alt={previewOne.name}
              />
            </div>
            <div>
              <Image
                src={previewTwo.src.large.tablet}
                width='1378'
                height='868'
                alt={previewTwo.name}
              />
            </div>
          </article>
        </div>
      </section>

      <section className='border-t-2 border-b-2 flex max-w-full border-secondary-gray mt-12 w-11/12 mx-auto'>
        <Link href={`/portfolio/${prevProject}`} passHref>
          <ProjectNavigate projectName={prevProject} left />
        </Link>
        <Link href={`/portfolio/${nextProject}`} passHref>
          <ProjectNavigate projectName={nextProject} />
        </Link>
      </section>
    </Layout>
  );
}

export async function getStaticPaths({}) {
  const projects = getProjects();
  // return this shape
  // [
  //     {
  //         params:{
  //             id: 'manage'
  //         }
  //     }
  // ]
  const paths = projects.map((project) => {
    return {
      params: {
        id: project.name,
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const currProjectData = getProjectPage(params.id);
  const projects = getProjects();

  const indexCurrProject = projects.indexOf(currProjectData);

  let indexPreviousProject = indexCurrProject - 1;
  if (indexPreviousProject < 0) indexPreviousProject = projects.length - 1;

  let indexNextProject = indexCurrProject + 1;
  if (indexNextProject > projects.length - 1) indexNextProject = 0;

  const prevProject = projects[indexPreviousProject].name;
  const nextProject = projects[indexNextProject].name;

  const beforeAfterProjects = [prevProject, nextProject];

  return { props: { currProjectData, beforeAfterProjects } };
}
