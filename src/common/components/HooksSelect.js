import React from "react";
import PropTypes from "prop-types";

const HooksSelect = ({optionsForSelect, onSelect}) => {
  return (
        <div className="field">
          <select id="select-product" onChange={onSelect}>
            <option value="">--</option>
            {optionsForSelect.map(option => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
            ))}
          </select>
          <div className="chevron-wrapper flex">
            <svg
                className="chevron"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
  );
};

HooksSelect.propTypes = {
    optionsForSelect: PropTypes.array.isRequired,
};

export default HooksSelect;
