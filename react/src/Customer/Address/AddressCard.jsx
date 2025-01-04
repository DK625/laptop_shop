import React from "react";

const AddressCard = ({address}) => {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">{`${address?.name}`}</p>
        <p>
          {`${address?.streetAddress}, ${address?.city}`}
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
