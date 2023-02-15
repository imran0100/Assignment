import React from "react";
import PigeonMap from "./PigeonMap";
export default function Section2({ user }) {
  return (
    <div className="section2">
      <p>Address :</p>
      <p>Street : {user.address.street}</p>
      <p>Suite : {user.address.suite}</p>
      <p>City : {user.address.city}</p>
      <p className="m2">Zipcode :{user.address.zipcode}</p>
      <div className="radius">
        <PigeonMap user={user} />
      </div>
      <div
        style={{
          display: " flex",
          gap: "10px",
          flexDirection: "row-reverse",
          paddingBottom: "10px",
        }}
      >
        {" "}
        <span>lng : {user.address.geo.lng}</span>
        <span>lat : {user.address.geo.lat} </span>
      </div>
    </div>
  );
}
