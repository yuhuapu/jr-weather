import React from 'react';
import ForecastRow from './ForcastRow';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import { changeLimitAction } from '../redux/actions/weatherActions'; 

class Forecast extends React.Component {

    render(){
      const { limit, unit } = this.props;
      const forecasts = this.props.forecasts.slice(0, limit);

      return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            className={`forecast__switch_0 ${this.props.limit === 5 ?' switch-active' : ''}`}
            onClick={() => this.props.changeLimit(5)}
          >5 items</button>
          <button
            className={`forecast__switch_1 ${this.props.limit === 10 ?' switch-active' : ''}`}
            onClick={() => this.props.changeLimit(10)}
          >10 items</button>
        </div>

        {forecasts.map(forecast => {
					const date = new Date(forecast.time * 1000);
					const day = format(date, 'EEE');
					const time = format(date, 'HH:mm');

					return (
						<ForecastRow
							key={forecast.time}
							day={day}
							high={unit === 'c' ? forecast.maxCelsius : forecast.maxFahrenheit}
							low={unit === 'c' ? forecast.minCelsius : forecast.minFahrenheit}
							time={time}
							unit={unit}
						/>
					);
				})}

      </section>
    );
  }
}

const mapStateToProps = state => ({
  limit: state.weather.limit,
  forecasts: state.weather.forecasts
});

const mapDispatchToProps = dispatch => ({
  changeLimit: limit => dispatch(changeLimitAction(limit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forecast);