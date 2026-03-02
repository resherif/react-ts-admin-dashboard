import { useEffect, useState } from "react";
import type { Product } from "../types/products";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  initialData?: Product | null;
};

const ProductModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);


  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPrice(initialData.price);
      setStock(initialData.stock);
    } else {
      setName("");
      setPrice(0);
      setStock(0);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    const product: Product = {
      id: initialData ? initialData.id : Date.now(),
      name,
      price,
      stock,
      status: stock > 0 ? "Active" : "Out of Stock",
    };

    onSave(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold">
          {initialData ? "Edit Product" : "Add Product"}
        </h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
