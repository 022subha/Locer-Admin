import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Barr } from "../../components/bar/Barr";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <p style={{ marginLeft: "25px", fontSize: "25px",marginTop:"15px" }}>Dashboard</p>

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Barr/>
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Orders</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
