import Link from "next/link";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import styles from "./page.module.css";

const technologyTiles = [
  { title: "Civil Engineering", tone: "blue" },
  { title: "Electrical Engineering", tone: "pink" },
  { title: "Computer Engineering", tone: "purple" },
  { title: "Mechanical Engineering", tone: "blue" },
  { title: "Architecture", tone: "pink" },
  { title: "Apparel Manufacturing", tone: "purple" },
  { title: "Wet Processing", tone: "purple" },
  { title: "Fashion Designing", tone: "pink" },
  { title: "Fabric Manufacturing", tone: "blue" },
  { title: "Yarn Manufacturing", tone: "blue" },
];

const noticeBoard = sharedNoticeBoard;
const legacyNoticeBoard = [
  { date: "০৩ ডিসেম্বর ২০২৪", text: "বাংলাদেশের প্রতিটি ঘরকে ভালোবাসার মানুষ।" },
  { date: "০২ ডিসেম্বর ২০২৪", text: "মেধা বৃত্তির বিজ্ঞপ্তি প্রকাশ।" },
  { date: "১৭ ফেব্রুয়ারি ২০২৪", text: "বার্ষিক ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক সপ্তাহ।" },
  { date: "০৩ জানুয়ারি ২০২৪", text: "Happy New Year 2024" },
  { date: "২৯ জুন ২০২৩", text: "Diploma admission notice update." },
];

void legacyNoticeBoard;

const classWidgets = ["Class Routine", "Sylabus", "Exam Routine", "Result"];

const heroSlides = [
  {
    title: "Field Survey Training",
    image: "https://picsum.photos/seed/bgc-field/1200/700",
  },
  {
    title: "Practical Safety Session",
    image: "https://picsum.photos/seed/bgc-lab/1200/700",
  },
  {
    title: "Industrial Exposure Visit",
    image: "https://picsum.photos/seed/bgc-campus/1200/700",
  },
];

const importantLinks = [
  { label: "Ministry of Education", href: "https://moedu.gov.bd" },
  { label: "Teacher's Portal", href: "https://teachers.gov.bd" },
  { label: "Directorate of Technical Education", href: "https://techedu.gov.bd" },
  { label: "National Web Portal of Bangladesh", href: "https://bangladesh.gov.bd" },
  { label: "Bangladesh Technical Education Board (BTEB)", href: "https://www.bteb.gov.bd" },
  { label: "Search Result of Bekti Goto College", href: "/notice" },
];

const calendarRows = sharedSidebarCalendar.rows;
const legacyCalendarRows = [
  ["", "১", "২", "৩", "৪", "৫"],
  ["৬", "৭", "৮", "৯", "১০", "১১", "১২"],
  ["১৩", "১৪", "১৫", "১৬", "১৭", "১৮", "১৯"],
  ["২০", "২১", "২২", "২৩", "২৪", "২৫", "২৬"],
  ["২৭", "২৮", "২৯", "৩০", "", "", ""],
];

void legacyCalendarRows;

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.breaking}>
        <span>খবর</span>
        <p>
          ০৮ (আট) বছর মেয়াদী ডিপ্লোমা ইঞ্জিনিয়ারিং এবং সরাসরি ৩য় সেমিস্টারে ভর্তি
          কার্যক্রম চলমান।
        </p>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.heroShowcase}>
            <div className={styles.heroMedia}>
              <div className={styles.heroTrack}>
                {heroSlides.map((slide) => (
                  <article className={styles.heroCard} key={slide.title}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={styles.heroImage}
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{slide.title}</span>
                  </article>
                ))}
              </div>
              <div className={styles.heroCounter}>
                <span>1</span>
                <span>2</span>
                <span className={styles.activeSlide}>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
              </div>
            </div>
          </section>

          <section className={styles.panel}>
            <div className={styles.panelHead}>
              <h2>Diploma In Engineering Course Structure</h2>
              <Link href="/departments">...আরও দেখুন</Link>
            </div>
            <div className={styles.techGrid}>
              {technologyTiles.map((item) => (
                <article
                  className={`${styles.techTile} ${styles[item.tone]}`}
                  key={item.title}
                >
                  {item.title}
                </article>
              ))}
            </div>
          </section>

          <section className={styles.panel}>
            <div className={styles.panelHead}>
              <h2>Admission Going On</h2>
              <Link href="/admission">...আরও দেখুন</Link>
            </div>
            <div className={styles.poster}>
              <p className={styles.posterTop}>
                নিজস্ব ক্যাম্পাসে বৃহত্তর ঢাকার সর্বপ্রথম ও সর্ববৃহৎ
                শীতাতপ নিয়ন্ত্রিত প্রাইভেট ইঞ্জিনিয়ারিং কলেজ
              </p>
              <h1>BEKTI GOTO COLLEGE</h1>

              <div className={styles.posterBody}>
                <div className={styles.discount}>
                  <p>১৫ জুন পর্যন্ত</p>
                  <p>বিশেষ ছাড়ে</p>
                  <p>নির্ধারিত</p>
                  <p>টেকনোলজিতে</p>
                  <strong>৮০%</strong>
                  <p className={styles.cta}>ভর্তি চলছে</p>
                </div>

                <div className={styles.galleryLine}>
                  <article className={styles.galleryCard}>Practical Lab</article>
                  <article className={styles.galleryCard}>Campus Building</article>
                  <article className={styles.galleryCard}>Achievement Ceremony</article>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.panel}>
            <div className={styles.panelHead}>
              <h2>প্রতিষ্ঠানের ইতিহাস</h2>
              <Link href="/about">...আরও দেখুন</Link>
            </div>
            <div className={styles.textBody}>
              <p>
                বেক্তি গতো কলেজ, ঢাকা। যা বাংলাদেশ কারিগরি শিক্ষা
                বোর্ড, ঢাকা কর্তৃক অনুমোদিত ও নিবন্ধিত। ২০০১ সাল থেকে শিক্ষার্থীদের
                দক্ষ জনবল তৈরি সহ অন্যান্য প্রয়োজনীয় ও ডিমান্ডিং কোর্স পরিচালনার
                লক্ষ্যে এই প্রতিষ্ঠানের জন্ম হয়। সময়ের সাথে নতুন নতুন ল্যাব ও
                প্রযুক্তি সংযুক্ত করে প্রতিষ্ঠানটি আধুনিক শিক্ষার ধারায় এগিয়ে চলেছে।
              </p>
            </div>
          </section>

          <section className={styles.panel}>
            <div className={styles.panelHead}>
              <h2>কোর্সের গুরুত্ব</h2>
              <Link href="/academics">...আরও দেখুন</Link>
            </div>
            <div className={styles.textBody}>
              <p>
                ইঞ্জিনিয়ারিং শিক্ষার অন্যতম মাধ্যম হলো ডিপ্লোমা ইঞ্জিনিয়ারিং।
                তাত্ত্বিক ও ব্যবহারিক দক্ষতার সমন্বয়ে শিক্ষার্থীদের কর্মমুখী করে
                গড়ে তোলা হয়। এস.এস.সি পাশের শিক্ষার্থীদের জন্য ৪ বছর মেয়াদী ডিপ্লোমা
                কোর্স উচ্চশিক্ষা ও চাকরি দুই ক্ষেত্রেই শক্ত ভিত্তি তৈরি করে।
              </p>
            </div>
          </section>
        </div>

        <aside className={styles.rightCol}>
          <section className={styles.sidePanel}>
            <h3>নোটিশ বোর্ড</h3>
            <ul className={styles.noticeList}>
              {noticeBoard.map((item) => (
                <li key={`${item.date}-${item.text}`}>
                  <span>{item.date}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.quickLinks}>
            {classWidgets.map((item) => (
              <Link href="/academics" key={item}>
                <span>{item}</span>
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
                {calendarRows.map((row, idx) => (
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
            <h3>Attendence</h3>
            <ul className={styles.attendance}>
              <li>
                <span>Total Student</span>
                <strong>2450</strong>
              </li>
              <li>
                <span>Today Present</span>
                <strong>2231</strong>
              </li>
              <li>
                <span>Yesterday Present</span>
                <strong>2194</strong>
              </li>
            </ul>
          </section>

          <section className={styles.sidePanel}>
            <h3>গুরুত্বপূর্ণলিংক</h3>
            <ul className={styles.impLinks}>
              {importantLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
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
