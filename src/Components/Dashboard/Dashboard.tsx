import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from 'lucide-react';
import { revenueData, categoryData, trafficData, orders } from '../../data';
import styles from './Dashboard.module.css';

const stats = [
  { label: 'Total Revenue', value: '$92,450', change: +18.2, icon: DollarSign, color: '#fbbf24' },
  { label: 'Total Orders', value: '1,284', change: +12.5, icon: ShoppingCart, color: '#6366f1' },
  { label: 'Products', value: '124', change: +4.1, icon: Package, color: '#10b981' },
  { label: 'Customers', value: '8,492', change: -2.3, icon: Users, color: '#f43f5e' },
];

const statusColors: Record<string, string> = {
  completed: '#10b981', processing: '#6366f1',
  pending: '#f59e0b', cancelled: '#f43f5e',
};

function StatCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const Icon = stat.icon;
  const up = stat.change >= 0;
  return (
    <div className={`${styles.statCard} fade-in fade-in-delay-${delay}`}>
      <div className={styles.statTop}>
        <div className={styles.statLabel}>{stat.label}</div>
        <div className={styles.statIconWrap} style={{ background: `${stat.color}18` }}>
          <Icon size={16} style={{ color: stat.color }} />
        </div>
      </div>
      <div className={styles.statValue}>{stat.value}</div>
      <div className={`${styles.statChange} ${up ? styles.up : styles.down}`}>
        {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        <span>{Math.abs(stat.change)}% vs last month</span>
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltipLabel}>{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color, fontSize: 12 }}>
            {p.name}: <strong>{typeof p.value === 'number' && p.name === 'revenue' ? `$${p.value.toLocaleString()}` : p.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const recentOrders = orders.slice(0, 5);

  return (
    <div className={styles.page}>
      <div className={`${styles.header} fade-in`}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Welcome back, Admin — here's what's happening today.</p>
        </div>
        <div className={styles.dateBadge}>Dec 18, 2024</div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        {stats.map((s, i) => <StatCard key={s.label} stat={s} delay={i + 1} />)}
      </div>

      {/* Charts row */}
      <div className={styles.chartsRow}>
        {/* Revenue chart */}
        <div className={`${styles.card} ${styles.revenueChart} fade-in fade-in-delay-3`}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Revenue Overview</h2>
              <p className={styles.cardSub}>Last 6 months performance</p>
            </div>
            <div className={styles.chartLegend}>
              <span><i style={{ background: '#fbbf24' }} />Revenue</span>
              <span><i style={{ background: '#6366f1' }} />Profit</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="profGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: '#8888a0', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#8888a0', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" name="revenue" stroke="#fbbf24" strokeWidth={2} fill="url(#revGrad)" dot={false} />
              <Area type="monotone" dataKey="profit" name="profit" stroke="#6366f1" strokeWidth={2} fill="url(#profGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category pie */}
        <div className={`${styles.card} ${styles.categoryChart} fade-in fade-in-delay-4`}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Categories</h2>
              <p className={styles.cardSub}>Sales by category</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={45} outerRadius={70}
                dataKey="value" stroke="none">
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className={styles.pieLabels}>
            {categoryData.map(c => (
              <div key={c.name} className={styles.pieLabel}>
                <span className={styles.pieDot} style={{ background: c.color }} />
                <span>{c.name}</span>
                <span className={styles.pieVal}>{c.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className={styles.chartsRow}>
        {/* Traffic bar */}
        <div className={`${styles.card} ${styles.trafficChart} fade-in fade-in-delay-3`}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Weekly Traffic</h2>
              <p className={styles.cardSub}>Visits vs conversions</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={trafficData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }} barGap={3}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: '#8888a0', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#8888a0', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: 12 }} />
              <Bar dataKey="visits" name="Visits" fill="#6366f1" radius={[3, 3, 0, 0]} fillOpacity={0.8} />
              <Bar dataKey="conversions" name="Conversions" fill="#fbbf24" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent orders */}
        <div className={`${styles.card} ${styles.recentOrders} fade-in fade-in-delay-4`}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Recent Orders</h2>
              <p className={styles.cardSub}>Latest 5 transactions</p>
            </div>
            <a href="/orders" className={styles.viewAll}>View all →</a>
          </div>
          <div className={styles.ordersList}>
            {recentOrders.map(o => (
              <div key={o.id} className={styles.orderRow}>
                <div className={styles.orderAvatar}>{o.customer.split(' ').map(n => n[0]).join('')}</div>
                <div className={styles.orderInfo}>
                  <span className={styles.orderName}>{o.customer}</span>
                  <span className={styles.orderId}>{o.id}</span>
                </div>
                <span className={styles.orderAmount}>${o.amount}</span>
                <span className={styles.statusBadge} style={{
                  color: statusColors[o.status],
                  background: `${statusColors[o.status]}18`,
                }}>
                  {o.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}