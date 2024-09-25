import SearchBar from "../components/SearchBar";
import Temperature from "../components/Temperature";
import Info from "../components/Info";

const Dashboard = () => {
  return (
    <>
      <div className="h-auto w-auto p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
        <SearchBar></SearchBar>
        <Temperature></Temperature>
        <div>
          <Info />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
