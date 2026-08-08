import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../api/auth";

import "../styles/Auth.css";



function Login() {


const navigate = useNavigate();




const [formData,setFormData] = useState({

email:"",

password:""

});







const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};









const handleLogin = async(e)=>{


e.preventDefault();



try{


const response =
await login(formData);



const user =
response.data;



console.log(
"LOGIN RESPONSE:",
user
);







// CHECK LOGIN SUCCESS


if(user.success){





// SAVE USER


localStorage.setItem(

"user",

JSON.stringify(user)

);







alert(
"Login Successful"
);








// ROLE REDIRECT



if(user.role==="ADMIN"){



navigate("/admin-dashboard");



}

else if(user.role==="USER"){



navigate("/user-dashboard");



}

else{


alert(
"Role not assigned"
);


}



}

else{


alert(
user.message || "Invalid Login Details"
);


}




}

catch(error){



console.log(
"LOGIN ERROR",
error
);




alert(

error.response?.data?.message ||

"Login Failed"

);



}




};









return(



<div className="auth-container">



<form

onSubmit={handleLogin}

className="auth-form"

>




<div className="auth-logo">

NetworkIQ

</div>





<h2>

Welcome Back

</h2>





<p className="auth-subtitle">

Login to continue

</p>









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



<button type="submit">

Login

</button>







<p className="auth-link">


Don't have an account?


<Link to="/signup">

Sign Up

</Link>


</p>







</form>



</div>



);



}



export default Login;