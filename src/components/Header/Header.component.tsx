import { HeaderPropsInterface } from "./interfaces/HeaderProps.interface";
import "./Header.style.scss";

function HeaderComponent(props: HeaderPropsInterface) {
  const { name, url } = props;

  return (
    <div className="wc-minambiente-header">
      <div className="logo">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="logo__enlace"
        >
          <button
            type="button"
            className="btn-govco  outline-secundary-btn-govco"
          >
            <span className="govco-address-card"></span> &nbsp;
            {name}
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeaderComponent;
