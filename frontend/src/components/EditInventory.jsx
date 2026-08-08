import { useState, useEffect } from "react";
import { updateInventory } from "../api/inventory";

function EditInventory({ product, onClose, refresh }) {

    const [formData, setFormData] = useState({

        productName: "",
        sku: "",
        category: "",
        state: "",
        quantity: "",
        price: "",
        supplier: ""

    });

    useEffect(() => {

        if (product) {

            setFormData({

                productName: product.productName || "",
                sku: product.sku || "",
                category: product.category || "",
                state: product.state || "",
                quantity: product.quantity || "",
                price: product.price || "",
                supplier: product.supplier || ""

            });

        }

    }, [product]);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateInventory(product.id, formData);

            alert("Product Updated Successfully");

            refresh();

            onClose();

        }

        catch (error) {

            alert("Update Failed");

        }

    };

    return (

        <div className="modal">

            <div className="modal-content">

                <h2>Edit Product</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="productName"
                        placeholder="Product Name"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="sku"
                        placeholder="SKU"
                        value={formData.sku}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Select State</option>

                        <option value="Andhra Pradesh">
                            Andhra Pradesh
                        </option>

                        <option value="Telangana">
                            Telangana
                        </option>

                        <option value="Karnataka">
                            Karnataka
                        </option>

                        <option value="Tamil Nadu">
                            Tamil Nadu
                        </option>

                        <option value="Kerala">
                            Kerala
                        </option>

                        <option value="Delhi">
                            Delhi
                        </option>

                    </select>

                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="supplier"
                        placeholder="Supplier"
                        value={formData.supplier}
                        onChange={handleChange}
                        required
                    />

                    <div className="buttons">

                        <button
                            type="button"
                            className="reject"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="approve"
                        >
                            Update Product
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditInventory;