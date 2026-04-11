import Link from "next/link";
import { programQuickLinks } from "@/data/programs";
import type { Program } from "@/data/programs";
import {
  InnerHero,
  InnerSidebar,
  leftColumnClass,
  sectionBarClass,
  shellLayoutClass,
  shellMainClass,
  surfaceClass,
} from "../inner-page-ui";

type ProgramDetailPageProps = {
  program: Program;
};

const toneClasses = {
  blue: {
    soft: "from-[#eef7ff] via-[#e7f2ff] to-[#d7e9ff]",
    accent: "from-[#4aa4ff] to-[#216fd0]",
    chip: "bg-[#e8f4ff] text-[#17558d] border-[#b9d8fb]",
    ring: "border-[#8fc0f5]",
    glow: "shadow-[0_20px_36px_rgba(42,109,182,0.16)]",
  },
  pink: {
    soft: "from-[#fff0f7] via-[#ffebf4] to-[#ffe2ef]",
    accent: "from-[#ff5cae] to-[#d32281]",
    chip: "bg-[#fff0f6] text-[#9c2563] border-[#f6bfd8]",
    ring: "border-[#f1abc9]",
    glow: "shadow-[0_20px_36px_rgba(199,49,118,0.16)]",
  },
  purple: {
    soft: "from-[#f6efff] via-[#f0e6ff] to-[#eadcff]",
    accent: "from-[#a146ff] to-[#6e22c2]",
    chip: "bg-[#f3ecff] text-[#6c38a0] border-[#d2bdfa]",
    ring: "border-[#c6abf4]",
    glow: "shadow-[0_20px_36px_rgba(103,49,172,0.16)]",
  },
} as const;

const highlightItems = [
  {
    title: "শিল্পখাতের সঙ্গে সামঞ্জস্য",
    text: "বর্তমান প্রযুক্তি ও উৎপাদন খাতের কাজের ধরণ মাথায় রেখে শেখার বিষয়গুলো সাজানো হয়েছে, যাতে বাস্তব কাজের সঙ্গে মিল পাওয়া যায়।",
  },
  {
    title: "ব্যবহারিক অভিজ্ঞতা",
    text: "ওয়ার্কশপ, ল্যাব ও তত্ত্বাবধানে করা অনুশীলনের মাধ্যমে শুধু তত্ত্ব নয়, হাতে-কলমে দক্ষতাও গড়ে তোলা হয়।",
  },
  {
    title: "ক্যারিয়ার প্রস্তুতি",
    text: "প্রোগ্রামটি শিক্ষার্থীদের চাকরির প্রাথমিক ধাপের জন্য প্রস্তুত করে, পাশাপাশি উচ্চশিক্ষা বা বিশেষায়িত প্রশিক্ষণের ভিত্তিও তৈরি করে।",
  },
];

export function ProgramDetailPage({ program }: ProgramDetailPageProps) {
  const heroSlides = program.images.map((image) => image);
  const coverImage = program.images[0] ?? "";
  const tone = toneClasses[program.tone];
  const stats = [
    { label: "মূল বিষয়", value: String(program.modules.length).padStart(2, "0") },
    { label: "ল্যাব প্র্যাকটিস", value: String(program.labs.length).padStart(2, "0") },
    { label: "ক্যারিয়ার পথ", value: String(program.careers.length).padStart(2, "0") },
  ];

  return (
    <main className={shellMainClass}>
      <InnerHero activeSlide={2} slides={heroSlides} />

      <section className={shellLayoutClass}>
        <div className={leftColumnClass}>
          <section className={`${surfaceClass} motion-delay-2`}>
            <div className={sectionBarClass}>{program.title}</div>

            <div className={`bg-gradient-to-br ${tone.soft} px-8 py-8 max-[640px]:px-5 max-[640px]:py-5`}>
              <div className="mb-4">
                <Link
                  className={`inline-flex items-center rounded-full border px-5.5 py-3 text-sm font-extrabold leading-[1.45] shadow-[0_10px_22px_rgba(15,54,88,0.08)] ${tone.chip}`}
                  href="/"
                >
                  হোমে ফিরে যান
                </Link>
              </div>

              <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] gap-4 max-[980px]:grid-cols-1">
                <article
                  className={`motion-card motion-delay-3 rounded-[24px] border bg-white/88 px-8 py-8 shadow-[0_18px_34px_rgba(15,54,88,0.08)] backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-6 ${tone.ring} ${tone.glow}`}
                >
                  <div className="flex flex-wrap items-center gap-2.5 pl-1">
                    <span
                      className={`inline-flex items-center rounded-full border px-4.5 py-2.5 text-[0.78rem] font-extrabold leading-[1.45] tracking-[0.08em] ${tone.chip}`}
                    >
                      {program.bangla}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[rgba(18,74,116,0.15)] bg-white px-4.5 py-2.5 text-[0.78rem] font-bold leading-[1.45] text-[#2b5878]">
                      পেশাভিত্তিক প্রোগ্রাম
                    </span>
                  </div>

                  <h1 className="mt-5 pl-1 text-[clamp(1.95rem,4vw,3rem)] leading-[1.15] text-[#123d62]">
                    {program.bangla}
                  </h1>
                  <p className="mt-3 pl-1 text-sm font-semibold uppercase tracking-[0.08em] text-[#416680]">
                    {program.title}
                  </p>

                  <p className="mt-5 max-w-[60ch] pl-1 text-[1.02rem] leading-[1.9] text-[#274b63]">
                    {program.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 pl-1">
                    {program.modules.slice(0, 4).map((item) => (
                      <span
                        className={`inline-flex items-center rounded-full border px-4.5 py-3 text-sm font-bold leading-[1.45] shadow-[0_10px_22px_rgba(15,54,88,0.05)] ${tone.chip}`}
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-3.5 max-[640px]:grid-cols-1">
                    {stats.map((item) => (
                      <article
                        className={`motion-card rounded-[18px] border bg-white px-5.5 py-5.5 shadow-[0_14px_26px_rgba(12,40,62,0.05)] transition-transform duration-300 ease-out hover:-translate-y-1 ${tone.ring}`}
                        key={item.label}
                      >
                        <strong className="block text-[1.75rem] leading-[1.12] text-[#155433]">{item.value}</strong>
                        <span className="mt-2.5 block text-[0.86rem] font-semibold text-[#49655a]">
                          {item.label}
                        </span>
                      </article>
                    ))}
                  </div>
                </article>

                <div className="grid gap-4">
                  <article className={`motion-card motion-delay-4 overflow-hidden rounded-[24px] border bg-white ${tone.ring} ${tone.glow}`}>
                    <div
                      className="min-h-[290px] bg-cover bg-center transition-transform duration-500 ease-out hover:scale-[1.03] max-[640px]:min-h-[220px]"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(8,20,28,0.10), rgba(8,20,28,0.36)), url('${coverImage}')`,
                      }}
                    />
                    <div className="p-7 max-[640px]:p-5">
                      <div className={`mb-3 h-1.5 w-20 rounded-full bg-gradient-to-r ${tone.accent}`} />
                      <h3 className="text-[1.04rem] font-semibold text-[#1d6a3e]">প্রোগ্রাম সংক্ষেপ</h3>
                      <p className="mt-2.5 leading-[1.72] text-[#28412f]">{program.overview[0]}</p>
                    </div>
                  </article>

                  <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
                    <article
                      className={`motion-card rounded-[20px] border bg-white px-6 py-6 shadow-[0_16px_30px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.ring}`}
                    >
                      <h3 className="text-base font-semibold text-[#1d6a3e]">শেখার ধরন</h3>
                      <p className="mt-2.5 leading-[1.72] text-[#28412f]">
                        ব্যবহারিক ক্লাস, গাইডেড প্রজেক্ট, ল্যাব অনুশীলন এবং উপস্থাপনাভিত্তিক মূল্যায়নের মাধ্যমে শেখানো হয়।
                      </p>
                    </article>

                    <article
                      className={`motion-card rounded-[20px] border bg-white px-6 py-6 shadow-[0_16px_30px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.ring}`}
                    >
                      <h3 className="text-base font-semibold text-[#1d6a3e]">শিক্ষার ফলাফল</h3>
                      <p className="mt-2.5 leading-[1.72] text-[#28412f]">
                        এই প্রোগ্রাম শিক্ষার্থীদের প্রাথমিক প্রযুক্তিগত চাকরি ও ভবিষ্যৎ উচ্চশিক্ষা, দুই ক্ষেত্রের জন্যই শক্ত ভিত্তি তৈরি করে।
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${surfaceClass} motion-delay-3`}>
            <div className={sectionBarClass}>বিস্তারিত তথ্য</div>

            <div className="grid gap-5 bg-[linear-gradient(180deg,#f7fbff_0%,#eef6ff_100%)] px-8 py-8 max-[640px]:px-5 max-[640px]:py-5">
              <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-4 max-[980px]:grid-cols-1">
                <article
                  className={`motion-card rounded-[20px] border bg-white px-7 py-6 shadow-[0_16px_30px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.ring}`}
                >
                  <h3 className="text-[1.02rem] font-semibold text-[#1d6a3e]">প্রোগ্রাম সম্পর্কে</h3>
                  <ul className="mt-4 ml-[18px] grid list-disc gap-3">
                    {program.overview.map((item) => (
                      <li className="leading-[1.75] text-[#244030]" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article
                  className={`motion-card rounded-[20px] border bg-white px-7 py-6 shadow-[0_16px_30px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.ring}`}
                >
                  <h3 className="text-[1.02rem] font-semibold text-[#1d6a3e]">কেন এই প্রোগ্রাম</h3>
                  <div className="mt-4 grid gap-3">
                    {highlightItems.map((item) => (
                      <div
                        className={`motion-card rounded-[18px] border bg-gradient-to-r p-5 shadow-[0_14px_28px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:p-4 ${tone.soft} ${tone.ring}`}
                        key={item.title}
                      >
                        <strong className="block text-sm text-[#155433]">{item.title}</strong>
                        <p className="mt-2 text-sm leading-[1.68] text-[#28412f]">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="grid grid-cols-2 gap-4 max-[980px]:grid-cols-1">
                <article
                  className={`motion-card rounded-[20px] border bg-white px-7 py-6 shadow-[0_16px_30px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.ring}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[1.02rem] font-semibold text-[#1d6a3e]">মূল বিষয়সমূহ</h3>
                    <span className={`inline-flex items-center rounded-full border px-3.5 py-2 text-xs font-extrabold leading-[1.4] ${tone.chip}`}>
                      কারিকুলাম
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {program.modules.map((item, index) => (
                      <article
                        className={`motion-card flex items-start gap-3 rounded-[16px] border bg-white px-5 py-4 shadow-[0_12px_24px_rgba(12,40,62,0.04)] transition-transform duration-300 ease-out hover:translate-x-1 ${tone.ring}`}
                        key={item}
                      >
                        <span
                          className={`inline-flex min-h-8 min-w-8 items-center justify-center rounded-full bg-gradient-to-b text-sm font-extrabold text-white ${tone.accent}`}
                        >
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="text-[0.96rem] font-semibold text-[#185536]">{item}</h4>
                          <p className="mt-1.5 text-sm leading-[1.65] text-[#28412f]">
                            প্রতিটি বিষয়ের সঙ্গে ধারণাভিত্তিক শেখা, ব্যবহারিক প্রয়োগ এবং শিক্ষক-নির্দেশিত আলোচনা যুক্ত আছে।
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </article>

                <article
                  className={`motion-card rounded-[20px] border bg-white px-7 py-6 shadow-[0_16px_30px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.ring}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[1.02rem] font-semibold text-[#1d6a3e]">ল্যাব ও প্র্যাকটিস</h3>
                    <span className={`inline-flex items-center rounded-full border px-3.5 py-2 text-xs font-extrabold leading-[1.4] ${tone.chip}`}>
                      হাতে-কলমে
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {program.labs.map((item, index) => (
                      <article
                        className={`motion-card flex items-start gap-3 rounded-[16px] border bg-white px-5 py-4 shadow-[0_12px_24px_rgba(12,40,62,0.04)] transition-transform duration-300 ease-out hover:translate-x-1 ${tone.ring}`}
                        key={item}
                      >
                        <span
                          className={`inline-flex min-h-8 min-w-8 items-center justify-center rounded-full bg-gradient-to-b text-sm font-extrabold text-white ${tone.accent}`}
                        >
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="text-[0.96rem] font-semibold text-[#185536]">{item}</h4>
                          <p className="mt-1.5 text-sm leading-[1.65] text-[#28412f]">
                            এই অনুশীলনগুলো যন্ত্রপাতি, কাজের ধাপ এবং তত্ত্বাবধানে বাস্তব কাজ করার দক্ষতা বাড়াতে সহায়তা করে।
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </article>
              </div>

              <article
                className={`motion-card rounded-[20px] border bg-white px-7 py-6 shadow-[0_16px_30px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.ring}`}
              >
                <div className="flex items-center justify-between gap-2 max-[640px]:flex-col max-[640px]:items-start">
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-[#1d6a3e]">প্রোগ্রাম গ্যালারি</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-[#28412f]">
                      এই প্রোগ্রামের শেখার পরিবেশ, প্র্যাকটিসের ধরণ এবং সামগ্রিক কাজের আবহ বোঝানোর জন্য কিছু ভিজ্যুয়াল প্রিভিউ দেখানো হয়েছে।
                    </p>
                  </div>
                  <span className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-extrabold leading-[1.4] ${tone.chip}`}>
                    ছবি
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
                  {program.images.map((image, index) => (
                    <article
                      className={`motion-card overflow-hidden rounded-[18px] border bg-white transition-transform duration-300 ease-out hover:-translate-y-1 ${tone.ring} ${tone.glow}`}
                      key={image}
                    >
                      <div
                        className="min-h-[220px] bg-cover bg-center transition-transform duration-500 ease-out hover:scale-[1.04]"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(10,21,30,0.08), rgba(10,21,30,0.26)), url('${image}')`,
                        }}
                      />
                      <div className="p-5">
                        <span className="text-sm font-semibold text-[#185536]">ছবি {index + 1}</span>
                        <p className="mt-2 text-sm leading-[1.68] text-[#28412f]">
                          {program.bangla} বিভাগের শেখার পরিবেশ ও দৈনন্দিন ব্যবহারিক কাজের একটি স্টাইলড প্রিভিউ।
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </article>

              <article
                className={`motion-card rounded-[20px] border bg-white px-7 py-6 shadow-[0_16px_30px_rgba(12,40,62,0.06)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.ring}`}
              >
                <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-4 max-[900px]:grid-cols-1">
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-[#1d6a3e]">সম্ভাব্য ক্যারিয়ার</h3>
                    <p className="mt-2 leading-[1.72] text-[#28412f]">
                      এই প্রোগ্রাম শেষ করার পর শিক্ষার্থীরা জুনিয়র প্রযুক্তিগত পদ, শিল্পখাতের workflow-ভিত্তিক কাজ অথবা আরও বিশেষায়িত উচ্চশিক্ষার দিকে এগোতে পারে।
                    </p>
                  </div>

                  <div className="flex flex-wrap content-start gap-2.5">
                    {program.careers.map((item) => (
                      <span
                        className={`motion-card inline-flex items-center rounded-full border px-4.5 py-3.5 text-[0.92rem] font-bold leading-[1.45] shadow-[0_10px_20px_rgba(12,40,62,0.05)] transition-transform duration-300 ease-out hover:-translate-y-1 ${tone.chip}`}
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              <article
                className={`motion-card rounded-[22px] border bg-gradient-to-r px-6 py-6 shadow-[0_18px_32px_rgba(12,40,62,0.08)] transition-transform duration-300 ease-out hover:-translate-y-1 max-[640px]:px-5 max-[640px]:py-5 ${tone.soft} ${tone.ring}`}
              >
                <div className="flex items-center justify-between gap-3 max-[640px]:flex-col max-[640px]:items-start">
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-[#1d6a3e]">আরও প্রোগ্রাম দেখুন</h3>
                    <p className="mt-2 leading-[1.72] text-[#28412f]">
                      হোম পেজে ফিরে গিয়ে engineering, architecture এবং manufacturing-এর অন্য প্রোগ্রামগুলোও দেখতে পারবেন।
                    </p>
                  </div>
                  <Link
                    className={`inline-flex items-center rounded-full bg-gradient-to-b px-5.5 py-3.5 text-sm font-extrabold leading-[1.45] text-white shadow-[0_14px_28px_rgba(26,77,52,0.2)] ${tone.accent}`}
                    href="/"
                  >
                    হোমে যান
                  </Link>
                </div>
              </article>
            </div>
          </section>
        </div>

        <InnerSidebar quickLinks={programQuickLinks} />
      </section>
    </main>
  );
}
