import React from 'react';

const PrimaryButtonArrow = React.forwardRef(
  ({ onClick, href, btnText, stroke = '#5FB4A2' }, ref) => {
    const svgRef = React.useRef();

    const handleOnMouseOver = () => {
      svgRef.current.children[0].setAttribute('stroke', '#FAFAFA');
    };

    const handleOnMouseOut = () => {
      svgRef.current.children[0].setAttribute('stroke', '#5FB4A2');
    };

    return (
      <a
        href={href}
        onClick={onClick}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        // ref={anchorRef}
        className='w-40 h-10 bg-primary-blue hover:bg-primary-cyan  mt-6 relative block'
      >
        <div className='w-10 h-10  absolute top-0 left-0 flex items-center justify-center'>
          <svg
            ref={svgRef}
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='14'
          >
            <g fill='none' fillRule='evenodd' stroke={stroke}>
              <path d='M0 9l8 4 8-4' />
              <path opacity='.5' d='M0 5l8 4 8-4' />
              <path opacity='.25' d='M0 1l8 4 8-4' />
            </g>
          </svg>
        </div>
        <span className='font-public  absolute w-28 h-10 top-0 right-0 flex items-center justify-center tracking-widest font-semibold uppercase text-secondary-gray text-xs'>
          {btnText}
        </span>
      </a>
    );
  }
);

PrimaryButtonArrow.displayName = 'PrimaryButtonArrow';

export default PrimaryButtonArrow;
