import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { signup } from "../api/auth";

import "../styles/Auth.css";



function Signup() {



const navigate = useNavigate();




const [formData,setFormData] = useState({

    name:"",
    email:"",
    password:"",
    role:"USER"

});







const handleChange = (e)=>{


setFormData({

    ...formData,

    [e.target.name]:
    e.target.value

});


};







const handleSignup = async(e)=>{


e.preventDefault();



try{


const res =
await signup(formData);




alert(
res.data
);



navigate("/login");



}

catch(err){



alert(

err.response?.data ||
"Signup Failed"

);



}



};







return(


<div className="auth-container">


<form

onSubmit={handleSignup}

className="auth-form"

>


<div className="auth-logo">

NetworkIQ

</div>





<h2>

Create Account

</h2>





<p className="auth-subtitle">

Register to access NetworkIQ

</p>







<input

type="text"

name="name"

placeholder="Enter Full Name"

value={formData.name}

onChange={handleChange}

required

/>








<input

type="email"

name="email"

placeholder="Enter Email"

value={formData.email}

onChange={handleChange}

required

/>








<input

type="password"

name="password"

placeholder="Enter Password"

value={formData.password}

onChange={handleChange}

required

/>








{/* ROLE SELECT */}


<select

name="role"

value={formData.role}

onChange={handleChange}

required

>


<option value="USER">

User

</option>



<option value="ADMIN">

Admin

</option>



</select>







<button type="submit">

Create Account

</button>







<p className="auth-link">

Already have an account?


<Link to="/login">

Login

</Link>


</p>





</form>


</div>


);



}


export default Signup;