
const WEEK_DAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <div className="next-5-days">
        <h2 className="next-5-days__heading">Proximos 7 dias</h2>
        <div className="next-5-days__container">
          {data.list.slice(0, 7).map((item, idx) => (
            <div className="next-5-days__row" key={idx}>
              <div className="next-5-days__date">{forecastDays[idx]}</div>

              <div className="next-5-days__low">
                10&deg;
                <div className="next-5-days__label">Minima</div>
              </div>

              <div className="next-5-days__high">
                21&deg;
                <div className="next-5-days__label">Maxima</div>
              </div>
              <div className="next-5-days__high">
                {item.main.humidity}%
                <div className="next-5-days__label">Humedad</div>
              </div>
              <div className="next-5-days__low capitalize">
                <div className="next-5-days__label">
                  {item.weather[0].description}
                </div>
              </div>
              <div className="next-5-days__icon">
                <img
                  src={`icons/${item.weather[0].icon}.png`}
                  alt="Sunny"
                  width={"50px"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
