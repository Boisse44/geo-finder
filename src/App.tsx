import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map/Map';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './api/QueryClient';
import Search from './search/Search';
import GeoFinder from './geo-finder/GeoFinder';


const App = () => (

  <QueryClientProvider client={queryClient}>
    <GeoFinder/>
  </QueryClientProvider>
)

export default App;
