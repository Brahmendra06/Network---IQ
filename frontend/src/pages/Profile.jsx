import { useState } from "react";

import { updateProfile } from "../api/auth";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/Profile.css";
import "../styles/Dashboard.css";


function Profile(){


const user = JSON.parse(
    localStorage.getItem("user")
);



const [name,setName] = useState(
    user?.name || ""
);



const email = user?.email || "";

const role = user?.role || "";





const handleSave = async()=>{


try{


const res = await updateProfile({

    id:user.id,

    name:name

});



alert(res.data);





const updatedUser = {

    ...user,

    name:name

};




localStorage.setItem(

    "user",

    JSON.stringify(updatedUser)

);




window.location.reload();



}

catch(error){


console.log(error);


alert(
    "Profile Update Failed"
);


}



};





return(



<div className="dashboard">



    <Sidebar />



    <div className="main-content">



        <Navbar />





        <div className="profile-page">





            <div className="profile-card">





                <div className="profile-avatar">

                    👤

                </div>





                {/* USER NAME */}

                <h2>

                    {user?.name || "My Profile"}

                </h2>





                <p className="profile-role">

                    {role}

                </p>







                <label>

                    Name

                </label>



                <input


                    type="text"


                    value={name}


                    onChange={(e)=>

                        setName(e.target.value)

                    }


                />







                <label>

                    Email

                </label>



                <input


                    type="email"


                    value={email}


                    disabled


                />







                <button

                    onClick={handleSave}

                >

                    Save Changes

                </button>





            </div>




        </div>




    </div>



</div>


);



}


export default Profile;