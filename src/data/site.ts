export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type SidebarNoticeItem = {
  date: string;
  text: string;
};

export type SidebarCalendar = {
  title: string;
  weekdays: string[];
  rows: string[][];
};

export const mainNav: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ADMINISTRATION",
    href: "/administration",
    children: [
      { label: "Board Of Directors", href: "/administration#governing-body" },
      { label: "Principal", href: "/administration#principal" },
      { label: "Vice Principal", href: "/administration#vice-principal" },
      { label: "Office Directory", href: "/administration#directory" },
    ],
  },
  {
    label: "ACADEMICS",
    href: "/academics",
    children: [
      { label: "Annual Activities", href: "/academics#annual-activities" },
      { label: "Syllabus", href: "/academics#syllabus" },
      { label: "Courses", href: "/academics#courses" },
      { label: "Exam Result", href: "/academics#exam-result" },
    ],
  },
  { label: "GALLERY", href: "/gallery" },
  {
    label: "OTHER",
    href: "/about#history",
    children: [
      { label: "Institute History", href: "/about#history" },
      { label: "Rules And Regulation", href: "/about#rules" },
      { label: "Library", href: "/about#library" },
      { label: "Hostel", href: "/about#hostel" },
    ],
  },
  { label: "CONTACT", href: "/contact" },
  { label: "ADMISSION", href: "/admission" },
  {
    label: "TECHNOLOGY",
    href: "/departments",
    children: [
      { label: "Computer Technology", href: "/departments#computer" },
      { label: "Electrical Technology", href: "/departments#electrical" },
      { label: "Civil Technology", href: "/departments#civil" },
      { label: "Mechanical Technology", href: "/departments#mechanical" },
    ],
  },
  { label: "RESULT", href: "/notice" },
  {
    label: "E-CLASS",
    href: "/innovation-lab",
    children: [
      { label: "Online Class", href: "/innovation-lab" },
      { label: "Skills Portal", href: "/innovation-lab" },
    ],
  },
];

export const socialLinks = [
  { label: "Feed", href: "/" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Youtube", href: "https://www.youtube.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Twitter", href: "https://www.twitter.com" },
];

export const quickFooterLinks = [
  { label: "Home Page", href: "/" },
  { label: "Electrical Technology", href: "/departments#electrical" },
  { label: "Mechanical Technology", href: "/departments#mechanical" },
  { label: "Computer Technology", href: "/departments#computer" },
  { label: "Civil Technology", href: "/departments#civil" },
];

export const footerLinkGroups = [
  {
    title: "Academics",
    links: [
      { label: "Programs", href: "/departments" },
      { label: "Academic Calendar", href: "/academics#calendar" },
      { label: "Syllabus", href: "/academics#curriculum" },
      { label: "Class Routine", href: "/academics#routine" },
    ],
  },
  {
    title: "Campus Life",
    links: [
      { label: "Clubs and Activities", href: "/gallery#campus-life" },
      { label: "Labs", href: "/innovation-lab" },
      { label: "Industry Visit", href: "/gallery#industry-visit" },
      { label: "Scholarship", href: "/admission#scholarship" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Admission Help", href: "/admission" },
      { label: "Notice Board", href: "/notice" },
      { label: "Contact Office", href: "/contact" },
      { label: "Quick FAQ", href: "/contact#faq" },
    ],
  },
];

export const sharedNoticeBoard: SidebarNoticeItem[] = [
  {
    date: "০৩ ডিসেম্বর ২০২৪",
    text: "ডিপ্লোমা ভর্তির সহায়তা ডেস্ক নতুন আবেদনকারীদের জন্য খোলা রয়েছে।",
  },
  {
    date: "০২ ডিসেম্বর ২০২৪",
    text: "সেমিস্টার ফি ও পেমেন্ট সংক্রান্ত সহায়তা একাউন্টস অফিসে পাওয়া যাচ্ছে।",
  },
  {
    date: "১৭ ফেব্রুয়ারি ২০২৪",
    text: "একাডেমিক ক্যালেন্ডার ও পরীক্ষার আপডেট অনলাইনে প্রকাশিত হয়েছে।",
  },
  {
    date: "০৩ জানুয়ারি ২০২৪",
    text: "নিয়মিত অফিস সেবা নির্ধারিত কর্মঘণ্টায় চালু রয়েছে।",
  },
  {
    date: "২৯ জুন ২০২৩",
    text: "প্রতিষ্ঠানের সাধারণ নোটিশ ও তথ্য সহায়তার আপডেট।",
  },
];

export const sharedSidebarCalendar: SidebarCalendar = {
  title: "দিনপঞ্জী | এপ্রিল ২০২৬",
  weekdays: ["সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি", "রবি"],
  rows: [
    ["", "১", "২", "৩", "৪", "৫", ""],
    ["৬", "৭", "৮", "৯", "১০", "১১", "১২"],
    ["১৩", "১৪", "১৫", "১৬", "১৭", "১৮", "১৯"],
    ["২০", "২১", "২২", "২৩", "২৪", "২৫", "২৬"],
    ["২৭", "২৮", "২৯", "৩০", "", "", ""],
  ],
};

export const instituteIdentity = {
  shortName: "BGC",
  fullName: "Bekti Goto College",
  tagline: "Private College and Professional Education Portal",
  phone: "+880 1716-000000",
  email: "info@bektigoto.edu.bd",
  address: "Dhaka, Bangladesh",
};
