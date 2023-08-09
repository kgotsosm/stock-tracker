import { useEffect, useState } from "react";
import "../index.css";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";

export default function StockHome() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/main/fetch_yahoo_data")
      .then((response) => response.json())
      .then((data) => {
        setStockData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

// Extract data from the stockData and transform it
const transformedData = stockData.map(stock => ({
  symbol: stock.symbol,
  company_name: stock.company_name,
  open: `R ${stock.yahoo_data.Open[Object.keys(stock.yahoo_data.Open)[0]]}`,
  high: `R ${stock.yahoo_data.High[Object.keys(stock.yahoo_data.High)[0]]}`,
  low: `R ${stock.yahoo_data.Low[Object.keys(stock.yahoo_data.Low)[0]]}`,
  close: `R ${stock.yahoo_data.Close[Object.keys(stock.yahoo_data.Close)[0]]}`,
  volume: stock.yahoo_data.Volume[Object.keys(stock.yahoo_data.Volume)[0]],
}));

return (
  <div className="bg-slate-500 m-20">
    <GridComponent dataSource={transformedData} style={{ backgroundColor: '#87ceeb' }}>
      <ColumnsDirective>
        <ColumnDirective
          field="symbol"
          headerText="Symbol"
          width="50"
          textAlign="Center"
        />
        <ColumnDirective
          field="company_name"
          headerText="Company Name"
          width="150"
          textAlign="Center"
        />
        <ColumnDirective
          field="open"
          headerText="Open"
          width="100"
          textAlign="Center"
        />
        <ColumnDirective
          field="high"
          headerText="High"
          width="100"
          textAlign="Center"
        />
        <ColumnDirective
          field="low"
          headerText="Low"
          width="100"
          textAlign="Center"
        />
        <ColumnDirective
          field="close"
          headerText="Close"
          width="100"
          textAlign="Center"
        />
        <ColumnDirective
          field="volume"
          headerText="Volume"
          width="100"
          textAlign="Center"
        />
      </ColumnsDirective>
    </GridComponent>
  </div>
);

}
