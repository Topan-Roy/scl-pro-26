export type ProgramTone = "blue" | "pink" | "purple";

export type Program = {
  slug: string;
  title: string;
  bangla: string;
  tone: ProgramTone;
  summary: string;
  overview: string[];
  modules: string[];
  labs: string[];
  careers: string[];
  images: string[];
};

export const programs: Program[] = [
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    bangla: "সিভিল ইঞ্জিনিয়ারিং",
    tone: "blue",
    summary:
      "সার্ভেয়িং, স্ট্রাকচারাল বেসিকস, ড্রাফটিং, এস্টিমেশন এবং সাইট ম্যানেজমেন্টভিত্তিক ইঞ্জিনিয়ারিং শিক্ষা।",
    overview: [
      "এই প্রোগ্রামে surveying, construction drawing, materials testing এবং field-based measurement skill গড়ে তোলা হয়।",
      "শিক্ষার্থীরা AutoCAD drafting, estimation এবং site supervision-এর ভিত্তিমূলক চর্চা করে।",
      "বাস্তব construction workflow বোঝার জন্য project, report ও practical task দেওয়া হয়।",
    ],
    modules: ["Surveying", "Construction Materials", "AutoCAD Drafting", "Estimation & Costing"],
    labs: ["Survey Lab", "Materials Test Lab", "CAD Studio", "Site Planning Practice"],
    careers: ["Site Engineer Assistant", "Survey Assistant", "Draftsman", "Estimator"],
    images: [
      "https://picsum.photos/seed/program-civil-1/1200/700",
      "https://picsum.photos/seed/program-civil-2/1200/700",
      "https://picsum.photos/seed/program-civil-3/1200/700",
    ],
  },
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    bangla: "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং",
    tone: "pink",
    summary:
      "পাওয়ার সিস্টেম, ইলেকট্রিক্যাল মেশিন, ইন্ডাস্ট্রিয়াল ওয়্যারিং এবং সেফটি-কেন্দ্রিক প্রযুক্তিগত প্রশিক্ষণ।",
    overview: [
      "Electrical circuit, motor control, power distribution এবং industrial safety এই প্রোগ্রামের মূল অংশ।",
      "Hands-on wiring practice, machine testing এবং panel operation-এর মাধ্যমে practical confidence তৈরি করা হয়।",
      "Industry-ready basic troubleshooting skill গড়ে তোলার জন্য workshop session পরিচালিত হয়।",
    ],
    modules: ["Circuit Analysis", "Electrical Machines", "Power System", "PLC Basics"],
    labs: ["Circuit Lab", "Machine Lab", "Wiring Workshop", "Safety Drill"],
    careers: ["Electrical Technician", "Maintenance Assistant", "PLC Operator", "Power Plant Support"],
    images: [
      "https://picsum.photos/seed/program-electrical-1/1200/700",
      "https://picsum.photos/seed/program-electrical-2/1200/700",
      "https://picsum.photos/seed/program-electrical-3/1200/700",
    ],
  },
  {
    slug: "computer-engineering",
    title: "Computer Engineering",
    bangla: "কম্পিউটার ইঞ্জিনিয়ারিং",
    tone: "purple",
    summary:
      "প্রোগ্রামিং, নেটওয়ার্কিং, ডেটাবেইস, সফটওয়্যার প্রজেক্ট এবং আইটি সাপোর্টভিত্তিক শিক্ষা।",
    overview: [
      "Programming logic, web development, database management এবং hardware support skill গড়ে তোলা হয়।",
      "Network setup, cybersecurity basics এবং software project-based learning এই প্রোগ্রামের শক্ত দিক।",
      "Career preparation-এর জন্য project presentation ও industrial attachment ধরনের practice রাখা হয়।",
    ],
    modules: ["Programming", "Database", "Networking", "Web Development"],
    labs: ["Programming Lab", "Hardware Lab", "Networking Practice", "Project Studio"],
    careers: ["Junior Developer", "IT Support Engineer", "Network Support", "Database Assistant"],
    images: [
      "https://picsum.photos/seed/program-computer-1/1200/700",
      "https://picsum.photos/seed/program-computer-2/1200/700",
      "https://picsum.photos/seed/program-computer-3/1200/700",
    ],
  },
  {
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    bangla: "মেকানিক্যাল ইঞ্জিনিয়ারিং",
    tone: "blue",
    summary:
      "মেশিন টুলস, ফ্যাব্রিকেশন, মেইনটেন্যান্স, প্রোডাকশন এবং CAD/CAM-ভিত্তিক ব্যবহারিক শিক্ষা।",
    overview: [
      "Machine shop, fitting, fabrication, thermal basics এবং production process সম্পর্কে বাস্তবভিত্তিক শিক্ষা দেওয়া হয়।",
      "Workshop-centered class-এর মাধ্যমে tool handling ও maintenance skill তৈরি করা হয়।",
      "CAD/CAM exposure শিক্ষার্থীদের design ও manufacturing workflow বুঝতে সহায়তা করে।",
    ],
    modules: ["Machine Tools", "Manufacturing Process", "CAD/CAM", "Thermal Engineering Basics"],
    labs: ["Machine Shop", "Fitting Practice", "Maintenance Workshop", "Design Lab"],
    careers: ["Workshop Technician", "Machine Operator", "Maintenance Technician", "Production Support"],
    images: [
      "https://picsum.photos/seed/program-mechanical-1/1200/700",
      "https://picsum.photos/seed/program-mechanical-2/1200/700",
      "https://picsum.photos/seed/program-mechanical-3/1200/700",
    ],
  },
  {
    slug: "architecture",
    title: "Architecture",
    bangla: "আর্কিটেকচার",
    tone: "pink",
    summary:
      "বিল্ডিং ডিজাইন, ড্রাফটিং, প্রেজেন্টেশন, প্ল্যানিং এবং ক্রিয়েটিভ স্টুডিও-ভিত্তিক আর্কিটেকচার শিক্ষা।",
    overview: [
      "Space planning, concept sketching, architectural drawing এবং design presentation এই প্রোগ্রামের প্রধান বিষয়।",
      "Students scale drawing, model concept এবং software-assisted design-এর সাথে পরিচিত হয়।",
      "Creative thinking ও functional planning একসাথে গড়ে তুলতে studio assignment দেওয়া হয়।",
    ],
    modules: ["Architectural Drafting", "Building Planning", "Design Studio", "Presentation Techniques"],
    labs: ["Drawing Studio", "Model Workshop", "CAD Corner", "Design Review Session"],
    careers: ["Architectural Draftsman", "Design Assistant", "3D Visualization Assistant", "Planning Support"],
    images: [
      "https://picsum.photos/seed/program-architecture-1/1200/700",
      "https://picsum.photos/seed/program-architecture-2/1200/700",
      "https://picsum.photos/seed/program-architecture-3/1200/700",
    ],
  },
  {
    slug: "apparel-manufacturing",
    title: "Apparel Manufacturing",
    bangla: "অ্যাপারেল ম্যানুফ্যাকচারিং",
    tone: "purple",
    summary:
      "গার্মেন্টস প্রোডাকশন, মার্চেন্ডাইজিং বেসিকস, লাইন ব্যালান্সিং এবং ফ্যাক্টরি workflow-কেন্দ্রিক শিক্ষা।",
    overview: [
      "Garment production line, pattern process, sewing flow এবং factory coordination সম্পর্কে ধারণা দেওয়া হয়।",
      "Production planning, quality checkpoints এবং apparel workflow management-এর basic training থাকে।",
      "Real industry environment বোঝাতে manufacturing process-based assignments করানো হয়।",
    ],
    modules: ["Production Process", "Line Balancing", "Merchandising Basics", "Quality Control"],
    labs: ["Apparel Workshop", "Process Planning Desk", "Quality Check Practice", "Factory Simulation"],
    careers: ["Production Assistant", "Merchandising Support", "Quality Checker", "Line Supervisor Trainee"],
    images: [
      "https://picsum.photos/seed/program-apparel-1/1200/700",
      "https://picsum.photos/seed/program-apparel-2/1200/700",
      "https://picsum.photos/seed/program-apparel-3/1200/700",
    ],
  },
  {
    slug: "wet-processing",
    title: "Wet Processing",
    bangla: "ওয়েট প্রসেসিং",
    tone: "purple",
    summary:
      "টেক্সটাইল ডাইং, ওয়াশিং, ফিনিশিং এবং ওয়েট প্রসেস কন্ট্রোল-কেন্দ্রিক ম্যানুফ্যাকচারিং শিক্ষা।",
    overview: [
      "Dyeing, bleaching, finishing ও chemical process control এই প্রোগ্রামের core বিষয়।",
      "Wet process-এর quality outcome, machine flow এবং production control বোঝানো হয়।",
      "Textile industry-ready ধারণা দিতে lab-based recipe এবং process discussion করা হয়।",
    ],
    modules: ["Dyeing Basics", "Finishing Process", "Textile Chemistry", "Process Control"],
    labs: ["Wet Process Lab", "Chemical Handling Practice", "Shade Matching Session", "Quality Review"],
    careers: ["Dyeing Operator Support", "Wet Process Technician", "Quality Assistant", "Finishing Supervisor Trainee"],
    images: [
      "https://picsum.photos/seed/program-wet-1/1200/700",
      "https://picsum.photos/seed/program-wet-2/1200/700",
      "https://picsum.photos/seed/program-wet-3/1200/700",
    ],
  },
  {
    slug: "fashion-designing",
    title: "Fashion Designing",
    bangla: "ফ্যাশন ডিজাইনিং",
    tone: "pink",
    summary:
      "ফ্যাশন ইলাস্ট্রেশন, প্যাটার্ন আইডিয়া ডেভেলপমেন্ট, স্টাইলিং এবং ক্রিয়েটিভ অ্যাপারেল কনসেপ্ট গঠন।",
    overview: [
      "Fashion concept, trend understanding, styling এবং design communication skill উন্নয়ন করা হয়।",
      "Illustration, mood board এবং collection idea development-এর মাধ্যমে creative foundation তৈরি হয়।",
      "Design presentation ও visual storytelling এই প্রোগ্রামের একটি গুরুত্বপূর্ণ অংশ।",
    ],
    modules: ["Fashion Illustration", "Styling", "Trend Study", "Design Presentation"],
    labs: ["Design Studio", "Illustration Practice", "Mood Board Session", "Presentation Review"],
    careers: ["Fashion Design Assistant", "Styling Assistant", "Creative Coordinator", "Sample Development Support"],
    images: [
      "https://picsum.photos/seed/program-fashion-1/1200/700",
      "https://picsum.photos/seed/program-fashion-2/1200/700",
      "https://picsum.photos/seed/program-fashion-3/1200/700",
    ],
  },
  {
    slug: "fabric-manufacturing",
    title: "Fabric Manufacturing",
    bangla: "ফ্যাব্রিক ম্যানুফ্যাকচারিং",
    tone: "blue",
    summary:
      "উইভিং, নিটিং, ফ্যাব্রিক স্ট্রাকচার এবং প্রোডাকশন প্ল্যানিং-ভিত্তিক টেক্সটাইল ম্যানুফ্যাকচারিং শিক্ষা।",
    overview: [
      "Fabric structure, weaving/knitting basics এবং mill production process নিয়ে এই প্রোগ্রাম সাজানো।",
      "Students fabric quality, process sequence এবং production planning বিষয়ে বাস্তব ধারণা পায়।",
      "Textile plant workflow বুঝতে manufacturing-oriented case practice করা হয়।",
    ],
    modules: ["Fabric Structure", "Weaving Basics", "Knitting Basics", "Production Planning"],
    labs: ["Fabric Analysis Lab", "Production Flow Practice", "Quality Review", "Textile Process Session"],
    careers: ["Fabric Production Assistant", "Quality Inspector", "Process Support", "Mill Planning Trainee"],
    images: [
      "https://picsum.photos/seed/program-fabric-1/1200/700",
      "https://picsum.photos/seed/program-fabric-2/1200/700",
      "https://picsum.photos/seed/program-fabric-3/1200/700",
    ],
  },
  {
    slug: "yarn-manufacturing",
    title: "Yarn Manufacturing",
    bangla: "ইয়ার্ন ম্যানুফ্যাকচারিং",
    tone: "blue",
    summary:
      "স্পিনিং, ইয়ার্ন কোয়ালিটি, প্রসেস সিকোয়েন্স এবং মিল-ভিত্তিক প্রোডাকশনের মৌলিক শিক্ষা।",
    overview: [
      "Spinning process, yarn count, process flow এবং yarn quality control এই প্রোগ্রামের মূল অংশ।",
      "Mill-based production ধারণা এবং machine sequence বোঝার জন্য applied discussion ও lab session রাখা হয়।",
      "Textile supply chain-এর শুরু অংশ হিসেবে yarn manufacturing সম্পর্কে practical orientation দেওয়া হয়।",
    ],
    modules: ["Spinning Basics", "Yarn Quality", "Process Sequence", "Mill Production Fundamentals"],
    labs: ["Spinning Lab", "Quality Measurement Practice", "Production Workflow Session", "Mill Process Review"],
    careers: ["Spinning Operator Support", "Yarn Quality Assistant", "Production Trainee", "Mill Supervisor Support"],
    images: [
      "https://picsum.photos/seed/program-yarn-1/1200/700",
      "https://picsum.photos/seed/program-yarn-2/1200/700",
      "https://picsum.photos/seed/program-yarn-3/1200/700",
    ],
  },
];

export const programQuickLinks = programs.map((program) => ({
  label: program.title,
  href: `/programs/${program.slug}`,
}));

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
