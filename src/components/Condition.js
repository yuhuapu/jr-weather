import React from 'react';
import { connect } from 'react-redux';
import umberella from '../assets/icon/icon-umberella.png';
import wind from '../assets/icon/icon-wind.png';
import compass from '../assets/icon/icon-compass.png';

function Condition(props) {
    return(
        <section className="weather-condition">
          <div className="weather-condition__location">
            {props.cityName}
          </div>
          <div className="weather-condition__temp">
            {props.unit === 'C' ? props.current.maxCelsius : props.current.maxFahrenheit} {props.unit}
          </div>
          <div className="weather-condition__desc">
            <div>
              <img src={umberella} alt="umberella" />
              <span className="citem">{props.current.humidity} %</span>
            </div>
            <div>
              <img src={wind} alt="wind" /> <span className="citem">{props.current.windSpeed} km/h</span>
            </div>
            <div>
              <img src={compass} alt="compass" /> <span className="citem">{props.current.windDirection}</span>
            </div>
          </div>
        </section>
    );
}

const mapStateToProps= state => ({
  cityName: state.weather.cityName,
  current: state.weather.current,
});

export default connect(mapStateToProps)(Condition);