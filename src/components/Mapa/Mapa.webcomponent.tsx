import ReactDOM from "react-dom/client";

import MapaComponent from "./Mapa.component";
import { MapaPropsInterface } from "./interfaces/MapaProps.interface";

class MapWebComponent extends HTMLElement {
  props: MapaPropsInterface;

  constructor() {
    super();
    this.props = {
      name: this.getAttribute("name") ?? "Nombre defecto",
      url: this.getAttribute("url") ?? "https://google.com.co",
    };
  }

  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(<MapaComponent {...this.props} />);
  }
}

export default MapWebComponent;
