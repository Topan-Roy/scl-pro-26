"use client";

import { useEffect, useState } from "react";
import { commonInnerHeroSlides } from "@/data/site-images";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import styles from "./page.module.css";

const heroSlides = [
  {
    title: "Electronics Lab Session",
    image: commonInnerHeroSlides[0],
  },
  {
    title: "Industry Visit Program",
    image: commonInnerHeroSlides[1],
  },
  {
    title: "Practical Workshop",
    image: commonInnerHeroSlides[2],
  },
];

const notices = sharedNoticeBoard;
const legacyNotices = [
  { date: "০৩ ডিসেম্বর ২০২৪", text: "বাংলাদেশের প্রতিটি ঘরকে ভালোবাসার মানুষ।" },
  { date: "০২ ডিসেম্বর ২০২৪", text: "মেধা বৃত্তির বিজ্ঞপ্তি প্রকাশ।" },
  { date: "১৭ ফেব্রুয়ারি ২০২৪", text: "বার্ষিক ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক সপ্তাহ।" },
  { date: "০৩ জানুয়ারি ২০২৪", text: "Happy New Year 2024" },
  { date: "২৯ জুন ২০২৩", text: "Notice" },
];

void legacyNotices;

const officeDirectory = [
  { office: "Admission Office", hour: "09:00 AM - 04:30 PM", contact: "+880 1716-000001" },
  { office: "Accounts Office", hour: "09:30 AM - 04:00 PM", contact: "+880 1716-000002" },
  { office: "Exam Cell", hour: "10:00 AM - 03:30 PM", contact: "+880 1716-000003" },
];

const boardMembers = [
  "Mr. Ramprasad Sarker (Chairman)",
  "Mrs. Sufia Akter (Director)",
  "Md. Hasan Al Mamun (Member)",
];

const sectionKeys = ["principal", "governing-body", "vice-principal", "directory"] as const;
type SectionKey = (typeof sectionKeys)[number];

function toSectionKey(hash: string): SectionKey | null {
  const cleanHash = hash.replace("#", "");
  if (sectionKeys.includes(cleanHash as SectionKey)) {
    return cleanHash as SectionKey;
  }

  return null;
}

export default function AdministrationPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("principal");

  useEffect(() => {
    const applySectionFromHash = () => {
      const hashSection = toSectionKey(window.location.hash);
      setActiveSection(hashSection ?? "principal");
    };

    applySectionFromHash();
    window.addEventListener("hashchange", applySectionFromHash);
    return () => window.removeEventListener("hashchange", applySectionFromHash);
  }, []);

  useEffect(() => {
    const section = document.getElementById(activeSection);
    if (!section) {
      return;
    }

    section.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeSection]);

  const tabClass = (key: SectionKey) =>
    `${styles.viewTab} ${activeSection === key ? styles.viewTabActive : ""}`;

  return (
    <main className={styles.main}>
      <section className={styles.breaking}>
        <span>খবর</span>
        <p>০৮ (আট) বছর মেয়াদি ডিপ্লোমা ইঞ্জিনিয়ারিং এবং সরাসরি ৩য়/৪র্থ পর্বে ভর্তি চলমান।</p>
      </section>

      <section className={styles.heroShowcase}>
        <div className={styles.heroTrack}>
          {heroSlides.map((slide) => (
            <article
              className={styles.heroCard}
              key={slide.title}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.34)), url('${slide.image}')`,
              }}
            >
              <span>{slide.title}</span>
            </article>
          ))}
        </div>
        <div className={styles.heroCounter}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span className={styles.active}>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
        </div>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.viewTabs}>
            <a className={tabClass("principal")} href="#principal">
              View Principal
            </a>
            <a className={tabClass("governing-body")} href="#governing-body">
              View Board
            </a>
            <a className={tabClass("vice-principal")} href="#vice-principal">
              View Vice Principal
            </a>
            <a className={tabClass("directory")} href="#directory">
              View Directory
            </a>
          </section>

          {activeSection === "principal" ? (
            <section className={styles.principalPanel} id="principal">
              <h2>অধ্যক্ষ</h2>
              <div className={styles.principalBody}>
                <div className={styles.photoBox}>
                  <div
                    className={styles.photo}
                    role="img"
                    aria-label="Topan Roy portrait"
                    style={{
                      backgroundImage: "url('/IMG_20260330_175127.png')",
                    }}
                  />
                </div>
                <div className={styles.bioBox}>
                  <h3>TOPAN ROY</h3>
                  <ul>
                    <li>
                      <strong>পদবী:</strong> Software Engineer
                    </li>
                    <li>
                      <strong>নাম:</strong> Topan Roy
                    </li>
                    <li>
                      <strong>ই-মেইল:</strong> roytopan734@gmail.com
                    </li>
                    <li>
                      <strong>ঠিকানা:</strong> Dhaka, Bangladesh
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          ) : null}

          {activeSection === "governing-body" ? (
            <section className={styles.infoPanel} id="governing-body">
              <h2>Board Of Directors</h2>
              {boardMembers.length > 0 ? (
                <ul className={styles.memberList}>
                  {boardMembers.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.emptyState}>ডাটা নাই</p>
              )}
            </section>
          ) : null}

          {activeSection === "vice-principal" ? (
            <section className={styles.infoPanel} id="vice-principal">
              <h2>Vice Principal</h2>
              <p className={styles.emptyState}>ডাটা নাই</p>
            </section>
          ) : null}

          {activeSection === "directory" ? (
            <section className={styles.infoPanel} id="directory">
              <h2>Office Directory</h2>
              {officeDirectory.length > 0 ? (
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Office</th>
                      <th>Service Hour</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {officeDirectory.map((row) => (
                      <tr key={row.office}>
                        <td>{row.office}</td>
                        <td>{row.hour}</td>
                        <td>{row.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className={styles.emptyState}>ডাটা নাই</p>
              )}
            </section>
          ) : null}
        </div>

        <aside className={styles.rightCol}>
          <section className={styles.sidePanel}>
            <h3>নোটিশ বোর্ড</h3>
            <ul className={styles.noticeList}>
              {notices.map((item) => (
                <li key={`${item.date}-${item.text}`}>
                  <span>{item.date}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.quickLinks}>
            <a href="#directory">
              <span>Class Routine</span>
              <b>⚙</b>
            </a>
            <a href="#directory">
              <span>Sylabus</span>
              <b>⚙</b>
            </a>
            <a href="#directory">
              <span>Exam Routine</span>
              <b>⚙</b>
            </a>
            <a href="#directory">
              <span>Result</span>
              <b>⚙</b>
            </a>
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
