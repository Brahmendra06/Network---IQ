import { useState } from "react";
import { addInventory } from "../api/inventory";

function AddInventory({ refresh }) {

  const [formData, setFormData] = useState({

    productName: "",
    sku: "",
    category: "",
    state: "",
    quantity: "",
    price: "",
    supplier: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await addInventory(formData);

      alert("Product Added Successfully");

      setFormData({

        productName: "",
        sku: "",
        category: "",
        state: "",
        quantity: "",
        price: "",
        supplier: ""

      });

      refresh();

    } catch (error) {

      alert("Failed to Add Product");

    }

  };

  return (

    <div className="add-product">

      <h3>Add New Product</h3>

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
          <option value="Telangana">Telangana</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Kerala">Kerala</option>
          <option value="Delhi">Delhi</option>
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

        <button type="submit">

          Add Product

        </button>

      </form>

    </div>

  );

}

export default AddInventory;