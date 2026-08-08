import {useState,useEffect} from "react";


import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


import {
    getSettings,
    saveSettings
} from "../api/settings";


import "../styles/Settings.css";



function Settings(){



const [aiAutoRun,setAiAutoRun] =
useState("Enable");



const [emailNotification,setEmailNotification] =
useState(false);



const [theme,setTheme] =
useState("light");






// ==========================
// LOAD SETTINGS FROM API
// ==========================


useEffect(()=>{


const loadSettings = async()=>{


try{


const response =
await getSettings();



if(response.data){



setAiAutoRun(

response.data.aiAutoRun || "Enable"

);




setEmailNotification(

response.data.emailNotification ?? false

);




setTheme(

response.data.theme || "light"

);



}



}

catch(error){


console.log(
"Settings Load Error",
error
);



}



};



loadSettings();



},[]);









// ==========================
// SAVE SETTINGS
// ==========================


const handleSave = async()=>{



const settings = {


aiAutoRun,

emailNotification,

theme


};





try{



// SAVE TO BACKEND

await saveSettings(
settings
);





// SAVE LOCAL STORAGE

localStorage.setItem(

"aiSettings",

JSON.stringify(settings)

);







// APPLY THEME


if(theme==="dark"){


document.body.className =
"dark-theme";


}

else{


document.body.className =
"light-theme";


}







alert(

"Settings Saved Successfully"

);



}

catch(error){


console.log(
"Settings Save Error",
error
);



alert(

"Settings Save Failed"

);



}



};









return(



<div className="dashboard">


<Sidebar/>




<div className="main-content">


<Navbar/>





<h2 className="page-title">

Settings

</h2>







<div className="settings-container">







{/* AI AGENT SETTINGS */}



<div className="setting-card">



<h3>

AI Agent Settings

</h3>






<label>

AI Auto Run

</label>







<select

value={aiAutoRun}

onChange={(e)=>

setAiAutoRun(
e.target.value
)

}

>



<option value="Enable">

Enable

</option>




<option value="Disable">

Disable

</option>



</select>





</div>









{/* NOTIFICATION SETTINGS */}




<div className="setting-card">



<h3>

Notification Settings

</h3>






<label>

Email Notifications

</label>







<input

type="checkbox"

checked={emailNotification}


onChange={(e)=>

setEmailNotification(

e.target.checked

)

}


/>





</div>









{/* THEME SETTINGS */}




<div className="setting-card">



<h3>

System Theme

</h3>







<select

value={theme}

onChange={(e)=>

setTheme(

e.target.value

)

}

>




<option value="light">

Light

</option>





<option value="dark">

Dark

</option>





</select>





</div>









<button

className="save-btn"

onClick={handleSave}

>

Save Settings

</button>







</div>






</div>





</div>



);



}



export default Settings;