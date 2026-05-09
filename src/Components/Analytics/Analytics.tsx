

import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { revenueData, trafficData, categoryData } from '../../data';
import styles from './AnalyticsPage.module.css';

const conversionData = [
  { month: 'Jul', rate: 3.2 }, { month: 'Aug', rate: 4.1 },
  { month: 'Sep', rate: 3.8 }, { month: 'Oct', rate: 5.2 },
  { month: 'Nov', rate: 6.1 }, { month: 'Dec', rate: 7.4 },
];

const kpis = [
  { label: 'Avg. Order Value', value: '$127', change: '+8.4%', positive: true },
  { label: 'Conversion Rate', value: '7.4%', change: '+21%', positive: true },
  { label: 'Bounce Rate', value: '42%', change: '-5%', positive: true },
  { label: 'Return Rate', value: '3.2%', change: '+0.4%', positive: false },
];

export default function AnalyticsPage() {
  return (
    <div className={styles.page}>
      <div className={`${styles.header} fade-in`}>
        <div>
          <h1 className={styles.title}>Analytics</h1>
          <p className={styles.subtitle}>Performance insights & metrics</p>
        </div>
        <div className={styles.periodSelector}>
          {['7D', '30D', '90D', '1Y'].map(p => (
            <button key={p} className={`${styles.periodBtn} ${p === '6M' ? styles.periodActive : ''}`}>{p}</button>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className={`${styles.kpiGrid} fade-in fade-in-delay-1`}>
        {kpis.map(k => (
          <div key={k.label} className={styles.kpiCard}>
            <span className={styles.kpiLabel}>{k.label}</span>
            <span className={styles.kpiVal}>{k.value}</span>
            <span className={`${styles.kpiChange} ${k.positive ? styles.pos : styles.neg}`}>
              {k.change} vs last period
            </span>
          </div>
        ))}
      </div>

      {/* Revenue trend */}
      <div className={`${styles.card} fade-in fade-in-delay-2`}>
        <div className={styles.cardHeader}>
          <div>
            <h2 className={styles.cardTitle}>Revenue Trend</h2>
            <p className={styles.cardSub}>Monthly revenue and profit margin</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={revenueData} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="rev2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: '#8888a0', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#8888a0', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: 12 }} formatter={v => `$${Number(v).toLocaleString()}`} />
            <Legend wrapperStyle={{ fontSize: 12, color: '#8888a0' }} />
            <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#fbbf24" strokeWidth={2.5} fill="url(#rev2)" dot={{ fill: '#fbbf24', r: 3 }} />
            <Line type="monotone" dataKey="profit" name="Profit" stroke="#10b981" strokeWidth={2} dot={false} strokeDasharray="5 3" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.twoCol}>
        {/* Conversion rate */}
        <div className={`${styles.card} fade-in fade-in-delay-3`}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Conversion Rate</h2>
              <p className={styles.cardSub}>Monthly trend</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={conversionData} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: '#8888a0', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#8888a0', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }} formatter={v => `${v}%`} />
              <Line type="monotone" dataKey="rate" name="Conv. Rate" stroke="#6366f1" strokeWidth={2.5} dot={{ fill: '#6366f1', r: 4, strokeWidth: 2, stroke: '#1a1a24' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic breakdown */}
        <div className={`${styles.card} fade-in fade-in-delay-4`}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Traffic Sources</h2>
              <p className={styles.cardSub}>Weekly visits by day</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={trafficData} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: '#8888a0', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#8888a0', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }} />
              <Bar dataKey="visits" name="Visits" fill="#fbbf24" radius={[3, 3, 0, 0]} fillOpacity={0.85} />
              <Bar dataKey="conversions" name="Conversions" fill="#6366f1" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category breakdown */}
      <div className={`${styles.card} fade-in fade-in-delay-5`}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Category Performance</h2>
        </div>
        <div className={styles.catGrid}>
          {categoryData.map(c => (
            <div key={c.name} className={styles.catRow}>
              <span className={styles.catName}>{c.name}</span>
              <div className={styles.catBar}>
                <div className={styles.catFill} style={{ width: `${c.value}%`, background: c.color }} />
              </div>
              <span className={styles.catVal}>{c.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}