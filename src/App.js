import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { getWeatherFor } from './utils/axios';
import { format } from 'date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      cityName: '',
      unit: 'C',
      forecasts: [],
      current: {},
    };
  }

  componentDidMount() {
    //fetch data
    getWeatherFor('brisbane')
      .then(this.updateWeather);

    // axios().then();

  }

  changeInput = event => {
    this.setState({ input: event.target.value });
  };

  toggleUnit = () => {
    const unit = this.state.unit === 'C' ? 'F' : 'C';
    this.setState({ unit });
  }

  handleSearch = () => {
    getWeatherFor(this.state.input).then(this.updateWeather)
  };

  updateWeather = (response) => {
    // console.log(response)
    const forecasts = response.data.data.forecast.slice(0, 10)
      .map(forecast => {
        //formating time from api using date-fns
        const date = new Date(forecast.time * 1000);
        const day = format(date, 'EEE');
        const time = format(date, 'HH:mm');

        return {
          day,
          time,
          celsiusHigh: forecast.maxCelsius, 
          fahrenheitHigh: forecast.maxFahrenheit,
          celsiusLow: forecast.minCelsius, 
          fahrenheitLow: forecast.minFahrenheit,
        };
      });
      
    const current = response.data.data.current
    const cityName = response.data.data.city.name

    this.setState({ forecasts, current, cityName })
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation
          inputValue={this.state.input}
          changeInput={this.changeInput}
          handleSearch={this.handleSearch}
          toggleUnit={this.toggleUnit}
          unit={this.state.unit}
        />
        <Main
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          current={this.state.current}
          changeLimit={this.changeLimit}
          limit={this.state.limit}
          cityName={this.state.cityName}
          unit={this.state.unit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
