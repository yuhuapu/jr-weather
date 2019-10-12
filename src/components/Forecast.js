import React from 'react';
import ForecastRow from './ForcastRow';

function Forecast() {
    return(
        <section className="weather-forecast">
          <div className="forecast__switch">
            <button className="forecast__switch_0 switch-active">5 items</button>
            <button className="forecast__switch_1">10 items</button>
          </div>

          <ForecastRow 
          day="FRI"
          time="10:00"
          high="19c"
          low="8c"
          />

        <ForecastRow 
          day="FRI"
          time="10:00"
          high="19c"
          low="8c"
          />

        <ForecastRow 
          day="FRI"
          time="10:00"
          high="19c"
          low="8c"
          />

        </section>
    );
}

export default Forecast;