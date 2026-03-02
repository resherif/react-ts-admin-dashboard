import {type Product} from '../types/products';
import ProductsRow from './ProductsRow';
type Props = {
    products: Product[],
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
}
export const ProductTable = ({ products, onEdit, onDelete }: Props) => {
    return (
        <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-x-auto' >
            <table className="w-full text-sm" >
                <thead className='bg-gray-50 text-gray-600 '>
                    <tr>
                        <th className='text-left px-6 py-3'>product</th>
                        <th className='text-left px-6 py-3'>price</th>
                        <th className='text-left px-6 py-3'>stock</th>
                        <th className='text-left px-6 py-3'>status</th>
                        <th className='text-left px-6 py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => 
                       (<ProductsRow key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />)
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default ProductTable;