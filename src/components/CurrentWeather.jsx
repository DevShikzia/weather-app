const CurrentWeather = ({ data }) => {
  return (
    <>
      <div className="location-and-date">
        <h1 className="location-and-date__location">{data.city}</h1>
      </div>

      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img
            src={`icons/${data.weather[0].icon}.png`}
            className="current-temperature__icon"
            alt=""
          />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">
            {Math.round(data.main.temp)}°
          </div>
          <div className="current-temperature__summary">
            {data.weather[0].description}
          </div>
        </div>
      </div>

      <div className="current-stats">
        <div>
          <div className="current-stats__value">
            {Math.round(data.main.temp_max)}&deg;
          </div>
          <div className="current-stats__label">Maxima</div>
          <div className="current-stats__value">
            {Math.round(data.main.temp_min)}&deg;
          </div>
          <div className="current-stats__label">Minima</div>
        </div>
        <div>
          <div className="current-stats__value">
            {Math.round(data.main.feels_like)}&deg;
          </div>
          <div className="current-stats__label">Termica</div>
          <div className="current-stats__value">{data.main.humidity}%</div>
          <div className="current-stats__label">Humedad</div>
        </div>
        <div>
          <div className="current-stats__value">{data.main.pressure}</div>
          <div className="current-stats__label">Presion</div>
          <div className="current-stats__value">{data.wind.speed}mph</div>
          <div className="current-stats__label">Viento</div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
