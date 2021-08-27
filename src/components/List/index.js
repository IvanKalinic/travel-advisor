import React, { useState } from "react";
import SelectDropdown from "../SelectDropdown";
import PlaceDetails from "../PlaceDetails";
import "./index.scss";
import { options, ratings, places } from "../../const";

const List = () => {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div className="list-container">
      <p className="heading">Restaurants, hotels and attractions </p>
      <div className="form-container">
        <div className="form">
          <SelectDropdown data={options} setItem={setType} />
        </div>
        <div className="form">
          <SelectDropdown data={ratings} setItem={setRating} />
        </div>
      </div>
      <div className="places-container">
        {places?.map((place, index) => (
          <div className="item-container" key={index}>
            <PlaceDetails place={place} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
