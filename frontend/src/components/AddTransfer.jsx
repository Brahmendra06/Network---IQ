import {useState} from "react";
import {addTransfer} from "../api/transfers";
import "../styles/Transfers.css";


function AddTransfer({refresh}){


const [form,setForm]=useState({

fromLocation:"",
toLocation:"",
sku:"",
quantity:"",
cost:"",
profit:""

});



const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};



const handleSubmit=async(e)=>{

e.preventDefault();


try{


await addTransfer({

...form,

quantity:Number(form.quantity),

cost:Number(form.cost),

profit:Number(form.profit),

status:"Pending"

});


alert("Transfer Created Successfully");


setForm({

fromLocation:"",
toLocation:"",
sku:"",
quantity:"",
cost:"",
profit:""

});


refresh();


}
catch(error){

console.log(error);

alert("Transfer Failed");

}


};



return(

<div className="transfer-form">


<h3>
Create Transfer
</h3>


<form onSubmit={handleSubmit}>


<input
name="fromLocation"
placeholder="From Location"
value={form.fromLocation}
onChange={handleChange}
/>


<input
name="toLocation"
placeholder="To Location"
value={form.toLocation}
onChange={handleChange}
/>


<input
name="sku"
placeholder="SKU"
value={form.sku}
onChange={handleChange}
/>


<input
name="quantity"
type="number"
placeholder="Quantity"
value={form.quantity}
onChange={handleChange}
/>


<input
name="cost"
type="number"
placeholder="Cost"
value={form.cost}
onChange={handleChange}
/>


<input
name="profit"
type="number"
placeholder="Profit"
value={form.profit}
onChange={handleChange}
/>



<button type="submit">

Create Transfer

</button>


</form>


</div>

);


}


export default AddTransfer;