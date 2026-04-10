import styles from "../inner-page.module.css";

const noticeItems = [
  { date: "10 April 2026", title: "Admission circular for Diploma programs published" },
  { date: "06 April 2026", title: "Updated class routine for all departments" },
  { date: "02 April 2026", title: "Practical exam guideline and lab safety instructions" },
  { date: "26 March 2026", title: "Career development workshop registration open" },
  { date: "20 March 2026", title: "Industrial tour consent form submission deadline" },
];

export default function NoticePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Notice Board</p>
        <h1>Official announcements, academic updates and important deadlines.</h1>
        <p>
          This section serves as the primary communication board for students,
          guardians and faculty members.
        </p>
      </section>

      <section className={styles.panel}>
        <h2>Recent Notices</h2>
        <ul className={styles.timeline}>
          {noticeItems.map((item) => (
            <li key={item.title}>
              <small>{item.date}</small>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
