import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import axios from 'axios';
import { format } from 'date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      current: {},
      limit: 5,
    };
  }

  componentDidMount() {
    //fetch data
    axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
      .then(response => {
        console.log(response)
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

        this.setState({ forecasts, current })
      });

    // axios().then();

  }

  changeLimit = limit => {
    this.setState({ limit });
  };

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navigation />
        <Main
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          current={this.state.current}
          changeLimit={this.changeLimit}
          limit={this.state.limit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
