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

function getSubmenuId(label: string): string {
  return `submenu-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function closeNavigation() {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }

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
          <span className={styles.logoMark} aria-hidden="true">
            <span className={styles.logoRing}>
              <span className={styles.logoCore}>
                <span className={styles.logoGlow} />
                <span className={styles.logoInitials}>{instituteIdentity.shortName}</span>
              </span>
            </span>
            <span className={styles.logoRibbon}>Est. 2001</span>
          </span>
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
          onClick={() => {
            setIsMenuOpen((current) => {
              const next = !current;

              if (!next) {
                setOpenDropdown(null);
              }

              return next;
            });
          }}
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
              <div className={styles.navLinkRow}>
                <Link
                  className={`${styles.navLink} ${isActive(pathname, item) ? styles.active : ""}`}
                  href={item.href}
                  onClick={closeNavigation}
                >
                  {item.label}
                </Link>

                {item.children ? (
                  <button
                    type="button"
                    className={styles.dropdownToggle}
                    aria-expanded={openDropdown === item.label}
                    aria-controls={getSubmenuId(item.label)}
                    onClick={() =>
                      setOpenDropdown((current) => (current === item.label ? null : item.label))
                    }
                  >
                    <span className={styles.dropdownToggleText}>Submenu</span>
                    <span
                      className={`${styles.dropdownToggleIcon} ${
                        openDropdown === item.label ? styles.dropdownToggleIconOpen : ""
                      }`}
                    />
                  </button>
                ) : null}
              </div>

              {item.children ? (
                <ul
                  className={`${styles.dropdown} ${
                    openDropdown === item.label ? styles.dropdownOpen : ""
                  }`}
                  id={getSubmenuId(item.label)}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        onClick={closeNavigation}
                      >
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
