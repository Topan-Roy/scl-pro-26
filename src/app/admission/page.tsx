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
  "https://picsum.photos/seed/admission-hero-1/1200/500",
  "https://picsum.photos/seed/admission-hero-2/1200/500",
  "https://picsum.photos/seed/admission-hero-3/1200/500",
  "https://picsum.photos/seed/admission-hero-4/1200/500",
];

const eligibilityPoints = [
  "এসএসসি বা সমমান পরীক্ষায় উত্তীর্ণ হতে হবে।",
  "বিজ্ঞান বিভাগ থেকে উত্তীর্ণ শিক্ষার্থীরা অগ্রাধিকার পাবে।",
  "প্রয়োজনীয় একাডেমিক কাগজপত্র জমা দিতে হবে।",
  "নির্বাচিত বিভাগভেদে সাক্ষাৎকার বা মূল্যায়ন হতে পারে।",
];

const documents = [
  "একাডেমিক ট্রান্সক্রিপ্ট ও সনদের মূল কপি এবং ফটোকপি",
  "সাম্প্রতিক পাসপোর্ট সাইজ ছবি",
  "জন্ম সনদ বা জাতীয় পরিচয়পত্রের কপি",
  "অভিভাবকের তথ্য ও জরুরি যোগাযোগ নম্বর",
];

const admissionSteps = [
  {
    title: "ধাপ ১: তথ্য সংগ্রহ",
    text: "পছন্দের টেকনোলজি, যোগ্যতা ও প্রয়োজনীয় কাগজপত্র সম্পর্কে জেনে নিন।",
  },
  {
    title: "ধাপ ২: ফরম পূরণ",
    text: "ভর্তি ফরম পূরণ করে প্রয়োজনীয় কাগজপত্রসহ অফিসে জমা দিন।",
  },
  {
    title: "ধাপ ৩: যাচাই ও নিশ্চিতন",
    text: "অফিস যাচাই শেষে ভর্তি ও ক্লাস শুরুর নির্দেশনা প্রদান করবে।",
  },
];

const feeRows = [
  { type: "ভর্তি ফি", amount: "৫,০০০ টাকা" },
  { type: "সেমিস্টার ফি", amount: "১৮,০০০ - ২৪,০০০ টাকা" },
  { type: "ল্যাব ডেভেলপমেন্ট", amount: "২,৫০০ টাকা" },
  { type: "পরীক্ষা ও রেজিস্ট্রেশন", amount: "বোর্ড নীতিমালা অনুযায়ী" },
];

const quickLinks = [
  { label: "আবেদন নির্দেশনা", href: "/admission" },
  { label: "সিলেবাস", href: "/academics#syllabus" },
  { label: "ডিপার্টমেন্ট", href: "/departments" },
  { label: "যোগাযোগ", href: "/contact" },
];

const supportCards = [
  {
    title: "মেধাবৃত্তি",
    text: "মেধাবী ও আর্থিকভাবে অসচ্ছল শিক্ষার্থীদের জন্য বিশেষ সহায়তা রয়েছে।",
  },
  {
    title: "অভিভাবক সহায়তা",
    text: "ভর্তি, পেমেন্ট ও বিভাগ নির্বাচন নিয়ে অভিভাবকরাও পরামর্শ নিতে পারবেন।",
  },
  {
    title: "ক্লাস শুরু",
    text: "ভর্তি নিশ্চিত হওয়ার পর ক্লাস রুটিন ও ওরিয়েন্টেশন তথ্য সরবরাহ করা হবে।",
  },
  {
    title: "অফিস সহযোগিতা",
    text: "নির্ধারিত অফিস সময়ের মধ্যে ভর্তি সহায়তা ডেস্কে সরাসরি যোগাযোগ করা যাবে।",
  },
];

export default function AdmissionPage() {
  return (
    <main className={shellMainClass}>
      <InnerHero activeSlide={2} slides={heroSlides} />

      <section className={shellLayoutClass}>
        <div className={leftColumnClass}>
          <section className={surfaceClass}>
            <div className={sectionBarClass}>ভর্তি তথ্য</div>
            <div className={featureBodyClass}>
              <div className="max-w-[60ch]">
                <p className="text-[0.78rem] font-extrabold tracking-[0.08em] text-[#1d6a3e]">ADMISSION</p>
                <h1 className="mt-2 text-[clamp(1.45rem,3vw,2.25rem)] leading-[1.16] text-[#124a74]">
                  স্বচ্ছ প্রক্রিয়ায় ভর্তি, সহায়তায় সবসময় প্রস্তুত অফিস
                </h1>
                <p className="mt-2.5 leading-[1.7] text-[#274b63]">
                  আপনার ভর্তি যাত্রা সহজ করতে আমরা যোগ্যতা, কাগজপত্র, ফি এবং পরবর্তী ধাপগুলো
                  পরিষ্কারভাবে সাজিয়ে দিয়েছি।
                </p>
              </div>

              <div className="mt-3.5 grid grid-cols-3 gap-2.5 max-[900px]:grid-cols-1">
                {admissionSteps.map((step) => (
                  <article className={whiteCardClass} key={step.title}>
                    <h3 className="text-base font-semibold text-[#1d6a3e]">{step.title}</h3>
                    <p className="mt-2 leading-[1.6] text-[#28412f]">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-2.5 max-[900px]:grid-cols-1">
            <article className={surfaceClass}>
              <div className={sectionBarClass}>যোগ্যতা</div>
              <ul className="grid gap-2 bg-[#f4f4f4] px-4 pt-3.5 pb-4 pl-8">
                {eligibilityPoints.map((item) => (
                  <li className="leading-[1.58] text-[#23342a]" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className={surfaceClass}>
              <div className={sectionBarClass}>প্রয়োজনীয় কাগজপত্র</div>
              <ul className="grid gap-2 bg-[#f4f4f4] px-4 pt-3.5 pb-4 pl-8">
                {documents.map((item) => (
                  <li className="leading-[1.58] text-[#23342a]" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className={surfaceClass} id="scholarship">
            <div className={sectionBarClass}>ফি তালিকা</div>
            <div className="bg-[#f4f4f4] p-3">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr>
                    <th className="border border-[rgba(27,42,24,0.14)] bg-[#f0fde2] p-2.5 text-left text-[0.9rem] text-[#1c633d]">
                      ফি এর ধরন
                    </th>
                    <th className="border border-[rgba(27,42,24,0.14)] bg-[#f0fde2] p-2.5 text-left text-[0.9rem] text-[#1c633d]">
                      পরিমাণ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row) => (
                    <tr key={row.type}>
                      <td className="border border-[rgba(27,42,24,0.14)] p-2.5 text-[#23342a]">{row.type}</td>
                      <td className="border border-[rgba(27,42,24,0.14)] p-2.5 text-[#23342a]">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={surfaceClass}>
            <div className={sectionBarClass}>ভর্তি সহায়তা</div>
            <div className="grid grid-cols-2 gap-2.5 bg-[#f4f4f4] p-3 max-[900px]:grid-cols-1">
              {supportCards.map((item) => (
                <article className={whiteCardClass} key={item.title}>
                  <h3 className="text-base font-semibold text-[#1d6a3e]">{item.title}</h3>
                  <p className="mt-2 leading-[1.6] text-[#28412f]">{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <InnerSidebar quickLinks={quickLinks} />
      </section>
    </main>
  );
}
