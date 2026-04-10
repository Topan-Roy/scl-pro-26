"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import styles from "./page.module.css";

type AboutSectionKey = "history" | "rules" | "library" | "hostel";

const sectionOrder: AboutSectionKey[] = ["history", "rules", "library", "hostel"];

const sectionCopy: Record<
  AboutSectionKey,
  { title: string; description: string; points: string[] }
> = {
  history: {
    title: "Institute History",
    description:
      "Bekti Goto College প্রতিষ্ঠার মূল লক্ষ্য ছিল ব্যবহারিকভিত্তিক কারিগরি শিক্ষা ছড়িয়ে দেওয়া। সময়ের সাথে সাথে আধুনিক ল্যাব, দক্ষ শিক্ষক এবং কর্মমুখী কোর্সের সমন্বয়ে প্রতিষ্ঠানটি শিক্ষার্থীদের জন্য একটি নির্ভরযোগ্য শিক্ষা পরিবেশ তৈরি করেছে।",
    points: [
      "প্রতিষ্ঠার শুরু থেকেই ডিপ্লোমা পর্যায়ের দক্ষতা উন্নয়নকে অগ্রাধিকার দেওয়া হয়েছে।",
      "শ্রেণিকক্ষের শিক্ষার পাশাপাশি হাতে-কলমে ল্যাবভিত্তিক শিক্ষা চালু আছে।",
      "শিল্পখাতের চাহিদা অনুযায়ী কোর্স ও প্রশিক্ষণ কার্যক্রম নিয়মিত হালনাগাদ করা হয়।",
    ],
  },
  rules: {
    title: "Rules And Regulation",
    description:
      "প্রতিষ্ঠানের শৃঙ্খলা, একাডেমিক পরিবেশ এবং সবার জন্য একটি নিরাপদ ক্যাম্পাস বজায় রাখতে কিছু মৌলিক নিয়ম মেনে চলা বাধ্যতামূলক।",
    points: [
      "শিক্ষার্থীদের নিয়মিত উপস্থিতি এবং নির্ধারিত পোশাকবিধি অনুসরণ করতে হবে।",
      "ক্লাস, ল্যাব, অ্যাসাইনমেন্ট ও পরীক্ষার সময়সূচি মেনে চলা আবশ্যক।",
      "ক্যাম্পাসে শৃঙ্খলাভঙ্গ বা অসদাচরণের ক্ষেত্রে প্রশাসনিক ব্যবস্থা নেওয়া হবে।",
    ],
  },
  library: {
    title: "Library",
    description:
      "প্রতিষ্ঠানের লাইব্রেরিতে বিভাগভিত্তিক পাঠ্যপুস্তক, রেফারেন্স বই, গাইডলাইন এবং স্ব-অধ্যয়নের উপযোগী পাঠসামগ্রী সংরক্ষিত আছে।",
    points: [
      "নিয়মিত ক্লাস ডে-তে শিক্ষার্থীরা লাইব্রেরি ব্যবহার করতে পারে।",
      "বিভিন্ন টেকনোলজির জন্য আলাদা রেফারেন্স ও সহায়ক বই রয়েছে।",
      "পরীক্ষা প্রস্তুতি ও প্রজেক্ট কাজের জন্য নীরব পাঠাগার পরিবেশ নিশ্চিত করা হয়।",
    ],
  },
  hostel: {
    title: "Hostel",
    description:
      "বহিরাগত শিক্ষার্থীদের জন্য হোস্টেল সংক্রান্ত তথ্য, সিট বরাদ্দ এবং প্রয়োজনীয় সহায়তা প্রশাসনিক দপ্তরের মাধ্যমে সমন্বয় করা হয়।",
    points: [
      "সিট বরাদ্দের জন্য আলাদা আবেদন ও যাচাই প্রক্রিয়া অনুসরণ করা হয়।",
      "বহিরাগত ও দূরবর্তী এলাকার শিক্ষার্থীরা অগ্রাধিকার ভিত্তিতে সহায়তা পায়।",
      "চূড়ান্ত ভর্তি সম্পন্নের পর হোস্টেল সংক্রান্ত দিকনির্দেশনা প্রদান করা হয়।",
    ],
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

const sectionLinks = [
  { label: "Institute History", href: "/about#history" },
  { label: "Rules And Regulation", href: "/about#rules" },
  { label: "Library", href: "/about#library" },
  { label: "Hostel", href: "/about#hostel" },
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

function resolveSection(hash: string): AboutSectionKey {
  const cleanHash = hash.replace("#", "");
  if (sectionOrder.includes(cleanHash as AboutSectionKey)) {
    return cleanHash as AboutSectionKey;
  }

  return "history";
}

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<AboutSectionKey>("history");

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
        <p>প্রতিষ্ঠানের ইতিহাস, নীতিমালা, লাইব্রেরি ও হোস্টেল সংক্রান্ত তথ্য এখানে পাওয়া যাবে।</p>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.heroShowcase}>
            <div
              className={styles.heroFrame}
              role="img"
              aria-label="Institute campus overview"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.28)), url('https://picsum.photos/seed/about-campus/1600/720')",
              }}
            />
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
          </section>

          {sectionOrder.map((key) => (
            <span className={styles.anchor} id={key} key={key} />
          ))}

          <section className={styles.coursePanel}>
            <h2>{activeCopy.title}</h2>
            <div className={styles.courseBody}>
              <p>{activeCopy.description}</p>
              <ul className={styles.pointList}>
                {activeCopy.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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
            {sectionLinks.map((item) => (
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
