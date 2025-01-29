import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const VillageMap = () => {
  // Koordinat desa Tanjung Jaya
  const VILLAGE_POSITION = [-5.626434, 104.835508];
  
  // Custom icon untuk marker dengan SVG location icon
  const customIcon = new Icon({
    iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232563eb' width='24' height='24'%3E%3Cpath d='M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z'/%3E%3C/svg%3E",
    iconSize: [32, 32], // Ukuran icon
    iconAnchor: [16, 32], // Titik anchor icon (bagian bawah tengah)
    popupAnchor: [0, -32], // Posisi popup relatif terhadap icon
  });

  return (
    <div className="h-full w-full rounded-lg overflow-hidden relative" style={{ zIndex: 0 }}>
      <MapContainer 
        center={VILLAGE_POSITION} 
        zoom={14} 
        className="h-[400px] w-full"
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={VILLAGE_POSITION} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Desa Tanjung Jaya</h3>
              <p className="text-sm">Kec. Limau, Kab. Tanggamus</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default VillageMap;