// Structured content for UPTECH Arbitration Framework Policy.
// Source: original public/documents/UPTECH-Arbitration-Framework.pdf (3 pages),
// extracted via pdftotext -layout, then Council→Forum and email updated.

module.exports = {
  file: 'UPTECH-Arbitration-Framework.pdf',
  title: 'Arbitration Framework Policy',
  subtitle: 'Version 1.0 — Dispute Resolution under the Arbitration Act 1996 (UK)',
  accent: '#2563EB',

  sections: [
    {
      n: '1', heading: 'Introduction & Scope',
      blocks: [
        { type: 'p', text: 'This policy establishes the UPTECH Arbitration Framework for resolving disputes arising in technology agreements, SaaS platforms, digital assets, software development contracts, and intellectual property transactions.' },
        { type: 'p', text: 'The purpose of the Framework is to provide a fast, confidential, and enforceable dispute resolution process that leverages technology while complying with UK law (Arbitration Act 1996) and international arbitration standards.' },
        { type: 'p', text: 'This Framework applies to all contracts entered into by UPTECH involving technology services, software licensing, SaaS, and platform agreements, as well as disputes between UPTECH and clients, vendors, technology partners, and investors where contracts reference arbitration.' },
        { type: 'kicker', text: 'Applies To' },
        { type: 'bullet', text: 'Technology services & software licensing' },
        { type: 'bullet', text: 'SaaS & platform agreements' },
        { type: 'bullet', text: 'Digital asset & blockchain disputes' },
        { type: 'bullet', text: 'Intellectual property transactions' },
        { type: 'bullet', text: 'Disputes with clients, vendors, and partners' },
        { type: 'bullet', text: 'Investor disputes (where contracts reference arbitration)' },
        { type: 'note', label: 'Excluded', text: 'Employment disputes (separate HR policy) and regulatory/statutory enforcement matters.' },
      ],
    },
    {
      n: '2', heading: 'Legal Basis',
      blocks: [
        { type: 'sub', n: '2.1', heading: 'Arbitration Act 1996 (UK)', text: 'The primary governing legislation for all arbitration proceedings under the UPTECH Framework.' },
        { type: 'sub', n: '2.2', heading: 'LCIA Rules', text: 'London Court of International Arbitration Rules applied for structured and professional conduct of arbitration.' },
        { type: 'sub', n: '2.3', heading: 'New York Convention (1958)', text: 'Ensures arbitration awards are binding, final, and enforceable internationally across 170+ countries.' },
      ],
    },
    {
      n: '3', heading: 'Key Principles',
      blocks: [
        { type: 'lbullet', label: 'Party Autonomy', text: 'Parties can select arbitrators, agree on rules, and decide procedures within the framework.' },
        { type: 'lbullet', label: 'Expert Arbitrators', text: 'Arbitrators with technical and industry expertise are appointed to ensure informed decisions.' },
        { type: 'lbullet', label: 'Speed & Efficiency', text: 'Digital processes aim to resolve disputes within 30–90 days.' },
        { type: 'lbullet', label: 'Confidentiality', text: 'All proceedings, submissions, and awards are confidential.' },
        { type: 'lbullet', label: 'Global Enforceability', text: 'Awards designed to be enforceable internationally under recognised conventions.' },
      ],
    },
    {
      n: '4', heading: 'Arbitration Acceptance Agreement',
      blocks: [
        { type: 'p', text: 'Under the Arbitration Act 1996 — United Kingdom. Parties sign a formal Arbitration Acceptance Agreement covering the following key provisions:' },
        { type: 'bullet', text: 'Agreement to arbitrate all disputes' },
        { type: 'bullet', text: 'Governing law: Laws of England and Wales' },
        { type: 'bullet', text: 'Arbitration procedure under the Arbitration Act 1996' },
        { type: 'bullet', text: 'Appointment of independent arbitrator(s)' },
        { type: 'bullet', text: 'Seat and venue: London, England (or agreed alternative)' },
        { type: 'bullet', text: 'Confidentiality of all proceedings and awards' },
        { type: 'bullet', text: 'Binding and enforceable decision' },
        { type: 'bullet', text: 'Arbitrator authority to allocate costs' },
        { type: 'bullet', text: 'Waiver of court proceedings (except enforcement)' },
        { type: 'bullet', text: 'Voluntary acceptance by both parties' },
      ],
    },
    {
      n: '5', heading: 'Arbitration Procedure',
      blocks: [
        { type: 'subhead', n: '5.1', text: 'Initiating Arbitration' },
        { type: 'bullet', text: 'Party raises dispute using the UPTECH digital arbitration platform' },
        { type: 'bullet', text: 'Include: nature of the dispute, relevant contracts, relief requested' },
        { type: 'bullet', text: 'Framework administrator acknowledges receipt within 3 business days' },
        { type: 'bullet', text: 'Preliminary review verifies eligibility and scope' },

        { type: 'subhead', n: '5.2', text: 'Arbitrator Appointment' },
        { type: 'bullet', text: 'Single arbitrator for simple disputes (< £250,000)' },
        { type: 'bullet', text: 'Three-member tribunal for complex or high-value disputes' },
        { type: 'bullet', text: 'Arbitrators selected from UPTECH’s Technical Arbitration Panel or mutually agreed' },
        { type: 'bullet', text: 'Appointment timeline: 7–14 days' },
        { type: 'bullet', text: 'All arbitrators must disclose potential conflicts before appointment' },

        { type: 'subhead', n: '5.3', text: 'Case Management & Evidence' },
        { type: 'bullet', text: 'Procedural timetable set in consultation with parties' },
        { type: 'bullet', text: 'Submission deadlines for claims, counterclaims, and evidence' },
        { type: 'bullet', text: 'Electronic evidence admissible: code, logs, screenshots, blockchain records' },
        { type: 'bullet', text: 'Witness statements and expert testimony presented virtually or at hearings' },
        { type: 'bullet', text: 'All filings digitally managed via the UPTECH secure platform' },

        { type: 'subhead', n: '5.4', text: 'Hearing & Award' },
        { type: 'bullet', text: 'Hearings: document-only, virtual (secure video), hybrid, or in-person' },
        { type: 'bullet', text: 'Arbitrator issues final written award with findings, reasoning, and remedies' },
        { type: 'bullet', text: 'Timeline: 30–60 days after final hearing' },
        { type: 'bullet', text: 'Awards are final under the Arbitration Act 1996' },
        { type: 'bullet', text: 'Internationally enforceable under the New York Convention' },
      ],
    },
    {
      n: '6', heading: 'Arbitrator Appointment Timeline',
      blocks: [
        { type: 'timeline', label: 'Initial party selection attempt', value: '7 days' },
        { type: 'timeline', label: 'UPTECH Committee appointment (if no agreement)', value: '5 days' },
        { type: 'timeline', label: 'Conflict-of-interest disclosures', value: '3 days' },
        { type: 'timeline', label: 'Final appointment confirmation', value: '2 days' },
      ],
    },
    {
      n: '7', heading: 'Cost Schedule',
      blocks: [
        { type: 'kicker', text: 'Arbitrator Fees' },
        { type: 'bullet', text: 'Single Arbitrator (simple dispute): £3,000 – £10,000' },
        { type: 'bullet', text: 'Three-Member Tribunal (complex/high-value): £10,000 – £30,000' },
        { type: 'bullet', text: 'Hourly Rate (additional services): £250 – £500/hr' },

        { type: 'kicker', text: 'Platform & Admin Fees' },
        { type: 'bullet', text: 'Digital platform usage fee: £500 flat per case' },
        { type: 'bullet', text: 'Additional document storage: £50 per GB' },
        { type: 'bullet', text: 'Administrative fee: £250 – £1,000' },
        { type: 'bullet', text: 'Scheduling & case management: £100 per party' },
      ],
    },
    {
      n: '8', heading: 'Digital Arbitration Platform',
      blocks: [
        { type: 'lbullet', label: 'Secure Access', text: 'Two-factor authentication (2FA) with role-based access for Claimant, Respondent, Arbitrator, and Administrator.' },
        { type: 'lbullet', label: 'Case Dashboard', text: 'Notifications, case summary with status and timeline, document repository, and encrypted messaging system.' },
        { type: 'lbullet', label: 'Digital Filing', text: 'Submit notices, claims, defences, and evidence in PDF or approved digital formats with automatic timestamping.' },
        { type: 'lbullet', label: 'Virtual Hearings', text: 'Integrated video conferencing for virtual and hybrid hearing sessions with secure platform-provided links.' },
        { type: 'lbullet', label: 'Automated Reminders', text: 'Real-time alerts for deadlines, hearings, new messages, and procedural updates.' },
        { type: 'lbullet', label: 'Security & Compliance', text: 'All communications encrypted. GDPR and UK data protection compliant. Access restricted to authorised users.' },
      ],
    },
    {
      n: '9', heading: 'Contact & Support',
      blocks: [
        { type: 'p', text: '24/7 technical support is available via the platform, chat, email, or phone. The UPTECH Arbitration Committee provides procedural guidance and handles all enquiries regarding arbitration proceedings.' },
        { type: 'contact', org: 'UK-Pakistan Tech Forum (UPTECH)', address: '134-136 Westbourne Terrace, London, W2 6QB, United Kingdom', email: 'info@ukpaktech.org.uk' },
      ],
    },
  ],
};
