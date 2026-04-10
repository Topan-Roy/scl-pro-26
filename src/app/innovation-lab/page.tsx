import Link from "next/link";
import { ARViewport } from "@/components/ar-viewport";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import shared from "../inner-page.module.css";
import styles from "./page.module.css";

const heroSlides = [
  "https://picsum.photos/seed/eclass-hero-1/1200/500",
  "https://picsum.photos/seed/eclass-hero-2/1200/500",
  "https://picsum.photos/seed/eclass-hero-3/1200/500",
  "https://picsum.photos/seed/eclass-hero-4/1200/500",
];

const eClassFeatures = [
  {
    title: "Online Class",
    text: "লাইভ ক্লাস, রেকর্ডেড সেশন এবং দ্রুত lesson review-এর সুবিধা এক জায়গায়।",
  },
  {
    title: "Skills Portal",
    text: "প্রোগ্রামিং, ডিজিটাল tools এবং project-based skill practice-এর জন্য বিশেষ সহায়তা।",
  },
  {
    title: "AR Preview",
    text: "প্র্যাকটিক্যাল class-এর আগে model ও concept visual করে শেখার সুযোগ।",
  },
];

const labUses = [
  "ইঞ্জিনিয়ারিং model ও concept AR preview-তে দেখা যায়।",
  "Physical lab-এর আগে interactive practice session করা যায়।",
  "Final project demo ও prototype presentation-এ ব্যবহার করা যায়।",
  "Computer, Electrical ও Mechanical বিভাগের শিক্ষার্থীরা একসাথে ব্যবহার করতে পারে।",
];

const quickLinks = [
  { label: "Online Class", href: "/innovation-lab" },
  { label: "Skills Portal", href: "/innovation-lab" },
  { label: "সিলেবাস", href: "/academics#syllabus" },
  { label: "যোগাযোগ", href: "/contact" },
];

const importantLinks = [
  { label: "Teacher's Portal", href: "https://teachers.gov.bd" },
  { label: "Directorate of Technical Education", href: "https://techedu.gov.bd" },
  { label: "Bangladesh Technical Education Board", href: "https://www.bteb.gov.bd" },
  { label: "National Web Portal of Bangladesh", href: "https://bangladesh.gov.bd" },
];

export default function InnovationLabPage() {
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
            <div className={styles.sectionBar}>E-Class</div>
            <div className={styles.featureBody}>
              <div className={styles.featureCopy}>
                <p className={styles.kicker}>INNOVATION LAB</p>
                <h1>ডিজিটাল ক্লাস, স্কিল প্র্যাকটিস আর AR অভিজ্ঞতা একই প্ল্যাটফর্মে</h1>
                <p>
                  এই page-এ online learning, skills portal এবং আপনার project-এর
                  existing AR demo একসাথে দেখানো হয়েছে।
                </p>
              </div>

              <div className={styles.featureGrid}>
                {eClassFeatures.map((item) => (
                  <article className={styles.featureCard} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.twoCol}>
            <article className={styles.contentPanel}>
              <div className={styles.sectionBar}>কিভাবে ব্যবহার করা হয়</div>
              <ul className={styles.listBody}>
                {labUses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.contentPanel}>
              <div className={styles.sectionBar}>ডেমো সম্পর্কে</div>
              <div className={styles.textBody}>
                <p>
                  Compatible mobile browser হলে immersive AR session চালু করা যাবে।
                  Desktop user-রাও animated 3D scene preview দেখতে পারবেন।
                </p>
                <p>
                  এই module future online practical class, virtual lab demo এবং
                  student project showcase-এর জন্য ব্যবহার করা যাবে।
                </p>
              </div>
            </article>
          </section>

          <section className={styles.contentPanel}>
            <div className={styles.sectionBar}>AR / WebXR Demo</div>
            <div className={styles.viewportWrap}>
              <ARViewport />
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

          <section className={styles.sidePanel}>
            <h3>গুরুত্বপূর্ণ লিংক</h3>
            <ul className={styles.impLinks}>
              {importantLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
