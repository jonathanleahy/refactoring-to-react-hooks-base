import React from "react";
import PropTypes from "prop-types";

const HooksDisplay = ({data}) => {

    return (
        <ul>
            {data.map((item, key) => (
                <li key={key}>
                    <nobr>{item.timestamp} - {item.amount}</nobr>
                </li>
            ))}
        </ul>);
};

HooksDisplay.propTypes = {
    data: PropTypes.array.isRequired,
};

export default HooksDisplay;
