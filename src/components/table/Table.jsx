import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "devon@gmail.com",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "09.01.2023",
      amount: 785,
      method: "Cash on Delivery",
      status: "Delivered",
    },
    {
      id: 2235235,
      product: "devon@gmail.com",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "09.01.2023",
      amount: 900,
      method: "Online Payment",
      status: "Cancelled",
    },
    {
      id: 2342353,
      product: "devon@gmail.com",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "09.01.2023",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "devon@gmail.com",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "09.01.2023",
      amount: 920,
      method: "Online",
      status: "Delivered",
    },
    {
      id: 2342355,
      product: "devon@gmail.com",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "09.01.2023",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{row.product}</div>
              </TableCell>
              <TableCell className="tableCell">${row.amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>{" "}
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">
                <MoreHorizIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
