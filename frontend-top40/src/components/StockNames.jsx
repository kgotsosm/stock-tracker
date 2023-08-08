import { useEffect, useState } from "react";
import "../index.css";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";

export default function StockNames() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/fetch_yahoo_data")
      .then((response) => response.json())
      .then((data) => {
        setStockData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const transformedData = stockData.map((stock) => ({
    company_name: stock.company_name,
    Open: stock.yahoo_data.Open[new Date().toISOString().split("T")[0]],
    High: stock.yahoo_data.High[new Date().toISOString().split("T")[0]],
    Low: stock.yahoo_data.Low[new Date().toISOString().split("T")[0]],
  }));

  return (
    <div className="bg-slate-500">
      return (
      <GridComponent dataSource={stockData}>
        <ColumnsDirective>
          <ColumnDirective
            field="company_name"
            width="100"
            textAlign="Center"
          />
          <ColumnDirective
            field="stock.yahoo_data.Open"
            width="100"
            textAlign="Center"
          />
          <ColumnDirective
            field="stock.yahoo_data.High"
            width="100"
            textAlign="Center"
          />

          <ColumnDirective
            field="stock.yahoo_data.Low"
            width="100"
            textAlign="Center"
          />
        </ColumnsDirective>
      </GridComponent>
      );
    </div>
  );
}
