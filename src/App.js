import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import CustomWMSLayer from './CustomWMSLayer'
import './App.css';
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";

function App() {
  return (
    <Map center={[-10.70124, 35.26259]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* https://stackoverflow.com/questions/61123565/how-to-call-getfeatureinfo-from-react-leaflet */}
      <CustomWMSLayer
        url={"http://geogecko.gis-cdn.net/geoserver/fieldy_data/wms"}
        layers={["fieldy_data:kenya_HT_grid"]}
        options={{
          "transparent" : "true",
          "format": "image/png",
          "attribution": "GeoGecko",
          "info_format": "text/html"
        }}

      />
    </Map>
  );
}

export default App;