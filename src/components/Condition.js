import React from 'react';
import umberella from '../assets/icon/icon-umberella.png';
import wind from '../assets/icon/icon-wind.png';
import compass from '../assets/icon/icon-compass.png';

function Condition() {
    return(
        <section className="weather-condition">
          <div className="weather-condition__location">Brisbane</div>
          <div className="weather-condition__overview">Clear</div>
          <div className="weather-condition__temp">19 c</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umberella} alt="umberella" />
              <span className="citem">20%</span>
            </div>
            <div>
              <img src={wind} alt="umberella" /> <span className="citem">3 km/h</span>
            </div>
            <div>
              <img src={compass} alt="umberella" /> <span className="citem">NE</span>
            </div>
          </div>
        </section>
    );
}

export default Condition;