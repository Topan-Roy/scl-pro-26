import Link from "next/link";
import {
  departmentHighlights,
  departments,
} from "@/data/departments";
import {
  DepartmentsHero,
  DepartmentsSidebar,
  featureBodyClass,
  featurePanelClass,
  leftColumnClass,
  sectionBarClass,
  shellLayoutClass,
  shellMainClass,
  whiteCardClass,
} from "./department-ui";

export default function DepartmentsPage() {
  return (
    <main className={shellMainClass}>
      <DepartmentsHero />

      <section className={shellLayoutClass}>
        <div className={leftColumnClass}>
          <section className={featurePanelClass}>
            <div className={sectionBarClass}>টেকনোলজি বিভাগসমূহ</div>
            <div className={featureBodyClass}>
              <div className="max-w-[60ch]">
                <p className="text-[0.78rem] font-extrabold tracking-[0.08em] text-[#1d6a3e]">TECHNOLOGY</p>
                <h1 className="mt-2 text-[clamp(1.45rem,3vw,2.25rem)] leading-[1.16] text-[#124a74]">
                  চাকরি ও উচ্চশিক্ষার উপযোগী দক্ষতাভিত্তিক টেকনোলজি বিভাগ
                </h1>
                <p className="mt-2.5 leading-[1.7] text-[#274b63]">
                  প্রতিটি বিভাগে রয়েছে বাস্তবমুখী শিক্ষা, ল্যাবভিত্তিক প্রশিক্ষণ এবং
                  প্রজেক্ট-কেন্দ্রিক শেখার সুযোগ।
                </p>
              </div>

              <div className="mt-3.5 grid grid-cols-3 gap-2.5 max-[900px]:grid-cols-1">
                {departmentHighlights.map((item) => (
                  <article className={whiteCardClass} key={item.title}>
                    <h3 className="text-base font-semibold text-[#1d6a3e]">{item.title}</h3>
                    <p className="mt-2 leading-[1.6] text-[#28412f]">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-2.5 max-[900px]:grid-cols-1">
            {departments.map((department) => (
              <Link
                className="block overflow-hidden rounded-[8px] border border-[rgba(255,186,45,0.65)] bg-white pb-2.5 text-left text-inherit shadow-[var(--surface-shadow)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(31,137,13,0.55)]"
                href={`/departments/${department.id}`}
                key={department.id}
              >
                <div className="px-3.5 pt-3.5">
                  <small className="text-[0.78rem] tracking-[0.04em] text-[#48715a]">{department.name}</small>
                  <h2 className="mt-[5px] text-[1.28rem] text-[#185536]">{department.bangla}</h2>
                </div>
                <p className="px-3.5 pt-2.5 leading-[1.68] text-[#2b4233]">{department.details}</p>
                <ul className="mt-3 ml-3.5 grid list-disc gap-2 pl-[18px]">
                  {department.points.map((point) => (
                    <li className="leading-[1.55] text-[#244030]" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-3 ml-3.5 inline-flex min-h-[34px] items-center rounded-full bg-[rgba(34,142,14,0.12)] px-3 text-[0.9rem] font-extrabold text-[#1d6a3e]">
                  বিস্তারিত দেখুন
                </span>
              </Link>
            ))}
          </section>
        </div>

        <DepartmentsSidebar />
      </section>
    </main>
  );
}
