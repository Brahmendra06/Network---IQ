import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InventoryTable from "../components/InventoryTable";
import AddInventory from "../components/AddInventory";
import EditInventory from "../components/EditInventory";

import { getInventory } from "../api/inventory";

import "../styles/Inventory.css";

function Inventory() {

    const [inventory, setInventory] = useState([]);

    const [search, setSearch] = useState("");

    const [stateFilter, setStateFilter] = useState("All States");

    const [categoryFilter, setCategoryFilter] = useState("All Categories");

    const [editingProduct, setEditingProduct] = useState(null);

    const loadInventory = async () => {

        try {

            const res = await getInventory();

            setInventory(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadInventory();

    }, []);

    const filteredInventory = inventory.filter((item) => {

        const searchMatch =

            item.productName.toLowerCase().includes(search.toLowerCase()) ||

            item.sku.toLowerCase().includes(search.toLowerCase()) ||

            item.category.toLowerCase().includes(search.toLowerCase()) ||

            item.supplier.toLowerCase().includes(search.toLowerCase()) ||

            item.state.toLowerCase().includes(search.toLowerCase());

        const stateMatch =

            stateFilter === "All States" ||

            item.state === stateFilter;

        const categoryMatch =

            categoryFilter === "All Categories" ||

            item.category === categoryFilter;

        return searchMatch && stateMatch && categoryMatch;

    });

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="inventory-page">

                    <div className="inventory-header">

                        <h2>Inventory Management</h2>

                        <div className="filters">

                            <input
                                type="text"
                                placeholder="Search Product..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                            <select
                                value={stateFilter}
                                onChange={(e) =>
                                    setStateFilter(e.target.value)
                                }
                            >

                                <option>All States</option>
                                <option>Andhra Pradesh</option>
                                <option>Telangana</option>
                                <option>Karnataka</option>
                                <option>Tamil Nadu</option>
                                <option>Kerala</option>
                                <option>Delhi</option>

                            </select>

                            <select
                                value={categoryFilter}
                                onChange={(e) =>
                                    setCategoryFilter(e.target.value)
                                }
                            >

                                <option>All Categories</option>
                                <option>Food</option>
                                <option>Grocery</option>
                                <option>Dairy</option>
                                <option>Electronics</option>
                                <option>Personal Care</option>

                            </select>

                        </div>

                    </div>

                    <AddInventory refresh={loadInventory} />

                    <InventoryTable
                        inventory={filteredInventory}
                        refresh={loadInventory}
                        onEdit={setEditingProduct}
                    />

                    {editingProduct && (

                        <EditInventory
                            product={editingProduct}
                            refresh={loadInventory}
                            onClose={() => setEditingProduct(null)}
                        />

                    )}

                </div>

            </div>

        </div>

    );

}

export default Inventory;