"use client";

import Link from "next/link";
import { useEffect } from "react";
import { campusImages } from "@/data/site-images";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import styles from "./page.module.css";

const aboutSections = [
  {
    id: "history",
    title: "Institute History",
    description:
      "TM Engineering College, Dhaka প্রতিষ্ঠার মূল লক্ষ্য হচ্ছে আধুনিক কারিগরি শিক্ষা, বাস্তবভিত্তিক প্রশিক্ষণ এবং দক্ষ জনশক্তি তৈরি করা। প্রতিষ্ঠার শুরু থেকেই শিক্ষার্থীদের জন্য প্রযুক্তিনির্ভর, শৃঙ্খলাপূর্ণ এবং কর্মমুখী পরিবেশ গড়ে তোলার উপর জোর দেওয়া হয়েছে।",
    points: [
      "প্রতিষ্ঠানটি কারিগরি শিক্ষাকে সহজলভ্য ও কর্মমুখী করতে কাজ করছে।",
      "প্রশিক্ষণ, ল্যাব ও প্রকল্পভিত্তিক শিক্ষার উপর বিশেষ গুরুত্ব দেওয়া হয়।",
      "শিক্ষার্থীদের নৈতিকতা, নেতৃত্ব ও দায়িত্ববোধ গঠনে সহায়ক পরিবেশ রয়েছে।",
    ],
  },
  {
    id: "rules",
    title: "Rules And Regulation",
    description:
      "প্রতিষ্ঠানের একাডেমিক পরিবেশ, ক্লাসে উপস্থিতি, পরীক্ষায় অংশগ্রহণ, ল্যাব নিরাপত্তা এবং সামগ্রিক শৃঙ্খলা রক্ষার জন্য নির্ধারিত নিয়মনীতি অনুসরণ করা বাধ্যতামূলক।",
    points: [
      "নিয়মিত ক্লাসে উপস্থিতি এবং নির্ধারিত পোশাকবিধি অনুসরণ করতে হবে।",
      "ল্যাবরেটরিতে নিরাপত্তা নির্দেশনা মেনে কাজ করতে হবে।",
      "পরীক্ষা, অ্যাসাইনমেন্ট ও প্রজেক্ট নির্ধারিত সময়ের মধ্যে সম্পন্ন করতে হবে।",
    ],
  },
  {
    id: "library",
    title: "Library",
    description:
      "আমাদের লাইব্রেরিতে প্রযুক্তি, বিজ্ঞান, ড্রয়িং, সফটওয়্যার, জেনারেল এডুকেশন এবং ক্যারিয়ার উন্নয়ন সংক্রান্ত বই, রেফারেন্স মেটেরিয়াল ও পাঠ সহায়ক রিসোর্স রাখা আছে।",
    points: [
      "বিভিন্ন টেকনোলজির পাঠ্যবই ও রেফারেন্স বই পাওয়া যায়।",
      "শান্ত পরিবেশে পড়াশোনা ও নোট প্রস্তুতের সুবিধা রয়েছে।",
      "শিক্ষক ও শিক্ষার্থীদের জন্য লাইব্রেরি সহায়তা সেবা চালু আছে।",
    ],
  },
  {
    id: "hostel",
    title: "Hostel",
    description:
      "দূরবর্তী এলাকার শিক্ষার্থীদের জন্য নিরাপদ, সুশৃঙ্খল এবং তত্ত্বাবধানভিত্তিক আবাসন ব্যবস্থা নিশ্চিত করতে হোস্টেল সাপোর্ট ও পরামর্শ সেবা প্রদান করা হয়।",
    points: [
      "আবাসন সংক্রান্ত তথ্য ও আসন প্রাপ্তির জন্য অফিস সহায়তা পাওয়া যায়।",
      "শিক্ষার্থীদের নিরাপত্তা, পরিচ্ছন্নতা এবং সময়সূচি মানার উপর গুরুত্ব দেওয়া হয়।",
      "অভিভাবক ও শিক্ষার্থীদের সাথে সমন্বয় রেখে হোস্টেল ব্যবস্থাপনা পরিচালিত হয়।",
    ],
  },
];

const quickLinks = [
  { label: "Institute History", href: "/about#history" },
  { label: "Rules And Regulation", href: "/about#rules" },
  { label: "Library", href: "/about#library" },
  { label: "Hostel", href: "/about#hostel" },
];

export default function AboutPage() {
  useEffect(() => {
    if (!window.location.hash) return;

    const element = document.getElementById(window.location.hash.replace("#", ""));
    if (!element) return;

    window.requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.breaking}>
        <span>খবর</span>
        <p>প্রতিষ্ঠানের ইতিহাস, নিয়মনীতি, লাইব্রেরি ও হোস্টেল সম্পর্কিত তথ্য এখানে পাওয়া যাবে।</p>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.heroShowcase}>
            <div
              className={styles.heroFrame}
              role="img"
              aria-label="About TM Engineering College"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.28)), url('${campusImages[0]}')`,
              }}
            />
            <div className={styles.heroCounter}>
              <span className={styles.activeSlide}>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </div>
          </section>

          {aboutSections.map((section) => (
            <section className={styles.coursePanel} id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              <div className={styles.courseBody}>
                <p>{section.description}</p>
                <ul className={styles.pointList}>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
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
                {sharedSidebarCalendar.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
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
