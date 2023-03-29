import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map/Map';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './api/QueryClient';
import Search from './search/Search';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="App">
    <h1>GEO-FINDER</h1>
    <Search/>
    <Map location={location} zoomLevel={17}></Map>
  </div>
  </QueryClientProvider>
)

export default App;
