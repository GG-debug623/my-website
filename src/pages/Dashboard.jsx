import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      

      
{/* Progress Bars */}
<div className="progress">
        <h3>Total Distributions</h3>
        <div className="progress-bar">
          <p>Machine Speciale</p>
          <div className="bar" style={{ width: "52%" }}></div>
        </div>
        <div className="progress-bar">
          <p>Pièce Unique</p>
          <div className="bar" style={{ width: "15%", backgroundColor: "green" }}></div>
        </div>
        <div className="progress-bar">
          <p>Pièce en Série</p>
          <div className="bar" style={{ width: "33%", backgroundColor: "blue" }}></div>
        </div>
      </div>      
<div className="sec">
  {/* Date Filter */}
      <div className="date-filter">
        <h3>Select Date</h3>
        <input type="date" />
        <button>Filter</button>
      </div>
    {/* Order History */}
    <div className="history">
        <h3>Historique des Commandes</h3>
        <table>
          <thead>
            <tr>
              <th>Peremira</th>
              <th>Type</th>
              <th>Tanggal</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tesco Market</td>
              <td>Shopping</td>
              <td>13 Dec 2020</td>
              <td>$75.67</td>
            </tr>
            <tr>
              <td>ElectroMen Market</td>
              <td>Shopping</td>
              <td>14 Dec 2020</td>
              <td>$250.00</td>
            </tr>
            <tr>
              <td>Fiorgio Restaurant</td>
              <td>Food</td>
              <td>07 Dec 2020</td>
              <td>$19.50</td>
            </tr>
            <tr>
              <td>John Mathew Kayne</td>
              <td>Sport</td>
              <td>06 Dec 2020</td>
              <td>$350</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      </div>

      
    </div>
  );
};

export default Dashboard;
