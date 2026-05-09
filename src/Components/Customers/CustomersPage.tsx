import { Search, MapPin, ShoppingBag } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { setSearch, setPage } from '../../store/CustomerSlice';
import styles from './CustomersPage.module.css';

export default function CustomersPage() {
  const dispatch = useAppDispatch();
  const { items, search, currentPage, pageSize } = useAppSelector(s => s.customers);

  const filtered = items.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.location.toLowerCase().includes(search.toLowerCase())
  );

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const avatarColors = ['#fbbf24', '#6366f1', '#10b981', '#f43f5e', '#f59e0b', '#8b5cf6', '#06b6d4', '#ec4899'];

  return (
    <div className={styles.page}>
      <div className={`${styles.header} fade-in`}>
        <div>
          <h1 className={styles.title}>Customers</h1>
          <p className={styles.subtitle}>{total} customers registered</p>
        </div>
      </div>

      {/* Summary */}
      <div className={`${styles.summaryRow} fade-in fade-in-delay-1`}>
        {[
          { label: 'Total Customers', value: items.length },
          { label: 'Active', value: items.filter(c => c.status === 'active').length },
          { label: 'Inactive', value: items.filter(c => c.status === 'inactive').length },
          { label: 'Avg. Orders', value: (items.reduce((a, c) => a + c.orders, 0) / items.length).toFixed(1) },
        ].map(s => (
          <div key={s.label} className={styles.summaryCard}>
            <span className={styles.summaryVal}>{s.value}</span>
            <span className={styles.summaryLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={`${styles.searchWrap} fade-in fade-in-delay-2`}>
        <Search size={14} className={styles.searchIcon} />
        <input
          className={styles.search}
          placeholder="Search customers..."
          value={search}
          onChange={e => dispatch(setSearch(e.target.value))}
        />
      </div>

      <div className={`${styles.grid} fade-in fade-in-delay-3`}>
        {paginated.map((c, i) => {
          const color = avatarColors[i % avatarColors.length];
          return (
            <div key={c.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar} style={{ background: `${color}22`, borderColor: `${color}44`, color }}>
                  {c.avatar}
                </div>
                <span className={`${styles.statusBadge} ${c.status === 'active' ? styles.active : styles.inactive}`}>
                  {c.status}
                </span>
              </div>
              <h3 className={styles.name}>{c.name}</h3>
              <p className={styles.email}>{c.email}</p>
              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <MapPin size={11} /> {c.location}
                </span>
                <span className={styles.metaItem}>
                  <ShoppingBag size={11} /> {c.orders} orders
                </span>
              </div>
              <div className={styles.divider} />
              <div className={styles.spent}>
                <span className={styles.spentLabel}>Total Spent</span>
                <span className={styles.spentVal}>${c.spent.toLocaleString()}</span>
              </div>
              <div className={styles.joined}>Member since {c.joined}</div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className={`${styles.pagination} fade-in fade-in-delay-4`}>
          <span className={styles.pageInfo}>Showing {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, total)} of {total}</span>
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