import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon for bundlers
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

interface IndiaMapProps {
  selectedPosition?: [number, number] | null;
  onPositionSelect?: (lat: number, lng: number) => void;
  height?: string;
}

function MapClickHandler({ onPositionSelect }: { onPositionSelect?: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onPositionSelect?.(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

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
