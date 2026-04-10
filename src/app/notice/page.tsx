import Link from "next/link";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import shared from "../inner-page.module.css";
import styles from "./page.module.css";

const heroSlides = [
  "https://picsum.photos/seed/result-hero-1/1200/500",
  "https://picsum.photos/seed/result-hero-2/1200/500",
  "https://picsum.photos/seed/result-hero-3/1200/500",
  "https://picsum.photos/seed/result-hero-4/1200/500",
];

const departments = [
  "কম্পিউটার টেকনোলজি",
  "ইলেকট্রিক্যাল টেকনোলজি",
  "সিভিল টেকনোলজি",
  "মেকানিক্যাল টেকনোলজি",
];

const semesters = ["১ম", "২য়", "৩য়", "৪র্থ", "৫ম", "৬ষ্ঠ", "৭ম", "৮ম"];
const terms = ["মিডটার্ম", "ফাইনাল", "বোর্ড পরীক্ষা"];
const sessions = ["২০২২-২৩", "২০২৩-২৪", "২০২৪-২৫", "২০২৫-২৬"];

const quickLinks = [
  { label: "ক্লাস রুটিন", href: "/academics#curriculum" },
  { label: "সিলেবাস", href: "/academics#syllabus" },
  { label: "পরীক্ষার রুটিন", href: "/academics#courses" },
  { label: "ফলাফল", href: "/notice" },
];

const importantLinks = [
  { label: "Ministry of Education", href: "https://moedu.gov.bd" },
  { label: "Teacher's Portal", href: "https://teachers.gov.bd" },
  { label: "Directorate of Technical Education", href: "https://techedu.gov.bd" },
  { label: "National Curriculum & Textbook Board, Bangladesh", href: "https://nctb.gov.bd" },
  { label: "National Web Portal of Bangladesh", href: "https://bangladesh.gov.bd" },
];

export default function NoticePage() {
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
          <span>4</span>
          <span className={styles.activeSlide}>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
        </div>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.formShell}>
            <div className={styles.sectionBar}>Exam Result</div>
            <div className={styles.formBody}>
              <form className={styles.resultForm}>
                <label>
                  * Please Enter Registration (xxyyzzz) :
                  <input type="text" name="registration" />
                </label>

                <label>
                  ** Department
                  <select name="department" defaultValue="">
                    <option value="" disabled>
                      Select Department
                    </option>
                    {departments.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  ** Semester
                  <select name="semester" defaultValue="">
                    <option value="" disabled>
                      Select Semester
                    </option>
                    {semesters.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  * Term :
                  <select name="term" defaultValue="">
                    <option value="" disabled>
                      Select Term
                    </option>
                    {terms.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  ** Session
                  <select name="session" defaultValue="">
                    <option value="" disabled>
                      Select Session
                    </option>
                    {sessions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <button type="button">Search</button>
              </form>
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
