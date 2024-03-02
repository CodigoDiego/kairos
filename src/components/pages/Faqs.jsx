import React from "react";
import '../../stylesheets/pages/Faqs.css';
import ilustracion from '../../images/Preguntas.png';
import { Faq } from "./Faq.jsx";


export const Faqs = (props) => {
  return (
    <>
      <div className="section cont-faqs alt">
        <div className="header-faqs">
          <div>
            <img src={ilustracion} className="faqs-icon"/>
          </div>
          <div>
            <h3>Frequently Asked Questions</h3>
            <p>Quick answers to questions you may have</p>
          </div>
        </div>
      </div>

      <div className="section qa">
        <Faq icon = 'FaHandsHelping'
        question='What services do you offer?' 
        answer = 'We offer a comprehensive range of real estate services including property sales, rentals, property management, investment consultation, and property valuation.'/> 
        <Faq icon = 'FaLaptopHouse' question='How can I list my property with you?' answer = 'Listing your property with us is simple. You can either fill out the online form on our website or contact one of our agents directly to schedule a consultation and begin the listing process.'/> 
        <Faq icon = 'FaFileSignature' question='What is the purchase process?' answer = 'The property buying process typically involves several steps including property search, viewing, negotiation, due diligence, documentation, and closing. Our experienced agents will guide you through each step to ensure a smooth transaction.'/> 
        <Faq icon = 'FaAddressCard' question='How can I contact an agent?' answer = 'ou can contact us via phone, email, or by filling out the contact form on our website. One of our agents will be in touch with you promptly to address your inquiries or schedule a consultation.'/> 
        <Faq icon = 'FaClock' question='How long does it take to sell a property?' answer = 'The time it takes to sell a property can vary depending on various factors such as location, market conditions, property type, and pricing. Our goal is to achieve a timely sale while maximizing the value of your property.'/> 
        <Faq icon = 'FaHandHoldingUsd' question='Do you offer mortgage financing services?' answer = 'While we do not directly offer mortgage financing, we work closely with reputable mortgage lenders and financial institutions to assist our clients in securing the best financing options tailored to their needs.'/> 
        <Faq icon = 'FaHouseUser' question="What should I do if I'm interested in a property I saw on your website?" answer = "If you're interested in a property listed on our website, simply contact us to schedule a viewing or obtain more information. Our agents will be happy to assist you with any inquiries and guide you through the process."/> 
        <Faq icon = 'FaChartLine' question=' What sets your company apart from other real estate agencies?' answer = 'We distinguish ourselves through our commitment to excellence, personalized service, extensive market knowledge, and a results-driven approach. Our team strives to exceed client expectations and deliver exceptional results with integrity and professionalism.'/> 
      </div>
    </>
  )
}
