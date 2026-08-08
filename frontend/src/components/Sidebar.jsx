import { NavLink } from "react-router-dom";


import {
    FaHome,
    FaBoxes,
    FaTruck,
    FaChartBar,
    FaRobot,
    FaClipboardCheck,
} from "react-icons/fa";


import "../styles/Sidebar.css";



function Sidebar(){



const user = JSON.parse(
    localStorage.getItem("user")
);



const isAdmin =
    user?.role === "ADMIN";



const dashboardPath = isAdmin
    ?
    "/admin-dashboard"
    :
    "/user-dashboard";



const inventoryPath = isAdmin
    ?
    "/inventory"
    :
    "/user-inventory";






return(



<div className="sidebar">





<h2 className="logo">
NetworkIQ
</h2>







<ul className="menu">





<li>

<NavLink to={dashboardPath}>


<FaHome/>


<span>
Dashboard
</span>


</NavLink>


</li>







<li>

<NavLink to={inventoryPath}>


<FaBoxes/>


<span>
Inventory
</span>


</NavLink>


</li>








{/* ADMIN ONLY MENU */}


{

isAdmin &&

<>





<li>

<NavLink to="/transfers">


<FaTruck/>


<span>
Transfers
</span>


</NavLink>


</li>








<li>

<NavLink to="/analytics">


<FaChartBar/>


<span>
Analytics
</span>


</NavLink>


</li>








<li>

<NavLink to="/agents">


<FaRobot/>


<span>
AI Agents
</span>


</NavLink>


</li>








<li>

<NavLink to="/planner">


<FaClipboardCheck/>


<span>
Planner
</span>


</NavLink>


</li>





</>


}






</ul>






</div>



);



}



export default Sidebar;