import Link from "next/link";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import shared from "../inner-page.module.css";
import styles from "./page.module.css";

const heroSlides = [
  "https://picsum.photos/seed/admission-hero-1/1200/500",
  "https://picsum.photos/seed/admission-hero-2/1200/500",
  "https://picsum.photos/seed/admission-hero-3/1200/500",
  "https://picsum.photos/seed/admission-hero-4/1200/500",
];

const eligibilityPoints = [
  "এসএসসি বা সমমান পরীক্ষায় উত্তীর্ণ হতে হবে।",
  "বিজ্ঞান বিভাগ থেকে উত্তীর্ণ শিক্ষার্থীরা অগ্রাধিকার পাবে।",
  "প্রয়োজনীয় একাডেমিক কাগজপত্র জমা দিতে হবে।",
  "নির্বাচিত বিভাগভেদে সাক্ষাৎকার বা মূল্যায়ন হতে পারে।",
];

const documents = [
  "একাডেমিক ট্রান্সক্রিপ্ট ও সনদের মূল কপি এবং ফটোকপি",
  "সাম্প্রতিক পাসপোর্ট সাইজ ছবি",
  "জন্ম সনদ বা জাতীয় পরিচয়পত্রের কপি",
  "অভিভাবকের তথ্য ও জরুরি যোগাযোগ নম্বর",
];

const admissionSteps = [
  {
    title: "ধাপ ১: তথ্য সংগ্রহ",
    text: "পছন্দের টেকনোলজি, যোগ্যতা ও প্রয়োজনীয় কাগজপত্র সম্পর্কে জেনে নিন।",
  },
  {
    title: "ধাপ ২: ফরম পূরণ",
    text: "ভর্তি ফরম পূরণ করে প্রয়োজনীয় কাগজপত্রসহ অফিসে জমা দিন।",
  },
  {
    title: "ধাপ ৩: যাচাই ও নিশ্চয়ন",
    text: "অফিস যাচাই শেষে ভর্তি ও ক্লাস শুরুর নির্দেশনা প্রদান করবে।",
  },
];

const feeRows = [
  { type: "ভর্তি ফি", amount: "৫,০০০ টাকা" },
  { type: "সেমিস্টার ফি", amount: "১৮,০০০ - ২৪,০০০ টাকা" },
  { type: "ল্যাব ডেভেলপমেন্ট", amount: "২,৫০০ টাকা" },
  { type: "পরীক্ষা ও রেজিস্ট্রেশন", amount: "বোর্ড নীতিমালা অনুযায়ী" },
];

const quickLinks = [
  { label: "আবেদন নির্দেশনা", href: "/admission" },
  { label: "সিলেবাস", href: "/academics#syllabus" },
  { label: "ডিপার্টমেন্ট", href: "/departments" },
  { label: "যোগাযোগ", href: "/contact" },
];

const supportCards = [
  {
    title: "মেধাবৃত্তি",
    text: "মেধাবী ও আর্থিকভাবে অসচ্ছল শিক্ষার্থীদের জন্য বিশেষ সহায়তা রয়েছে।",
  },
  {
    title: "অভিভাবক সহায়তা",
    text: "ভর্তি, পেমেন্ট ও বিভাগ নির্বাচন নিয়ে অভিভাবকরাও পরামর্শ নিতে পারবেন।",
  },
  {
    title: "ক্লাস শুরু",
    text: "ভর্তি নিশ্চিত হওয়ার পর ক্লাস রুটিন ও ওরিয়েন্টেশন তথ্য সরবরাহ করা হবে।",
  },
  {
    title: "অফিস সহযোগিতা",
    text: "নির্ধারিত অফিস সময়ের মধ্যে ভর্তি সহায়তা ডেস্কে সরাসরি যোগাযোগ করা যাবে।",
  },
];

export default function AdmissionPage() {
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
          <span className={styles.activeSlide}>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
        </div>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.featurePanel}>
            <div className={styles.sectionBar}>ভর্তি তথ্য</div>
            <div className={styles.featureBody}>
              <div className={styles.featureCopy}>
                <p className={styles.kicker}>ADMISSION</p>
                <h1>স্বচ্ছ প্রক্রিয়ায় ভর্তি, সহায়তায় সবসময় প্রস্তুত অফিস</h1>
                <p>
                  আপনার ভর্তি যাত্রা সহজ করতে আমরা যোগ্যতা, কাগজপত্র, ফি এবং পরবর্তী
                  ধাপগুলো পরিষ্কারভাবে সাজিয়ে দিয়েছি।
                </p>
              </div>

              <div className={styles.stepGrid}>
                {admissionSteps.map((step) => (
                  <article className={styles.stepCard} key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.twoCol}>
            <article className={styles.contentPanel}>
              <div className={styles.sectionBar}>যোগ্যতা</div>
              <ul className={styles.listBody}>
                {eligibilityPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.contentPanel}>
              <div className={styles.sectionBar}>প্রয়োজনীয় কাগজপত্র</div>
              <ul className={styles.listBody}>
                {documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className={styles.contentPanel} id="scholarship">
            <div className={styles.sectionBar}>ফি তালিকা</div>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ফি এর ধরন</th>
                    <th>পরিমাণ</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row) => (
                    <tr key={row.type}>
                      <td>{row.type}</td>
                      <td>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.contentPanel}>
            <div className={styles.sectionBar}>ভর্তি সহায়তা</div>
            <div className={styles.supportGrid}>
              {supportCards.map((item) => (
                <article className={styles.supportCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
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
        </aside>
      </section>
    </main>
  );
}
