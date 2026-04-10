import Link from "next/link";
import { instituteIdentity, quickFooterLinks } from "@/data/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.shell}>
      <section className={styles.top}>
        <article className={styles.address}>
          <h2>{instituteIdentity.fullName}</h2>
          <p>{instituteIdentity.address}</p>
          <p>Tel: {instituteIdentity.phone}</p>
          <p>Email: {instituteIdentity.email}</p>
        </article>

        <article className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            {quickFooterLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.bottom}>
        <p>
          Copyright {new Date().getFullYear()} {instituteIdentity.fullName}. All rights
          reserved.
        </p>
      </section>
    </footer>
  );
}
