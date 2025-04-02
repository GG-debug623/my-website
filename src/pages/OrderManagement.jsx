import React, { useState } from 'react';
import './OrderManagement.css';
import { FiDownload, FiPlus, FiSearch } from 'react-icons/fi';

const OrderManagement = () => {
  // Sample order data
  const [orders] = useState([
    {
      id: 1024,
      client: 'Mohamed Ali',
      orderDate: '2023-05-15',
      deliveryDate: '2023-05-22',
      status: 'En préparation',
      priority: 'Haute'
    },
    {
      id: 1025,
      client: 'Fatma Ben Ahmed',
      orderDate: '2023-05-16',
      deliveryDate: '2023-05-25',
      status: 'Expédié',
      priority: 'Moyenne'
    },
    {
      id: 1026,
      client: 'Samir Toumi',
      orderDate: '2023-05-17',
      deliveryDate: '2023-05-20',
      status: 'Livré',
      priority: 'Urgente'
    }
  ]);

  // Status badge styling
  const getStatusClass = (status) => {
    switch(status) {
      case 'Livré': return 'status-delivered';
      case 'Expédié': return 'status-shipped';
      case 'En préparation': return 'status-preparing';
      default: return 'status-pending';
    }
  };

  // Priority badge styling
  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'Urgente': return 'priority-high';
      case 'Haute': return 'priority-medium';
      case 'Moyenne': return 'priority-low';
      default: return 'priority-lowest';
    }
  };

  return (
    <div className="order-management-container">
      {/* Header Controls */}
      <div className="controls-header">
        <div className="controls-left">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Filtrer les commandes..." 
            />
          </div>
          <select className="status-filter">
            <option>Tous les statuts</option>
            <option>En préparation</option>
            <option>Expédié</option>
            <option>Livré</option>
          </select>
        </div>
        
        <div className="controls-right">
          <button className="download-btn">
            <FiDownload className="icon" /> Télécharger
          </button>
          <button className="add-order-btn">
            <FiPlus className="icon" /> Ajouter Commande
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="table-responsive">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom Client</th>
              <th>Date de Commande</th>
              <th>Date de Livraison</th>
              <th>Statut</th>
              <th>Priorité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td style={{color: '#333'}}>{order.id}</td>
                <td style={{color: '#333'}}>{order.client}</td>
                <td style={{color: '#333'}}>{order.orderDate}</td>
                <td style={{color: '#333'}}>{order.deliveryDate}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <span className={`priority-badge ${getPriorityClass(order.priority)}`}>
                    {order.priority}
                  </span>
                </td>
                <td>
                  <button className="action-btn view-btn">Voir</button>
                  <button className="action-btn edit-btn">Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;