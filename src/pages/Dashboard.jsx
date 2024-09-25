import SearchBar from "../components/SearchBar";
import Temperature from "../components/Temperature";
import Info from "../components/Info";
import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(false);
  const locationSearch = async () => {
    navigator.geolocation.getCurrentPosition(async (res) => {
      const lat = res.coords.latitude;
      const lon = res.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const locData = await axios.get(url);
      console.log(locData);
      setData({
        humidity: locData.data.main.humidity,
        windSpeed: locData.data.wind.speed,
        temp: Math.floor(locData.data.main.temp),
        cityName: locData.data.name,
        iconId: locData.data.weather[0].icon,
      });
    });
  };
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await axios.get(url);
      setData({
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        temp: Math.floor(response.data.main.temp),
        cityName: city,
        iconId: response.data.weather[0].icon,
      });
    } catch {
      alert("City not found");
      console.error("Error fetching weather data");
    }
  };
  return (
    <>
      <div className="h-auto w-auto p-6 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg">
        <SearchBar
          onSearch={search}
          locationSearch={locationSearch}
        ></SearchBar>
        {data ? (
          <>
            <Temperature
              tempValue={data.temp}
              cityName={data.cityName}
              iconId={data.iconId}
            ></Temperature>
            <Info hValue={data.humidity} windValue={data.windSpeed} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Dashboard;
