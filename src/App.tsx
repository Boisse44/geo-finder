import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map/Map';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier

const App = () => (
  <div className="App">
    <h1>GEO-FINDER</h1>
    <Map location={location} zoomLevel={17}></Map>
  </div>
)

export default App;
