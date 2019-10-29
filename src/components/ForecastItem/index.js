import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData'
/**
 * 
 */
const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <h2>{weekDay} - {hour}</h2>
        <WeatherData data={data}/>
    </div>
)
/**
 * 
 */
ForecastItem.propTypes = {
    weekDay : PropTypes.string.isRequired,
    hour : PropTypes.number.isRequired,
    data : {
        temperature : 10,
        humidity : 10,
        weatherState : 'normal',
        wind : 'normal'
    }
}

export default ForecastItem