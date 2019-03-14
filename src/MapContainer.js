import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
    state = {
        selectedPlace: {},
        showingInfoWindow: false,
        activeMarker: {},
        address: ''
    }
    render(){
        const style = {
            width: '100%',
            height: '450px'
        }
        return (
            <div>
                <input type="text" onChange={(e) => this.inputChange(e)} value={this.state.address} ref="search" />
                <button type="submit" onClick={this.onSearch}>Search</button>
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
                        id={1}
                        onClick={this.onMarkerClick}
                        draggable={true}
                        onDragend={this.moveMarker}
                        name={'This location name'}
                    />
                        <InfoWindow
                            visible={this.state.showingInfoWindow}
                            marker={this.state.activeMarker}
                            onClose={this.onInfoWindowClose}
                        >
                        <div>
                            <h3>{this.state.selectedPlace.name}</h3>
                            <p>The Detail</p>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
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

    onInfoWindowClose = () => {
        console.log('onInfoWindowClose')
        this.setState({
            showingInfoWindow: false
        })
    }

    centerMoved = (mapProps) => {
        console.log('onDragend', mapProps)
    }

    moveMarker = (mapProps, marker, event) => {
        const { latLng } = event
        const lat = latLng.lat()
        const lng = latLng.lng()
        console.log('moveMarker', mapProps, marker, event)
        console.log(lat, lng)
    }

    inputChange(e) {
        this.setState({
            address: e.target.value
        })
    }

    onSearch = () => {
        var searchBox = new this.props.google.maps.places.SearchBox(this.refs.search)

        searchBox.addListener('places_changed', function() {
            console.log('places changed')
            var places = searchBox.getPlaces()
            console.log('lat', places[0].geometry.location.lat())
            console.log('lng', places[0].geometry.location.lng())
        })
    }

    onPlacesChanged = () => {
        console.log('onPlacesChanged')
    }

}

export default GoogleApiWrapper({
    apiKey: ('SOMEKEY')
})(MapContainer)