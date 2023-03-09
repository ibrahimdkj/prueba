import ReactDOM from "react-dom/client";

import HeaderComponent from "./Header.component";
import { HeaderPropsInterface } from "./interfaces/HeaderProps.interface";

class HeaderWebComponent extends HTMLElement {
  props: HeaderPropsInterface;

  constructor() {
    super();
    this.props = {
      name: this.getAttribute("name") ?? "Nombre defecto",
      url: this.getAttribute("url") ?? "https://google.com.co",
    };
  }

  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(<HeaderComponent {...this.props} />);
  }
}

export default HeaderWebComponent;
