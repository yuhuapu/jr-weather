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
      forecasts: [],
      current: {},
      limit: 5,
    };
  }

  componentDidMount() {
    //fetch data
    getWeatherFor('brisbane')
      .then(this.updateWeather);

    // axios().then();

  }

  changeLimit = limit => {
    this.setState({ limit });
  };

  changeInput = event => {
    this.setState({ input: event.target.value });
  };

  handleSearch = () => {
    getWeatherFor(this.state.input).then(this.updateWeather)
  };

  updateWeather = (response) => {
    const forecasts = response.data.data.forecast.slice(0, 10)
      .map(forecast => {
        //formating time from api using date-fns
        const date = new Date(forecast.time * 1000);
        const day = format(date, 'EEE');
        const time = format(date, 'HH:mm');

        return {
          day,
          time,
          high: forecast.maxCelsius,
          low: forecast.minCelsius,

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
        />
        <Main
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          current={this.state.current}
          changeLimit={this.changeLimit}
          limit={this.state.limit}
          cityName={this.state.cityName}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
