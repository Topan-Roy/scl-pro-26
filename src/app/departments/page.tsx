import styles from "../inner-page.module.css";

const departments = [
  {
    id: "computer",
    name: "Computer Technology",
    details:
      "Programming, full-stack development, networking, cybersecurity and AI-enabled application development.",
  },
  {
    id: "electrical",
    name: "Electrical Technology",
    details:
      "Circuit design, industrial automation, power systems and safety-focused practical training.",
  },
  {
    id: "civil",
    name: "Civil Technology",
    details:
      "Surveying, structure fundamentals, project estimation and construction site management.",
  },
  {
    id: "mechanical",
    name: "Mechanical Technology",
    details:
      "CAD/CAM, manufacturing workflow, machine operation and preventive maintenance methods.",
  },
];

export default function DepartmentsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Departments</p>
        <h1>Career-focused diploma programs designed around real-world skills.</h1>
        <p>
          Each department has dedicated labs, specialized faculty and
          project-based learning paths to ensure students graduate with strong
          technical confidence.
        </p>
      </section>

      <section className={styles.twoCol}>
        {departments.map((department) => (
          <article className={styles.card} id={department.id} key={department.name}>
            <h3>{department.name}</h3>
            <p>{department.details}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
