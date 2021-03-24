import React, { useState } from 'react';
import axios from 'axios';
import FadeInSection from '../components/fadeInSection';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        email: '',
        message: ''
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xwkwgaaa',
      data: inputs
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted!!'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className={`mx-5 md:mx-20 lg:mx-32 pb-40 lg:pb-60`}>
      <h1
        className={`dark:text-gray-100 text-5xl lg:text-8xl font-black mb-10`}
      >
        Contact
      </h1>
      <FadeInSection>
        <section className={`lg:flex`}>
          <p
            className={`hidden lg:block flex-none text-gray-600 dark:text-white text-xl tracking-widest leading-loose w-96 lg:mr-40`}
          >
            Hi! Leave me a message and I'll get back right away.
          </p>
          <div className={`flex-grow`}>
            <form onSubmit={handleOnSubmit} className={`flex flex-col `}>
              <input
                id='email'
                type='email'
                name='_replyto'
                placeholder='Email'
                onChange={handleOnChange}
                required
                value={inputs.email}
                className={`p-4 mb-6 shadow-xl outline-none border border-gray-100 focus:border-gray-400`}
              />
              <textarea
                id='message'
                name='message'
                placeholder='Leave message here'
                onChange={handleOnChange}
                required
                value={inputs.message}
                className={`p-4 pb-8 lg:pb-20 mb-6 shadow-xl outline-none border focus:border-gray-400`}
              />
              <button
                type='submit'
                disabled={status.submitting}
                className={`p-4 outline-none bg-gray-900 dark:bg-gray-800 text-white cursor-pointer`}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}
              </button>
            </form>
            {status.info.error && (
              <div className='error'>Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <p className='text-gray-600 dark:text-white pt-4 tracking-wide'>
                {status.info.msg}
              </p>
            )}
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
