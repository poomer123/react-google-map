import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const GoogleMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=SOMEKEY&v=3.exp&libraries=geometry,drawing,places",
    }),
    withScriptjs,
    withGoogleMap
)(
    (props) => {
        return (
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: 13.7248936, lng: 100.4930261 }}
            >
                {props.isMarkerShown && <Marker position={{ lat: 13.7248936, lng: 100.4930261 }} onClick={props.onMarkerClick} />}
            </GoogleMap>
        )
    }
)

export default GoogleMapComponent