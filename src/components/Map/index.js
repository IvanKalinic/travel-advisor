import React from "react";
import "./index.scss";
import GoogleMapReact from "google-map-react";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD-b7A8NMbKNkJH8NFm8S3zEnFH2mtjTZI" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
