import React from 'react';

const SecondaryButton = React.forwardRef(
  ({ onClick, href, btnText, additionalClasses }, ref) => {
    return (
      <a
        className={`uppercase block border tracking-widest  max-w-200 public-sans font-normal border-primary-blue-dark transition-colors  hover:bg-primary-blue-dark text-sm text-primary-blue-dark hover:text-secondary-gray-light py-3 px-6 text-center ${additionalClasses}`}
        ref={ref}
        onClick={onClick}
        href={href}
      >
        {btnText}
      </a>
    );
  }
);

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
