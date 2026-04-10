/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Department } from "@/data/departments";
import {
  DepartmentsHero,
  DepartmentsSidebar,
  detailBodyClass,
  featureBodyClass,
  featurePanelClass,
  leftColumnClass,
  pillItemClass,
  pillListClass,
  sectionBarClass,
  shellLayoutClass,
  shellMainClass,
  whiteCardClass,
} from "./department-ui";

type DepartmentDetailPageProps = {
  department: Department;
};

export function DepartmentDetailPage({ department }: DepartmentDetailPageProps) {
  const currentPath = `/departments/${department.id}`;

  return (
    <main className={shellMainClass}>
      <DepartmentsHero />

      <section className={shellLayoutClass}>
        <div className={leftColumnClass}>
          <section className={featurePanelClass}>
            <div className={sectionBarClass}>{department.bangla}</div>
            <div className={featureBodyClass}>
              <div className="mb-3.5">
                <Link
                  className="inline-flex min-h-[34px] items-center rounded-full border border-[rgba(29,106,62,0.2)] bg-white px-3 text-[0.9rem] font-extrabold text-[#1d6a3e]"
                  href="/departments"
                >
                  সব টেকনোলজি
                </Link>
              </div>

              <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(220px,0.8fr)] items-start gap-3 max-[900px]:grid-cols-1">
                <div className="max-w-[60ch]">
                  <p className="text-[0.78rem] font-extrabold tracking-[0.08em] text-[#1d6a3e]">{department.name}</p>
                  <h1 className="mt-2 text-[clamp(1.45rem,3vw,2.25rem)] leading-[1.16] text-[#124a74]">
                    {department.bangla}
                  </h1>
                  <p className="mt-2.5 leading-[1.7] text-[#274b63]">{department.details}</p>

                  <ul className={pillListClass}>
                    {department.points.map((point) => (
                      <li className={pillItemClass} key={point}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-2.5">
                  {department.stats.map((item) => (
                    <article className={whiteCardClass} key={item.label}>
                      <span className="block text-[0.82rem] font-bold text-[#48715a]">{item.label}</span>
                      <strong className="mt-2 block text-base leading-[1.5] text-[#155433]">{item.value}</strong>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-3.5 overflow-hidden rounded-[14px] border border-[rgba(15,67,24,0.14)] bg-white">
                <img
                  alt={department.bangla}
                  className="block max-h-[360px] min-h-[280px] w-full object-cover"
                  loading="lazy"
                  src={department.images[0]}
                />
              </div>
            </div>
          </section>

          <section className={featurePanelClass}>
            <div className={sectionBarClass}>বিস্তারিত তথ্য</div>
            <div className={detailBodyClass}>
              <div className="mt-3.5 grid grid-cols-[1.2fr_0.8fr] gap-2.5 max-[900px]:grid-cols-1">
                <article className={whiteCardClass}>
                  <h3 className="text-base font-semibold text-[#1d6a3e]">বিভাগ সম্পর্কে</h3>
                  <ul className="mt-2.5 ml-[18px] grid list-disc gap-2">
                    {department.moreDetails.map((item) => (
                      <li className="leading-[1.58] text-[#244030]" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className={whiteCardClass}>
                  <h3 className="text-base font-semibold text-[#1d6a3e]">সম্ভাব্য কাজের ক্ষেত্র</h3>
                  <ul className={pillListClass}>
                    {department.careers.map((item) => (
                      <li className={pillItemClass} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <section className="mt-[18px]">
                <div>
                  <h3 className="text-[1.06rem] font-semibold text-[#1d6a3e]">প্র্যাকটিক্যাল ফোকাস</h3>
                  <p className="mt-1.5 leading-[1.65] text-[#274b63]">
                    নিচের বিষয়গুলো এই টেকনোলজির hands-on training ও lab practice-এর মূল অংশ।
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2.5 max-[900px]:grid-cols-1">
                  {department.points.map((point) => (
                    <article className={whiteCardClass} key={point}>
                      <h4 className="text-base font-semibold text-[#185536]">{point}</h4>
                      <p className="mt-2 leading-[1.58] text-[#244030]">
                        {department.bangla} বিভাগের নিয়মিত practical এবং project activity-এর অংশ।
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mt-[18px]">
                <div>
                  <h3 className="text-[1.06rem] font-semibold text-[#1d6a3e]">টেকনোলজির কিছু ছবি</h3>
                  <p className="mt-1.5 leading-[1.65] text-[#274b63]">
                    বিভাগের lab, classroom এবং practical learning environment-এর sample visual।
                  </p>
                </div>

                <div className="mt-3.5 grid grid-cols-3 gap-2.5 max-[900px]:grid-cols-1">
                  {department.images.map((image, index) => (
                    <article
                      className="min-h-[190px] overflow-hidden rounded-[12px] border border-[rgba(15,67,24,0.14)] bg-white"
                      key={image}
                    >
                      <img
                        alt={`${department.bangla} ${index + 1}`}
                        className="block min-h-[190px] w-full object-cover"
                        loading="lazy"
                        src={image}
                      />
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>

        <DepartmentsSidebar currentPath={currentPath} />
      </section>
    </main>
  );
}
