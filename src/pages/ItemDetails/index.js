import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/dataSlice";
import Table from "react-bootstrap/Table";
import Chart from "./chart";
import "./styles.css";
import data from "../../data/stackline.json";

const ItemDetails = (props) => {
  const dispatch = useDispatch();

  const { data: stackLineData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(setData(data[0]));
  }, []);

  return (
    <div className="item-details">
      <Chart />
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>WEEK ENDING</th>
            <th>RETAIL SALES</th>
            <th>WHOLESALE SALES</th>
            <th>UNITS SOLD</th>
            <th>RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>
          {stackLineData?.sales?.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales}</td>
              <td>${sale.wholesaleSales}</td>
              <td>{sale.unitsSold}</td>
              <td>{sale.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ItemDetails;
