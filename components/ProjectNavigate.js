import { ArrowLeft, ArrowRight } from './SVG';
import React from 'react';

// export const ProjectNavigate = ({ projectName, left }) => {
export const ProjectNavigate = React.forwardRef(
  ({ onClick, href, projectName, left }, ref) => {
    return (
      <a
        href={href}
        ref={ref}
        onClick={onClick}
        className={`w-1/2 ${
          (left && 'border-r') || 'border-l'
        } border-secondary-gray  ${(left && 'items-start') || 'items-end'}`}
      >
        <article
          className={`w-full flex flex-col  ${
            (left && 'items-start') || 'items-end'
          }`}
        >
          <div className={`py-4 ${!left && 'text-right'}`}>
            {(left && <ArrowLeft />) || <ArrowRight />}
          </div>

          <div className=' relative max-w-full w-full pb-6'>
            <h3
              className={`py-2 font-ibarra text-2xl  text-primary-blue-dark capitalize font-semibold ${
                (left && 'text-left') || 'text-right'
              }`}
            >
              {projectName}
            </h3>
            <p
              className={`text-gray-400 text-xs capitalize absolute ${
                (left && 'left-0') || 'right-0'
              } top-9`}
            >
              {(left && 'previous project') || 'next project'}
            </p>
          </div>
        </article>
      </a>
    );
  }
);

ProjectNavigate.displayName = 'ProjectNavigate';
