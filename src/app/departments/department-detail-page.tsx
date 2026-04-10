/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Department, departmentHeroSlides, departmentQuickLinks } from "@/data/departments";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import shared from "../inner-page.module.css";
import styles from "./page.module.css";

type DepartmentDetailPageProps = {
  department: Department;
};

export function DepartmentDetailPage({ department }: DepartmentDetailPageProps) {
  const currentPath = `/departments/${department.id}`;

  return (
    <main className={shared.main}>
      <section className={styles.heroShowcase}>
        <div className={styles.heroTrack}>
          {departmentHeroSlides.map((image, index) => (
            <article
              className={styles.heroCard}
              key={image}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.22)), url('${image}')`,
              }}
            >
              <span>{index + 1}</span>
            </article>
          ))}
        </div>
        <div className={styles.heroCounter}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span className={styles.activeSlide}>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
        </div>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.featurePanel}>
            <div className={styles.sectionBar}>{department.bangla}</div>
            <div className={styles.featureBody}>
              <div className={styles.backLinkRow}>
                <Link className={styles.backLink} href="/departments">
                  সব টেকনোলজি
                </Link>
              </div>

              <div className={styles.detailHeroBlock}>
                <div className={styles.featureCopy}>
                  <p className={styles.kicker}>{department.name}</p>
                  <h1>{department.bangla}</h1>
                  <p>{department.details}</p>

                  <ul className={styles.pillList}>
                    {department.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.metaGrid}>
                  {department.stats.map((item) => (
                    <article className={styles.metaCard} key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </article>
                  ))}
                </div>
              </div>

              <div className={styles.bannerCard}>
                <img
                  alt={department.bangla}
                  className={styles.bannerImage}
                  loading="lazy"
                  src={department.images[0]}
                />
              </div>
            </div>
          </section>

          <section className={styles.detailPanel}>
            <div className={styles.sectionBar}>বিস্তারিত তথ্য</div>
            <div className={styles.detailBody}>
              <div className={styles.detailGrid}>
                <article className={styles.detailCard}>
                  <h3>বিভাগ সম্পর্কে</h3>
                  <ul className={styles.detailList}>
                    {department.moreDetails.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className={styles.detailCard}>
                  <h3>সম্ভাব্য কাজের ক্ষেত্র</h3>
                  <ul className={styles.pillList}>
                    {department.careers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>

              <section className={styles.detailSection}>
                <div className={styles.sectionLead}>
                  <h3>প্র্যাকটিক্যাল ফোকাস</h3>
                  <p>নিচের বিষয়গুলো এই টেকনোলজির hands-on training ও lab practice-এর মূল অংশ।</p>
                </div>

                <div className={styles.skillGrid}>
                  {department.points.map((point) => (
                    <article className={styles.skillCard} key={point}>
                      <h4>{point}</h4>
                      <p>{department.bangla} বিভাগের নিয়মিত practical এবং project activity-এর অংশ।</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className={styles.detailSection}>
                <div className={styles.sectionLead}>
                  <h3>টেকনোলজির কিছু ছবি</h3>
                  <p>বিভাগের lab, classroom এবং practical learning environment-এর sample visual।</p>
                </div>

                <div className={styles.galleryGrid}>
                  {department.images.map((image, index) => (
                    <article className={styles.galleryCard} key={image}>
                      <img
                        alt={`${department.bangla} ${index + 1}`}
                        className={styles.galleryImage}
                        loading="lazy"
                        src={image}
                      />
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>

        <aside className={styles.rightCol}>
          <section className={styles.sidePanel}>
            <h3>নোটিশ বোর্ড</h3>
            <ul className={styles.noticeList}>
              {sharedNoticeBoard.map((item) => (
                <li key={`${item.date}-${item.text}`}>
                  <span>{item.date}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.quickLinks}>
            {departmentQuickLinks.map((item) => (
              <Link
                className={item.href === currentPath ? styles.quickLinkActive : undefined}
                href={item.href}
                key={item.label}
              >
                <span>{item.label}</span>
                <b>⚙</b>
              </Link>
            ))}
          </section>

          <section className={styles.sidePanel}>
            <h3>{sharedSidebarCalendar.title}</h3>
            <table className={styles.calendar}>
              <thead>
                <tr>
                  {sharedSidebarCalendar.weekdays.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sharedSidebarCalendar.rows.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, index) => (
                      <td key={`${idx}-${index}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </aside>
      </section>
    </main>
  );
}
