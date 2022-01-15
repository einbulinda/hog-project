import React from "react";
import NumberFormat from "react-number-format";

const PriceTag = ({ price, offer }) => {
  return (
    <React.Fragment>
      <NumberFormat
        value={price - (price * offer) / 100}
        displayType="text"
        thousandSeparator={true}
        prefix={"Ksh. "}
      />
    </React.Fragment>
  );
};

export default PriceTag;
