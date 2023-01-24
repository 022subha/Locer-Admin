import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BrushIcon from "@mui/icons-material/Brush";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ChatIcon from "@mui/icons-material/Chat";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="https://locer.vercel.app/static/media/logo.ab780352dcc29d764bf350bb11d74ede.svg"
            alt=""
            className="imagelogo"
          ></img>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>Orders</span>
          </li>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <li>
            <ShowChartIcon className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <ChatIcon className="icon" />
            <span>Reviews</span>
          </li>
          <li>
            <PaymentsOutlinedIcon className="icon" />
            <span>Transactions</span>
          </li>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Sellers</span>
          </li>
          <li>
            <LocalOfferIcon className="icon" />
            <span>Hot Offers</span>
          </li>
          <li>
            <BrushIcon className="icon" />
            <span>Appearence</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
