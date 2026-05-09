import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Package, ShoppingCart, Users,
  BarChart2, Settings, HelpCircle, Zap
} from 'lucide-react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
  { icon: Package, label: 'Products', to: '/products' },
  { icon: ShoppingCart, label: 'Orders', to: '/orders' },
  { icon: Users, label: 'Customers', to: '/customers' },
  { icon: BarChart2, label: 'Analytics', to: '/analytics' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', to: '/settings' },
  { icon: HelpCircle, label: 'Help', to: '/help' },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Zap size={16} fill="currentColor" />
        </div>
        <div className={styles.logoText}>
          <span className={styles.logoName}>NEXUS</span>
          <span className={styles.logoSub}>Admin Panel</span>
        </div>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <span className={styles.navLabel}>MAIN MENU</span>
        {navItems.map(({ icon: Icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <Icon size={17} className={styles.navIcon} />
            <span className={styles.navText}>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.divider} />

      <nav className={styles.nav}>
        <span className={styles.navLabel}>SUPPORT</span>
        {bottomItems.map(({ icon: Icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <Icon size={17} className={styles.navIcon} />
            <span className={styles.navText}>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Upgrade card */}
      <div className={styles.upgradeCard}>
        <div className={styles.upgradeIcon}>✦</div>
        <p className={styles.upgradeTitle}>Upgrade to Pro</p>
        <p className={styles.upgradeDesc}>Unlock advanced analytics & reports</p>
        <button className={styles.upgradeBtn}>Upgrade Now</button>
      </div>
    </aside>
  );
}