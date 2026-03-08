import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface IndiaMapProps {
  selectedPosition?: [number, number] | null;
  onPositionSelect?: (lat: number, lng: number) => void;
  height?: string;
}

const MapClickHandler = ({ onPositionSelect }: { onPositionSelect?: (lat: number, lng: number) => void }) => {
  useMapEvents({
    click: (e) => {
      onPositionSelect?.(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

const IndiaMap = ({ selectedPosition, onPositionSelect, height = '300px' }: IndiaMapProps) => {
  const indiaCenter: [number, number] = [22.5, 82.0];

  return (
    <div style={{ height }} className="rounded-lg overflow-hidden border border-border shadow-card">
      <MapContainer
        center={indiaCenter}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onPositionSelect={onPositionSelect} />
        {selectedPosition && (
          <Marker position={selectedPosition}>
            <Popup>
              📍 Selected Location<br />
              Lat: {selectedPosition[0].toFixed(4)}<br />
              Lng: {selectedPosition[1].toFixed(4)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
