import { type Product } from "../types/products";
type Props = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};
export default function ProductRow({ product, onEdit, onDelete }: Props) {
  return (
    <tr className="border-t">
      <td className="px-6 py-4 ">{product.name}</td>
      <td className="px-6 py-4 ">{product.price}</td>
      <td className="px-6 py-4 ">{product.stock}</td>
      <td className="px-6 py-4 "><span className={`px-3 py-1 rounded-full text-xs font-medium ${product.status === "Active" ? "bg-green-100, text-green-700" : "bg-red-100 , text-red-700"}`}>{product.status}</span></td>
      <td className="px-6 py-4 space-x-2">
        <button className="text-blue-600 hover:underline" onClick={() => onEdit(product)}>Edit</button>
        <button className="text-red-600 hover:underline" onClick={() => onDelete(product.id)}>Delete</button>
      </td>
    </tr>
  )
}