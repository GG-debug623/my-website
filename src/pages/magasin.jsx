import "./magasin.css";
import React, { useState } from "react";
import {
  Search,
  Download,
  Filter,
  ArrowUpDown,
  Plus,
  Edit2,
  Mail,
  Bell,
} from "lucide-react";

// Define inventory item type
/**
 * @typedef {Object} InventoryItem
 * @property {string} reference - The reference of the item.
 * @property {string} name - The name of the item.
 * @property {number} quantity - The quantity of the item.
 * @property {number} reservation - The reservation count of the item.
 * @property {number} availability - The availability count of the item.
 * @property {string} status - The status of the item.
 */

const statusClasses = {
  "En stock": "bg-green-100 text-green-800",
  "En Repture": "bg-red-100 text-red-800",
  "A Commander": "bg-yellow-100 text-yellow-800",
  "Pris en Compte": "bg-blue-100 text-blue-800",
};

const Magasin = () => {
  const [items] = useState([
    { reference: "AC24-0042", name: "Product A", quantity: 10, reservation: 10, availability: 0, status: "En Repture" },
    { reference: "PU-2024-010", name: "Product B", quantity: 10, reservation: 2, availability: 2, status: "A Commander" },
    { reference: "PS-2024-001", name: "Product C", quantity: 12, reservation: 1, availability: 11, status: "En stock" },
    { reference: "PU-2024-011", name: "Product D", quantity: 13, reservation: 3, availability: 1, status: "En stock" },
    { reference: "MS-2024-001", name: "Product E", quantity: 14, reservation: 100, availability: 12, status: "Pris en Compte" },
  ]);

  return (
    <div className="magasin-container">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">ENTREPRISE NAME</h2>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <Mail className="text-gray-600" size={24} />
            <Bell className="text-gray-600" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <ArrowUpDown size={20} />
                <span>Trier</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <Filter size={20} />
                <span>Filtrer</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <Download size={20} />
                <span>Télécharger CSV</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Plus size={20} />
              <span>Ajout Matière</span>
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="pb-4">Référence du matière</th>
                <th className="pb-4">Nom matière</th>
                <th className="pb-4">Quantité</th>
                <th className="pb-4">Réservation</th>
                <th className="pb-4">Disponibilité</th>
                <th className="pb-4">Statut</th>
                <th className="pb-4"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={`${item.reference}-${index}`} className="border-t">
                  <td className="py-4">{item.reference}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.reservation}</td>
                  <td>{item.availability}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm ${statusClasses[item.status] || "bg-gray-100 text-gray-800"}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center space-x-2 mt-6">
            {[1, 2, 3, "...", 10].map((p, i) => (
              <button key={i} className="px-3 py-1 rounded hover:bg-gray-200">
                {p}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Magasin;
