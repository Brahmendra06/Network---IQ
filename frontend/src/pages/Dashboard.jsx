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


function Dashboard(){


const [stats,setStats]=useState({

totalProducts:0,

totalQuantity:0,

inventoryValue:0,

lowStock:0

});



const [inventory,setInventory]=useState([]);



const [transfers,setTransfers]=useState([]);





useEffect(()=>{


loadStats();

loadInventory();

loadTransfers();


},[]);





const loadStats=async()=>{


try{


const response =
await getDashboardStats();


setStats(response.data);


}

catch(error){


console.log(error);


}


};





const loadInventory=async()=>{


try{


const response =
await getInventory();


setInventory(response.data);


}

catch(error){


console.log(error);


}


};





const loadTransfers=async()=>{


try{


const response =
await getTransfers();


setTransfers(response.data);


}

catch(error){


console.log(error);


}


};






const cards=[


{

title:"Total Products",

value:stats.totalProducts

},



{

title:"Total Quantity",

value:stats.totalQuantity

},



{

title:"Inventory Value",

value:`₹ ${stats.inventoryValue}`

},



{

title:"Low Stock Items",

value:stats.lowStock

}


];





return(


<div className="dashboard">


<Sidebar/>



<div className="main-content">


<Navbar/>




<div className="cards">


{

cards.map((card,index)=>(


<DashboardCard

key={index}

title={card.title}

value={card.value}

/>


))

}


</div>





<div className="content-grid">



<div className="left-panel">


<InventoryTable

inventory={inventory}

refresh={loadInventory}

hideActions={true}

/>


</div>





<div className="right-panel">


<TransferTable

transfers={transfers}

refresh={loadTransfers}

/>


</div>




</div>




</div>



</div>


);


}


export default Dashboard;