import React, { useState } from "react";
import "./OrderManagement.css";

const OrderManagement = () => {
  const [order, setOrder] = useState({
    projectCode: "",
    clientName: "",
    projectType: "",
    startDate: "",
    deadline: "",
    machineType: "",
    millingTime: "",
    turningTime: "",
    material: "",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleProjectType = (type) => {
    setOrder({ ...order, projectType: type });
  };

  const handleMachineType = (type) => {
    setOrder({ ...order, machineType: type });
  };

  return (
    <div className="order-management">
      <h2>Gestion de commande</h2>
      <div className="form-group">
        <label>Code du projet</label>
        <input type="text" name="projectCode" value={order.projectCode} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Nom du client</label>
        <input type="text" name="clientName" value={order.clientName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Nature de projet</label>
        <div className="button-group">
          <button className={order.projectType === "pièce unique" ? "active" : ""} onClick={() => handleProjectType("pièce unique")}>Pièce unique</button>
          <button className={order.projectType === "machine spéciale" ? "active" : ""} onClick={() => handleProjectType("machine spéciale")}>Machine spéciale</button>
          <button className={order.projectType === "pièces en série" ? "active" : ""} onClick={() => handleProjectType("pièces en série")}>Pièces en série</button>
        </div>
      </div>
      <div className="form-group">
        <label>Date de démarrage</label>
        <input type="date" name="startDate" value={order.startDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Deadline</label>
        <input type="date" name="deadline" value={order.deadline} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Gestion de machines</label>
        <div className="button-group">
          <button className={order.machineType === "Tournage" ? "active" : ""} onClick={() => handleMachineType("Tournage")}>Tournage</button>
          <button className={order.machineType === "Fraisage" ? "active" : ""} onClick={() => handleMachineType("Fraisage")}>Fraisage</button>
        </div>
      </div>
      <div className="form-group">
        <label>Temps fraisage</label>
        <input type="number" name="millingTime" value={order.millingTime} onChange={handleChange} placeholder="minutes" />
      </div>
      <div className="form-group">
        <label>Temps tournage</label>
        <input type="number" name="turningTime" value={order.turningTime} onChange={handleChange} placeholder="minutes" />
      </div>
      <div className="form-group">
        <label>Matière première</label>
        <input type="text" name="material" value={order.material} onChange={handleChange} placeholder="matière" />
      </div>
      <div className="form-actions">
        <button className="add-btn">Ajouter</button>
        <button className="delete-btn">Supprimer</button>
      </div>
    </div>
  );
};

export default OrderManagement;
