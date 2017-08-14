import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(d => d.main.temp);
    const humidity = cityData.list.map(d => d.main.humidity);
    const pressure = cityData.list.map(d => d.main.pressure);

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          <Chart data={temp} color="blue" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="purple" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
