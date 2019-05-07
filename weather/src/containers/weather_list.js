import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(item){
        console.log(item);
        return (
            <tr key={item.idx}>
              <td>{item.city.name}</td>
              <td>{item.iaqi.pm10.v}</td>
              <td>{item.iaqi.pm25.v}</td>
              <td>{item.time.s}</td>
            </tr>
        );
    }
    handleError() {
        if (this.props.error) {
            return (
                <div className="alert alert-danger" role="alert">
                  {this.props.error.message}
                </div>
            );
        }
    }
    render() {
        return (
        <div className='weather-list'>
        { this.handleError() }
            <table className='table table-hover'>
            <thead>
                <tr>
                    <th>City</th>
                    <th>pm10(미세먼지)</th>
                    <th>pm2.5(초미세먼지)</th>
                    <th>Time(관측시간)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { this.props.weather.map(this.renderWeather)}
            </tbody>
            </table>
        </div>
    );
  }
}

function mapStateToprops(state) {
    return {
        weather: state.weather.data,
        error: state.weather.error
    };
}

export default connect(mapStateToprops)(WeatherList);