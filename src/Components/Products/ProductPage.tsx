import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { addProduct, editProduct, deleteProduct } from "../../store/ProductsSlice";
import type { Product } from "../types/products";
import ProductModal from "./ProductsModal";
import ProductTable from "./ProductTable";
const ProductPage = () => {
  const products = useSelector(
    (state: RootState) => state.products.items
  );
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const handleDeleteProduct = (id: number) => {
    if (confirm("Are you sure?"))
      dispatch(deleteProduct(id));
  };
  const handleSave = (product: Product) => {
    if (selectedProduct) {
      dispatch(editProduct(product));

    } else {
      dispatch(addProduct(product))
    }
    setIsModalOpen(false);
    setSelectedProduct(null);
  }
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          onClick={() => {
            setSelectedProduct(null)
            setIsModalOpen(true)
          }}
          className="my-6 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>
      <ProductTable products={products} onEdit={(p) => {
        setSelectedProduct(p);
        setIsModalOpen(true);
      }}
        onDelete={handleDeleteProduct} />
      <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} initialData={selectedProduct} />


    </div>
  );
}
export default ProductPage