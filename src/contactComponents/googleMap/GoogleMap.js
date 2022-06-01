import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  icon: {
    color: "red",
    fontSize: 40,
  },
}));

const GoogleMap = () => {
  // eslint-disable-next-line
  const [center, setCenter] = useState({ lat: -37.840935, lng: 144.946457 });
  const zoom = 12;
  const classes = useStyles();
  const AnyReactComponent = () => (
    <div style={{ width: 10, height: 10 }}>
      <RoomIcon className={classes.icon} />
    </div>
  );
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={-37.840935} lng={144.946457} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
