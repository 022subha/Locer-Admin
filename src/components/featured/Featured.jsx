import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Visitors</h1>
      </div>
      <div className="bottom">
        <p className="title">Recent Month</p>
        <div className="featuredChart">
          <CircularProgressbar
            value={97.14}
            text={"97.14%"}
            strokeWidth={5}
            styles={buildStyles({
              textColor: "black",
              pathColor: "blue",
              trailColor: "#98c2fe",
            })}
          />
        </div>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              <span
                className="colored-circle"
                style={{ backgroundColor: "red" }}
              />
              Social Media 50%
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> <span
                className="colored-circle"
                style={{ backgroundColor: "green" }}
              />Afiliate Visitors 18%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
