import React, { Component } from 'react'
import GoogleMapComponent from './GoogleMapComponent'
import SearchBoxComponent from './SearchBoxComponent'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>React Google Map</h1>
                </header>
                
                <hr />
                <SearchBoxComponent 
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '400px' }} />}
                />
                <GoogleMapComponent 
                    isMarkerShown
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '450px' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        )
    }
}

export default App