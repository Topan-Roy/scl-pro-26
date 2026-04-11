import {
  departmentHeroSlides as sharedDepartmentHeroSlides,
  departmentImageGroups,
} from "@/data/site-images";

export type DepartmentId = "computer" | "electrical" | "civil" | "mechanical";

export type Department = {
  id: DepartmentId;
  name: string;
  bangla: string;
  details: string;
  points: string[];
  moreDetails: string[];
  careers: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
  images: string[];
};

export const departmentHeroSlides = sharedDepartmentHeroSlides;

export const departmentHighlights = [
  {
    title: "আধুনিক ল্যাব",
    text: "প্রতিটি টেকনোলজির জন্য hands-on practical class এবং lab support রয়েছে।",
  },
  {
    title: "দক্ষ শিক্ষক",
    text: "অভিজ্ঞ শিক্ষক ও ইনস্ট্রাক্টররা theory এবং practical দুই দিকেই সহযোগিতা করেন।",
  },
  {
    title: "শিল্প সংযোগ",
    text: "ইন্ডাস্ট্রিয়াল attachment ও project work-এর মাধ্যমে বাস্তব অভিজ্ঞতা তৈরি হয়।",
  },
];

export const departments: Department[] = [
  {
    id: "computer",
    name: "Computer Technology",
    bangla: "কম্পিউটার টেকনোলজি",
    details:
      "Programming, web development, database, networking, cybersecurity and software project-based learning.",
    points: ["Programming Lab", "Networking Practice", "Web Project", "Industrial Attachment"],
    moreDetails: [
      "ওয়েব, সফটওয়্যার এবং database development-এর উপর নিয়মিত practical class নেওয়া হয়।",
      "Networking, hardware maintenance এবং cybersecurity basic skill ধাপে ধাপে শেখানো হয়।",
      "Final project ও industrial attachment-এর মাধ্যমে real-world experience তৈরি করা হয়।",
    ],
    careers: ["Software Developer", "Web Developer", "Network Support", "Junior Programmer"],
    stats: [
      { label: "ল্যাব ফোকাস", value: "Programming & Networking" },
      { label: "শেখার ধরন", value: "Project Based" },
      { label: "ক্যারিয়ার", value: "Software & IT Support" },
    ],
    images: departmentImageGroups.computer,
  },
  {
    id: "electrical",
    name: "Electrical Technology",
    bangla: "ইলেকট্রিক্যাল টেকনোলজি",
    details:
      "Circuit analysis, control systems, industrial automation, motor control and electrical safety training.",
    points: ["Circuit Design", "PLC Basics", "Power System", "Industrial Safety"],
    moreDetails: [
      "Electrical machine, control circuit এবং wiring-এর উপর hands-on lab class পরিচালিত হয়।",
      "Power distribution, motor control ও industrial automation-এর practical practice করানো হয়।",
      "Safety standard মেনে workshop ও field-related exercise করিয়ে বাস্তব প্রস্তুতি গড়ে তোলা হয়।",
    ],
    careers: ["Power Technician", "Electrical Supervisor", "PLC Operator", "Maintenance Assistant"],
    stats: [
      { label: "ল্যাব ফোকাস", value: "Circuit & PLC" },
      { label: "শেখার ধরন", value: "Hands-on Practice" },
      { label: "ক্যারিয়ার", value: "Power & Maintenance" },
    ],
    images: departmentImageGroups.electrical,
  },
  {
    id: "civil",
    name: "Civil Technology",
    bangla: "সিভিল টেকনোলজি",
    details:
      "Surveying, drafting, estimation, construction materials and practical site management skills.",
    points: ["Survey Lab", "AutoCAD Drafting", "Materials Test", "Site Planning"],
    moreDetails: [
      "Survey instrument, leveling ও site measurement practical-এর মাধ্যমে মাপজোখ ও field skill শেখানো হয়।",
      "Construction drawing, AutoCAD drafting ও estimation exercise নিয়মিত করানো হয়।",
      "Materials testing এবং site planning-এর উপর বাস্তবভিত্তিক কাজের চর্চা গড়ে তোলা হয়।",
    ],
    careers: ["Site Supervisor", "Survey Assistant", "CAD Operator", "Estimator Assistant"],
    stats: [
      { label: "ল্যাব ফোকাস", value: "Survey & Drafting" },
      { label: "শেখার ধরন", value: "Field Practice" },
      { label: "ক্যারিয়ার", value: "Construction & Design" },
    ],
    images: departmentImageGroups.civil,
  },
  {
    id: "mechanical",
    name: "Mechanical Technology",
    bangla: "মেকানিক্যাল টেকনোলজি",
    details:
      "Manufacturing process, machine tools, CAD/CAM, maintenance and workshop-centered practical sessions.",
    points: ["Machine Shop", "CAD/CAM", "Thermal Basics", "Maintenance Skills"],
    moreDetails: [
      "Machine tool operation, fitting, fabrication এবং workshop safety বাস্তব ক্লাসের মাধ্যমে শেখানো হয়।",
      "CAD/CAM concept ও machine drawing practical project-এর মাধ্যমে অনুশীলন করানো হয়।",
      "Maintenance, thermal basics ও production support related skill step-by-step build করা হয়।",
    ],
    careers: ["Workshop Technician", "Machine Operator", "CAD Assistant", "Maintenance Technician"],
    stats: [
      { label: "ল্যাব ফোকাস", value: "Machine Shop & CAD" },
      { label: "শেখার ধরন", value: "Workshop Centered" },
      { label: "ক্যারিয়ার", value: "Production & Maintenance" },
    ],
    images: departmentImageGroups.mechanical,
  },
];

export const departmentQuickLinks = departments.map((department) => ({
  label: department.bangla,
  href: `/departments/${department.id}`,
}));

export function getDepartmentById(id: DepartmentId) {
  return departments.find((department) => department.id === id) ?? departments[0];
}
