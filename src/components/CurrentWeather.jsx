const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="weather__top">
                <div>
                    <p className="weather__city">{data.city}</p>
                    <p className="weather__description">{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather__icon" />
            </div>
            <div className="weather__bottom">
                <p className="weather__bottom-temperature">{Math.round(data.main.temp)}°C</p>
                <div className="bottom__detail ">
            
                    <div className="parameter__row">
                        <span className="parameter_row--label">Sensacion Termica</span>
                        <span className="parameter_row--value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter_row--label">Minima</span>
                        <span className="parameter_row--value">{Math.round(data.main.temp_min)}°C</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter_row--label">Maxima</span>
                        <span className="parameter_row--value">{Math.round(data.main.temp_max)}°C</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter_row--label">Humedad</span>
                        <span className="parameter_row--value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter_row--label">Viento</span>
                        <span className="parameter_row--value">{data.wind.speed} m/s</span>
                    </div>
           
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
