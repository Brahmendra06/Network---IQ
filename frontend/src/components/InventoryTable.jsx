import { deleteInventory } from "../api/inventory";
import "../styles/Table.css";


function InventoryTable({

    inventory = [],
    refresh = () => {},
    onEdit = () => {},
    hideActions = false

}) {


    const handleDelete = async (id) => {


        const confirmDelete = window.confirm(
            "Delete this product?"
        );


        if (!confirmDelete) return;


        try {


            await deleteInventory(id);


            alert("Product Deleted Successfully");


            refresh();


        } catch(error) {


            console.log(error);

            alert("Delete Failed");


        }


    };



    return (

        <div className="table-container">


            <table>


                <thead>


                    <tr>

                        <th>ID</th>

                        <th>Product</th>

                        <th>SKU</th>

                        <th>Category</th>

                        <th>State</th>

                        <th>Quantity</th>

                        <th>Price</th>

                        <th>Supplier</th>


                        {
                            !hideActions &&
                            <th>Actions</th>
                        }


                    </tr>


                </thead>




                <tbody>


                {

                    inventory.length === 0 ?


                    (

                        <tr>

                            <td

                            colSpan={hideActions ? "8" : "9"}

                            style={{
                                textAlign:"center"
                            }}

                            >

                                No Inventory Found


                            </td>


                        </tr>


                    )


                    :


                    (

                        inventory.map((item)=>(


                            <tr key={item.id}>


                                <td>{item.id}</td>


                                <td>{item.productName}</td>


                                <td>{item.sku}</td>


                                <td>{item.category}</td>


                                <td>{item.state}</td>


                                <td>{item.quantity}</td>


                                <td>₹ {item.price}</td>


                                <td>{item.supplier}</td>



                                {


                                !hideActions &&

                                <td>


                                    <button

                                    className="edit-btn"

                                    onClick={() => onEdit(item)}

                                    >

                                        Edit

                                    </button>




                                    <button

                                    className="delete-btn"

                                    onClick={() => handleDelete(item.id)}

                                    >

                                        Delete

                                    </button>


                                </td>


                                }



                            </tr>


                        ))


                    )


                }


                </tbody>


            </table>


        </div>

    );


}


export default InventoryTable;