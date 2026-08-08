import { useEffect,useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import InventoryTable from "../components/InventoryTable";

import {
    getInventory
} from "../api/inventory";

import "../styles/Inventory.css";



function UserInventory(){


const [inventory,setInventory] = useState([]);




const loadInventory = async()=>{


try{


const response =
await getInventory();


setInventory(
response.data
);


}
catch(error){

console.log(error);

}


};




useEffect(()=>{

loadInventory();

},[]);





return(


<div className="dashboard">



<Sidebar />



<div className="main-content">


<Navbar />



<div className="inventory-page">



<h2>
Inventory View
</h2>





<InventoryTable


inventory={inventory}


hideActions={true}


/>



</div>



</div>



</div>


);



}


export default UserInventory;