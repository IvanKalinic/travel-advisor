import React, { useState, useEffect } from "react";
import List from "../../components/List";
import Map from "../../components/Map";
import "./index.scss";
import { getPlacesData } from "../../api";

const FrontPage = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [bounds, coordinates]);

  return (
    <div className="frontpage-container">
      <div className="list">
        <List places={places} />
      </div>
      <div className="map">
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </div>
    </div>
  );
};

export default FrontPage;
