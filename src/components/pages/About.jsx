import React from "react";
import '../../stylesheets/pages/About.css';
// import ilustration from '../../images/properties/Apartment.svg';
import ilustration from '../../images/properties/Casa3D.png';

export const About = () => {
  return (
    <>
    <div className='section alt eslogan'>
        <div className='columns'>
          <div className='info'>
                <h2><span>Lifetime Opportunities</span></h2>
                <h3>Brought to you</h3>
                <h4>- Kairos</h4>
            </div>
            <div className='image'>
                <img src={ilustration} className='graphic'/>
            </div>
        </div>
      </div>

    <div className="section about">
        <div className="column">
            <div className="block">
                <h2 className="h2-about">About Kairos</h2>
            </div>
            <div className="block-info">
                <h3 className="h3-about">Who we are</h3>
                <h4 className="h4-about">Kairos Is Born From A Greek Philosophy Concept That Means "Opportune Moment". As A Real Estate Agency We Use That Philosophy To Bring To You These Opportunities.</h4>
            </div>
            <div className="block-info"> 
                <h3 className="h3-about">What we do</h3>
                <h4 className="h4-about">We Want To Reach Customers Who Value Safety And Financial Stability, As Well As Those Looking For A Long-Term Investment Or A Brand New House For Their Family In The Real Estate Market.</h4>
            </div>
        </div>
    </div>


    <div className="section alt sqrs">
    <div className="column squares">
        <div className="square">
            <span class="material-symbols-rounded icon dark">
            real_estate_agent
            </span>
            <h3 className="dark h3-about">We Are The #1 Solution On Clients Experience</h3>
        </div>

        <div className="square dark">
            <span class="material-symbols-rounded material-opposite icon">
            location_away
            </span>
            <h3 className="h3-about">
            Over 200 Properties To Choose From In 12 Different Countries
            </h3>
        </div>

        <div className="square dark">
            <span class="material-symbols-rounded material-opposite icon">
                monitoring
            </span>
            <h3 className="h3-about">Ensure A Safe Investment With Us</h3>
        </div>

        <div className="square">
            <span class="material-symbols-rounded icon dark">
                savings
            </span>
            <h3 className="h3-about dark">Save Up To 9% With Our Prices</h3>
        </div>

    </div>
    </div>
    </>
  )
}
