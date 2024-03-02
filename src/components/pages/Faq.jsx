import React from "react";
import * as FontAwesome from "react-icons/fa"
import '../../stylesheets/pages/properties/Faq.css';


export const Faq = (props) => {
  const icon = props.icon;
  console.log(icon);
  return (
    <div className="qa-card">
    <div className="faqs-card-icon">
        <div className="faqs-inner-icon ">{React.createElement(FontAwesome[icon])}</div>
        </div>
    <div className="faqs-card-text">
      <h3>{props.question}</h3>
      <h4>{props.answer}</h4>

    </div>
  </div>
  )
}