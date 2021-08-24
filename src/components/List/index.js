import React, { useState } from "react";
import SelectDropdown from "../SelectDropdown";
import "./index.scss";
import { options, ratings } from "../../const";

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
    </div>
  );
};

export default List;
