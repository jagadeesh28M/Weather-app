/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({ onSearch, locationSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city) {
      setCity("");
      onSearch(city);
    } else {
      alert("Please enter a city name");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      <div className="flex justify-evenly gap-3 items-center w-auto">
        <input
          type="text"
          placeholder="search"
          className="bg-white p-2 rounded-3xl pl-3 text-left text-gray-400 font-poppins"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={city}
        />
        <button onClick={handleSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="grey"
            className="size-10 bg-white rounded-3xl p-3 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button onClick={locationSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="darkblue"
            className="size-10 bg-white rounded-3xl p-3 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
