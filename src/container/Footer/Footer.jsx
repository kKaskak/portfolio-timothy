import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2 className='head-text'><span>Connect</span>Hub   📞 </h2>
       <div className='app__footer-socials-icons'>
          <a className='icons-socials' href='https://www.twitter.com/kKaskak' target='_blank'><BsTwitter className='bsIcon' size={45}/></a>
          <a className='icons-socials' href='https://www.github.com/kKaskak' target='_blank'><BsGithub className='bsIcon' size={45}/></a>
       </div>
      <div className='app__footer-contact app__flex'>
        <div className='app__footer-card'>
          <img src={images.email} alt={images.name} />
          <a href="mailto:hamiahumorek@gmail.com" className="p-text">hamiahumorek@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="phone" />
        <a href="tel: +359878245823" className="p-text">+359 878 245 823</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 id='message' className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
       <p className='p-text absolute'><strong>kKaskak</strong>® All rights reserved</p>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
