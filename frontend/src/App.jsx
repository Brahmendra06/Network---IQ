import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";


// AUTH

import Login from "./pages/Login";
import Signup from "./pages/Signup";


// DASHBOARDS

import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";


// USER PAGES

import UserInventory from "./pages/UserInventory";


// ADMIN PAGES

import Inventory from "./pages/Inventory";
import Transfers from "./pages/Transfers";
import Analytics from "./pages/Analytics";
import Agents from "./pages/Agents";
import Planner from "./pages/Planner";
import Settings from "./pages/Settings";


// COMMON

import Profile from "./pages/Profile";





function App(){


return(



<Routes>





{/* DEFAULT */}

<Route

path="/"

element={
<Navigate to="/login" replace />
}

/>







{/* AUTH ROUTES */}


<Route

path="/login"

element={<Login />}

/>



<Route

path="/signup"

element={<Signup />}

/>








{/* ADMIN DASHBOARD */}


<Route

path="/admin-dashboard"

element={<AdminDashboard />}

/>







{/* USER DASHBOARD */}


<Route

path="/user-dashboard"

element={<UserDashboard />}

/>







{/* USER INVENTORY VIEW ONLY */}


<Route

path="/user-inventory"

element={<UserInventory />}

/>








{/* ADMIN INVENTORY MANAGEMENT */}


<Route

path="/inventory"

element={<Inventory />}

/>








{/* ADMIN TRANSFER MANAGEMENT */}


<Route

path="/transfers"

element={<Transfers />}

/>








{/* ADMIN ANALYTICS */}


<Route

path="/analytics"

element={<Analytics />}

/>








{/* AI AGENTS */}


<Route

path="/agents"

element={<Agents />}

/>








{/* PLANNER */}


<Route

path="/planner"

element={<Planner />}

/>








{/* PROFILE */}


<Route

path="/profile"

element={<Profile />}

/>








{/* SETTINGS */}


<Route

path="/settings"

element={<Settings />}

/>








{/* INVALID URL */}


<Route

path="*"

element={
<Navigate to="/login" replace />
}

/>



</Routes>


);


}



export default App;