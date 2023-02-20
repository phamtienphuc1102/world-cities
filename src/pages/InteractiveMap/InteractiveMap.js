import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Footer from '../Container/Footer/Footer'
import GuidePanel from '../Container/GuidePanel/GuidePanel'
import './interactiveMap.css'
import { Button } from 'react-bootstrap'
const InteractiveMap = () => {
  const center = [0, 0]
  const [isHidden, setIsHidden] = useState(false)
  const [tabActive, setTabActive] = useState(0)

  return (

    <div style={{ height: '100vh', position: 'relative' }} className='map-container'>
      <MapContainer
        center={center}
        zoom={5}
        maxZoom={8}
        minZoom={1}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
      <div className='sub-content' style={{position: 'absolute', bottom: 0, zIndex: 1000, left: 50}}>
        {!isHidden ? <Footer setIsHidden={setIsHidden} tabActice={tabActive} setTabActive={setTabActive} /> : <GuidePanel isHidden={isHidden} tabActive={tabActive} />}
      </div>
      <Button onClick={() => setIsHidden(false)} className={isHidden ? 'btn-close btn-container' : 'hidden-btn'} style={{position: 'absolute',
        Zindex: 10000,
        bottom: 468,
        left: 500}}>
      </Button>
    </div>
  )
}

export default InteractiveMap
