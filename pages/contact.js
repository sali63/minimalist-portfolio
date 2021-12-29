import React from 'react';

import Layout from './../components/Layout';
import { data } from '../data';
import { Github, Twitter, LinkedIn } from './../components/SVG';
import Joi from 'joi';
import PrimaryButton from './../components/PrimaryButton';
import _ from 'lodash';
import Input from '../components/Input';
import Textarea from './../components/Textarea';

export const getStaticProps = async () => {
  const { pages } = data;
  const [contactPage] = pages.filter((page) => page.name === 'contact me');

  return {
    props: {
      contactPage,
    },
  };
};

export default function Contact({ contactPage }) {
  const [contactData, setContactData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [isDisabledSendMsgBtn, setIsDisabledSendMsgBtn] = React.useState(true);

  const [errors, setErrors] = React.useState({});

  const { opening, para, formHeading } = contactPage;

  const sendMsgBtnRef = React.useRef(null);

  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({ 'string.empty': 'This field is required' }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required()
      .messages({ 'string.empty': 'This field is required' }),
    message: Joi.string()

      .min(20)
      .max(250)
      .required()
      .messages({ 'string.empty': 'This field is required' }),
  });

  const schemaKeys = _.get(schema, '$_terms.keys');

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = schema.validate({ ...contactData }, options);
    if (!error) return null;

    const { details } = error;

    const errors = {};

    details.map((item) => {
      if (item.path[0]) return (errors[item.path[0]] = item.message);
    });

    return errors;
  };

  const validateProperty = ({ target }) => {
    const { name, value } = target;

    const obj = { [name]: value };

    // get Joi rules obj  for current form element from schemaKeys array, which is coming
    // from schema object above from the path '$_terms.keys'
    const [currSchemaKeyObj] = schemaKeys.filter(
      (keyObj) => keyObj.key === name
    );

    const schema = Joi.object({ [name]: currSchemaKeyObj.schema });

    const { error } = schema.validate({ ...obj });
    const errors = {};
    if (error) errors[name] = error.details[0].message;

    setErrors((prevErrors) => ({ ...prevErrors, ...errors }));
  };

  const handleChange = ({ target }) => {
    if (errors[target.name]) delete errors[target.name];
    setContactData({ ...contactData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  const checkSendMsgButton = () => {
    const { current: sendMsgButton } = sendMsgBtnRef;
    setIsDisabledSendMsgBtn(sendMsgButton.hasAttribute('disabled'));
  };

  React.useEffect(checkSendMsgButton);

  return (
    <Layout contact>
      <section className='mt-10 mb-8 py-6 border-t-2 border-b-2 border-secondary-gray '>
        <article className='2xl:grid 2xl:grid-cols-2'>
          <div>
            <h3 className='capitalize font-ibarra font-bold text-4xl'>
              {opening}
            </h3>
          </div>
          <div>
            <p className='font-public text-base py-6 text-primary-blue-dark opacity-80'>
              {para}
            </p>
            <div className='w-20'>
              <div className='flex min-w-full justify-between'>
                <Github />
                <Twitter />
                <LinkedIn />
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='2xl:grid 2xl:grid-cols-2'>
        <div>
          <h3 className='capitalize font-ibarra font-bold text-4xl'>
            {formHeading}
          </h3>
        </div>
        <form className='pt-6' onSubmit={(e) => handleSubmit(e)}>
          <div className='flex flex-col'>
            <Input
              name='name'
              label='name'
              placeholder='Jane Appleseed'
              contactData={contactData}
              onBlur={(e) => validateProperty(e)}
              onChange={(e) => handleChange(e)}
              errors={errors}
            />
            <Input
              name='email'
              label='email address'
              placeholder='email@example.com'
              contactData={contactData}
              onBlur={(e) => validateProperty(e)}
              onChange={(e) => handleChange(e)}
              errors={errors}
              type='email'
            />
            <Textarea
              name='message'
              label='message'
              placeholder='How can I help you?'
              contactData={contactData}
              onBlur={(e) => validateProperty(e)}
              onChange={(e) => handleChange(e)}
              errors={errors}
            />
          </div>
          <button
            // className='disabled:bg-gray-200'
            type='submit'
            disabled={validate()}
            ref={sendMsgBtnRef}
            className='bg-primary-blue hover:bg-primary-cyan border border-primary-blue-dark disabled:bg-secondary-gray-light'
          >
            <PrimaryButton
              btnText='send message'
              disabled={isDisabledSendMsgBtn}
            />
          </button>
        </form>
      </section>
    </Layout>
  );
}
