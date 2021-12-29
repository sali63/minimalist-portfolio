import React from 'react';

const PrimaryButton = React.forwardRef(
  ({ onClick, href, btnText, disabled }, ref) => {
    return (
      <a href={href} onClick={onClick} className='w-40 h-10 py-1 px-6 block'>
        <span className='font-public text-center  tracking-widest font-semibold uppercase text-secondary-gray text-xs'>
          {btnText}
        </span>
      </a>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
