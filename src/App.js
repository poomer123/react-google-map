import React, { Component } from 'react'
import MapContainer from './MapContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>React Google Map</h1>
                </header>
                <MapContainer />
            </div>
        )
    }
}

export default App