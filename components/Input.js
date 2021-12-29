import React from 'react';

export default function Input({
  name,
  label,
  placeholder,
  errors,
  contactData,
  type = 'text',

  ...rest
}) {
  return (
    <div className='flex flex-col mb-6'>
      <label
        htmlFor={name}
        className='font-public place-self-start font-bold text-xs capitalize text-primary-blue-dark opacity-80'
      >
        {label}
      </label>

      <input
        type='text'
        id={name}
        name={name}
        placeholder={placeholder}
        value={contactData[name]}
        className={`placeholder-primary-blue-dark p-4 mt-4  placeholder-opacity-70 text-xs font-public text-primary-blue-dark font-normal focus:outline-none focus:ring-primary-cyan focus:ring-2 focus:border-transparent bg-gray-200 ${
          errors[name] && 'border-2 border-secondary-bright-red'
        }`}
        {...rest}
      />
      <p
        className={`${
          !errors && 'hidden'
        } transition-all font-public pt-1 font-bold italic text-secondary-bright-red text-xs`}
      >
        {errors[name]}
      </p>
    </div>
  );
}
