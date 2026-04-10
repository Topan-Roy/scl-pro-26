import Link from "next/link";
import { instituteIdentity, sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import shared from "../inner-page.module.css";
import styles from "./page.module.css";

const heroSlides = [
  "https://picsum.photos/seed/contact-lab-1/1200/500",
  "https://picsum.photos/seed/contact-lab-2/1200/500",
  "https://picsum.photos/seed/contact-lab-3/1200/500",
  "https://picsum.photos/seed/contact-lab-4/1200/500",
];

const quickLinks = [
  { label: "ক্লাস রুটিন", href: "/academics#curriculum" },
  { label: "সিলেবাস", href: "/academics#syllabus" },
  { label: "পরীক্ষার রুটিন", href: "/academics#courses" },
  { label: "ফলাফল", href: "/academics#exam-result" },
];

const importantLinks = [
  { label: "Ministry of Education", href: "https://moedu.gov.bd" },
  { label: "Teacher's Portal", href: "https://teachers.gov.bd" },
  { label: "Directorate of Technical Education", href: "https://techedu.gov.bd" },
  { label: "National Web Portal of Bangladesh", href: "https://bangladesh.gov.bd" },
  { label: "Bangladesh Technical Education Board", href: "https://www.bteb.gov.bd" },
];

const infoCards = [
  {
    title: "অফিস সময়",
    value: "রবিবার - বৃহস্পতিবার | সকাল ৯:০০ - বিকাল ৪:৩০",
  },
  {
    title: "ফোন",
    value: instituteIdentity.phone,
  },
  {
    title: "ইমেইল",
    value: instituteIdentity.email,
  },
  {
    title: "ঠিকানা",
    value: instituteIdentity.address,
  },
];

export default function ContactPage() {
  return (
    <main className={shared.main}>
      <section className={styles.heroShowcase}>
        <div className={styles.heroTrack}>
          {heroSlides.map((image, index) => (
            <article
              className={styles.heroCard}
              key={image}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.18)), url('${image}')`,
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
          <section className={styles.formShell}>
            <div className={styles.sectionBar}>যোগাযোগ</div>
            <div className={styles.formBody}>
              <div className={styles.formCopy}>
                <h1>আমাদের সাথে যোগাযোগ করুন</h1>
                <p>
                  ভর্তি, হিসাব, একাডেমিক আপডেট অথবা সাধারণ তথ্যের জন্য নিচের ফর্মটি
                  পূরণ করুন।
                </p>
              </div>

              <form className={styles.contactForm}>
                <label>
                  আপনার নাম
                  <input type="text" name="name" />
                </label>

                <label>
                  আপনার ইমেইল
                  <input type="email" name="email" />
                </label>

                <label>
                  বিষয়
                  <input type="text" name="subject" />
                </label>

                <label>
                  বার্তা
                  <textarea name="message" rows={5} />
                </label>

                <button type="button">পাঠান</button>
              </form>
            </div>
          </section>

          <section className={styles.infoPanel} id="faq">
            <div className={styles.sectionBar}>দ্রুত তথ্য</div>
            <div className={styles.infoGrid}>
              {infoCards.map((item) => (
                <article className={styles.infoCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </article>
              ))}
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
