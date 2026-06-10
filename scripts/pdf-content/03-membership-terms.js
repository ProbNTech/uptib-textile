// Structured content for UPTECH Membership Terms and Conditions.
// Source: original public/documents/UPTECH-Membership-Terms-and-Conditions.pdf (2 pages),
// extracted via pdftotext -layout, then Council→Forum and email updated.
// The "Fees and Payment" section was removed in line with the live terms page;
// subsequent sections were renumbered accordingly.

module.exports = {
  file: 'UPTECH-Membership-Terms-and-Conditions.pdf',
  title: 'Membership Terms and Conditions',
  subtitle: 'By applying for or maintaining membership, you agree to be bound by these Terms.',
  accent: '#2563EB',

  sections: [
    {
      n: '1', heading: 'Membership',
      blocks: [
        { type: 'sub', n: '1.1', heading: 'Eligibility', text: "Membership is available to individuals or entities who meet UPTECH's membership criteria." },
        { type: 'sub', n: '1.2', heading: 'Membership Types', text: 'UPTECH offers different membership tiers, each with associated benefits. Details of membership tiers are provided at the time of application.' },
        { type: 'sub', n: '1.3', heading: 'Term', text: 'Membership commences on the date the application is accepted and continues for the period specified in the membership plan unless terminated earlier in accordance with these Terms.' },
      ],
    },
    {
      n: '2', heading: 'Member Responsibilities',
      blocks: [
        { type: 'p', text: 'Members agree to:' },
        { type: 'bullet', text: 'Provide accurate and complete information during the application process.' },
        { type: 'bullet', text: "Comply with UPTECH's policies, codes of conduct, and applicable UK law." },
        { type: 'bullet', text: 'Use UPTECH services responsibly and not engage in conduct that harms UPTECH or other members.' },
      ],
    },
    {
      n: '3', heading: 'UPTECH Responsibilities',
      blocks: [
        { type: 'p', text: 'UPTECH shall:' },
        { type: 'bullet', text: "Provide the services and benefits associated with the Member's chosen membership tier." },
        { type: 'bullet', text: 'Notify Members of any changes to services or policies.' },
        { type: 'bullet', text: 'Process personal data in accordance with the UK GDPR and the Data Protection Act 2018.' },
      ],
    },
    {
      n: '4', heading: 'Termination',
      blocks: [
        { type: 'lbullet', label: 'Termination by UPTECH', text: 'Membership may be terminated if the Member breaches these Terms, misuses services, or violates applicable law.' },
        { type: 'lbullet', label: 'Termination by Member', text: 'Members may terminate their membership by giving written notice to UPTECH.' },
        { type: 'lbullet', label: 'Effect of Termination', text: 'Upon termination, access to services will cease.' },
      ],
    },
    {
      n: '5', heading: 'Confidentiality',
      blocks: [
        { type: 'p', text: 'Members must maintain the confidentiality of any proprietary or sensitive information received during the membership, except where disclosure is required by law.' },
      ],
    },
    {
      n: '6', heading: 'Limitation of Liability',
      blocks: [
        { type: 'p', text: 'To the maximum extent permitted by law, UPTECH shall not be liable for any indirect, incidental, or consequential losses arising from or in connection with membership.' },
      ],
    },
    {
      n: '7', heading: 'Governing Law and Jurisdiction',
      blocks: [
        { type: 'p', text: 'These Terms shall be governed by and construed in accordance with the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction to resolve any disputes arising out of these Terms.' },
      ],
    },
    {
      n: '8', heading: 'Amendments',
      blocks: [
        { type: 'p', text: 'UPTECH may update these Terms from time to time. Members will be notified of material changes, and continued use of services constitutes acceptance of the updated Terms.' },
      ],
    },
    {
      n: '9', heading: 'Acceptance',
      blocks: [
        { type: 'p', text: 'By submitting an application for membership or maintaining membership, the Member acknowledges that they have read, understood, and agreed to be bound by these Terms and Conditions.' },
      ],
    },
    {
      n: '10', heading: 'Applicant Details',
      blocks: [
        { type: 'kicker', text: 'Company' },
        { type: 'field', label: 'Name of Company' },
        { type: 'field', label: 'Registration No.' },

        { type: 'kicker', text: 'Affiliation / Membership with any Trade Organization' },
        { type: 'field', label: 'Name' },
        { type: 'field', label: 'Membership No.' },
        { type: 'field', label: 'Authorised Person' },
        { type: 'field', label: 'Designation' },

        { type: 'kicker', text: 'Individual' },
        { type: 'field', label: 'Name' },
        { type: 'field', label: 'CNIC' },

        { type: 'kicker', text: 'Address & Contact' },
        { type: 'field', label: 'Office / Residence Address' },
        { type: 'field', label: 'City' },
        { type: 'fieldRow', items: [{ label: 'Telephone (Landline)' }, { label: 'WhatsApp' }] },
        { type: 'fieldRow', items: [{ label: 'Email' }, { label: 'Web Link' }] },
      ],
    },
    {
      n: '11', heading: 'Acceptance & Signature',
      blocks: [
        { type: 'p', text: 'By signing below, the applicant confirms they have read, understood and agreed to be bound by these Membership Terms and Conditions and accept all rights and obligations associated with UPTECH membership.' },
        { type: 'spacer', h: 12 },
        { type: 'signature' },
      ],
    },
  ],
};
