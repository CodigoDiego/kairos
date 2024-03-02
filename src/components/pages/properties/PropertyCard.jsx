import React from 'react';
import '../../../stylesheets/pages/properties/PropertyCard.css';
import { BiSolidBed } from "react-icons/bi";
import { BiSolidBath } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { RxLayers } from "react-icons/rx";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";

export const PropertyCard = (props) => {
  return (
  <div className='prop-card'>
    <div className='img-container'>
      <img src={require(`../../../${props.image}`)} className='card-image'/>
    </div>
    <h3>{props.name}</h3>

    <div className='row-container'>
      <div className='row-icon'>
        <BiSolidBed className='property-icon' />
        <p>{props.bedrooms}</p>
      </div>
      <div className='row-icon'>
        <BiSolidBath className='property-icon'/>
        <p>{props.bathrooms}</p>
      </div>
    </div>

    <div className='row-container'>
      <div className='row-icon'>
        <FaCar className='property-icon'/>
        <p>{props.garage}</p>
      </div>
      <div className='row-icon'>
        <RxLayers className='property-icon'/>
        <p>{props.floors}</p>
      </div>
    </div>

    <div className='row-container'>
      <div className='row-icon'>
        <FaBuilding className='property-icon'/>
        <p>{props.surface} ft²</p>
      </div>
      <div className='row-icon'>
        <FaLocationDot className='property-icon'/>
        <p id='location'>{props.location}</p>
      </div>
    </div>


  </div>

  )
}
