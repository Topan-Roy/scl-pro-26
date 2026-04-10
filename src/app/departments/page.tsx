import Link from "next/link";
import {
  departmentHeroSlides,
  departmentHighlights,
  departments,
  departmentQuickLinks,
} from "@/data/departments";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import shared from "../inner-page.module.css";
import styles from "./page.module.css";

export default function DepartmentsPage() {
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
            <div className={styles.sectionBar}>টেকনোলজি বিভাগসমূহ</div>
            <div className={styles.featureBody}>
              <div className={styles.featureCopy}>
                <p className={styles.kicker}>TECHNOLOGY</p>
                <h1>চাকরি ও উচ্চশিক্ষার উপযোগী দক্ষতাভিত্তিক টেকনোলজি বিভাগ</h1>
                <p>
                  প্রতিটি বিভাগে রয়েছে বাস্তবমুখী শিক্ষা, ল্যাবভিত্তিক প্রশিক্ষণ এবং
                  প্রজেক্ট-কেন্দ্রিক শেখার সুযোগ।
                </p>
              </div>

              <div className={styles.highlightGrid}>
                {departmentHighlights.map((item) => (
                  <article className={styles.highlightCard} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.departmentGrid}>
            {departments.map((department) => (
              <Link className={styles.departmentCard} href={`/departments/${department.id}`} key={department.id}>
                <div className={styles.cardHead}>
                  <small>{department.name}</small>
                  <h2>{department.bangla}</h2>
                </div>
                <p>{department.details}</p>
                <ul className={styles.pointList}>
                  {department.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <span className={styles.cardAction}>বিস্তারিত দেখুন</span>
              </Link>
            ))}
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
              <Link href={item.href} key={item.label}>
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
