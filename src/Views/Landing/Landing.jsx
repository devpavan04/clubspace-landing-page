import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { logoRectangle, application } from '../../assets';
import { FeatureCard, BillingCard, Button } from '../../components';
import './landing.css';

const Landing = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: require('../../assets/banner.json'),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        className: 'lottie-svg-class',
        id: 'lottie-svg-id',
      },
    });

    return () => {
      container.current = null;
    };
  });

  const showDrawerHandler = () => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <div className='wrapper'>
      <div className='header'>
        <img src={logoRectangle} className='header-logo' alt='Clubspace Logo' />
        <i className='fa-solid fa-bars header-hamburger-icon' onClick={showDrawerHandler}></i>
        <div className='header-menu-items'>
          <a href='#features'>Features</a>
          <a href='#pricing'>Pricing</a>
          <button className='header-menu-items-btn'>Let's Talk</button>
        </div>
      </div>

      {showDrawer ? (
        <div className='drawer'>
          <i className='fa-solid fa-xmark drawer-close-icon' onClick={showDrawerHandler}></i>
          <div className='drawer-menu-items'>
            <a href='#features'>Features</a>
            <hr />
            <a href='#pricing'>Pricing</a>
            <hr />
          </div>
        </div>
      ) : null}

      <div className='hero'>
        <div className='hero-background' ref={container}></div>
        <div className='hero-content'>
          <p className='hero-title'>The Ultimate Club Management App</p>
          <button className='hero-btn'>Let's Talk</button>
          <img src={application} alt='Clubspace Application' className='hero-image' />
        </div>
      </div>

      <div className='features'>
        <p className='features-title'>Why Clubspace?</p>
        <div className='feature-card'>
          <FeatureCard type='create' padding='0' width='100%' height='auto' />
        </div>
        <div className='feature-card'>
          <FeatureCard type='join' padding='0' width='100%' height='auto' />
        </div>
        <div className='feature-card'>
          <FeatureCard type='engagement' padding='0' width='100%' height='auto' />
        </div>
      </div>
    </div>
  );
};

export default Landing;

{
  /* <div className='container' ref={container}></div> */
}
{
  /*
<i class="fa-solid fa-bars"></i>
      <FeatureCard type='create' padding='2rem' width='400px' height='auto' />
      <br />
      <FeatureCard type='join' padding='2rem' width='400px' height='auto' />
      <br />
      <FeatureCard type='engagement' padding='2rem' width='400px' height='auto' />
      <br />
      <BillingCard type='stater' padding='24px' width='400px' height='auto' />
      <br />
      <BillingCard type='growth' padding='24px' width='400px' height='auto' />
      <br />
      <BillingCard type='scale' padding='24px' width='400px' height='auto' /> */
}
