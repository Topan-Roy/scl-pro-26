import { ARViewport } from "@/components/ar-viewport";
import styles from "../inner-page.module.css";

export default function InnovationLabPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Innovation Lab</p>
        <h1>AR and simulation-friendly practical learning environment.</h1>
        <p>
          This page preserves the unique AR feature of your project and presents
          it as part of the institute innovation ecosystem for students.
        </p>
      </section>

      <section className={styles.twoCol}>
        <article className={styles.panel}>
          <h2>How Students Use This Lab</h2>
          <ul className={styles.list}>
            <li>Visualize engineering models through AR preview.</li>
            <li>Run interactive practical sessions before physical lab work.</li>
            <li>Prototype digital projects for final semester demonstration.</li>
            <li>Collaborate across Computer, Electrical and Mechanical tracks.</li>
          </ul>
        </article>

        <article className={styles.panel}>
          <h2>WebXR / Three.js Demo</h2>
          <p>
            Compatible devices can start immersive AR mode. Desktop users can
            still explore the animated 3D scene.
          </p>
        </article>
      </section>

      <section className={styles.panel}>
        <ARViewport />
      </section>
    </main>
  );
}
