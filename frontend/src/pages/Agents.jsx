import {useEffect,useState} from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
    getAIAgents,
    getAILogs,
    runStockAI,
    runDemandAI,
    runTransferAI,
    clearAILogs
} from "../api/ai";

import "../styles/Agents.css";



function Agents(){



const [agents,setAgents] = useState([]);

const [logs,setLogs] = useState([]);

const [showLogs,setShowLogs] = useState(false);

const [result,setResult] = useState(null);

const [showResult,setShowResult] = useState(false);

const [selectedAgent,setSelectedAgent] = useState("");







// LOAD AI AGENTS

const loadAgents = async()=>{


    try{


        const response = await getAIAgents();


        setAgents(response.data);



    }
    catch(error){


        console.log(error);


    }


};







// CHECK AI ENABLE/DISABLE FROM SETTINGS

const checkAIEnabled = ()=>{


    const settings =
    JSON.parse(
        localStorage.getItem("aiSettings")
    );



    if(
        settings &&
        settings.aiAutoRun === "Disable"
    ){


        alert(
            "AI Agent is disabled from Settings"
        );


        return false;


    }



    return true;


};








// VIEW LOGS BY AGENT

const viewLogs = async(agentName)=>{


    try{


        const response = await getAILogs();



        const filteredLogs =
        response.data.filter(

            (log)=>

            log.agentName === agentName

        );



        setLogs(filteredLogs);



        setSelectedAgent(agentName);



        setShowLogs(true);



    }
    catch(error){


        console.log(error);


    }


};









// CLEAR LOGS

const clearLogs = async()=>{


    try{


        await clearAILogs();


        setLogs([]);



        alert(
            "AI Logs Cleared"
        );



    }
    catch(error){


        console.log(error);



        alert(
            "Clear Failed"
        );


    }


};









// RUN AI AGENT

const runAgent = async(name)=>{



    // CHECK SETTINGS

    if(!checkAIEnabled()){


        return;


    }






    try{


        let response;





        if(
            name === 
            "Stock Optimization Agent"
        ){


            response =
            await runStockAI();



        }




        else if(
            name ===
            "Demand Forecast Agent"
        ){


            response =
            await runDemandAI();



        }






        else if(
            name ===
            "Transfer Optimization Agent"
        ){


            response =
            await runTransferAI();



        }







        setResult(
            response.data
        );



        setShowResult(true);




    }
    catch(error){



        console.log(error);



        alert(
            "AI Execution Failed"
        );


    }



};









useEffect(()=>{


    loadAgents();


},[]);









return(


<div className="dashboard">


<Sidebar />



<div className="main-content">


<Navbar />




<h2 className="page-title">

    AI Agent Monitor

</h2>







<div className="agents-grid">


{

agents.map((agent,index)=>(


<div

className="agent-card"

key={index}

>




<h3>

{agent.name}

</h3>





<span className="green">

{agent.status}

</span>







<p>


<strong>

Analysis

</strong>


{agent.message}


</p>







<p>


<strong>

Recommendation

</strong>


{agent.recommendation}


</p>







<button

onClick={()=>runAgent(agent.name)}

>

Run AI

</button>







<button

onClick={()=>
viewLogs(agent.name)
}

>

View Logs

</button>





</div>



))

}



</div>









{
showLogs &&


(


<div className="modal">


<div className="modal-content">





<h2>

{selectedAgent} Logs

</h2>







{

logs.length===0

?

<h3>

No Logs Found

</h3>


:


logs.map((item)=>(


<div

className="log-card"

key={item.id}

>


<p>

<b>
Agent:
</b>

{" "}

{item.agentName}

</p>



<p>

<b>
Action:
</b>

{" "}

{item.action}

</p>



<p>

<b>
Product:
</b>

{" "}

{item.product}

</p>



<p>

<b>
Decision:
</b>

{" "}

{item.decision}

</p>



<p>

<b>
Status:
</b>

{" "}

{item.status}

</p>



<p>

<b>
Time:
</b>

{" "}

{item.createdAt}

</p>




</div>



))


}







<button

className="clear-btn"

onClick={clearLogs}

>

Clear

</button>







<button

className="reject"

onClick={()=>
setShowLogs(false)
}

>

Close

</button>





</div>


</div>



)

}









{
showResult && result &&


(


<div className="modal">


<div className="modal-content">





<h2>

AI Decision Result

</h2>






<p>

<b>
Agent:
</b>

{" "}

{result.agentName}

</p>





<p>

<b>
Action:
</b>

{" "}

{result.action}

</p>





<p>

<b>
Product:
</b>

{" "}

{result.product}

</p>





<p>

<b>
Decision:
</b>

{" "}

{result.decision}

</p>





<p>

<b>
Status:
</b>

{" "}

{result.status}

</p>





<p>

<b>
Time:
</b>

{" "}

{result.createdAt}

</p>







<button

className="reject"

onClick={()=>
setShowResult(false)
}

>

Close

</button>





</div>


</div>



)

}







</div>


</div>


);


}



export default Agents;