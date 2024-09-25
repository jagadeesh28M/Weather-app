import clear from "../assets/clear.png";

const Temp = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={clear} alt="" className="size-28 m-5" />
      <h1 className="text-white text-6xl font-poppins font-medium">16°C</h1>
      <p className="text-white text-3xl font-poppins font-semibold">London</p>
    </div>
  );
};

export default Temp;
