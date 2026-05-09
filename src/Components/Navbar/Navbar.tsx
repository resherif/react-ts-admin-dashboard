import { Menu, Bell, Search, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

interface NavbarProps {
  toggleSideBar: () => void;
}

export default function Navbar({ toggleSideBar }: NavbarProps) {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={toggleSideBar} aria-label="Toggle sidebar">
          <Menu size={18} />
        </button>
        <div className={styles.searchWrap}>
          <Search size={14} className={styles.searchIcon} />
          <input
            className={styles.search}
            type="text"
            placeholder="Search anything..."
          />
          <span className={styles.shortcut}>⌘K</span>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.notifBtn} aria-label="Notifications">
          <Bell size={16} />
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.divider} />

        <button className={styles.avatar}>
          <span className={styles.avatarImg}>AD</span>
          <div className={styles.avatarInfo}>
            <span className={styles.avatarName}>Admin</span>
            <span className={styles.avatarRole}>Super Admin</span>
          </div>
          <ChevronDown size={14} className={styles.chevron} />
        </button>
      </div>
    </header>
  );
}