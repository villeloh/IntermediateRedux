import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/index';
import Chart from '../../components/chart';
import GoogleMap from '../../components/google_map';

class WeatherList extends Component {

  renderWeather = (cityData) => {

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color={"orange"} units={"K"}/></td>
        <td><Chart data={pressures} color={"blue"} units={"hPa"}/></td>
        <td><Chart data={humidities} color={"green"} units={"%"}/></td>
      </tr>
    );
  };

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
} // WeatherList


const mapStateToProps = (state) => {

  return { weather: state.weather };
};

/* OR: alternate ES-6 syntax:
const mapStateToProps = ({ weather }) => {

  return { weather }; // ==== return { weather: weather }
};
*/

export default connect(mapStateToProps)(WeatherList);