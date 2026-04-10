import { ARViewport } from "@/components/ar-viewport";
import {
  InnerHero,
  InnerSidebar,
  featureBodyClass,
  leftColumnClass,
  sectionBarClass,
  shellLayoutClass,
  shellMainClass,
  surfaceClass,
  whiteCardClass,
} from "../inner-page-ui";

const heroSlides = [
  "https://picsum.photos/seed/eclass-hero-1/1200/500",
  "https://picsum.photos/seed/eclass-hero-2/1200/500",
  "https://picsum.photos/seed/eclass-hero-3/1200/500",
  "https://picsum.photos/seed/eclass-hero-4/1200/500",
];

const eClassFeatures = [
  {
    title: "Online Class",
    text: "লাইভ ক্লাস, রেকর্ডেড সেশন এবং দ্রুত lesson review-এর সুবিধা এক জায়গায়।",
  },
  {
    title: "Skills Portal",
    text: "প্রোগ্রামিং, ডিজিটাল tools এবং project-based skill practice-এর জন্য বিশেষ সহায়তা।",
  },
  {
    title: "AR Preview",
    text: "প্র্যাকটিক্যাল class-এর আগে model ও concept visual করে শেখার সুযোগ।",
  },
];

const labUses = [
  "ইঞ্জিনিয়ারিং model ও concept AR preview-তে দেখা যায়।",
  "Physical lab-এর আগে interactive practice session করা যায়।",
  "Final project demo ও prototype presentation-এ ব্যবহার করা যায়।",
  "Computer, Electrical ও Mechanical বিভাগের শিক্ষার্থীরা একসাথে ব্যবহার করতে পারে।",
];

const quickLinks = [
  { label: "Online Class", href: "/innovation-lab" },
  { label: "Skills Portal", href: "/innovation-lab" },
  { label: "সিলেবাস", href: "/academics#syllabus" },
  { label: "যোগাযোগ", href: "/contact" },
];

const importantLinks = [
  { label: "Teacher's Portal", href: "https://teachers.gov.bd" },
  { label: "Directorate of Technical Education", href: "https://techedu.gov.bd" },
  { label: "Bangladesh Technical Education Board", href: "https://www.bteb.gov.bd" },
  { label: "National Web Portal of Bangladesh", href: "https://bangladesh.gov.bd" },
];

export default function InnovationLabPage() {
  return (
    <main className={shellMainClass}>
      <InnerHero activeSlide={3} slides={heroSlides} />

      <section className={shellLayoutClass}>
        <div className={leftColumnClass}>
          <section className={surfaceClass}>
            <div className={sectionBarClass}>E-Class</div>
            <div className={featureBodyClass}>
              <div className="max-w-[60ch]">
                <p className="text-[0.78rem] font-extrabold tracking-[0.08em] text-[#1d6a3e]">INNOVATION LAB</p>
                <h1 className="mt-2 text-[clamp(1.45rem,3vw,2.25rem)] leading-[1.16] text-[#124a74]">
                  ডিজিটাল ক্লাস, স্কিল প্র্যাকটিস আর AR অভিজ্ঞতা একই প্ল্যাটফর্মে
                </h1>
                <p className="mt-2.5 leading-[1.7] text-[#274b63]">
                  এই page-এ online learning, skills portal এবং আপনার project-এর existing AR demo
                  একসাথে দেখানো হয়েছে।
                </p>
              </div>

              <div className="mt-3.5 grid grid-cols-3 gap-2.5 max-[900px]:grid-cols-1">
                {eClassFeatures.map((item) => (
                  <article className={whiteCardClass} key={item.title}>
                    <h3 className="text-base font-semibold text-[#1d6a3e]">{item.title}</h3>
                    <p className="mt-2 leading-[1.6] text-[#28412f]">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-2.5 max-[900px]:grid-cols-1">
            <article className={surfaceClass}>
              <div className={sectionBarClass}>কিভাবে ব্যবহার করা হয়</div>
              <ul className="grid gap-2 bg-[#f4f4f4] px-4 pt-3.5 pb-4 pl-8">
                {labUses.map((item) => (
                  <li className="leading-[1.58] text-[#23342a]" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className={surfaceClass}>
              <div className={sectionBarClass}>ডেমো সম্পর্কে</div>
              <div className="grid gap-2.5 bg-[#f4f4f4] p-3.5">
                <p className="leading-[1.68] text-[#28412f]">
                  Compatible mobile browser হলে immersive AR session চালু করা যাবে। Desktop
                  user-রাও animated 3D scene preview দেখতে পারবেন।
                </p>
                <p className="leading-[1.68] text-[#28412f]">
                  এই module future online practical class, virtual lab demo এবং student project
                  showcase-এর জন্য ব্যবহার করা যাবে।
                </p>
              </div>
            </article>
          </section>

          <section className={surfaceClass}>
            <div className={sectionBarClass}>AR / WebXR Demo</div>
            <div className="bg-[linear-gradient(180deg,#f9fcff,#f1f8ff)] p-3.5 max-[640px]:p-[14px]">
              <ARViewport />
            </div>
          </section>
        </div>

        <InnerSidebar importantLinks={importantLinks} quickLinks={quickLinks} />
      </section>
    </main>
  );
}
