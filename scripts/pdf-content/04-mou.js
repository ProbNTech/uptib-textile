// Structured content for UPTECH Memorandum of Understanding (MoU).
// Source: original public/documents/UPTECH-Memorandum-of-Understanding.pdf (3 pages),
// extracted via pdftotext -layout, then Council→Forum and email updated.
// Note: original duplicates section number 3 — content preserved but renumbered sequentially.

module.exports = {
  file: 'UPTECH-Memorandum-of-Understanding.pdf',
  title: 'Memorandum of Understanding',
  subtitle: 'Framework for institutional partnerships between UPTECH and partner organisations.',
  accent: '#C41E3A',

  sections: [
    {
      n: '0', heading: 'Parties',
      blocks: [
        { type: 'partyHeader', label: 'Between' },
        { type: 'partyBlock', name: 'UK-Pakistan Tech Forum (UPTECH)', desc: 'A company registered in the United Kingdom, with registered office at 134-136 Westbourne Terrace, London, W2 6QB, UK.', alias: '("UPTECH")' },
        { type: 'partyHeader', label: 'And' },
        { type: 'partyForm', items: [
          { label: 'Organization Name' },
          { label: 'Type & Country' },
          { label: 'Registered Address' },
          { label: 'Website' },
          { label: 'Email' },
          { label: 'Telephone / WhatsApp' },
        ], alias: '("Partner Organization")' },
        { type: 'field', label: 'Effective Date' },
      ],
    },
    {
      n: '1', heading: 'Purpose',
      blocks: [
        { type: 'p', text: 'The purpose of this MoU is to establish a framework for cooperation between UPTECH and the Partner Organization to support professional development, knowledge sharing, and collaborative initiatives in the IT sector, and to facilitate mutual promotion of IT services and products:' },
        { type: 'bullet', text: "UPTECH will promote the services and products of the Partner Organization's member companies in the UK and Europe." },
        { type: 'bullet', text: "The Partner Organization will promote UPTECH's services and products to its member companies in their country of jurisdiction." },
      ],
    },
    {
      n: '2', heading: 'Areas of Cooperation',
      blocks: [
        { type: 'p', text: 'The Parties intend to collaborate in areas including, but not limited to:' },
        { type: 'bullet', text: 'Joint events, workshops, and seminars relevant to the AI & IT industry.' },
        { type: 'bullet', text: 'Exchange of expertise, best practices, and research in IT services and solutions.' },
        { type: 'bullet', text: 'Collaborative initiatives for publications, white papers, or IT-related projects.' },
        { type: 'bullet', text: "Mutual promotion of IT services and products to the Parties' respective member companies, including through newsletters, events, and communications." },
        { type: 'bullet', text: 'Other initiatives mutually agreed in writing by the Parties.' },
      ],
    },
    {
      n: '3', heading: 'Promotional Activities',
      blocks: [
        { type: 'subhead', n: '3.1', text: 'Newsletters & Email Campaigns' },
        { type: 'bullet', text: 'UPTECH may feature Partner Organization member services/products in its communications in the UK and Europe.' },
        { type: 'bullet', text: 'Partner Organization may feature UPTECH services/products in its member communications in Pakistan and Europe.' },

        { type: 'subhead', n: '3.2', text: 'Events and Webinars' },
        { type: 'bullet', text: 'Both Parties may host or co-host webinars, workshops, or seminars to showcase IT products and services.' },
        { type: 'bullet', text: 'UPTECH may provide speakers, marketing material, or digital support for Partner Organization events.' },
        { type: 'bullet', text: 'Partner Organization may facilitate UPTECH participation in its events or exhibitions.' },

        { type: 'subhead', n: '3.3', text: 'Digital Promotion' },
        { type: 'bullet', text: "Each Party may promote the other's services offerings on websites, social media, and online platforms, subject to prior content approval." },

        { type: 'subhead', n: '3.4', text: 'Joint Publications' },
        { type: 'bullet', text: 'Collaboration on research papers, white papers, or case studies highlighting IT services and solutions may be undertaken with mutual agreement.' },

        { type: 'subhead', n: '3.5', text: 'Networking Opportunities' },
        { type: 'bullet', text: 'Facilitate introductions, matchmaking, or partnerships between UPTECH clients and Partner Organization member companies, and vice versa.' },
      ],
    },
    {
      n: '4', heading: 'Roles and Responsibilities',
      blocks: [
        { type: 'kicker', text: 'UPTECH shall:' },
        { type: 'bullet', text: 'Share marketing content and product information for Partner Organization members.' },
        { type: 'bullet', text: "Promote the services and products of the Partner Organization's member companies in the UK and Europe." },
        { type: 'bullet', text: 'Provide information, marketing support, and collaborative opportunities for joint IT initiatives.' },
        { type: 'bullet', text: 'Collaborate on webinars, events, or publications as agreed.' },

        { type: 'kicker', text: 'Partner Organization shall:' },
        { type: 'bullet', text: 'Share marketing content and product information for UPTECH services.' },
        { type: 'bullet', text: "Promote UPTECH's services and products to its member companies in their country of jurisdiction." },
        { type: 'bullet', text: 'Facilitate networking and participation opportunities for UPTECH in relevant events or programs.' },

        { type: 'note', label: 'Note', text: 'Specific roles, timelines, and obligations for individual projects or campaigns will be agreed in separate project-specific agreements.' },
      ],
    },
    {
      n: '5', heading: 'Review and Coordination',
      blocks: [
        { type: 'bullet', text: 'Each Party will appoint a point of contact to coordinate activities.' },
        { type: 'bullet', text: 'Activities will be reviewed quarterly or as mutually agreed.' },
        { type: 'bullet', text: 'Any activity outside this annex requires written agreement by both Parties.' },
      ],
    },
    {
      n: '6', heading: 'Term and Termination',
      blocks: [
        { type: 'p', text: "This MoU is effective from the Effective Date and shall remain in effect for a duration of two (2) years, unless terminated by either Party with 60 days' written notice." },
      ],
    },
    {
      n: '7', heading: 'Legal Status',
      blocks: [
        { type: 'p', text: "This MoU is not legally binding and does not create a partnership, joint venture, or legal entity. It reflects the Parties' mutual intention to collaborate." },
      ],
    },
    {
      n: '8', heading: 'Governing Law',
      blocks: [
        { type: 'p', text: 'This MoU shall be governed by the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction over any disputes arising from this MoU.' },
      ],
    },
    {
      n: '9', heading: 'Signatures',
      blocks: [
        { type: 'p', text: 'The undersigned Authorised Persons execute this Memorandum of Understanding on behalf of their respective organisations.' },
        { type: 'twocolSignature', left: { title: 'For UPTECH', subtitle: 'Authorised Person' }, right: { title: 'For Partner Organization', subtitle: 'Authorised Person' } },
      ],
    },
  ],
};
