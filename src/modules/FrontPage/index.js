import React from "react";
import List from "../../components/List";
import Map from "../../components/Map";
import "./index.scss";

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      <div className="list">
        <List />
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default FrontPage;
