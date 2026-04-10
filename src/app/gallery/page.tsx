"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import styles from "./page.module.css";

type Album = {
  id: string;
  title: string;
  count: number;
  seed: string;
  images: string[];
};

function buildAlbumImages(seed: string, count: number) {
  return Array.from(
    { length: count },
    (_, index) => `https://picsum.photos/seed/${seed}-${index + 1}/1200/800`,
  );
}

const heroSlides = [
  {
    title: "Electronics Lab Session",
    image: "https://picsum.photos/seed/gallery-hero-1/1400/700",
  },
  {
    title: "Industry Visit Program",
    image: "https://picsum.photos/seed/gallery-hero-2/1400/700",
  },
  {
    title: "Campus Practical Class",
    image: "https://picsum.photos/seed/gallery-hero-3/1400/700",
  },
];

const albums: Album[] = [
  { id: "campus-life", title: "Orientation Program 2022-23", count: 0, seed: "album-1", images: buildAlbumImages("album-1", 0) },
  { id: "awards", title: "বাংলাদেশের স্বাধীনতা সুবর্ণজয়ন্তী", count: 0, seed: "album-2", images: buildAlbumImages("album-2", 0) },
  { id: "events", title: "গণ প্রকৌশল দিবস ২০২১", count: 0, seed: "album-3", images: buildAlbumImages("album-3", 0) },
  { id: "lab-work", title: "7th March 2020", count: 1, seed: "album-4", images: buildAlbumImages("album-4", 1) },
  { id: "events-2", title: "14 December Shohid Dibosh 2019", count: 2, seed: "album-5", images: buildAlbumImages("album-5", 2) },
  { id: "industry-visit", title: "New Album", count: 46, seed: "album-6", images: buildAlbumImages("album-6", 46) },
  { id: "industry-visit-2", title: "Industrial Attachment_Textile", count: 8, seed: "album-7", images: buildAlbumImages("album-7", 8) },
  { id: "events-3", title: "Industrial Attachment EIT", count: 4, seed: "album-8", images: buildAlbumImages("album-8", 4) },
  { id: "events-4", title: "Industrial Attachment Computer", count: 5, seed: "album-9", images: buildAlbumImages("album-9", 5) },
  { id: "community", title: "Free Book & Scholarships", count: 5, seed: "album-10", images: buildAlbumImages("album-10", 5) },
  { id: "events-5", title: "Students Stipend", count: 2, seed: "album-11", images: buildAlbumImages("album-11", 2) },
  { id: "events-6", title: "Practical Class", count: 2, seed: "album-12", images: buildAlbumImages("album-12", 2) },
];

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

export default function GalleryPage() {
  const initialAlbum = useMemo(
    () => albums.find((album) => album.images.length > 0) ?? albums[0],
    [],
  );

  const [selectedAlbumId, setSelectedAlbumId] = useState(initialAlbum.id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedAlbum = albums.find((album) => album.id === selectedAlbumId) ?? initialAlbum;
  const selectedImages = selectedAlbum.images;
  const activeImage = selectedImages[selectedImageIndex] ?? null;

  const handleAlbumSelect = (albumId: string) => {
    setSelectedAlbumId(albumId);
    setSelectedImageIndex(0);
  };

  return (
    <main className={styles.main}>
      <section className={styles.breaking}>
        <span>খবর</span>
        <p>০৮ (আট) বছর মেয়াদি ডিপ্লোমা ইঞ্জিনিয়ারিং এবং সরাসরি ৩য়/৪র্থ পর্বে ভর্তি চলছে।</p>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.heroShowcase}>
            <div className={styles.heroTrack}>
              {heroSlides.map((slide) => (
                <article
                  className={styles.heroCard}
                  key={slide.title}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.38)), url('${slide.image}')`,
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
              <span className={styles.activeSlide}>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
            </div>
          </section>

          <section className={styles.galleryPanel}>
            <div className={styles.sectionHead}>
              <h2>গ্যালারি</h2>
            </div>

            <div className={styles.albumGrid}>
              {albums.map((album) => (
                <button
                  className={`${styles.albumCard} ${
                    selectedAlbum.id === album.id ? styles.albumCardActive : ""
                  }`}
                  id={album.id}
                  key={album.id}
                  onClick={() => handleAlbumSelect(album.id)}
                  type="button"
                >
                  <div
                    className={styles.albumThumb}
                    role="img"
                    aria-label={album.title}
                    style={{
                      backgroundImage: `url('https://picsum.photos/seed/${album.seed}/560/360')`,
                    }}
                  />
                  <div className={styles.albumMeta}>
                    <p>{album.title}</p>
                    <span>{album.count}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className={styles.viewerPanel}>
              <div className={styles.viewerHead}>
                <h3>{selectedAlbum.title}</h3>
                <span>{selectedImages.length}</span>
              </div>

              {activeImage ? (
                <div className={styles.viewerPreviewWrap}>
                  <Image
                    src={activeImage}
                    alt={`${selectedAlbum.title} image ${selectedImageIndex + 1}`}
                    width={1200}
                    height={800}
                    priority
                    className={styles.viewerPreview}
                  />
                  <div className={styles.viewerMeta}>
                    <strong>{selectedAlbum.title}</strong>
                    <span>
                      {selectedImageIndex + 1} / {selectedImages.length}
                    </span>
                  </div>
                </div>
              ) : (
                <div className={styles.viewerEmpty}>
                  <p>এই অ্যালবামে এখনো কোনো ছবি নেই। অন্য অ্যালবামে ক্লিক করুন।</p>
                </div>
              )}

              {selectedImages.length > 0 ? (
                <div className={styles.viewerGrid}>
                  {selectedImages.map((image, index) => (
                    <button
                      className={`${styles.viewerThumbButton} ${
                        selectedImageIndex === index ? styles.viewerThumbActive : ""
                      }`}
                      key={`${selectedAlbum.id}-${index}`}
                      onClick={() => setSelectedImageIndex(index)}
                      type="button"
                    >
                      <Image
                        src={image}
                        alt={`${selectedAlbum.title} thumbnail ${index + 1}`}
                        width={560}
                        height={360}
                        loading="lazy"
                        className={styles.viewerThumbImage}
                      />
                    </button>
                  ))}
                </div>
              ) : null}
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
