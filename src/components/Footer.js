import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Currently, trying to expand my portfolio!
        </p>
        <p className='footer-subscription-text'>
        If you need a website don't hesitate to reach out!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='https://www.camrinneiss.com/'>Website</Link>
            <Link to='/'>Careers</Link>
            <Link to='/products'>Projects</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/contact-form'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/camrinneiss/?hl=en'>Instagram</Link>
            <Link to='https://www.linkedin.com/in/camrinneiss/'>LinkedIn</Link>
            <Link to='https://www.youtube.com/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Camrin Neiss
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Camrin Neiss © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/camrinneiss/?hl=en'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/camrinneiss/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;