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
  headline: "We own AI workflows in high-stakes operations.",
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
    cta: "Read full case study",
    link: "/case-studies/logistics-01"
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
    headline: "Autonomous Prior Authorization for an RCM Provider",
    description: "Processing thousands of authorization requests daily. We deployed a production AI layer that ingests clinical docs, syncs with the EHR, and uses AI voice agents to call insurers — reducing cycle time by 45%.",
    stat: "45% reduction in authorization turnaround time",
    context: "CLIENT: OFFSHORE RCM PROVIDER \nFOCUS: PRIOR AUTH & AI VOICE AGENTS",
    cta: "Read full case study",
    link: "/case-studies/healthcare-prior-auth"
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
      id: "healthcare-prior-auth",
      industry: "Healthcare RCM",
      title: "Autonomous Prior Authorization for an RCM Provider",
      summary: "End-to-end automation of prior authorization workflows using AI document processing and voice agents for insurer communications.",
      outcome: "45% reduction in turnaround time",
      link: "/case-studies/healthcare-prior-auth"
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
      industry: "Healthcare RCM",
      title: "Eligibility & benefits verification automation",
      summary: "AI voice agents handling coverage checks for a medical supply company, reducing 30-minute insurer calls to seconds.",
      outcome: "55% reduction in verification time",
      link: "/case-studies/healthcare-catheter-coverage"
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
  },
  "healthcare-prior-auth": {
    hero: {
      label: "CASE STUDY — OFFSHORE RCM & PRIOR AUTH",
      title: "Autonomous Prior Authorization for a Major RCM Provider",
      summary: "Designed, built, and ran a production AI workflow that autonomously handles prior authorization requests — from document ingestion and EHR syncing to placing live AI calls to insurers.",
      outcome: {
        value: "45%",
        label: "reduction in authorization turnaround time"
      }
    },
    client: {
      title: "Client context",
      content: "A large offshore RCM provider serving multiple US health systems. They processed high volumes of prior authorization requests manually, relying on hundreds of agents to review clinical documentation, log into payer portals, and sit on hold with insurance companies.",
      constraints: [
        "High volume of manual calls to insurers",
        "Complex clinical documentation review required",
        "Strict SLA requirements for turnaround times",
        "Disparate EHR systems (Epic, Athena, Cerner)"
      ]
    },
    problem: {
      title: "The problem",
      points: [
        "Wait times on insurer phone lines averaged 45+ minutes",
        "Manual data entry between portals and EHRs caused errors",
        "Clinical documentation was often missing or incomplete",
        "Scaling operations required linear headcount growth"
      ],
      impact: "Authorization delays led to rescheduled procedures and patient leakage, while operational costs for the RCM provider soared."
    },
    failure: {
      title: "Why previous approaches didn’t work",
      points: [
        "RPA bots broke whenever payer portals changed UI",
        "Standard OCR couldn't interpret complex clinical notes",
        "Humans were still needed for every phone call",
        "Standalone point solutions didn't integrate with the EHR"
      ],
      closing: "The bottleneck wasn't data entry — it was the phone call and the clinical context."
    },
    ownership: {
      title: "What Stillwater took responsibility for",
      intro: "Stillwater owned the prior authorization workflow end-to-end in production.",
      scope: [
        "Clinical document ingestion & OCR classification",
        "EHR/EMR bi-directional synchronization",
        "AI Voice Agent for payer phone calls",
        "Exception handling & peer-to-peer prep",
        "Final authorization status write-back"
      ]
    },
    solution: {
      title: "The solution",
      body: "Stillwater deployed a multi-agent AI system. One layer processed incoming referral documents, extracting CPT codes and clinical justification. Another layer (AI Voice Agents) autonomously called payers to verify requirements and submit authorizations verbally when portals were unavailable. A third layer ensured all data was written back to the EHR in real-time.",
      principles: [
        "Voice AI for phone interactions",
        "Clinical reasoning for document review",
        "Deep EHR integration for one-touch workflows"
      ]
    },
    system: {
      title: "System design",
      description: "A hybrid AI architecture combining vision models for documents and conversational voice agents for telephony, all orchestrated by a central workflow engine.",
      components: [
        { title: "Ingestion", desc: "Multi-modal OCR for fax/PDF clinical docs" },
        { title: "Reasoning", desc: "LLM extraction of CPT codes & medical necessity" },
        { title: "Voice Agent", desc: "AI telephony bot for insurer interactions" },
        { title: "Sync", desc: "Bi-directional HL7/FHIR integration with EHR" },
        { title: "Control", desc: "Nurse review loop for denials/exceptions" }
      ]
    },
    readiness: {
      title: "Operational rollout",
      body: "We integrated directly into the RCM provider's existing queues. Agents were retrained to handle only 'complex denials' and 'peer-to-peer' preparation, while the AI handled the routine volume of stats and submissions.",
      areas: [
        "Shift from 'doer' to 'reviewer' for staff",
        "Voice agent script calibration",
        "Custom EHR adapter deployment",
        "Real-time audit logging"
      ],
      closing: " staff moved from being 'on hold' to managing care coordination."
    },
    results: {
      title: "Results",
      primary: {
        value: "45%",
        label: "reduction in turnaround time"
      },
      secondary: [
        "Zero hold times for human agents",
        "100% audit trail of all payer conversations",
        "Seamless write-back to client EHRs"
      ]
    },
    whyWorked: {
      title: "Why this worked",
      points: [
        "We successfully deployed AI voice agents in production",
        "We solved the 'unstructure data' problem with LLMs",
        "We didn't just build a tool; we took the volume",
        "Deep integration meant no copy-pasting for humans"
      ]
    },
    cta: {
      headline: "If prior auth is your bottleneck, we should talk.",
      button: "Start a conversation"
    }
  },
  "healthcare-catheter-coverage": {
    hero: {
      label: "CASE STUDY — MEDICAL SUPPLY & BENEFITS VERIFICATION",
      title: "Autonomous Coverage Checks for Urinary Catheter Provider",
      summary: "Automated the benefits verification process for a North American medical supply company, replacing manual insurer calls with AI voice agents that sync directly to the ERP.",
      outcome: {
        value: "55%",
        label: "reduction in verification cycle time"
      }
    },
    client: {
      title: "Client context",
      content: "A North American company providing urinary catheters and supplies across multiple product lines including pelvic floor health, fertility, infectious disease, and pediatrics. Orders arrived via fax, requiring manual data entry and lengthy phone calls to insurers to verify coverage.",
      constraints: [
        "Dependencies on faxed orders",
        "20-30 minute hold times with insurers per order",
        "Complex coverage rules (deductibles, limitations)",
        "Manual data entry into ERP"
      ]
    },
    problem: {
      title: "The problem",
      points: [
        "Staff spent hours on hold with insurers daily",
        "Verification delays slowed down shipment release",
        "Manual transcription from calls to ERP caused data errors",
        "Scaling volume meant hiring more call center staff"
      ],
      impact: "Operational bottlenecks restricted growth and delayed patient access to critical supplies."
    },
    failure: {
      title: "Why previous approaches didn’t work",
      points: [
        "Patient portals didn't cover all smaller payers",
        "Standard API checks often lacked specific limitation details",
        "Human teams were limited by phone bandwidth",
        "Simple OCR couldn't handle the variety of incoming fax formats"
      ],
      closing: "You can't API your way out of a phone-based insurance system."
    },
    ownership: {
      title: "What Stillwater took responsibility for",
      intro: "Stillwater deployed an end-to-end AI workforce to handle the verification process.",
      scope: [
        "Fax ingestion and data extraction",
        "AI Voice Agent for payer phone interactions",
        "Coverage detail extraction (deductibles, limits)",
        "Direct synchronization with internal ERP",
        "Exception handling for complex cases"
      ]
    },
    solution: {
      title: "The solution",
      body: "We built an AI voice agent system that reads incoming order data, autonomously calls insurers to verify specific coverage details, and writes the results back to the ERP. The system handles multiple product lines and adapts to different insurer IVRs.",
      principles: [
        "Voice-first automation for payer connectivity",
        "Seamless ERP synchronization",
        "Multi-product line adaptability"
      ]
    },
    system: {
      title: "System design",
      description: "An integrated pipeline moving data from paper faxes to verified ERP records without human touch.",
      components: [
        { title: "Ingest", desc: "OCR extraction from incoming faxes" },
        { title: "Voice", desc: "AI Agent calling insurers for verification" },
        { title: "Logic", desc: "Coverage logic for catheters & fertility" },
        { title: "Sync", desc: "Write-back to client ERP system" },
        { title: "Alerts", desc: "Notification for coverage denials" }
      ]
    },
    readiness: {
      title: "Operational rollout",
      body: "The system was rolled out product line by product line, starting with urinary catheters. We worked with the operations team to define the exact questions the AI needed to ask insurers for each specific product type.",
      areas: [
        "IVR navigation mapping",
        "Questionnaire standardization per product",
        "ERP field mapping",
        "Staff retraining for exception handling"
      ],
      closing: "Staff moved from holding patterns to handling complex patient advocacy."
    },
    results: {
      title: "Results",
      primary: {
        value: "55%",
        label: "reduction in verification time"
      },
      secondary: [
        "Eliminated 20-30 minute hold times per order",
        "100% accurate data entry into ERP",
        "Scalable across new product lines immediately"
      ]
    },
    whyWorked: {
      title: "Why this worked",
      points: [
        "We automated the phone call, not just the data entry",
        "We integrated deep into the legacy ERP",
        "We handled the messy reality of faxed orders",
        "The solution scaled horizontally across product lines"
      ]
    },
    cta: {
      headline: "If you're stuck on hold with insurers, we should talk.",
      button: "Start a conversation"
    }
  }
};

export const RCM_PRICING_COPY = {
  hero: {
    headline: "Pricing & Engagement Model for Healthcare RCM Automation",
    subHeadline: "How we pilot, price, and scale AI workflows across revenue cycle operations",
    supporting: "Built for teams evaluating production-grade RCM automation"
  },
  overview: {
    title: "How Engagements Typically Start",
    points: [
      {
        title: "Structured Activation",
        desc: "Engagements begin with a structured activation phase to align teams and goals."
      },
      {
        title: "Validation in Workflow",
        desc: "This phase validates automation effectiveness directly within real RCM workflows."
      },
      {
        title: "Defined Scope",
        desc: "Success criteria and operational scope are mutually defined upfront."
      },
      {
        title: "Value-First Rollout",
        desc: "Production rollout follows only once value is demonstrated and proven."
      }
    ]
  },
  pilot: {
    title: "RCM Pilot & Activation",
    details: {
      duration: "30 days",
      fee: "$5,000",
      feeNote: "(fixed)"
    },
    includes: [
      { item: "AI Calling", value: "1,500 minutes" },
      { item: "OCR / Fax Pages", value: "3,000 pages" },
      { item: "Workflow Setup", value: "1–2 RCM workflows" },
      { item: "EMR / System Updates", value: "Limited scope" },
      { item: "Success Criteria", value: "Defined jointly" }
    ],
    overages: [
      { type: "AI Calling", cost: "$0.40 / minute" },
      { type: "OCR / Fax Pages", cost: "$0.12 / page" }
    ],
    positioning: "This is a paid pilot that includes real usage, not a demo. If it doesn’t create value, you don’t proceed."
  },
  production: {
    title: "Production Pricing Plans",
    disclaimer: "Pricing reflects workflow scope and usage volume. Plans scale as automation expands.",
    plans: [
      {
        name: "Core — RCM Automation",
        fee: "$3,000 / month",
        includes: [
          { label: "AI Calling", value: "5,000 minutes" },
          { label: "OCR / Fax Pages", value: "10,000 pages" }
        ],
        overages: [
          { label: "Overage – Calling", value: "$0.35 / min" },
          { label: "Overage – OCR", value: "$0.10 / page" }
        ],
        support: "Slack + Email",
        supporting: "Replaces ~1–2 RCM operations staff"
      },
      {
        name: "Growth — RCM at Scale",
        fee: "$6,500 / month",
        includes: [
          { label: "AI Calling", value: "20,000 minutes" },
          { label: "OCR / Fax Pages", value: "40,000 pages" }
        ],
        overages: [
          { label: "Overage – Calling", value: "$0.25 / min" },
          { label: "Overage – OCR", value: "$0.06 / page" }
        ],
        support: "Priority support + SLA",
        supporting: "Manages follow-ups, intake, eligibility, and denial workflows"
      },
      {
        name: "Enterprise — Managed RCM Automation",
        fee: "$12,000 / month",
        includes: [
          { label: "AI Calling", value: "75,000 minutes" },
          { label: "OCR / Fax Pages", value: "150,000 pages" }
        ],
        overages: [
          { label: "Overage – Calling", value: "$0.18 / min" },
          { label: "Overage – OCR", value: "$0.04 / page" }
        ],
        hosting: "Customer-managed private cloud",
        support: "Dedicated channel + SLA",
        supporting: ""
      }
    ]
  },
  deployment: {
    title: "Deployment & Data Security",
    points: [
      "All deployments run in isolated private cloud environments",
      "Architected to follow HIPAA-aligned data handling practices",
      "Security controls and data flows are designed to align with SOC 2 principles",
      "Private cloud deployments offer stronger isolation and control than shared SaaS models"
    ]
  },
  cta: {
    title: "Next Steps",
    text: "If you’re evaluating RCM automation and want clarity on scope, pricing, and rollout, we should talk.",
    button: "Continue the Conversation"
  }
};