import {useEffect,useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
PieChart,
Pie,
Cell,
BarChart,
Bar
} from "recharts";

import {
getCategoryAnalytics,
getProductAnalytics,
getStockAnalytics
} from "../api/analytics";

import {getDashboardStats} from "../api/dashboard";

import "../styles/Analytics.css";


const demandData=[
{month:"Jan",demand:220},
{month:"Feb",demand:260},
{month:"Mar",demand:280},
{month:"Apr",demand:310},
{month:"May",demand:350},
{month:"Jun",demand:390}
];


const COLORS=[
"#2563EB",
"#22C55E",
"#F59E0B",
"#EF4444"
];


function Analytics(){

const [categoryData,setCategoryData]=useState([]);

const [productData,setProductData]=useState([]);

const [stockData,setStockData]=useState([]);


const [stats,setStats]=useState({
totalProducts:0,
totalQuantity:0,
inventoryValue:0,
lowStock:0
});


useEffect(()=>{

loadAnalytics();

},[]);



const loadAnalytics=async()=>{

try{

const category=await getCategoryAnalytics();

const products=await getProductAnalytics();

const stock=await getStockAnalytics();

const dashboard=await getDashboardStats();



setCategoryData(category.data);


setProductData(products.data);



setStockData([

{
name:"Low Stock",
value:stock.data.lowStock
},

{
name:"Normal Stock",
value:stock.data.normalStock
},

{
name:"High Stock",
value:stock.data.highStock
}

].filter(item=>item.value>0));



setStats(dashboard.data);


}
catch(error){

console.log(error);

}

};



return(

<div className="dashboard">

<Sidebar/>

<div className="main-content">

<Navbar/>


<h2 className="page-title">
Analytics Dashboard
</h2>



<div className="cards">


<DashboardCard
title="Total Products"
value={stats.totalProducts}
/>


<DashboardCard
title="Inventory Quantity"
value={stats.totalQuantity}
/>


<DashboardCard
title="Inventory Value"
value={`₹ ${stats.inventoryValue}`}
/>


<DashboardCard
title="Low Stock"
value={stats.lowStock}
/>


</div>




<div className="analytics-grid">


<div className="chart-card">

<h3>
Demand Forecast
</h3>


<ResponsiveContainer width="100%" height={300}>

<LineChart data={demandData}>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="demand"
stroke="#2563EB"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>


</div>





<div className="chart-card">

<h3>
Inventory Distribution
</h3>


<ResponsiveContainer width="100%" height={300}>


<PieChart>


<Pie
data={categoryData}
dataKey="quantity"
nameKey="category"
outerRadius={100}
label={({category,quantity})=>`${category}: ${quantity}`}
>


{
categoryData.map((item,index)=>(

<Cell
key={index}
fill={COLORS[index%COLORS.length]}
/>

))
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>


</div>







<div className="analytics-grid">


<div className="chart-card">

<h3>
Product Quantity
</h3>


<ResponsiveContainer width="100%" height={300}>


<BarChart data={productData}>


<XAxis dataKey="product"/>

<YAxis/>

<Tooltip/>


<Bar
dataKey="quantity"
fill="#2563EB"
/>


</BarChart>


</ResponsiveContainer>


</div>







<div className="chart-card">


<h3>
Stock Status
</h3>



<ResponsiveContainer width="100%" height={300}>


<PieChart>


<Pie

data={stockData}

dataKey="value"

nameKey="name"

outerRadius={100}

label={({name,value})=>`${name}: ${value}`}

>


{
stockData.map((item,index)=>(

<Cell
key={index}
fill={COLORS[index%COLORS.length]}
/>

))
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>


</div>


</div>


</div>

);


}


export default Analytics;