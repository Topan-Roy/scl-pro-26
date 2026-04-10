"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { instituteIdentity, mainNav, socialLinks, type NavItem } from "@/data/site";
import styles from "./site-header.module.css";

function normalizePath(href: string): string {
  return href.split("#")[0] || "/";
}

function isActive(pathname: string, item: NavItem): boolean {
  const itemPath = normalizePath(item.href);

  if (itemPath === "/") {
    return pathname === "/";
  }

  return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
}

function isExternal(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.shell}>
      <div className={styles.topStrip}>
        <p className={styles.login}>Comment Login</p>
        <ul className={styles.socialList}>
          {socialLinks.map((item) => (
            <li key={item.label}>
              {isExternal(item.href) ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.brandRow}>
        <Link className={styles.brand} href="/">
          <span className={styles.logoMark}>{instituteIdentity.shortName}</span>
          <span className={styles.brandText}>
            <small>Official Website</small>
            <strong>{instituteIdentity.fullName}</strong>
          </span>
        </Link>

        <div className={styles.contactBox}>
          <p>Call: {instituteIdentity.phone}</p>
          <p>Email: {instituteIdentity.email}</p>
        </div>
      </div>

      <nav className={styles.navWrap} aria-label="Main navigation">
        <button
          className={styles.menuButton}
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation-list"
        >
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>

        <ul
          className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ""}`}
          id="main-navigation-list"
        >
          {mainNav.map((item) => (
            <li className={styles.navItem} key={item.label}>
              <Link
                className={`${styles.navLink} ${isActive(pathname, item) ? styles.active : ""}`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>

              {item.children ? (
                <ul className={styles.dropdown}>
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link href={child.href} onClick={() => setIsMenuOpen(false)}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
