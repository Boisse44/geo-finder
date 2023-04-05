import React, { FC } from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

type LocationPinProps = {
  lat: string;
  lng: string;
  text: string;
}
type Location = {
  latitude: string;
  longitude: string;
  name: string;
}
type MapProps = {
  locations: Location[],
  zoomLevel: number
}

  const LocationPin: FC<LocationPinProps> = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

const Map: FC<MapProps> = ({ locations, zoomLevel }) => (
    <div className="map">
      <div className="google-map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY || ''}}
          defaultZoom={zoomLevel}
          defaultCenter={{lat: 40.73, lng: -73.93}}>

            {locations && locations.map(location => (
              <LocationPin
                lat={location.latitude}
                lng={location.longitude}
                text={location.name}
          />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  )
  export default Map