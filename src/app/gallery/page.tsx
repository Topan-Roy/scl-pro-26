"use client";

import { useState } from "react";
import Link from "next/link";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";
import styles from "./page.module.css";

type GalleryAlbum = {
  title: string;
  count: number;
  cover: string;
  photos: string[];
};

const heroSlides = [
  {
    title: "ক্যাম্পাস মোমেন্ট",
    image: "https://picsum.photos/seed/gallery-hero-1/1200/700",
  },
  {
    title: "ল্যাব কার্যক্রম",
    image: "https://picsum.photos/seed/gallery-hero-2/1200/700",
  },
  {
    title: "উপলক্ষ্য ও অর্জন",
    image: "https://picsum.photos/seed/gallery-hero-3/1200/700",
  },
];

const albums: GalleryAlbum[] = [
  {
    title: "Campus Activities",
    count: 8,
    cover: "https://picsum.photos/seed/gallery-campus-cover/700/500",
    photos: [
      "https://picsum.photos/seed/gallery-campus-1/1200/800",
      "https://picsum.photos/seed/gallery-campus-2/1200/800",
      "https://picsum.photos/seed/gallery-campus-3/1200/800",
      "https://picsum.photos/seed/gallery-campus-4/1200/800",
    ],
  },
  {
    title: "Practical Lab Session",
    count: 6,
    cover: "https://picsum.photos/seed/gallery-lab-cover/700/500",
    photos: [
      "https://picsum.photos/seed/gallery-lab-1/1200/800",
      "https://picsum.photos/seed/gallery-lab-2/1200/800",
      "https://picsum.photos/seed/gallery-lab-3/1200/800",
      "https://picsum.photos/seed/gallery-lab-4/1200/800",
    ],
  },
  {
    title: "Achievement Ceremony",
    count: 5,
    cover: "https://picsum.photos/seed/gallery-ceremony-cover/700/500",
    photos: [
      "https://picsum.photos/seed/gallery-ceremony-1/1200/800",
      "https://picsum.photos/seed/gallery-ceremony-2/1200/800",
      "https://picsum.photos/seed/gallery-ceremony-3/1200/800",
      "https://picsum.photos/seed/gallery-ceremony-4/1200/800",
    ],
  },
  {
    title: "Workshop & Seminar",
    count: 7,
    cover: "https://picsum.photos/seed/gallery-seminar-cover/700/500",
    photos: [
      "https://picsum.photos/seed/gallery-seminar-1/1200/800",
      "https://picsum.photos/seed/gallery-seminar-2/1200/800",
      "https://picsum.photos/seed/gallery-seminar-3/1200/800",
      "https://picsum.photos/seed/gallery-seminar-4/1200/800",
    ],
  },
];

const classWidgets = ["Class Routine", "Sylabus", "Exam Routine", "Result"];

export default function GalleryPage() {
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(0);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const selectedAlbum = albums[selectedAlbumIndex];
  const selectedPhoto = selectedAlbum?.photos[selectedPhotoIndex];

  return (
    <main className={styles.main}>
      <section className={styles.breaking}>
        <span>গ্যালারি</span>
        <p>কলেজ ক্যাম্পাস, ল্যাব, অনুষ্ঠান এবং শিক্ষার্থীদের বিভিন্ন কার্যক্রমের ছবি এক জায়গায় দেখা যাবে।</p>
      </section>

      <section className={styles.layout}>
        <div className={styles.leftCol}>
          <section className={styles.heroShowcase}>
            <div className={styles.heroTrack}>
              {heroSlides.map((slide) => (
                <article
                  className={styles.heroCard}
                  key={slide.title}
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.42)), url('${slide.image}')` }}
                >
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
          </section>

          <section className={styles.galleryPanel}>
            <div className={styles.sectionHead}>
              <h2>ফটো অ্যালবাম</h2>
            </div>

            <div className={styles.albumGrid}>
              {albums.map((album, albumIndex) => (
                <button
                  className={`${styles.albumCard} ${selectedAlbumIndex === albumIndex ? styles.albumCardActive : ""}`}
                  key={album.title}
                  onClick={() => {
                    setSelectedAlbumIndex(albumIndex);
                    setSelectedPhotoIndex(0);
                  }}
                  type="button"
                >
                  <div
                    className={styles.albumThumb}
                    style={{ backgroundImage: `url('${album.cover}')` }}
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
                <span>{selectedPhotoIndex + 1}</span>
              </div>

              {selectedPhoto ? (
                <>
                  <div className={styles.viewerPreviewWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={selectedAlbum.title}
                      className={styles.viewerPreview}
                      decoding="async"
                      loading="lazy"
                      src={selectedPhoto}
                    />
                    <div className={styles.viewerMeta}>
                      <strong>{selectedAlbum.title}</strong>
                      <span>{selectedAlbum.photos.length} Photos</span>
                    </div>
                  </div>

                  <div className={styles.viewerGrid}>
                    {selectedAlbum.photos.map((photo, photoIndex) => (
                      <button
                        className={`${styles.viewerThumbButton} ${selectedPhotoIndex === photoIndex ? styles.viewerThumbActive : ""}`}
                        key={photo}
                        onClick={() => setSelectedPhotoIndex(photoIndex)}
                        type="button"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={`${selectedAlbum.title} ${photoIndex + 1}`}
                          className={styles.viewerThumbImage}
                          decoding="async"
                          loading="lazy"
                          src={photo}
                        />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className={styles.viewerEmpty}>
                  <p>এই অ্যালবামে এখনো কোন ছবি যোগ করা হয়নি।</p>
                </div>
              )}
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
