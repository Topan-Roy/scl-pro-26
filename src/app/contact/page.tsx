import { instituteIdentity } from "@/data/site";
import { commonInnerHeroSlides } from "@/data/site-images";
import {
  InnerHero,
  InnerSidebar,
  leftColumnClass,
  sectionBarClass,
  shellLayoutClass,
  shellMainClass,
  surfaceClass,
  whiteCardClass,
} from "../inner-page-ui";

const heroSlides = commonInnerHeroSlides;

const quickLinks = [
  { label: "ক্লাস রুটিন", href: "/academics#curriculum" },
  { label: "সিলেবাস", href: "/academics#syllabus" },
  { label: "পরীক্ষার রুটিন", href: "/academics#courses" },
  { label: "ফলাফল", href: "/academics#exam-result" },
];

const importantLinks = [
  { label: "Ministry of Education", href: "https://moedu.gov.bd" },
  { label: "Teacher's Portal", href: "https://teachers.gov.bd" },
  { label: "Directorate of Technical Education", href: "https://techedu.gov.bd" },
  { label: "National Web Portal of Bangladesh", href: "https://bangladesh.gov.bd" },
  { label: "Bangladesh Technical Education Board", href: "https://www.bteb.gov.bd" },
];

const infoCards = [
  {
    title: "অফিস সময়",
    value: "রবিবার - বৃহস্পতিবার | সকাল ৯:০০ - বিকাল ৪:৩০",
  },
  {
    title: "ফোন",
    value: instituteIdentity.phone,
  },
  {
    title: "ইমেইল",
    value: instituteIdentity.email,
  },
  {
    title: "ঠিকানা",
    value: instituteIdentity.address,
  },
];

export default function ContactPage() {
  return (
    <main className={shellMainClass}>
      <InnerHero activeSlide={3} slides={heroSlides} />

      <section className={shellLayoutClass}>
        <div className={leftColumnClass}>
          <section className={surfaceClass}>
            <div className={sectionBarClass}>যোগাযোগ</div>
            <div className="min-h-[420px] bg-[linear-gradient(180deg,#8eb4d7,#9bc0df)] px-[18px] pt-[18px] pb-5 max-[640px]:min-h-[360px] max-[640px]:p-[14px]">
              <div className="max-w-[48ch] text-[#0f2d4e]">
                <h1 className="text-[clamp(1.35rem,3vw,2.1rem)] leading-[1.15]">আমাদের সাথে যোগাযোগ করুন</h1>
                <p className="mt-2 leading-[1.65]">
                  ভর্তি, হিসাব, একাডেমিক আপডেট অথবা সাধারণ তথ্যের জন্য নিচের ফর্মটি পূরণ করুন।
                </p>
              </div>

              <form className="mt-[18px] grid w-full max-w-[340px] gap-3.5">
                <label className="grid gap-1.5 text-[0.98rem] text-[#1a3554]">
                  আপনার নাম
                  <input
                    className="w-full border border-[rgba(58,77,96,0.35)] bg-white p-2.5 text-[#16324c]"
                    name="name"
                    type="text"
                  />
                </label>

                <label className="grid gap-1.5 text-[0.98rem] text-[#1a3554]">
                  আপনার ইমেইল
                  <input
                    className="w-full border border-[rgba(58,77,96,0.35)] bg-white p-2.5 text-[#16324c]"
                    name="email"
                    type="email"
                  />
                </label>

                <label className="grid gap-1.5 text-[0.98rem] text-[#1a3554]">
                  বিষয়
                  <input
                    className="w-full border border-[rgba(58,77,96,0.35)] bg-white p-2.5 text-[#16324c]"
                    name="subject"
                    type="text"
                  />
                </label>

                <label className="grid gap-1.5 text-[0.98rem] text-[#1a3554]">
                  বার্তা
                  <textarea
                    className="w-full resize-y border border-[rgba(58,77,96,0.35)] bg-white p-2.5 text-[#16324c]"
                    name="message"
                    rows={5}
                  />
                </label>

                <button
                  className="min-h-[30px] w-fit border border-[rgba(17,47,72,0.32)] bg-[#f4f4f4] px-3 font-bold text-[#16324c]"
                  type="button"
                >
                  পাঠান
                </button>
              </form>
            </div>
          </section>

          <section className={surfaceClass} id="faq">
            <div className={sectionBarClass}>দ্রুত তথ্য</div>
            <div className="grid grid-cols-2 gap-2.5 bg-[#ececec] p-3 max-[900px]:grid-cols-1">
              {infoCards.map((item) => (
                <article className={whiteCardClass} key={item.title}>
                  <h3 className="text-[0.95rem] font-semibold text-[#1d6a3e]">{item.title}</h3>
                  <p className="mt-1.5 leading-[1.55] text-[#28412f]">{item.value}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <InnerSidebar importantLinks={importantLinks} quickLinks={quickLinks} />
      </section>
    </main>
  );
}
