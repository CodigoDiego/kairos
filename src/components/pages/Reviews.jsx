
import React from 'react';
import '../../stylesheets/pages/Reviews.css';

export const Reviews = (props) => {
  return (
    <div className="review-container">
        <div className="card">
            <img src={require(`../../images/testimonials/${props.img}.png`)}
                alt={`Picture of ${props.name}`}
                className="testimonial-pic"/>
            <div className="textbox">
              <p className="name">{props.name}</p>
              <p className="review">"{props.review}"</p>
            </div>

        </div>
    </div>
  )
}

