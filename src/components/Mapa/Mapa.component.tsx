import { MapaPropsInterface } from "./interfaces/MapaProps.interface";
import "./Mapa.style.scss";


import { MapContainer, TileLayer,  Marker, Popup } from "react-leaflet";

function MapaComponent(props: MapaPropsInterface) {
  const { name, url } = props;
  const position: any = [51.505, -0.09];

  return (
    <div className="wc-minambiente-map">
      <MapContainer center={position} zoom={11} scrollWheelZoom={false} className="map_container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      
    </div>
  );
}

export default MapaComponent;
