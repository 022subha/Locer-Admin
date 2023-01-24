import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchIcon />
          Search
        </div>
        <div className="items">
          <div className="item">
            <WbSunnyOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <PersonOutlineOutlinedIcon className="avatar" />
            <KeyboardArrowDownOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
