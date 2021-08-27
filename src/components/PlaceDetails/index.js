import React from "react";
import { Location, Phone } from "../../assets/icons";
import "./index.scss";

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <div className="place-media">
        <img
          style={{ height: 350 }}
          src={place.photo ? place.photo.images.large.url : ""}
          alt="restaurant"
        />
      </div>
      <div className="place-content">
        <h2>{place.name}</h2>
        <div className="box">
          <p>Price</p>
          <p>{place.price_level}</p>
        </div>
        <div className="box">
          <p>Ranking</p>
          <p>{place.ranking}</p>
        </div>
        {place?.awards?.map((award) => (
          <div className="box">
            <img src={award.images.small} alt={award.display_name} />
            <p>{award.display_name}</p>
          </div>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <div key={name} label={name}>
            {name}
          </div>
        ))}
        {place?.address && (
          <div className="box">
            <Location /> {place.address}{" "}
          </div>
        )}
        {place?.phone && (
          <div className="box">
            <Phone />
            {place.phone}
          </div>
        )}
        <div className="actions">
          <button onClick={() => window.open(place.web_url, "_blank")}>
            Trip Advisor
          </button>
          <button onClick={() => window.open(place.website, "_blank")}>
            Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
