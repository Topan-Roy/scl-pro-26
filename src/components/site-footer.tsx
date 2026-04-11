import Link from "next/link";
import { instituteIdentity, quickFooterLinks } from "@/data/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const leftLinks = quickFooterLinks.slice(0, Math.ceil(quickFooterLinks.length / 2));
  const rightLinks = quickFooterLinks.slice(Math.ceil(quickFooterLinks.length / 2));

  return (
    <footer className={styles.shell}>
      <section className={styles.top}>
        <article className={styles.brandPanel}>
          <div className={styles.mark}>{instituteIdentity.shortName}</div>
          <h2>{instituteIdentity.fullName}</h2>
          <p>{year} All Rights Reserved</p>
        </article>

        <article className={styles.addressPanel}>
          <h3>Our Address</h3>
          <p>{instituteIdentity.fullName}</p>
          <p>{instituteIdentity.address}</p>
          <p>Tel: {instituteIdentity.phone}</p>
          <p>Email: {instituteIdentity.email}</p>
        </article>

        <article className={styles.linkPanel}>
          <ul className={styles.linkList}>
            {leftLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.linkPanel}>
          <ul className={styles.linkList}>
            {rightLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </footer>
  );
}
