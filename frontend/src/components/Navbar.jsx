import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
FaBell,
FaChevronDown,
FaCog,
FaSignOutAlt,
FaUserCircle
} from "react-icons/fa";


import {
getNotifications,
deleteNotification
} from "../api/notifications";


import "../styles/Navbar.css";



function Navbar(){


const navigate = useNavigate();



const [open,setOpen] = useState(false);


const [showNotifications,setShowNotifications] =
useState(false);



const [notifications,setNotifications] =
useState([]);




const user =
JSON.parse(
localStorage.getItem("user")
);




// ROLE BASED DASHBOARD

const dashboardPath =

user?.role === "ADMIN"

?

"/admin-dashboard"

:

"/user-dashboard";







// LOAD NOTIFICATIONS

const loadNotifications = async()=>{


try{


const response =
await getNotifications();



setNotifications(
response.data
);



}

catch(error){


console.log(
"Notification Error",
error
);


}



};






useEffect(()=>{


loadNotifications();



const interval =
setInterval(()=>{


loadNotifications();


},5000);



return ()=>clearInterval(interval);



},[]);








// FORMAT TIME


const formatTime=(date)=>{


if(!date){

return "";

}



return new Date(date)
.toLocaleTimeString(
"en-IN",
{

hour:"2-digit",

minute:"2-digit",

hour12:true

}

);


};









// CLEAR NOTIFICATIONS


const clearNotifications = async()=>{


try{


for(const item of notifications){


await deleteNotification(
item.id
);


}



setNotifications([]);



}

catch(error){


console.log(error);


}


};









// LOGOUT


const handleLogout=()=>{


const confirmLogout =
window.confirm(
"Are you sure you want to logout?"
);



if(confirmLogout){


localStorage.removeItem(
"user"
);



navigate("/login");


}


};









return(



<div className="navbar">



<h2>

Inventory Optimization Dashboard

</h2>






<div className="nav-right">







{/* NOTIFICATIONS */}



<div className="notification-box">



<button

className="notify-btn"

onClick={()=>setShowNotifications(
!showNotifications
)}

>


<FaBell/>


{

notifications.length>0 &&

<span className="notification-count">

{notifications.length}

</span>

}


</button>








{

showNotifications &&



<div className="notification-panel">



<div className="notification-header">


<h3>

Notifications

</h3>



<button

onClick={clearNotifications}

>

Clear

</button>


</div>








{

notifications.length===0

?

<p className="empty-notification">

No New Notifications

</p>



:


notifications.map((item)=>(



<div

className="notification-card"

key={item.id}

>



<div className="notification-icon">

<FaBell/>

</div>





<div className="notification-content">


<h4>

{item.title}

</h4>



<p>

{item.message}

</p>



<span>

{item.type}

<br/>

Time: {formatTime(item.createdAt)}

</span>


</div>





</div>



))


}




</div>



}



</div>









{/* PROFILE */}



<div

className="profile-menu"

onClick={()=>setOpen(!open)}

>



<div className="nav-avatar">

<FaUserCircle/>

</div>



<span>

{user?.name || "Admin"}

</span>



<FaChevronDown/>









{

open &&



<div className="dropdown">





<button

onClick={()=>{

navigate(dashboardPath);

setOpen(false);

}}

>

<FaUserCircle/>

Dashboard

</button>







<button

onClick={()=>{

navigate("/profile");

setOpen(false);

}}

>

<FaUserCircle/>

My Profile

</button>







{

user?.role==="ADMIN" &&

<button

onClick={()=>{

navigate("/settings");

setOpen(false);

}}

>

<FaCog/>

Settings

</button>

}





<button

className="logout-item"

onClick={handleLogout}

>

<FaSignOutAlt/>

Logout

</button>







</div>



}





</div>








</div>



</div>



);



}



export default Navbar;