import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
    state = {
        selectedPlace: {
            name: 'The Google Map Info'
        }
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
                onClick={() => this.onMapClicked()}
            >
                <Marker 
                    onClick={() => this.onMarkerClick()}
                    name={'Current location'} 
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }

    onMapClicked() {
        console.log('onMapClicked')
    }

    onMarkerClick() {
        console.log('onMarkerClick')
    }
}

export default GoogleApiWrapper({
    apiKey: ('somekey')
})(MapContainer)