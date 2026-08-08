import {useEffect,useState} from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import DashboardCard from "../components/DashboardCard";
import InventoryTable from "../components/InventoryTable";
import TransferTable from "../components/TransferTable";

import {getDashboardStats} from "../api/dashboard";
import {getInventory} from "../api/inventory";
import {getTransfers} from "../api/transfers";

import "../styles/Dashboard.css";



function AdminDashboard(){


const [stats,setStats] = useState({

totalProducts:0,
totalQuantity:0,
inventoryValue:0,
lowStock:0

});



const [inventory,setInventory] = useState([]);


const [transfers,setTransfers] = useState([]);




// LOAD DATA

useEffect(()=>{


loadStats();

loadInventory();

loadTransfers();


},[]);




// DASHBOARD STATS

const loadStats = async()=>{

try{


const response =
await getDashboardStats();


setStats(response.data);


}
catch(error){

console.log(error);

}

};




// INVENTORY

const loadInventory = async()=>{

try{


const response =
await getInventory();


setInventory(response.data);


}
catch(error){

console.log(error);

}


};





// TRANSFERS

const loadTransfers = async()=>{

try{


const response =
await getTransfers();


setTransfers(response.data);


}
catch(error){

console.log(error);

}


};






return(


<div className="dashboard">


<Sidebar/>



<div className="main-content">


<Navbar/>




<h1>
Admin Dashboard
</h1>





<div className="dashboard-cards">



<DashboardCard

title="Total Products"

value={stats.totalProducts}

/>



<DashboardCard

title="Total Quantity"

value={stats.totalQuantity}

/>



<DashboardCard

title="Inventory Value"

value={`₹ ${stats.inventoryValue}`}

/>



<DashboardCard

title="Low Stock Items"

value={stats.lowStock}

/>



</div>








<h2>
Inventory Management
</h2>



<div className="table-box">


<InventoryTable

inventory={inventory}

refresh={loadInventory}

hideActions={false}

/>


</div>







<h2>
Transfer Management
</h2>



<div className="table-box">


<TransferTable

transfers={transfers}

refresh={loadTransfers}

/>


</div>






</div>


</div>


);


}



export default AdminDashboard;