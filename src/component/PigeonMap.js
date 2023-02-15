import React from "react";
import { Map, Marker } from "pigeon-maps";

export default function MyMap({ user }) {
  const add = [Math.abs(user.address.geo.lat), Math.abs(user.address.geo.lng)];
  console.log(add);
  return (
    <Map height={350} defaultCenter={add} defaultZoom={5}>
      <Marker width={50} anchor={add} />
    </Map>
  );
}
