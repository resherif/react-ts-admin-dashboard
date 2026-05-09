import { Search } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { setSearch, setStatusFilter, setPage } from '../../store/OrderSlice';
import styles from './Orders.module.css';

const statusConfig: Record<string, { color: string; bg: string }> = {
  completed: { color: '#10b981', bg: '#10b98118' },
  processing: { color: '#6366f1', bg: '#6366f118' },
  pending: { color: '#f59e0b', bg: '#f59e0b18' },
  cancelled: { color: '#f43f5e', bg: '#f43f5e18' },
};

export default function OrdersPage() {
  const dispatch = useAppDispatch();
  const { items, search, statusFilter, currentPage, pageSize } = useAppSelector(s => s.orders);

  const filtered = items.filter(o => {
    const matchSearch =
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const statusCounts = ['completed', 'processing', 'pending', 'cancelled'].reduce((acc, s) => {
    acc[s] = items.filter(o => o.status === s).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className={styles.page}>
      <div className={`${styles.header} fade-in`}>
        <div>
          <h1 className={styles.title}>Orders</h1>
          <p className={styles.subtitle}>{total} orders found</p>
        </div>
      </div>

      {/* Status summary */}
      <div className={`${styles.statusCards} fade-in fade-in-delay-1`}>
        {Object.entries(statusCounts).map(([status, count]) => {
          const sc = statusConfig[status];
          return (
            <div
              key={status}
              className={`${styles.statusCard} ${statusFilter === status ? styles.statusCardActive : ''}`}
              onClick={() => dispatch(setStatusFilter(statusFilter === status ? 'all' : status))}
              style={statusFilter === status ? { borderColor: sc.color + '55', background: sc.bg } : {}}
            >
              <span className={styles.statusCount} style={{ color: sc.color }}>{count}</span>
              <span className={styles.statusLabel} style={{ color: statusFilter === status ? sc.color : undefined }}>
                {status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Toolbar */}
      <div className={`${styles.toolbar} fade-in fade-in-delay-2`}>
        <div className={styles.searchWrap}>
          <Search size={14} className={styles.searchIcon} />
          <input
            className={styles.search}
            placeholder="Search by customer, order ID, or product..."
            value={search}
            onChange={e => dispatch(setSearch(e.target.value))}
          />
        </div>
        <div className={styles.filters}>
          {['all', 'completed', 'processing', 'pending', 'cancelled'].map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${statusFilter === f ? styles.filterActive : ''}`}
              onClick={() => dispatch(setStatusFilter(f))}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className={`${styles.tableWrap} fade-in fade-in-delay-3`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr><td colSpan={7} className={styles.empty}>No orders found</td></tr>
            ) : paginated.map(o => {
              const sc = statusConfig[o.status];
              return (
                <tr key={o.id} className={styles.row}>
                  <td className={styles.orderId}>{o.id}</td>
                  <td>
                    <div className={styles.customerCell}>
                      <span className={styles.avatar}>
                        {o.customer.split(' ').map(n => n[0]).join('')}
                      </span>
                      <div>
                        <span className={styles.customerName}>{o.customer}</span>
                        <span className={styles.customerEmail}>{o.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className={styles.product}>{o.product}</td>
                  <td className={styles.items}>{o.items}</td>
                  <td className={styles.amount}>${o.amount.toLocaleString()}</td>
                  <td className={styles.date}>{o.date}</td>
                  <td>
                    <span className={styles.status} style={{ color: sc.color, background: sc.bg }}>
                      <span className={styles.statusDot} style={{ background: sc.color }} />
                      {o.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className={`${styles.pagination} fade-in fade-in-delay-4`}>
          <span className={styles.pageInfo}>
            Showing {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, total)} of {total}
          </span>
          <div className={styles.pageButtons}>
            <button className={styles.pageBtn} onClick={() => dispatch(setPage(currentPage - 1))} disabled={currentPage === 1}>←</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button key={p} className={`${styles.pageBtn} ${p === currentPage ? styles.pageActive : ''}`} onClick={() => dispatch(setPage(p))}>{p}</button>
            ))}
            <button className={styles.pageBtn} onClick={() => dispatch(setPage(currentPage + 1))} disabled={currentPage === totalPages}>→</button>
          </div>
        </div>
      )}
    </div>
  );
}