import { Search, Plus, Pencil, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { setSearch, setFilter, setPage, setSort, deleteProduct } from '../../store/ProductsSlice';
import type { Product } from '../types/types';
import styles from './Products.module.css';

const statusColors: Record<string, { color: string; bg: string }> = {
  active: { color: '#10b981', bg: '#10b98118' },
  draft: { color: '#f59e0b', bg: '#f59e0b18' },
  archived: { color: '#8888a0', bg: '#8888a018' },
};

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const { items, search, filter, currentPage, pageSize, sortBy, sortDir } = useAppSelector(s => s.products);

  // Filter
  let filtered = items.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || p.status === filter;
    return matchSearch && matchFilter;
  });

  // Sort
  if (sortBy) {
    filtered = [...filtered].sort((a, b) => {
      const va = a[sortBy as keyof Product];
      const vb = b[sortBy as keyof Product];
      if (typeof va === 'number' && typeof vb === 'number') {
        return sortDir === 'asc' ? va - vb : vb - va;
      }
      return sortDir === 'asc'
        ? String(va).localeCompare(String(vb))
        : String(vb).localeCompare(String(va));
    });
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  function SortIcon({ col }: { col: keyof Product }) {
    if (sortBy !== col) return <span className={styles.sortNeutral}>↕</span>;
    return sortDir === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />;
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.header} fade-in`}>
        <div>
          <h1 className={styles.title}>Products</h1>
          <p className={styles.subtitle}>{total} products total</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={16} /> Add Product
        </button>
      </div>

      {/* Toolbar */}
      <div className={`${styles.toolbar} fade-in fade-in-delay-1`}>
        <div className={styles.searchWrap}>
          <Search size={14} className={styles.searchIcon} />
          <input
            className={styles.search}
            placeholder="Search products..."
            value={search}
            onChange={e => dispatch(setSearch(e.target.value))}
          />
        </div>
        <div className={styles.filters}>
          {['all', 'active', 'draft', 'archived'].map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
              onClick={() => dispatch(setFilter(f))}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className={`${styles.tableWrap} fade-in fade-in-delay-2`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => dispatch(setSort('name'))} className={styles.sortable}>
                Product <SortIcon col="name" />
              </th>
              <th onClick={() => dispatch(setSort('category'))} className={styles.sortable}>
                Category <SortIcon col="category" />
              </th>
              <th onClick={() => dispatch(setSort('price'))} className={styles.sortable}>
                Price <SortIcon col="price" />
              </th>
              <th onClick={() => dispatch(setSort('stock'))} className={styles.sortable}>
                Stock <SortIcon col="stock" />
              </th>
              <th onClick={() => dispatch(setSort('sales'))} className={styles.sortable}>
                Sales <SortIcon col="sales" />
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={7} className={styles.empty}>No products found</td>
              </tr>
            ) : paginated.map(p => {
              const sc = statusColors[p.status];
              return (
                <tr key={p.id} className={styles.row}>
                  <td>
                    <div className={styles.productCell}>
                      <span className={styles.productEmoji}>{p.image}</span>
                      <div>
                        <span className={styles.productName}>{p.name}</span>
                        <span className={styles.productId}>{p.id}</span>
                      </div>
                    </div>
                  </td>
                  <td><span className={styles.categoryTag}>{p.category}</span></td>
                  <td className={styles.price}>${p.price}</td>
                  <td>
                    <span className={p.stock === 0 ? styles.outOfStock : styles.inStock}>
                      {p.stock === 0 ? 'Out of stock' : p.stock}
                    </span>
                  </td>
                  <td className={styles.sales}>{p.sales.toLocaleString()}</td>
                  <td>
                    <span className={styles.status} style={{ color: sc.color, background: sc.bg }}>
                      {p.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.editBtn} title="Edit">
                        <Pencil size={13} />
                      </button>
                      <button
                        className={styles.deleteBtn}
                        title="Delete"
                        onClick={() => dispatch(deleteProduct(p.id))}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={`${styles.pagination} fade-in fade-in-delay-3`}>
          <span className={styles.pageInfo}>
            Showing {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, total)} of {total}
          </span>
          <div className={styles.pageButtons}>
            <button
              className={styles.pageBtn}
              onClick={() => dispatch(setPage(currentPage - 1))}
              disabled={currentPage === 1}
            >←</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                className={`${styles.pageBtn} ${p === currentPage ? styles.pageActive : ''}`}
                onClick={() => dispatch(setPage(p))}
              >{p}</button>
            ))}
            <button
              className={styles.pageBtn}
              onClick={() => dispatch(setPage(currentPage + 1))}
              disabled={currentPage === totalPages}
            >→</button>
          </div>
        </div>
      )}
    </div>
  );
}