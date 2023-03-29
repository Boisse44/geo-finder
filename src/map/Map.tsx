import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
type LocationPinProps = {
  lat: string;
  lng: string;
  text: string;
}
type MapProps = {
  location: any,
  zoomLevel: number
}

  const LocationPin: React.FunctionComponent<LocationPinProps> = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

const Map: React.FunctionComponent<MapProps> = ({ location, zoomLevel }) => (
    <div className="map">
      <div className="google-map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY || ''}}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
  export default Map