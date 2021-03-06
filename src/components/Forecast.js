import React from 'react';
import ForecastRow from './ForcastRow';
import { connect } from 'react-redux';
import { changeLimit as changeLimitAction } from '../redux/actions/forecastActions'; 

function Forecast(props) {
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            className={`forecast__switch_0 ${props.limit === 5 ?' switch-active' : ''}`}
            onClick={() => props.changeLimit(5)}
          >5 items</button>
          <button
            className={`forecast__switch_1 ${props.limit === 10 ?' switch-active' : ''}`}
            onClick={() => props.changeLimit(10)}
          >10 items</button>
        </div>

        {props.forecasts.slice(0, props.limit).map(forecast => (

          <ForecastRow
            key={forecast.day + forecast.time}
            day={forecast.day}
            time={forecast.time}
            high={props.unit === 'C' ? forecast.celsiusHigh : forecast.fahrenheitHigh}
            low={props.unit === 'C' ? forecast.celsiusLow : forecast.fahrenheitLow}
          />
        ))}

      </section>
    );
}

const mapStateToProps = state => ({
  limit: state.changeLimit.limit,
});

const mapDispatchToProps = dispatch => ({
  changeLimit: limit => dispatch(changeLimitAction(limit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forecast);