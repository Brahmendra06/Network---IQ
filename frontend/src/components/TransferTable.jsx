import { useState } from "react";

import {
    updateTransfer,
    deleteTransfer
} from "../api/transfers";

import "../styles/Table.css";



function TransferTable({

    transfers = [],

    refresh = () => {},

    hideActions = false

}) {



const [selectedTransfer,setSelectedTransfer] =
useState(null);





// APPROVE TRANSFER

const approveTransfer = async()=>{


try{


await updateTransfer(

selectedTransfer.id,

{
    status:"Approved"
}

);



alert(
"Transfer Approved"
);



setSelectedTransfer(null);


refresh();


}

catch(error){

console.log(error);

alert(
"Approve Failed"
);

}


};








// DELETE TRANSFER

const handleDelete = async(id)=>{


const confirmDelete =
window.confirm(
"Are you sure you want to delete this transfer?"
);



if(!confirmDelete){

return;

}



try{


await deleteTransfer(id);



alert(
"Transfer Deleted Successfully"
);



refresh();



}

catch(error){

console.log(error);

alert(
"Delete Failed"
);


}


};







return(



<div className="table-container">


{

transfers.length===0


?


<p>
No Transfer Found
</p>



:



<table>


<thead>


<tr>

<th>
From
</th>

<th>
To
</th>

<th>
SKU
</th>

<th>
Quantity
</th>

<th>
Cost
</th>

<th>
Profit
</th>

<th>
Status
</th>


<th>
Action
</th>


</tr>


</thead>





<tbody>


{

transfers.map((item)=>(


<tr key={item.id}>


<td>
{item.fromLocation}
</td>


<td>
{item.toLocation}
</td>


<td>
{item.sku}
</td>


<td>
{item.quantity}
</td>


<td>
₹ {item.cost}
</td>


<td>
₹ {item.profit}
</td>




<td>


<span

className={
item.status==="Approved"
?
"status high"
:
item.status==="Rejected"
?
"status low"
:
"status normal"
}

>


{item.status}


</span>


</td>






<td>


{/* VIEW FOR BOTH ADMIN AND USER */}


<button

className="view-btn"

onClick={()=>setSelectedTransfer(item)}

>

View

</button>






{/* ONLY ADMIN */}



{

!hideActions &&


<>


<button

className="edit-btn"

onClick={()=>setSelectedTransfer(item)}

>

Edit

</button>






<button

className="delete-btn"

onClick={()=>handleDelete(item.id)}

>

Delete

</button>



</>


}



</td>





</tr>



))


}



</tbody>



</table>



}







{/* MODAL */}



{

selectedTransfer &&


<div className="modal-overlay">


<div className="modal-box">


<h2>
Transfer Details
</h2>




<p>

<b>SKU:</b>

{" "}

{selectedTransfer.sku}

</p>



<p>

<b>Move:</b>

{" "}

{selectedTransfer.fromLocation}

{" → "}

{selectedTransfer.toLocation}

</p>




<p>

<b>Quantity:</b>

{" "}

{selectedTransfer.quantity}

</p>




<p>

<b>Cost:</b>

{" "}

₹ {selectedTransfer.cost}

</p>




<p>

<b>Profit:</b>

{" "}

₹ {selectedTransfer.profit}

</p>




<p>

<b>Status:</b>

{" "}

{selectedTransfer.status}

</p>






{/* ADMIN ONLY APPROVE */}


{

!hideActions &&


selectedTransfer.status==="Pending"

&&


<button

className="approve"

onClick={approveTransfer}

>

Approve

</button>


}





<button

className="reject"

onClick={()=>setSelectedTransfer(null)}

>

Close

</button>



</div>


</div>


}



</div>



);


}



export default TransferTable;