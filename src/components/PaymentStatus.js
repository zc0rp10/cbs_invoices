import React from "react";

const PaymentStatus = ({ invoice, handlePaymentStatus }) => {
  let classes = "material-icons-outlined cursor-pointer";
  invoice.status
    ? (classes += " text-green-600")
    : (classes += " text-red-600");

  let icon = invoice.status ? "sentiment_satisfied" : "sentiment_dissatisfied";

  return (
    <>
      <span
        className={classes}
        onClick={() => handlePaymentStatus(invoice._id)}
      >
        {icon}
      </span>
    </>
  );
};

export default PaymentStatus;