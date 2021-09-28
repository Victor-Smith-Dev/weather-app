![Header Tech](https://i.ibb.co/JH1Jdh4/image.png)

# Descripción
Este repositorio contiene una app que muestra el pronostico del tiempo para ciertas ciudades del mundo, la misma está construida con ReactJS y en términos de tecnologias se usó:

1. Redux.
2. Openweathermap.
3. Weather-icons.
4. Google Fonts.

Animate a descargarla y modificarla a tu antojo.

## Vista Previa

![Vista Previa](https://i.ibb.co/cLvcxtM/image.png)

## Scripts Disponibles

### `npm install | npm i | yarn install`

Ejecutar este script en la raiz del proyecto para instalar las dependencias neceasarias.

### `npm start | yarn start`

Ejecutar este script en la raiz del proyecto para desplegar la app y luego ir al navegador por defecto y ver la dirección `localhost:3000`

## Prácticas usadas

### `Validación de datos en componentes`

    WeatherData.propTypes = {
        data : PropTypes.shape({
            temperature : PropTypes.number.isRequired,
            weatherState : PropTypes.string.isRequired,
            humidity : PropTypes.number.isRequired,
            wind : PropTypes.string.isRequired
        })
    }
    
### `Doble destructuring`

    const WeatherData = ({ data : { temperature, weatherState, humidity, wind } }) => (
        <div className="weaterDataCont">
            <WeatherTemperature 
                temperature={temperature}
                weatherState={ weatherState }
                />
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    )
    
### `Functional Components`

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
    
    
### `Bindeo de global actions`
    import * as actions from '../actions';
    const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
    
    
## Estrucutura de carpetas

![Estructura de carpetas](https://i.ibb.co/SrNBjft/image.png)
