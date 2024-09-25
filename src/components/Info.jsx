import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";

const Info = () => {
  return (
    <div className="flex justify-between items-center my-5 gap-5">
      <div className="flex justify-center items-center gap-3">
        <img src={humidity} alt="humidity img" className="size-8" />
        <div className="text-white font-poppins">
          <p>91%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <img src={wind} alt="wind speed img" className="size-8" />
        <div className="text-white font-poppins">
          <p>3.6 Km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
