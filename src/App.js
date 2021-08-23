import "./App.scss";

import Navbar from "./components/Navbar";
import List from "./components/List";
import Map from "./components/Map";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex-container">
        <div>
          <List />
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </>
  );
};

export default App;
