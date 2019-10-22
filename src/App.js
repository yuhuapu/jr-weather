import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { getWeatherFor } from './utils/axios';

import { loadWeather } from './redux/actions/weatherActions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      unit: 'C',
    };
  }

  componentDidMount() {
    
    this.props.fetchWeatherData('Brisbane');

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
          // forecasts={this.state.forecasts}
          unit={this.state.unit}
        />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: city => dispatch(loadWeather(city))
});

export default connect(null, mapDispatchToProps)(App);
