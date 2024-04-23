import React, { useState } from "react";
import "./css/DriverLocation/DriverLocation.css";
import NavbarComponent from "../components/NavbarComponent";
import driverImageInfowindow from "./css/DriverLocation/student.jpg";
import iconSelect from "./css/DriverLocation/iconSelect.png";
import iconNotSelect from "./css/DriverLocation/iconNotSelect.png"; 

import {
  GoogleMap,
  InfoWindow,
  Marker,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";


let driversNearMe = [
  {
    name: "John Doe",
    id: "nearme110",
    loc: {
      lat: 28.6304,
      lng: 77.2177,
    },
    ind: 0,
    no: "DL01AB2903",
    Distance: 1,
  },
  {
    name: "steve",
    id: "nearme111",
    loc: {
      lat: 28.5355,
      lng: 77.3910,
    },
    ind: 1,
    no: "HR03BT3967",
    Distance: 2,
  },
  {
    name: "josh",
    id: "nearme112",
    loc: {
      lat: 26.893599,
      lng: 80.942516,
    },
    ind: 2,
    no: "WB32AP1234",
    Distance: 4,
  },
  {
    name: "John Doe",
    id: "nearme113",
    loc: {
      lat: 25.4182,
      lng: 86.1272,
    },
    ind: 3,
    no: "BR22TP5434",
    Distance: 2,
  },
  {
    name: "John Doe",
    id: "nearme114",
    loc: {
      lat: 26.8467,
      lng: 80.9462,
    },
    ind: 4,
    no: "UP13AD1784",
    Distance: 10,
  },
  {
    name: "John Doe",
    id: "nearme115",
    loc: {
      lat: 22.5726,
      lng: 88.3639,
    },
    ind: 5,
    no: "WB05YL6234",
    Distance: 3,
  },
  {
    name: "John Doe",
    id: "nearme116",
    loc: {
      lat: 28.6809,
      lng: 77.2046,
    },
    ind: 6,
    no: "DL1QC2801",
    Distance: 5,
  },
  {
    name: "John Doe",
    id: "nearme117",
    loc: {
      lat: 28.6910,
      lng: 77.1765,
    },
    ind: 7,
    no: "DL8CQ0411",
    Distance: 6,
  },
  {
    name: "John Doe",
    id: "nearme118",
    loc: {
      lat: 23.0519,
      lng: 76.5512,
    },
    ind: 8,
    no: "MP01NK1509",
    Distance: 8,
  }
];

const DriversLocation = () => {
  const [currentSelected, setcurrentSelected] = useState();
  const [driverdata, setdriverData] = useState(driversNearMe);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapCenter, setmapCenter] = useState(driverdata[0].loc);

  //**** google map api changes starts here ....****

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAVJiAbZv0X4UEFg7LswS7i7xATGKf53mc",
  });

  if (!isLoaded) {
    return "Map is Loading";
  }

  return (
    <div>
      <NavbarComponent />
      <GoogleMap
        center={mapCenter}
        zoom={15}
        mapContainerStyle={{ width: "100vw", height: "90vh" }}
        onLoad={(map) => setMap(map)}
      >
        {driverdata &&
          driverdata.map((mark, index) => {
            return (
              <div key={mark.id}>
                <MarkerF
                  position={driverdata[index].loc}
                  onClick={() => {
                    setSelectedMarker(mark);
                    setcurrentSelected(mark.id);
                  }}
                  options={{
                    icon:
                      mark.id == currentSelected ? iconSelect : iconNotSelect,
                  }}
                />
                ;
              </div>
            );
          })}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.loc}
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
          >
            <>
              <div className="InfoWindowContainer">
                <img src={driverImageInfowindow} alt="driver image" />
                <div className="infowindowTextContainer">
                  <div className="infowindowName">{selectedMarker.name}</div>
                  <div className="infowindowDistance">
                    {selectedMarker.Distance} KM Away
                  </div>
                </div>
              </div>
            </>
          </InfoWindow>
        )}
      </GoogleMap>

      <div className="button-container">
        {driversNearMe.map((button, index) => (
          <button
            key={button.id}
            className={
              button.id == currentSelected
                ? "button-selected"
                : "button-unselected"
            }
            onClick={() => {
              setcurrentSelected(button.id);
              map.panTo(button.loc);
              // map.setZoom();
            }}
          >
            {button.no}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DriversLocation;
