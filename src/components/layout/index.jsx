import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/icon.png";

const actions = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "NUEVO VIDEO",
    url: "/new-video",
  },
];

const Layout = (props) => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <img src={logo} alt="aluraflix" className="logo"></img>
        <div className="header-actions">
          {actions.map((action, i) => (
            <Link
              className={`header-action ${
                location.pathname === action.url ? "active" : ""
              }`}
              to={action.url}
              key={i}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </header>

      <Outlet />

      <footer>
        <img src={logo} alt="aluraflix" className="logo"></img>
      </footer>
    </>
  );
};

export default Layout;
