// Structured content for UPTECH Sales Commission Agreement.
// Source: original public/documents/UPTECH-Sales-Commission-Agreement.pdf (3 pages),
// extracted via pdftotext -layout, then Council→Forum and email updated.
// Note: original duplicated section numbering for parties (1./2.) and clauses (1.–10.).
// Restructured here: parties moved to a "Parties" intro; clauses numbered 1–10 sequentially.

module.exports = {
  file: 'UPTECH-Sales-Commission-Agreement.pdf',
  title: 'Sales Commission Agreement',
  subtitle: 'Terms for the promotion and sale of Member products and services in UK and European markets.',
  accent: '#22C55E',

  sections: [
    {
      n: '0', heading: 'Parties',
      blocks: [
        { type: 'p', text: 'This Sales Commission Agreement ("Agreement") is made and entered into as of the Effective Date by and between:' },

        { type: 'partyHeader', label: 'Promoter' },
        { type: 'partyBlock',
          name: 'UK-Pakistan Tech Forum (UPTECH)',
          desc: 'A company incorporated under the laws of the United Kingdom, with its principal office at 134-136 Westbourne Terrace, London, W2 6QB, UK.',
          alias: '("Promoter")' },

        { type: 'partyHeader', label: 'Member' },
        { type: 'p', text: 'An individual or company registered under the laws of Pakistan, with its principal office address in Pakistan, identified by the details below ("Member").' },

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

        { type: 'effectiveDate', label: 'Effective Date' },
        { type: 'note', label: 'Reference', text: 'UPTECH and Member may individually be referred to as a "Party" and collectively as the "Parties."' },
      ],
    },
    {
      n: '1', heading: 'Purpose',
      blocks: [
        { type: 'p', text: "The Member hereby appoints UPTECH to promote, market, and/or sell the Member's products/services as listed in Exhibit A (the “Products”), and UPTECH agrees to provide such services under the terms of this Agreement." },
      ],
    },
    {
      n: '2', heading: 'Commission',
      blocks: [
        { type: 'bullet', text: 'UPTECH shall receive a commission of X% of the net sales of the Products sold through its efforts.' },
        { type: 'bullet', text: '“Net sales” means the amount received by the Member excluding taxes, shipping, and discounts.' },
        { type: 'bullet', text: 'Commission payments shall be made within 3 days of receipt of payment from customers.' },
        { type: 'bullet', text: 'Commission payments shall be made in the currency in which the sale of the Product occurred.' },
        { type: 'bullet', text: 'Any refunds, chargebacks, or returns shall reduce the corresponding commission.' },
        { type: 'bullet', text: 'Both Parties shall comply with applicable tax and withholding obligations under their respective jurisdictions.' },
      ],
    },
    {
      n: '3', heading: 'Duties and Obligations',
      blocks: [
        { type: 'kicker', text: 'UPTECH shall:' },
        { type: 'bullet', text: 'Actively promote and market the Products.' },
        { type: 'bullet', text: 'Use reasonable efforts to achieve sales targets (if any).' },
        { type: 'bullet', text: 'Maintain accurate sales records and provide reports to the Member.' },

        { type: 'kicker', text: 'Member shall:' },
        { type: 'bullet', text: 'Provide all necessary product information, marketing materials, and support.' },
        { type: 'bullet', text: 'Fulfil all customer orders promptly.' },
        { type: 'bullet', text: 'Comply with applicable laws in Pakistan regarding the sale of Products.' },
      ],
    },
    {
      n: '4', heading: 'Marketing Rights',
      blocks: [
        { type: 'bullet', text: 'The Member grants UPTECH the right to use its company name, logo, product images, website link, and other relevant marketing information solely for the purpose of promoting the Products.' },
        { type: 'bullet', text: 'UPTECH may use this information through its affiliated marketing partners, digital platforms, social media, email campaigns, and other marketing channels.' },
        { type: 'bullet', text: 'UPTECH shall ensure that all such marketing activities are professional, accurate, and do not misrepresent the Member or its products.' },
        { type: 'bullet', text: 'Any use outside the scope of this Agreement requires prior written consent from the Member.' },
      ],
    },
    {
      n: '5', heading: 'Intellectual Property',
      blocks: [
        { type: 'bullet', text: 'All other intellectual property rights not expressly granted in Section 4 remain the property of the Member.' },
        { type: 'bullet', text: "UPTECH shall not modify or sublicense the Member's intellectual property outside the agreed marketing purposes." },
      ],
    },
    {
      n: '6', heading: 'Confidentiality',
      blocks: [
        { type: 'p', text: 'Each Party agrees to keep confidential all proprietary information disclosed by the other Party and not to disclose it to any third party without written consent. This obligation survives termination of the Agreement.' },
      ],
    },
    {
      n: '7', heading: 'Term and Termination',
      blocks: [
        { type: 'bullet', text: 'This Agreement shall commence on the Start Date and continue until the End Date, or until terminated by either Party with 90 days’ written notice.' },
        { type: 'bullet', text: 'Either Party may terminate immediately for material breach, bankruptcy, or illegal activity.' },
        { type: 'bullet', text: 'Upon termination, UPTECH shall be paid any commissions earned up to the termination date for already received payments, and thereafter for a further 180 days for any transaction matured from a sale initiated by UPTECH.' },
      ],
    },
    {
      n: '8', heading: 'Governing Law and Dispute Resolution',
      blocks: [
        { type: 'p', text: 'This Agreement shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall first be attempted to be resolved amicably through mutual discussions.' },
        { type: 'p', text: 'If unresolved, disputes shall be submitted to:' },
        { type: 'bullet', text: 'Arbitration under the rules of the London Court of International Arbitration (LCIA), or' },
        { type: 'bullet', text: "Courts of England and Wales, at UPTECH's discretion." },
      ],
    },
    {
      n: '9', heading: 'Miscellaneous',
      blocks: [
        { type: 'lbullet', label: 'Entire Agreement', text: 'This Agreement constitutes the entire understanding between the Parties.' },
        { type: 'lbullet', label: 'Amendments', text: 'Any amendments must be in writing and signed by both Parties.' },
        { type: 'lbullet', label: 'Force Majeure', text: 'Neither Party shall be liable for delays due to events beyond their reasonable control.' },
        { type: 'lbullet', label: 'Assignment', text: 'Neither Party may assign this Agreement without prior written consent of the other Party.' },
      ],
    },
    {
      n: '10', heading: 'Electronic Signatures',
      blocks: [
        { type: 'bullet', text: 'The Parties agree that this Agreement may be executed and delivered by electronic signature (including by PDF, DocuSign, or other secure electronic means).' },
        { type: 'bullet', text: 'Such electronic signatures shall have the same legal effect, validity, and enforceability as original handwritten signatures.' },
        { type: 'bullet', text: 'This Agreement, once digitally signed, shall constitute a legally binding document and may be used as evidence in any court or arbitration proceeding.' },
      ],
    },
    {
      n: '11', heading: 'Execution',
      blocks: [
        { type: 'witness', text: 'IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date first written above.' },
        { type: 'twocolSignature', left: { title: 'For UPTECH, UK', subtitle: 'Authorised Person' }, right: { title: 'For the Member', subtitle: 'Authorised Person' } },
      ],
    },
    {
      n: 'A', heading: 'Exhibit A — Products',
      blocks: [
        { type: 'p', text: 'The Products covered by this Agreement are those listed below. This Exhibit may be updated by mutual written agreement of the Parties.' },
        { type: 'field', label: 'Product 1' },
        { type: 'field', label: 'Product 2' },
        { type: 'field', label: 'Product 3' },
        { type: 'field', label: 'Product 4' },
      ],
    },
  ],
};
