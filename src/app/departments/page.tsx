import Link from "next/link";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import shared from "../inner-page.module.css";
import styles from "./page.module.css";

const heroSlides = [
  "https://picsum.photos/seed/dept-hero-1/1200/500",
  "https://picsum.photos/seed/dept-hero-2/1200/500",
  "https://picsum.photos/seed/dept-hero-3/1200/500",
  "https://picsum.photos/seed/dept-hero-4/1200/500",
];

const departments = [
  {
    id: "computer",
    name: "Computer Technology",
    bangla: "কম্পিউটার টেকনোলজি",
    details:
      "Programming, web development, database, networking, cybersecurity and software project-based learning.",
    points: ["Programming Lab", "Networking Practice", "Web Project", "Industrial Attachment"],
  },
  {
    id: "electrical",
    name: "Electrical Technology",
    bangla: "ইলেকট্রিক্যাল টেকনোলজি",
    details:
      "Circuit analysis, control systems, industrial automation, motor control and electrical safety training.",
    points: ["Circuit Design", "PLC Basics", "Power System", "Industrial Safety"],
  },
  {
    id: "civil",
    name: "Civil Technology",
    bangla: "সিভিল টেকনোলজি",
    details:
      "Surveying, drafting, estimation, construction materials and practical site management skills.",
    points: ["Survey Lab", "AutoCAD Drafting", "Materials Test", "Site Planning"],
  },
  {
    id: "mechanical",
    name: "Mechanical Technology",
    bangla: "মেকানিক্যাল টেকনোলজি",
    details:
      "Manufacturing process, machine tools, CAD/CAM, maintenance and workshop-centered practical sessions.",
    points: ["Machine Shop", "CAD/CAM", "Thermal Basics", "Maintenance Skills"],
  },
];

const quickLinks = departments.map((department) => ({
  label: department.bangla,
  href: `/departments#${department.id}`,
}));

const highlights = [
  {
    title: "আধুনিক ল্যাব",
    text: "প্রতিটি টেকনোলজির জন্য hands-on practical class ও lab support রয়েছে।",
  },
  {
    title: "দক্ষ শিক্ষক",
    text: "অভিজ্ঞ শিক্ষক ও ইনস্ট্রাক্টররা theory এবং practical দুই দিকেই সহযোগিতা করেন।",
  },
  {
    title: "শিল্প সংযোগ",
    text: "ইন্ডাস্ট্রিয়াল attachment ও project work-এর মাধ্যমে বাস্তব অভিজ্ঞতা তৈরি হয়।",
  },
];

export default function DepartmentsPage() {
  return (
    <main className={shared.main}>
      <section className={styles.heroShowcase}>
        <div className={styles.heroTrack}>
          {heroSlides.map((image, index) => (
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
                <h1>চাকরি ও উচ্চশিক্ষার উপযোগী দক্ষতা-ভিত্তিক টেকনোলজি বিভাগ</h1>
                <p>
                  প্রতিটি বিভাগে রয়েছে বাস্তবমুখী শিক্ষা, ল্যাবভিত্তিক প্রশিক্ষণ এবং
                  প্রজেক্ট-কেন্দ্রিক শেখার সুযোগ।
                </p>
              </div>

              <div className={styles.highlightGrid}>
                {highlights.map((item) => (
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
              <article className={styles.departmentCard} id={department.id} key={department.id}>
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
              </article>
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
            {quickLinks.map((item) => (
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
