import {useEffect,useState} from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import TransferTable from "../components/TransferTable";
import AddTransfer from "../components/AddTransfer";

import {
    getTransfers,
    generateTransferPlan
} from "../api/transfers";

import "../styles/Transfers.css";


function Transfers(){


    const [transfers,setTransfers] = useState([]);




    const loadTransfers = async()=>{

        try{

            const response = await getTransfers();

            setTransfers(response.data);

        }
        catch(error){

            console.log(error);

        }

    };






    const generatePlan = async()=>{


        try{


            await generateTransferPlan();


            alert(
                "New Transfer Plan Generated"
            );


            loadTransfers();


        }
        catch(error){


            console.log(error);


            alert(
                "Plan Generation Failed"
            );


        }


    };






    useEffect(()=>{


        loadTransfers();


    },[]);






    return(


        <div className="dashboard">



            <Sidebar/>





            <div className="main-content">



                <Navbar/>





                <h2 className="page-title">

                    Transfer Recommendations

                </h2>






                <button

                    className="generate-btn"

                    onClick={generatePlan}

                >

                    Generate New Plan


                </button>







                <AddTransfer

                    refresh={loadTransfers}

                />








                <TransferTable

                    transfers={transfers}

                    refresh={loadTransfers}

                />





            </div>




        </div>



    );

}


export default Transfers;