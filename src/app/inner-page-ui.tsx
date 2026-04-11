import Link from "next/link";
import { sharedNoticeBoard, sharedSidebarCalendar } from "@/data/site";

export type LinkItem = {
  label: string;
  href: string;
};

export const shellMainClass =
  "motion-rise mt-2.5 flex w-full flex-col gap-2.5";

export const shellLayoutClass =
  "grid grid-cols-[minmax(0,1.8fr)_minmax(320px,0.66fr)] gap-2.5 max-[1180px]:grid-cols-1";

export const leftColumnClass = "grid content-start gap-2.5";

export const surfaceClass =
  "motion-card overflow-hidden rounded-[8px] border border-[rgba(255,186,45,0.65)] bg-white shadow-[var(--surface-shadow)]";

export const sectionBarClass =
  "flex min-h-[34px] w-full items-center border-b border-b-[rgba(13,71,5,0.45)] bg-[linear-gradient(180deg,#3bc908,#1f890d)] px-2.5 text-[1.02rem] font-bold text-white";

export const featureBodyClass =
  "bg-[linear-gradient(180deg,#edf7ff,#dcecff)] p-[18px] max-[640px]:p-[14px]";

export const whiteCardClass =
  "rounded-[10px] border border-[rgba(15,67,24,0.14)] bg-white p-3.5";

export function InnerHero({
  slides,
  activeSlide = 3,
}: {
  slides: string[];
  activeSlide?: number;
}) {
  return (
    <section className="motion-card motion-delay-1 relative overflow-hidden rounded-[8px] border border-[rgba(255,186,45,0.65)] bg-white p-1 shadow-[var(--surface-shadow)]">
      <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
        {slides.map((image, index) => (
          <article
            className="relative min-h-[190px] border-l border-l-[rgba(255,255,255,0.48)] bg-cover bg-center transition-transform duration-300 ease-out first:border-l-0 hover:scale-[1.01] max-[900px]:min-h-[150px] max-[640px]:min-h-[130px] max-[640px]:border-l-0 max-[640px]:border-t max-[640px]:border-t-[rgba(255,255,255,0.48)]"
            key={image}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.22)), url('${image}')`,
            }}
          >
            <span className="absolute bottom-2.5 left-2.5 inline-flex min-h-6 w-6 items-center justify-center rounded-full bg-[rgba(255,255,255,0.86)] text-[0.82rem] font-extrabold text-[#1f5f37]">
              {index + 1}
            </span>
          </article>
        ))}
      </div>

      <div className="absolute right-3 bottom-2.5 flex gap-1">
        {["1", "2", "3", "4", "5", "6", "7", "8"].map((item, index) => (
          <span
            className={`inline-flex min-h-[22px] w-5 items-center justify-center border text-[0.82rem] font-bold ${
              index === activeSlide
                ? "border-[#c87f04] bg-[#f09a07] text-white"
                : "border-[rgba(64,82,92,0.35)] bg-[rgba(255,255,255,0.9)] text-[#3f5565]"
            }`}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export function InnerSidebar({
  quickLinks,
  importantLinks,
}: {
  quickLinks: LinkItem[];
  importantLinks?: LinkItem[];
}) {
  return (
    <aside className="grid content-start gap-2.5">
      <section className={`${surfaceClass} motion-delay-2`}>
        <h3 className={sectionBarClass}>নোটিশ বোর্ড</h3>
        <ul className="list-none bg-[#f3f3f3]">
          {sharedNoticeBoard.map((item) => (
            <li className="border-b border-b-[rgba(27,42,24,0.2)] px-2.5 py-2" key={`${item.date}-${item.text}`}>
              <span className="inline-flex rounded-[3px] bg-[#1c9a4a] px-1.5 py-0.5 text-[0.8rem] text-white">
                {item.date}
              </span>
              <p className="mt-1.5 text-[0.88rem] leading-[1.45] text-[#1f291f]">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-1.5">
        {quickLinks.map((item) => (
          <Link
            className="motion-card flex min-h-9 items-center justify-between rounded-[8px] border border-[rgba(30,129,7,0.48)] bg-[linear-gradient(180deg,#35be06,#228e0e)] px-2.5 text-base font-bold text-white shadow-[var(--surface-shadow)] transition-all duration-200 ease-out hover:translate-x-[3px] hover:brightness-105"
            href={item.href}
            key={item.label}
          >
            <span>{item.label}</span>
            <b className="text-[1.1rem] text-[#fbb010]">⚙</b>
          </Link>
        ))}
      </section>

      <section className={`${surfaceClass} motion-delay-3`}>
        <h3 className={sectionBarClass}>{sharedSidebarCalendar.title}</h3>
        <table className="w-full border-collapse bg-[#efefef]">
          <thead>
            <tr>
              {sharedSidebarCalendar.weekdays.map((day) => (
                <th
                  className="border border-[rgba(27,42,24,0.16)] bg-[#f8f8f8] px-1 py-[5px] text-center text-[0.84rem] font-bold text-[#213622]"
                  key={day}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sharedSidebarCalendar.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    className="border border-[rgba(27,42,24,0.16)] px-1 py-[5px] text-center text-[0.84rem] text-[#213622]"
                    key={`${rowIndex}-${cellIndex}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {importantLinks ? (
        <section className={`${surfaceClass} motion-delay-4`}>
          <h3 className={sectionBarClass}>গুরুত্বপূর্ণ লিংক</h3>
          <ul className="list-none bg-[#f3f3f3]">
            {importantLinks.map((item) => (
              <li className="border-b border-b-[rgba(27,42,24,0.14)]" key={item.label}>
                <a
                  className="block px-2.5 py-[9px] text-[0.9rem] text-[#234028]"
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </aside>
  );
}
