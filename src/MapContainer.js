import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
    state = {
        selectedPlace: {},
        showingInfoWindow: false,
        activeMarker: {}
    }
    render(){
        const style = {
            width: '100%',
            height: '450px'
        }
        return (
            <Map 
                zoom={15}
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 13.7248936, 
                    lng: 100.4930261
                }}
                center={{
                    lat: 13.7248936, 
                    lng: 100.4930261
                }}
                onClick={this.onMapClicked}
                onDragend={this.centerMoved}
                mapTypeControl={false}
            >
                <Marker 
                    onClick={this.onMarkerClick}
                    name={'This location name'}
                />
                <InfoWindow
                    visible={this.state.showingInfoWindow}
                    marker={this.state.activeMarker}
                    onClose={this.onInfoWindowClose}
                    test={'555'}
                >
                    <div>
                        <h3>{this.state.selectedPlace.name}</h3>
                        <p>The Detail</p>
                    </div>
                </InfoWindow>
            </Map>
        )
    }

    onMapClicked = (mapProps, map, clickEvent) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
        console.log(mapProps, map, clickEvent)
        const lat = clickEvent.latLng.lat()
        const lng = clickEvent.latLng.lng()
        console.log(lat, lng)
    }

    onMarkerClick = (mapProps, marker, e) => {
        console.log('onMarkerClick', mapProps, marker)
        this.setState({
            selectedPlace: mapProps,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onInfoWindowClose = (mapProps) => {
        console.log('onInfoWindowClose', mapProps)
        this.setState({
            showingInfoWindow: false
        })
    }

    centerMoved = (mapProps) => {
        console.log('onDragend', mapProps)
    }

}

export default GoogleApiWrapper({
    apiKey: ('somekey')
})(MapContainer)