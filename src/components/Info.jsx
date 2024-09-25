import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";

const Info = () => {
  return (
    <div className="flex justify-between items-center my-5 gap-5">
      <div className="flex justify-center gap-3">
        <img src={humidity} alt="" />
        <div className="text-white font-poppins">
          <p>91%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <img src={wind} alt="" />
        <div className="text-white font-poppins">
          <p>3.6 Km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
