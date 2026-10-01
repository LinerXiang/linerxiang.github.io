// Academic profile: edit the text inside quotation marks; no HTML or CSS changes are needed.
// Use English for page content. Leave a value as "" if you do not want to fill it in yet.
// To add publications, research areas, or experience, copy a complete { ... } entry and separate entries with commas.
window.academicProfile = {
  name: "Liner Xiang（向琳儿）",                // Full name displayed in your profile
  headerName: "Liner Xiang",                  // English name in the top navigation
  authorName: "Liner Xiang",                  // Automatically bold this name in all paper author lists
  position: "Ph.D. Student",           // e.g., Ph.D. Student / Assistant Professor
  department: "Department of Statistics",                // Department
  institution: "UC Irvine",  // University or institution
  location: "Irvine, CA",                    // Current location
  photo: "liner.jpeg",                       // Photo path relative to the website root
  email: "linerx1@uci.edu",                                 // Email address only; do not include mailto:
  office: "",                                // Office address

  // Empty links are hidden. For your CV, you can use assets/cv.pdf.
  links: {
    scholar: "https://scholar.google.com/citations?user=JAIeHGMAAAAJ&hl=en",                             // Full URL of your Google Scholar profile
    github: "https://github.com/LinerXiang",
    linkedin: "https://www.linkedin.com/in/liner-xiang-8558a5240/",                            // Full URL of your LinkedIn profile, e.g., https://www.linkedin.com/in/your-name/
    cv: "assets/cv.pdf",                                  // Path or full URL to your CV PDF
  },

  // Each string becomes a paragraph. Use [link text](https://example.com) for inline links.
  about: [
    "I am a fifth-year Ph.D. candidate in the [Department of Statistics](https://stat.ics.uci.edu/) at the [University of California, Irvine](https://uci.edu/), within the [Donald Bren School of Information and Computer Sciences](https://ics.uci.edu/). I am co-advised by [Dr. Hengrui Cai](https://hengruicai.github.io/) and [Dr. Weining Shen](https://faculty.sites.uci.edu/weinings/). Before joining UC Irvine, I earned my bachelor's degree in Statistics from the [University of Science and Technology of China (USTC)](https://en.ustc.edu.cn/) in June 2022.",
    "My research lies at the intersection of reinforcement learning, natural language processing, and causal inference. I am particularly interested in methodological problems involving sequential decision-making, online learning in complex environments, large language model (LLM) alignment, and policy evaluation in bandit and LLM settings.",
    "My CV is [available here](assets/cv.pdf).",
  ],


  // Add * after equal-contributing authors; the explanation appears once below the Publications heading.
  publications: [
    {
      title: "OTROPE: Optimal Transport-based Robust Off-policy Evaluation for Large Language Models",
      authors: "Liner Xiang, Wenbo Zhang, Hengrui Cai",
      venue: "Advances in Neural Information Processing Systems (NeurIPS)",
      year: "2026",
      note: "",                               // Optional note, e.g., Oral Presentation
      paper: "https://arxiv.org/abs/2609.36264",                              // Paper URL or local path, e.g., assets/paper.pdf
      code: "https://github.com/LinerXiang/OTROPE",                               // Code repository URL
      project: "",                            // Project page URL
      bibtex: "",                             // Use backticks `...` for a multiline BibTeX entry
    },

    {
      title: "Reasoning Is Not Free: Robust Adaptive Cost-Efficient Router for LLM-as-a-Judge",
      authors: "Wenbo Zhang*, Lijinghua Zhang*, Liner Xiang*, Hengrui Cai",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2026",
      note: "",                               // Optional note, e.g., Oral Presentation
      paper: "https://arxiv.org/abs/2605.10805",                              // Paper URL or local path, e.g., assets/paper.pdf
      code: "https://github.com/onepounchman/RACER",                               // Code repository URL
      project: "",                            // Project page URL
      bibtex: "",                             // Use backticks `...` for a multiline BibTeX entry
    },
  ],

  // Preprints use the same fields as publications. Set to [] to hide this section.
  preprints: [
    {
      title: "Policy Optimization and Statistical Inference for Online Contextual Matrix Games",
      authors: "Liner Xiang, Yixin Wang, Hengrui Cai",
      venue: "Revised and Resubmitted after Major Revision, Journal of the American Statistical Association (JASA)",
      year: "2026+",
      note: "",
      paper: "https://arxiv.org/abs/2608.17173",                              // Preprint URL
      code: "",
      project: "",
      bibtex: "",
    },

    {
      title: "Large Language Model Alignment with Complex Feedback: A Survey",
      authors: "Lijinghua Zhang*, Liner Xiang*, Wenbo Zhang*, Hengrui Cai",
      venue: "Under Review at ACL Rolling Review (ARR)",
      year: "2026+",
      note: "",
      paper: "https://www.preprints.org/manuscript/202608.0674",                              // Preprint URL
      code: "",
      project: "",
      bibtex: "",
    },

    {
      title: "Foresighted Online Policy Optimization with Interference",
      authors: "Liner Xiang, Jiayi Wang, Hengrui Cai",
      venue: "Major Revision at the Journal of Machine Learning Research (JMLR)",
      year: "2026+",
      note: "",
      paper: "https://arxiv.org/abs/2510.15273",                              // Preprint URL
      code: "",
      project: "",
      bibtex: "",
    },
  ],

  // Research combining multiple disciplines. Uses the same fields as publications.
  // Set to [] to hide this section and its navigation link.
  crossDisciplinary: [
    {
      title: "Modeling Consumers’ Sequential Product Decisions in an Online Community: Will Missing Data Imputation Improve Prediction and Understanding of Behavior?",
      authors: "Huwail Alantari, Liner Xiang, Hengrui Cai, Weining Shen, Imran S Currim",
      venue: "Revised and Resubmitted after Major Revision, European Journal of Marketing (EJM)",
      year: "2026+",
      note: "",
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },

    {
      title: "Stroke recurrence prediction using machine learning and segmented neural network risk factor aggregation",
      authors: "Xueting Ding, Yang Meng, Liner Xiang, Bernadette Boden-Albala",
      venue: "Discover Public Health",
      year: "2024",
      note: "",
      paper: "https://link.springer.com/article/10.1186/s12982-024-00199-6",
      code: "https://github.com/yangmeng96/PilotSNA",
      project: "",
      bibtex: "",
    },
    
  ],

  // Education is displayed immediately after About. Set to [] to hide it.
  education: [
    {
      years: "2022 – Present",
      title: "Ph.D. in Statistics",
      institution: "University of California, Irvine",
    },
    {
      years: "2018 – 2022",
      title: "B.S. in Statistics",
      institution: "University of Science and Technology of China (USTC)",
      details: "",
    },
  ],

  // Internship experience. Set to [] to hide this section.
  experience: [
    {
      years: "June 2026 – September 2026",
      title: "Applied Scientist Intern",
      institution: "Amazon",
      location: "Seattle, WA",                            // Internship city, state, or Remote; leave empty to hide
      details: "Project: Causal Fine-Tuning for Foundation Models on Sequential Data",
    },

    {
      years: "June 2025 – September 2025",
      title: "Statsitican Intern",
      institution: "Quantum Leap Healthcare Collaborative",
      location: "San Francisco, CA",                            // Internship city, state, or Remote; leave empty to hide
      details: "Project: Sequential Decision-Making and Adaptive Treatment Strategies",
    },
  ],
};
