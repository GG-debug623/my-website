import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import DistributionChart from "@/components/DistributionChart";
import OrderHistory from "@/components/OrderHistory";
import AlertCard from "@/components/AlertCard";
import DashboardCalendar from "@/components/DashboardCalendar";
import ProjectOverview from "@/components/ProjectOverview";
import CategoryProgress from "@/components/CategoryProgress";

const ahmed = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Distribution chart data
  const distributionData = [
    { status: "Confirmé", value: 186, color: "#6F5CC3", percentage: "62.5%" },
    { status: "Lancé", value: 75, color: "#3E7BFA", percentage: "25%" },
    { status: "Demandé", value: 37, color: "#F7C257", percentage: "12.5%" },
  ];
  
  // Order history data
  const orderHistory = [
    { client: "Tesco Market", type: "Machine specifique", date: "13 Dec 2020", status: "livré" },
    { client: "ElectroMen Market", type: "Pièce unique", date: "14 Dec 2020", amount: "250.00", status: undefined },
    { client: "Florgio Restaurant", type: "Pièce en série", date: "07 Dec 2020", amount: "19.50", status: undefined },
    { client: "John Mathew Kayne", type: "Machine specifique", date: "06 Dec 2020", amount: "350", status: undefined },
    { client: "Ann Marlin", type: "Pièce unique", date: "31 Nov 2020", amount: "430", status: undefined },
  ];
  
  // Alerts data
  const alerts = [
    { id: "ID PROJET : DEADLINE", description: "ID PROJET : Livraison" },
    { id: "ID Matière : Rupture de Stock", description: "" },
  ];
  
  // Project overview data
  const projectData = [
    { name: "Mon", value: 150 },
    { name: "Tue", value: 230 },
    { name: "Wed", value: 180 },
    { name: "Thu", value: 290 },
    { name: "Fri", value: 200 },
    { name: "Sat", value: 220 },
    { name: "Sun", value: 150 },
  ];
  
  // Category progress data
  const categories = [
    { name: "Machine spéciale", percentage: 52, color: "#F97066" },
    { name: "Pièce Unique", percentage: 15, color: "#36E1B4" },
    { name: "Pièce en série", percentage: 33, color: "#3E7BFA" },
  ];
  
  return (
    <div className="min-h-screen flex bg-gray-50">
     
      
      <div className="flex-1 flex flex-col">
        <SearchBar enterprise="ENTERPRISE NAME" username="Username" />
        
        <div className="flex-1 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* First Row */}
            <div className="col-span-6">
              <DistributionChart data={distributionData} total={300} />
            </div>
            <div className="col-span-6">
              <div className="grid grid-rows-2 gap-6 h-full">
                <AlertCard alerts={alerts} />
                <DashboardCalendar onDateSelect={setSelectedDate} />
              </div>
            </div>
            
            {/* Second Row */}
            <div className="col-span-12">
              <OrderHistory orders={orderHistory} selectedDate={selectedDate} />
            </div>
            
            {/* Third Row */}
            <div className="col-span-7">
              <ProjectOverview data={projectData} />
            </div>
            <div className="col-span-5">
              <CategoryProgress categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ahmed;