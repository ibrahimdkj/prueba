
import HeaderWebComponent from "./components/Header/Header.webcomponent";
import MapWebComponent from "./components/Mapa/Mapa.webcomponent";

if (!customElements.get("wc-minambiente-header")) {
  customElements.define("wc-minambiente-header", HeaderWebComponent);
}
if (!customElements.get("wc-minambiente-map")) {
  customElements.define("wc-minambiente-map", MapWebComponent);
}
