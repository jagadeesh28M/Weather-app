/* eslint-disable react/prop-types */

import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import mist from "../assets/mist.png";

const Temp = ({ tempValue, cityName, iconId }) => {
  const iconMapping = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": rain,
    "11n": rain,
    "50d": mist,
    "50n": mist,
  };
  function icon() {
    return iconMapping[iconId] || snow;
  }
  return (
    <div className="flex flex-col items-center">
      <img src={icon()} alt="" className="size-28 m-5" />
      <h1 className="text-white text-6xl font-poppins font-medium">
        {tempValue}°C
      </h1>
      <p className="text-white text-3xl font-poppins font-semibold py-2">
        {cityName}
      </p>
    </div>
  );
};

export default Temp;
