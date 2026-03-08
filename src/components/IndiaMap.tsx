import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface IndiaMapProps {
  selectedPosition?: [number, number] | null;
  onPositionSelect?: (lat: number, lng: number) => void;
  height?: string;
}

const IndiaMap = ({ selectedPosition, onPositionSelect, height = '300px' }: IndiaMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    const map = L.map(mapRef.current).setView([22.5, 82.0], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    map.on('click', (e: L.LeafletMouseEvent) => {
      onPositionSelect?.(e.latlng.lat, e.latlng.lng);
    });

    leafletMap.current = map;

    return () => {
      map.remove();
      leafletMap.current = null;
    };
  }, []);

  // Update click handler when callback changes
  useEffect(() => {
    const map = leafletMap.current;
    if (!map) return;
    const handler = (e: L.LeafletMouseEvent) => {
      onPositionSelect?.(e.latlng.lat, e.latlng.lng);
    };
    map.off('click');
    map.on('click', handler);
  }, [onPositionSelect]);

  // Update marker when position changes
  useEffect(() => {
    const map = leafletMap.current;
    if (!map) return;

    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }

    if (selectedPosition) {
      const marker = L.marker(selectedPosition, { icon: defaultIcon }).addTo(map);
      marker.bindPopup(
        `📍 Selected Location<br/>Lat: ${selectedPosition[0].toFixed(4)}<br/>Lng: ${selectedPosition[1].toFixed(4)}`
      ).openPopup();
      markerRef.current = marker;
    }
  }, [selectedPosition]);

  return (
    <div
      ref={mapRef}
      style={{ height }}
      className="rounded-lg overflow-hidden border border-border shadow-card"
    />
  );
};

export default IndiaMap;
