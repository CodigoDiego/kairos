import React from 'react';
import '../../stylesheets/pages/Home.css';
import { Reviews } from './Reviews';
import video from '../../images/videos/video2.mp4';
import{IoIosArrowDown} from 'react-icons/io';

const handleClick = () => {
  // Lógica para desplazarse a la sección
  const sectionElement = document.getElementById('reviews');
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Home = () => {
  return (
    <>
      <div className='section photo-reel'>
      <div className="overlay">
      </div>
        <video src={video} autoPlay loop muted className='video-bg'/>
        <div className='content'>
          <h3 className='h3-home'>WE ARE KAIROS</h3>
          <IoIosArrowDown className='ui-icon' onClick={handleClick}/>
        </div>
      </div>
      <div className='review-wrapper' id='reviews'>
      <h3 className='h3-home'>What our clients say about us</h3>
      <Reviews name='Jonathan Vaughn'
      review='Kairos is the most reliable agency in the real state business, it helped me find the house i have always desired!'
      img='pic1' />

      <Reviews name='Nancy Cleo'
      review='Thanks to Kairos i found a great, huge and specially fairly-priced house that was just perfect for my needs.'
      img='pic3' />

      <Reviews 
      name='Luke Graham'
      review='Kairos made finding my dream home effortless. The streamlined platform, paired with attentive service, guided me to the perfect property.'
      img='pic2' />
    </div>
    </>
  )
}
