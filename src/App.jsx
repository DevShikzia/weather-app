import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, SetForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${process.env.REACT_APP_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=sp&units=metric`
    );
    const forecastFetch = fetch(
      `${process.env.REACT_APP_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=sp&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        SetForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div className="main-container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast  data={forecast}/>}
    </div>
      <Footer/>
      </>
  );
}

export default App;
