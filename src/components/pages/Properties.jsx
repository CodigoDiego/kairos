import React from 'react';
import '../../stylesheets/pages/Properties.css';
import { PropertyCard } from './properties/PropertyCard';
import propertiesData from '../../data/propertiesData.json'

export const Properties = () => {
  return (
      <div className='section properties'>
        <div className='cards-wrapper'>
        {propertiesData.map(property => (
            <PropertyCard name={property.name} image={property.image} bedrooms={property.bedrooms} bathrooms={property.bathrooms} garage={property.garage} floors = {property.floors} surface = {property.surface} location = {property.location}/>
            )
            )}
            {/* <PropertyCard name={propertiesData.name} image={propertiesData.image} bedrooms={propertiesData.bedrooms} bathrooms={propertiesData.bathrooms} garage={propertiesData.garage} floors = {propertiesData.floors} surface = {propertiesData.surface} location = {propertiesData.location}/> */}

        </div>
      </div>
  )
}
