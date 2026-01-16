"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo - Bên trái */}
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Democracy Lens</span>
          </Link>
        </div>

        {/* Navigation Tabs - Giữa */}
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navItem} ${isActive("/") ? styles.active : ""}`}
          >
            <span className={styles.navText}>Trang chủ</span>
          </Link>
          <Link
            href="/theory"
            className={`${styles.navItem} ${isActive("/theory") ? styles.active : ""}`}
          >
            <span className={styles.navText}>Lý thuyết</span>
          </Link>
          <Link
            href="/feed"
            className={`${styles.navItem} ${isActive("/feed") ? styles.active : ""}`}
          >
            <span className={styles.navText}>Tình huống</span>
          </Link>
          <Link
            href="/ai-proof"
            className={`${styles.navItem} ${isActive("/ai-proof") ? styles.active : ""}`}
          >
            <span className={styles.navText}>Minh chứng AI</span>
          </Link>
        </nav>

        {/* Right Actions */}
        <div className={styles.rightActions}>
          <div className={styles.userAvatar}>SV</div>
        </div>
      </div>
    </header>
  );
}
