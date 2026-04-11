import {
  InnerHero,
  InnerSidebar,
  leftColumnClass,
  sectionBarClass,
  shellLayoutClass,
  shellMainClass,
  surfaceClass,
} from "../inner-page-ui";
import { commonInnerHeroSlides } from "@/data/site-images";

const heroSlides = commonInnerHeroSlides;

const departments = [
  "কম্পিউটার টেকনোলজি",
  "ইলেকট্রিক্যাল টেকনোলজি",
  "সিভিল টেকনোলজি",
  "মেকানিক্যাল টেকনোলজি",
];

const semesters = ["১ম", "২য়", "৩য়", "৪র্থ", "৫ম", "৬ষ্ঠ", "৭ম", "৮ম"];
const terms = ["মিডটার্ম", "ফাইনাল", "বোর্ড পরীক্ষা"];
const sessions = ["২০২২-২৩", "২০২৩-২৪", "২০২৪-২৫", "২০২৫-২৬"];

const quickLinks = [
  { label: "ক্লাস রুটিন", href: "/academics#curriculum" },
  { label: "সিলেবাস", href: "/academics#syllabus" },
  { label: "পরীক্ষার রুটিন", href: "/academics#courses" },
  { label: "ফলাফল", href: "/notice" },
];

const importantLinks = [
  { label: "Ministry of Education", href: "https://moedu.gov.bd" },
  { label: "Teacher's Portal", href: "https://teachers.gov.bd" },
  { label: "Directorate of Technical Education", href: "https://techedu.gov.bd" },
  { label: "National Curriculum & Textbook Board, Bangladesh", href: "https://nctb.gov.bd" },
  { label: "National Web Portal of Bangladesh", href: "https://bangladesh.gov.bd" },
];

export default function NoticePage() {
  return (
    <main className={shellMainClass}>
      <InnerHero activeSlide={4} slides={heroSlides} />

      <section className={shellLayoutClass}>
        <div className={leftColumnClass}>
          <section className={surfaceClass}>
            <div className={sectionBarClass}>Exam Result</div>
            <div className="min-h-[320px] bg-[linear-gradient(180deg,#8eb4d7,#9bbde0)] px-5 pt-[26px] pb-5 max-[640px]:p-[14px]">
              <form className="grid w-full max-w-[380px] gap-3.5 text-[#16324c]">
                <label className="grid gap-1.5 text-[0.96rem]">
                  * Please Enter Registration (xxyyzzz) :
                  <input
                    className="min-h-6 w-full max-w-[220px] border border-[rgba(58,77,96,0.35)] bg-white px-2 py-0.5 text-[#16324c] max-[640px]:max-w-none"
                    name="registration"
                    type="text"
                  />
                </label>

                <label className="grid gap-1.5 text-[0.96rem]">
                  ** Department
                  <select
                    className="min-h-6 w-full max-w-[220px] border border-[rgba(58,77,96,0.35)] bg-white px-2 py-0.5 text-[#16324c] max-[640px]:max-w-none"
                    defaultValue=""
                    name="department"
                  >
                    <option disabled value="">
                      Select Department
                    </option>
                    {departments.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-1.5 text-[0.96rem]">
                  ** Semester
                  <select
                    className="min-h-6 w-full max-w-[220px] border border-[rgba(58,77,96,0.35)] bg-white px-2 py-0.5 text-[#16324c] max-[640px]:max-w-none"
                    defaultValue=""
                    name="semester"
                  >
                    <option disabled value="">
                      Select Semester
                    </option>
                    {semesters.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-1.5 text-[0.96rem]">
                  * Term :
                  <select
                    className="min-h-6 w-full max-w-[220px] border border-[rgba(58,77,96,0.35)] bg-white px-2 py-0.5 text-[#16324c] max-[640px]:max-w-none"
                    defaultValue=""
                    name="term"
                  >
                    <option disabled value="">
                      Select Term
                    </option>
                    {terms.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-1.5 text-[0.96rem]">
                  ** Session
                  <select
                    className="min-h-6 w-full max-w-[220px] border border-[rgba(58,77,96,0.35)] bg-white px-2 py-0.5 text-[#16324c] max-[640px]:max-w-none"
                    defaultValue=""
                    name="session"
                  >
                    <option disabled value="">
                      Select Session
                    </option>
                    {sessions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  className="mt-0.5 min-h-[34px] w-[100px] border border-[rgba(17,47,72,0.32)] bg-[#f4f4f4] text-[#16324c]"
                  type="button"
                >
                  Search
                </button>
              </form>
            </div>
          </section>
        </div>

        <InnerSidebar importantLinks={importantLinks} quickLinks={quickLinks} />
      </section>
    </main>
  );
}
