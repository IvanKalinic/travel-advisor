import React, { useState } from "react";
import "./index.scss";

const SelectDropdown = ({ data, setItem }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(data[0].name);

  const handleOnClick = (item) => {
    setSelected(item);
    setItem(item);
    setOpen(!open);
  };

  return (
    <div className="select-wrapper" onClick={() => setOpen(!open)}>
      <div className={!open ? "select" : "select open"}>
        <div className="select-trigger">
          <span>{selected}</span>
          <div className="arrow"></div>
        </div>
        <div className="options">
          {data.map((option, index) => {
            return (
              <span
                onClick={() => handleOnClick(option.name)}
                className={
                  selected === option.name
                    ? "custom-option selected"
                    : "custom-option "
                }
                value={option.value}
                key={index}
              >
                {option.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
