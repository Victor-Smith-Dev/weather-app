import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
/**
 * 
 * @param {*} forecastData 
 */
const renderForeacastItemDays = ( forecastData ) => {
    return forecastData.map ( forecastData => 
        (
            <ForecastItem 
                key={`${forecastData.weekDaya }${forecastData.hour}`}
                weekDay={ forecastData.weekDaya } 
                hour={forecastData.hour} 
                data={forecastData.data}
            />
        )
    );
}
/**
 * 
 */
const renderProgress = () => {
    return (<CircularProgress size={50}/>)
}
/**
 * 
 */
const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className="forecast-title"> Pronóstico extendido para {city} </h2>
        {
            forecastData ? 
                renderForeacastItemDays(forecastData) : 
                renderProgress()
        }
    </div>
);

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
    forecastData : PropTypes.array,
}

export default ForecastExtended