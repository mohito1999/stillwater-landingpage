export const COMPANY_NAME = "Stillwater";

export const NAV_ITEMS = [
  { label: "What we do", href: "#what-we-do" },
  { label: "How we work", href: "#how-we-work" },
  {
    label: "Who we serve",
    children: [
      { label: "Logistics operations", href: "logistics" },
      { label: "Healthcare RCM", href: "healthcare" },
    ]
  },
  { label: "Case studies", href: "/case-studies" },
  { label: "Work with us", href: "#work-with-us" },
];

export const HERO_COPY = {
  headline: "We own AI workflows in \nhigh-stakes operations.",
  subHeadline: "We design, build, and run production AI workflows and stay accountable for them in your environment.",
  supporting: "So your teams don’t have to manage the mess when things break.",
  cta: "Talk to us about your AI workflows",
};

export const PROBLEM_COPY = {
  title: "Why AI breaks in real operations",
  points: [
    { title: "Edge failure", desc: "AI systems fail at the edges, not the demo." },
    { title: "Maintenance gap", desc: "Internal teams can’t maintain probabilistic systems." },
    { title: "Misaligned incentives", desc: "Vendors ship tools, not accountability." },
    { title: "Ownership void", desc: "When things break, ownership is unclear." },
  ]
};

export const SOLUTION_COPY = {
  title: "What we do differently",
  core: [
    "We don’t sell software.",
    "We don’t hand off dashboards.",
    "We design, build, and own AI workflows in production."
  ],
  supporting: [
    "Deployed inside your infrastructure",
    "Humans in the loop where needed",
    "We handle exceptions, drift, and failures"
  ]
};

export const WORK_COPY = {
  title: "How engagements work",
  steps: [
    { number: "01", title: "Start with one critical workflow", desc: "We identify a high-value workflow that keeps breaking." },
    { number: "02", title: "Run it in production", desc: "We build, deploy, and take ownership of outcomes in production." },
    { number: "03", title: "Expand to adjacent workflows", desc: "Expand ownership to adjacent workflows over time." },
  ]
};

export const INDUSTRIES_COPY = {
  title: "Where we go deep",
  logistics: {
    title: "Logistics operations",
    items: ["Documentation readiness", "Customs & compliance", "Exception handling", "Operational visibility"]
  },
  healthcare: {
    title: "Healthcare revenue cycle (US)",
    items: ["Eligibility & coding", "Claims documentation", "Denials & rework", "Cash flow stability"]
  }
};

export const SOVEREIGNTY_COPY = {
  title: "Control without lock-in",
  points: [
    "Your data stays yours",
    "Your models stay yours",
    "Your infrastructure stays yours"
  ],
  supporting: "We work inside your environment with full auditability and no black boxes."
};

export const FINAL_CTA_COPY = {
  headline: "If a workflow keeps breaking, we should talk.",
  cta: "Start a conversation"
};

export const FOOTER_COPY = {
  positioning: "Owning production AI workflows in operations-heavy environments.",
  links: [
    { label: "What we do", href: "#what-we-do" },
    { label: "How we work", href: "#how-we-work" },
    { label: "Case studies", href: "#case-studies" },
    { label: "Work with us", href: "#work-with-us" },
  ]
};

// --- LOGISTICS PAGE COPY ---

export const LOGISTICS_COPY = {
  hero: {
    headline: "Owning AI workflows in logistics operations.",
    subHeadline: "We design, build, and run production AI workflows across documentation, compliance, and exception-heavy logistics operations.",
    supporting: "So your teams stop firefighting the same problems every day.",
    cta: "Talk to us about a logistics workflow"
  },
  reality: {
    title: "Why logistics is hard to automate",
    points: [
      "Every shipment is different",
      "Documentation varies by country, carrier, and customer",
      "Rules change mid-route",
      "Exceptions are the norm, not the edge",
      "Data lives in PDFs, emails, WhatsApp, and legacy systems"
    ],
    closing: "Most systems fail not because of volume — but because of exceptions."
  },
  failure: {
    title: "Why most AI efforts don’t survive production",
    points: [
      { title: "Models work in demos, fail on edge cases", desc: "" },
      { title: "Vendors ship tools, not responsibility", desc: "" },
      { title: "Internal teams can’t maintain probabilistic systems", desc: "" },
      { title: "When things break, ownership is unclear", desc: "" }
    ]
  },
  whatWeOwn: {
    title: "What we own",
    intro: "We don’t deploy tools. We take responsibility.",
    areas: [
      "Shipment documentation readiness",
      "Customs & compliance checks",
      "Exception detection and triage",
      "Operational status and handoffs"
    ]
  },
  workflows: [
    {
      id: "01",
      title: "Document readiness & customs checks",
      problem: "Documents arrive incomplete or inconsistent, causing clearance delays, penalties, and manual follow-ups.",
      solution: "We design and build AI systems that extract, validate, flag exceptions, and route issues for resolution — then run them in production inside the client’s environment.",
      outcome: "Faster clearance, fewer surprises, less manual coordination."
    },
    {
      id: "02",
      title: "Exception handling & escalation",
      problem: "Operational exceptions surface late and are handled reactively across emails and spreadsheets.",
      solution: "AI workflows that detect anomalies early, classify issues, and escalate to the right teams with context — while we own the workflow end-to-end.",
      outcome: "Reduced firefighting and clearer operational ownership."
    },
    {
      id: "03",
      title: "Shipment status intelligence",
      problem: "Status updates are fragmented across systems, leading to delayed customer communication and internal confusion.",
      solution: "We build and operate AI workflows that consolidate signals across systems, surface meaningful status changes, and trigger updates automatically.",
      outcome: "Better visibility without more dashboards."
    },
  ],
  caseStudy: {
    label: "Featured Engagement",
    headline: "Autonomous clearance for a Middle East freight network",
    description: "Processing 50,000+ monthly shipments across 12 distinct regulatory zones. We deployed a production AI layer that autonomously validates documentation, reconciles HS codes against real-time tariffs, and pre-clears cargo before arrival.",
    stat: "65% reduction in port dwell time",
    context: "CLIENT: REGIONAL LOGISTICS LEADER (DUBAI) \nFOCUS: AUTONOMOUS CLEARANCE",
    cta: "Read full case study"
  },
  engagement: {
    title: "How engagements start",
    steps: [
      { number: "01", title: "Identify one logistics workflow that keeps breaking." },
      { number: "02", title: "Design, build, and run it in production — with humans in the loop." },
      { number: "03", title: "Expand ownership to adjacent workflows over time." }
    ],
    closing: "No big-bang transformations. No platform rip-and-replace."
  },
  control: {
    title: "Control without lock-in",
    points: [
      "Your data stays yours.",
      "Your systems stay yours.",
      "Your operations stay in your control."
    ],
    supporting: "We operate inside your infrastructure with full auditability and clear ownership."
  },
  cta: {
    headline: "If a logistics workflow keeps breaking, we should talk.",
    button: "Start a conversation"
  }
};

export const HEALTHCARE_COPY = {
  hero: {
    headline: "Owning AI workflows in Healthcare RCM.",
    subHeadline: "We design, build, and run production AI workflows across eligibility, coding, claims, and denial-heavy RCM processes.",
    supporting: "So revenue teams stop chasing the same issues every billing cycle.",
    cta: "Talk to us about an RCM workflow"
  },
  reality: {
    title: "Why the revenue cycle is hard to automate",
    points: [
      "Claims data is incomplete and inconsistent",
      "Payer rules vary and change frequently",
      "Documentation gaps surface late",
      "Denials create compounding rework",
      "Data lives across EHRs, PDFs, faxes, and portals"
    ],
    closing: "Most breakdowns happen downstream — when fixing them is already expensive."
  },
  failure: {
    title: "Why most AI efforts stall in production",
    points: [
      { title: "Models perform well in pilots, fail at scale", desc: "" },
      { title: "Vendors optimize accuracy, not cash flow", desc: "" },
      { title: "Internal teams can’t maintain model behavior over time", desc: "" },
      { title: "When denials spike, ownership is unclear", desc: "" }
    ]
  },
  whatWeOwn: {
    title: "What we own",
    intro: "We don’t deploy point solutions. We take responsibility.",
    areas: [
      "Eligibility and benefits validation",
      "Coding and documentation checks",
      "Claim readiness and submission logic",
      "Denial detection, classification, and routing"
    ]
  },
  workflows: [
    {
      id: "01",
      title: "Eligibility & benefits validation",
      problem: "Coverage mismatches surface after services are rendered, leading to avoidable denials and write-offs.",
      solution: "We design and build AI workflows that validate eligibility, flag inconsistencies, and route exceptions before claims are submitted — then run them continuously in production.",
      outcome: "Fewer preventable denials and cleaner first-pass claims."
    },
    {
      id: "02",
      title: "Coding & documentation readiness",
      problem: "Incomplete or inconsistent documentation leads to coding errors and downstream rework.",
      solution: "AI workflows that review documentation completeness, surface gaps, and coordinate corrections — while we own the workflow end-to-end.",
      outcome: "Higher coding confidence without slowing throughput."
    },
    {
      id: "03",
      title: "Denial management & rework orchestration",
      problem: "Denials are handled reactively, across teams and tools, with little visibility into root causes.",
      solution: "We build and operate AI workflows that classify denials, route work intelligently, and track resolution paths in production.",
      outcome: "Faster recovery cycles and reduced operational drag."
    },
  ],
  caseStudy: {
    label: "Featured Engagement",
    headline: "Autonomous denial management for a regional health system",
    description: "Processing hundreds of thousands of annual claims across multiple payers. We deployed a production AI layer that classifies denials, routes rework intelligently, and coordinates resubmissions — reducing manual effort and accelerating cash recovery.",
    stat: "40% reduction in denial rework cycle time",
    context: "CLIENT: Regional Health System (US) \nFOCUS: Denial Management & Rework",
    cta: "Read full case study"
  },
  engagement: {
    title: "How engagements typically start",
    steps: [
      { number: "01", title: "Identify one high-impact RCM workflow that drives rework or cash delay." },
      { number: "02", title: "Design, build, and run it in production — with human oversight where needed." },
      { number: "03", title: "Expand ownership to adjacent workflows over time." }
    ],
    closing: "No platform replacement. No vendor sprawl."
  },
  control: {
    title: "Control without lock-in",
    points: [
      "Your patient data stays yours.",
      "Your systems stay yours.",
      "Your revenue operations stay in your control."
    ],
    supporting: "We operate inside your environment with full auditability and clear accountability."
  },
  cta: {
    headline: "If your revenue cycle keeps breaking, we should talk.",
    button: "Start a conversation"
  }
};

export const CASE_STUDIES_COPY = {
  hero: {
    headline: "Selected engagements",
    subHeadline: "Examples of AI workflows we design, build, and run in production.",
    supporting: "All engagements are anonymized where required."
  },
  cases: [
    {
      id: "logistics-01",
      industry: "Logistics operations",
      title: "Autonomous customs clearance for a Middle East freight network",
      summary: "Designed, built, and ran a production AI workflow handling thousands of monthly shipments, reducing operational drag and improving reliability.",
      outcome: "65% reduction in port dwell time",
      link: "/case-studies/logistics-01"
    },
    {
      id: "healthcare-01",
      industry: "Healthcare revenue cycle",
      title: "Denial management automation for a regional health system",
      summary: "Designed, built, and ran a production AI workflow handling claims denials across multiple payers, accelerating cash recovery cycles.",
      outcome: "40% reduction in denial rework cycle time",
      link: "/case-studies/healthcare-01" // Placeholder link for now
    },
    // Adding duplicates to demonstrate grid layout as per plan
    {
      id: "logistics-02",
      industry: "Logistics operations",
      title: "Document readiness & compliance validation",
      summary: "Automated pre-flight checks for freight documentation, ensuring 100% compliance before cargo movement.",
      outcome: "90% reduction in document-related delays",
      link: "/case-studies/logistics-02" // Placeholder link
    },
    {
      id: "healthcare-02",
      industry: "Healthcare revenue cycle",
      title: "Eligibility & benefits verification automation",
      summary: "Real-time eligibility checks integrated into the patient intake flow, preventing downstream denials.",
      outcome: "30% increase in clean claim rate",
      link: "/case-studies/healthcare-02" // Placeholder link
    }
  ],
  reinforcement: {
    headline: "Built for production. Owned end-to-end.",
    subHeadline: "Every engagement starts with one workflow and expands as trust is earned."
  },
  cta: {
    headline: "If one of these looks familiar, we should talk.",
    button: "Start a conversation"
  }
};

export const CASE_STUDIES_CONTENT = {
  "logistics-01": {
    hero: {
      label: "CASE STUDY — LOGISTICS OPERATIONS",
      title: "Autonomous customs clearance for a Middle East freight network",
      summary: "Designed, built, and ran a production AI workflow handling thousands of monthly shipments, reducing operational drag and improving reliability.",
      outcome: {
        value: "65%",
        label: "reduction in port dwell time"
      }
    },
    client: {
      title: "Client context",
      content: "A regional freight network operating across multiple Middle East ports, processing thousands of monthly shipments across air and sea routes. Operations spanned multiple regulatory zones with varying documentation and customs requirements.",
      constraints: [
        "High shipment volume",
        "Multi-country regulatory complexity",
        "Manual, exception-heavy customs workflows",
        "Delays directly impacting downstream operations"
      ]
    },
    problem: {
      title: "The problem",
      points: [
        "Documentation arrived incomplete or inconsistent",
        "HS code mismatches caused clearance delays",
        "Exceptions surfaced late in the process",
        "Teams relied on manual checks and email-based coordination"
      ],
      impact: "Delays compounded quickly, increasing port dwell time and operational risk."
    },
    failure: {
      title: "Why previous approaches didn’t work",
      points: [
        "Rule-based automation broke on edge cases",
        "OCR tools lacked operational context",
        "Exceptions required human judgment but lacked structure",
        "No single system owned the workflow end-to-end"
      ],
      closing: "The issue wasn’t accuracy — it was ownership."
    },
    ownership: {
      title: "What Stillwater took responsibility for",
      intro: "Stillwater owned the customs clearance workflow end-to-end in production.",
      scope: [
        "Document ingestion and validation",
        "HS code reconciliation",
        "Exception detection and routing",
        "Human-in-the-loop resolution",
        "Pre-arrival clearance readiness"
      ]
    },
    solution: {
      title: "The solution",
      body: "Stillwater designed, built, and ran a production AI workflow that validated documentation, reconciled tariff classifications, surfaced exceptions early, and coordinated resolution before cargo arrival — reducing downstream delays.",
      principles: [
        "Early detection, not reactive fixing",
        "Humans involved only where judgment was required",
        "Clear ownership at every step"
      ]
    },
    system: {
      title: "System design (high-level)",
      description: "The system operated entirely within the client’s environment and was designed for auditability, resilience, and ongoing change.",
      components: [
        { title: "Ingestion", desc: "Document ingestion & OCR layer" },
        { title: "Logic", desc: "Validation and reconciliation logic" },
        { title: "Reasoning", desc: "LLM-driven classification and reasoning" },
        { title: "Control", desc: "Exception routing & human-in-the-loop" },
        { title: "Integration", desc: "Integration with existing operational systems" }
      ]
    },
    readiness: {
      title: "Operational rollout and training",
      body: "Technology alone was insufficient. Stillwater worked with operational teams to redesign workflows, define escalation paths, and train staff to work alongside AI-driven processes.",
      areas: [
        "Workflow ownership and escalation paths",
        "Human-in-the-loop handling",
        "Exception review and override procedures",
        "Ongoing operational tuning"
      ],
      closing: "Operational readiness was as critical as the technology itself."
    },
    results: {
      title: "Results",
      primary: {
        value: "65%",
        label: "reduction in port dwell time"
      },
      secondary: [
        "Fewer last-minute exceptions",
        "Reduced manual coordination",
        "Improved predictability across shipments"
      ]
    },
    whyWorked: {
      title: "Why this worked",
      points: [
        "Clear ownership of the workflow",
        "AI designed for production, not demos",
        "Humans embedded where judgment mattered",
        "Continuous operation, not a one-time deployment"
      ]
    },
    cta: {
      headline: "If customs clearance is slowing you down, we should talk.",
      button: "Start a conversation"
    }
  }
};