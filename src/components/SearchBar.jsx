const SearchBar = () => {
  return (
    <>
      <div className="flex justify-evenly gap-3 items-center w-auto">
        <input
          type="text"
          placeholder="search"
          className="bg-white p-2 rounded-3xl pl-3 text-left text-gray-400 font-poppins"
        />
        <button>
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
      </div>
    </>
  );
};

export default SearchBar;
