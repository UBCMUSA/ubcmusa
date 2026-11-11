// Single source of truth for MUSA contact addresses. Consumed by the Contact
// page directory and the Who We Are org chart so the two can't drift apart.
export const EMAILS = {
  general: "admin@ubcmusa.ca",

  // Council
  president: "president@ubcmusa.ca",
  vpAdmin: "vpadmin@ubcmusa.ca",
  vpStudentResource: "vpstudentresource@ubcmusa.ca",
  vpFinance: "vpfinance@ubcmusa.ca",
  vpInternal: "vpinternal@ubcmusa.ca",
  vpExternal: "vpexternal@ubcmusa.ca",
  stringsRep: "stringsrep@ubcmusa.ca",
  keyboardRep: "keyboardrep@ubcmusa.ca",
  voiceOperaRep: "voicceoperarep@ubcmusa.ca",
  compositionRep: "compositionrep@ubcmusa.ca",
  baMusicRep: "bamusicrep@ubcmusa.ca",
  windBrassPercussionRep: "wbprep@ubcmusa.ca",
  fycChair: "fycchair@ubcmusa.ca",

  // Student government
  chiefOfStaff: "chiefofstaff@ubcmusa.ca",
  governance: "governance@ubcmusa.ca",
  elections: "elections@ubcmusa.ca",
  adminCoordinator: "admin@ubcmusa.ca",
  softwareDeveloper: "colinyang593@gmail.com",
  loungeManager: "lounge@ubcmusa.ca",
  financeCoordinator: "finance@ubcmusa.ca",
  marketing: "marketing@ubcmusa.ca",
  creative: "design@ubcmusa.ca",
  community: "community@ubcmusa.ca",
  sponsorship: "sponsorship@ubcmusa.ca",
};

// Contact directory. Entries without an `email` render as "To be announced" —
// the cohort reps are elected later in the year, and the software developer
// role has no published address.
export const DIRECTORY = [
  {
    group: "Council",
    entries: [
      { role: "President", email: EMAILS.president },
      { role: "VP Administration", email: EMAILS.vpAdmin },
      { role: "VP Student Resource", email: EMAILS.vpStudentResource },
      { role: "VP Finance", email: EMAILS.vpFinance },
      { role: "VP Internal", email: EMAILS.vpInternal },
      { role: "VP External", email: EMAILS.vpExternal },
      { role: "Strings Representative", email: EMAILS.stringsRep },
      { role: "Keyboard Representative", email: EMAILS.keyboardRep },
      { role: "Voice/Opera Representative", email: EMAILS.voiceOperaRep },
      { role: "Wind, Brass, and Percussion Representative", email: EMAILS.windBrassPercussionRep },
      { role: "Composition Representative", email: EMAILS.compositionRep },
      { role: "BA in Music Representative", email: EMAILS.baMusicRep },
      { role: "First Year Committee Chair", email: EMAILS.fycChair },
    ],
  },
  {
    group: "Student Government",
    entries: [
      { role: "Chief of Staff", email: EMAILS.chiefOfStaff },
      { role: "Governance Commissioner", email: EMAILS.governance },
      { role: "Elections Officer", email: EMAILS.elections },
      { role: "Administrative Coordinator", email: EMAILS.adminCoordinator },
      { role: "Software Developer", email: EMAILS.softwareDeveloper },
      { role: "Lounge Manager", email: EMAILS.loungeManager },
      { role: "Finance Coordinator", email: EMAILS.financeCoordinator },
      { role: "Marketing Director", email: EMAILS.marketing },
      { role: "Creative Director", email: EMAILS.creative },
      { role: "Community Outreach Director", email: EMAILS.community },
      { role: "Sponsorship Director", email: EMAILS.sponsorship },
    ],
  },
];
