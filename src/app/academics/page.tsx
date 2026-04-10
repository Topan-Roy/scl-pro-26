"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import styles from "./page.module.css";

type AcademicSectionKey =
  | "curriculum"
  | "annual-activities"
  | "syllabus"
  | "courses"
  | "exam-result";

const sectionOrder: AcademicSectionKey[] = [
  "curriculum",
  "annual-activities",
  "syllabus",
  "courses",
  "exam-result",
];

const sectionCopy: Record<AcademicSectionKey, { title: string; description: string }> = {
  curriculum: {
    title: "পাঠক্রম",
    description:
      "ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্সসমূহ বোর্ড নির্ধারিত পাঠক্রম অনুযায়ী পরিচালিত হয়। প্রতিটি সেমিস্টারে তত্ত্বীয় পাঠের পাশাপাশি ব্যবহারিক ক্লাস ও ল্যাব কার্যক্রম সম্পন্ন করা হয়।",
  },
  "annual-activities": {
    title: "বার্ষিক কার্যক্রম",
    description:
      "বার্ষিক শিক্ষা সফর, ক্রীড়া প্রতিযোগিতা, সাংস্কৃতিক অনুষ্ঠান, সেমিনার এবং জাতীয় দিবস পালনসহ বিভিন্ন সহশিক্ষা কার্যক্রম সারা বছর আয়োজন করা হয়।",
  },
  syllabus: {
    title: "সিলেবাস",
    description:
      "প্রত্যেক বিভাগের সিলেবাস বাংলাদেশ কারিগরি শিক্ষা বোর্ডের নির্দেশনা অনুযায়ী প্রণীত। বিভাগভিত্তিক বিষয়, ল্যাব ও মূল্যায়ন কাঠামো সিলেবাসে উল্লেখ আছে।",
  },
  courses: {
    title: "কোর্স তালিকা",
    description:
      "প্রতিটি টেকনোলজিতে বেসিক সায়েন্স, ইঞ্জিনিয়ারিং ড্রইং, ব্যবহারিক ট্রেনিং, ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট এবং প্রজেক্টভিত্তিক কোর্স অন্তর্ভুক্ত রয়েছে।",
  },
  "exam-result": {
    title: "পরীক্ষার ফলাফল",
    description:
      "ইন-কোর্স, ব্যবহারিক, টার্ম ফাইনাল এবং বোর্ড পরীক্ষার ফলাফল নিয়মিতভাবে প্রকাশ করা হয়। শিক্ষার্থীরা বিভাগীয় অফিস বা নির্ধারিত নোটিশের মাধ্যমে ফলাফল সংগ্রহ করতে পারে।",
  },
};

const noticeBoard = sharedNoticeBoard;
const legacyNoticeBoard = [
  { date: "০৩ ডিসেম্বর ২০২৪", text: "বাংলাদেশের প্রতিটি ঘরকে ভালোবাসার মানুষ।" },
  { date: "০২ ডিসেম্বর ২০২৪", text: "মেধা বৃত্তির বিজ্ঞপ্তি প্রকাশ।" },
  { date: "১৭ ফেব্রুয়ারি ২০২৪", text: "বার্ষিক ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক সপ্তাহ।" },
  { date: "০৩ জানুয়ারি ২০২৪", text: "Happy New Year 2024" },
  { date: "২৯ জুন ২০২৩", text: "Notice" },
];

void legacyNoticeBoard;

const classWidgets = [
  { label: "Class Routine", href: "/academics#curriculum" },
  { label: "Sylabus", href: "/academics#syllabus" },
  { label: "Exam Routine", href: "/academics#courses" },
  { label: "Result", href: "/academics#exam-result" },
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

function resolveSection(hash: string): AcademicSectionKey {
  const cleanHash = hash.replace("#", "");
  if (sectionOrder.includes(cleanHash as AcademicSectionKey)) {
    return cleanHash as AcademicSectionKey;
  }

  return "curriculum";
}

export default function AcademicsPage() {
  const [activeSection, setActiveSection] = useState<AcademicSectionKey>("curriculum");

  useEffect(() => {
    const applyFromHash = () => {
      setActiveSection(resolveSection(window.location.hash));
    };

    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const activeCopy = sectionCopy[activeSection];

  return (
    <main className={styles.main}>
      <section className={styles.breaking}>
        <span>খবর</span>
        <p>১৫ জনের মধ্যে ভর্তি হলেই ২টি আকর্ষণীয় উপহার...</p>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.heroShowcase}>
            <div
              className={styles.heroFrame}
              role="img"
              aria-label="Academics campus building"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.28)), url('https://picsum.photos/seed/academics-campus/1600/720')",
              }}
            />
            <div className={styles.heroCounter}>
              <span>1</span>
              <span className={styles.activeSlide}>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </div>
          </section>

          {sectionOrder.map((key) => (
            <span className={styles.anchor} id={key} key={key} />
          ))}

          <section className={styles.coursePanel}>
            <h2>{activeCopy.title}</h2>
            <div className={styles.courseBody}>
              <p>{activeCopy.description}</p>
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
        </aside>
      </section>
    </main>
  );
}
