"use client";

/* ── Premium 3D-style SVG illustrations for "What We Do" cards ── */

interface IconProps {
  className?: string;
}

export const AITechIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ai1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2A3542"/>
        <stop offset="100%" stopColor="#141B24"/>
      </linearGradient>
      <linearGradient id="ai2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#1E2733"/>
      </linearGradient>
      <linearGradient id="ai3" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#2A3542"/>
      </linearGradient>
      <filter id="aiGlow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="aiShadow"><feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#141B24" floodOpacity="0.3"/></filter>
    </defs>
    {/* Circuit board base */}
    <rect x="30" y="110" width="140" height="60" rx="8" fill="url(#ai1)" filter="url(#aiShadow)"/>
    <rect x="35" y="115" width="130" height="50" rx="5" fill="#141B24" opacity="0.6"/>
    {/* Circuit traces */}
    <line x1="50" y1="130" x2="90" y2="130" stroke="#B3AA98" strokeWidth="2" opacity="0.6"/>
    <line x1="110" y1="130" x2="150" y2="130" stroke="#B3AA98" strokeWidth="2" opacity="0.6"/>
    <line x1="70" y1="145" x2="130" y2="145" stroke="#B3AA98" strokeWidth="1.5" opacity="0.4"/>
    <line x1="50" y1="155" x2="80" y2="155" stroke="#B3AA98" strokeWidth="1.5" opacity="0.4"/>
    <line x1="120" y1="155" x2="150" y2="155" stroke="#B3AA98" strokeWidth="1.5" opacity="0.4"/>
    {/* Circuit dots */}
    <circle cx="90" cy="130" r="3" fill="#B3AA98"/>
    <circle cx="110" cy="130" r="3" fill="#B3AA98"/>
    <circle cx="70" cy="145" r="2.5" fill="#B3AA98"/>
    <circle cx="130" cy="145" r="2.5" fill="#B3AA98"/>
    {/* Main CPU chip */}
    <rect x="55" y="50" width="90" height="70" rx="10" fill="url(#ai2)" filter="url(#aiShadow)"/>
    <rect x="62" y="57" width="76" height="56" rx="6" fill="#1E2733"/>
    {/* Brain pattern inside chip */}
    <path d="M80 75c0-5 4-9 10-9s10 2 14 6c4-2 8-1 10 3s0 8-3 10c2 4 1 8-2 10s-7 1-10-1c-3 3-7 4-10 2s-5-6-3-10c-4-3-6-7-6-11z" fill="url(#ai3)" opacity="0.8"/>
    <circle cx="92" cy="80" r="2" fill="#ECE5D8"/>
    <circle cx="104" cy="78" r="1.5" fill="#ECE5D8"/>
    <circle cx="98" cy="88" r="2" fill="#ECE5D8"/>
    {/* Chip pins top */}
    <rect x="68" y="42" width="6" height="12" rx="2" fill="#B3AA98"/>
    <rect x="82" y="42" width="6" height="12" rx="2" fill="#B3AA98"/>
    <rect x="96" y="42" width="6" height="12" rx="2" fill="#B3AA98"/>
    <rect x="110" y="42" width="6" height="12" rx="2" fill="#B3AA98"/>
    {/* Chip pins bottom */}
    <rect x="68" y="116" width="6" height="12" rx="2" fill="#B3AA98"/>
    <rect x="82" y="116" width="6" height="12" rx="2" fill="#B3AA98"/>
    <rect x="96" y="116" width="6" height="12" rx="2" fill="#B3AA98"/>
    <rect x="110" y="116" width="6" height="12" rx="2" fill="#B3AA98"/>
    {/* Chip pins left */}
    <rect x="43" y="62" width="16" height="6" rx="2" fill="#B3AA98"/>
    <rect x="43" y="76" width="16" height="6" rx="2" fill="#B3AA98"/>
    <rect x="43" y="90" width="16" height="6" rx="2" fill="#B3AA98"/>
    {/* Chip pins right */}
    <rect x="141" y="62" width="16" height="6" rx="2" fill="#B3AA98"/>
    <rect x="141" y="76" width="16" height="6" rx="2" fill="#B3AA98"/>
    <rect x="141" y="90" width="16" height="6" rx="2" fill="#B3AA98"/>
    {/* Floating data particles */}
    <circle cx="30" cy="40" r="4" fill="#B3AA98" opacity="0.7"/>
    <circle cx="170" cy="35" r="3" fill="#B3AA98" opacity="0.6"/>
    <circle cx="25" cy="85" r="2.5" fill="#2A3542" opacity="0.5"/>
    <circle cx="175" cy="90" r="3.5" fill="#B3AA98" opacity="0.5"/>
    {/* Signal waves */}
    <path d="M20 55c5-3 10 3 15 0" stroke="#B3AA98" strokeWidth="1.5" opacity="0.4" fill="none"/>
    <path d="M165 50c5-3 10 3 15 0" stroke="#B3AA98" strokeWidth="1.5" opacity="0.4" fill="none"/>
    {/* Stars */}
    <path d="M160 25l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="#D8CDBA" opacity="0.8"/>
    <path d="M35 25l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.6"/>
  </svg>
);

export const ServicesIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="svc1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E2733"/>
        <stop offset="100%" stopColor="#3C4A5A"/>
      </linearGradient>
      <linearGradient id="svc2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#2A3542"/>
      </linearGradient>
      <filter id="svcShadow"><feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3C4A5A" floodOpacity="0.3"/></filter>
    </defs>
    {/* Laptop base */}
    <path d="M25 150l10-8h130l10 8v5H25v-5z" fill="#2A3542" opacity="0.6"/>
    <rect x="40" y="70" width="120" height="82" rx="6" fill="url(#svc1)" filter="url(#svcShadow)"/>
    <rect x="46" y="76" width="108" height="64" rx="3" fill="#0E1318"/>
    {/* Screen content - dashboard */}
    <rect x="52" y="82" width="45" height="25" rx="2" fill="#1E2733" opacity="0.2"/>
    <rect x="52" y="82" width="45" height="6" rx="2" fill="#B3AA98" opacity="0.4"/>
    <rect x="103" y="82" width="45" height="25" rx="2" fill="#1E2733" opacity="0.2"/>
    <rect x="103" y="82" width="30" height="6" rx="2" fill="#B3AA98" opacity="0.4"/>
    {/* Chart bars on screen */}
    <rect x="56" y="102" width="6" height="3" rx="1" fill="#B3AA98" opacity="0.6"/>
    <rect x="65" y="99" width="6" height="6" rx="1" fill="#B3AA98" opacity="0.7"/>
    <rect x="74" y="96" width="6" height="9" rx="1" fill="#B3AA98" opacity="0.8"/>
    <rect x="83" y="93" width="6" height="12" rx="1" fill="#B3AA98"/>
    {/* Line chart on screen */}
    <path d="M107 102l8-4 8 2 10-6 10-3" stroke="#B3AA98" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Lower screen rows */}
    <rect x="52" y="112" width="96" height="4" rx="1" fill="#1E2733" opacity="0.15"/>
    <rect x="52" y="119" width="96" height="4" rx="1" fill="#1E2733" opacity="0.15"/>
    <rect x="52" y="126" width="70" height="4" rx="1" fill="#1E2733" opacity="0.15"/>
    {/* Floating gear - left */}
    <circle cx="28" cy="80" r="16" fill="url(#svc2)" filter="url(#svcShadow)"/>
    <circle cx="28" cy="80" r="8" fill="#0E1318"/>
    <rect x="24" y="61" width="8" height="6" rx="2" fill="#1E2733"/>
    <rect x="24" y="93" width="8" height="6" rx="2" fill="#1E2733"/>
    <rect x="9" y="76" width="6" height="8" rx="2" fill="#1E2733"/>
    <rect x="41" y="76" width="6" height="8" rx="2" fill="#1E2733"/>
    {/* Floating document - right */}
    <rect x="155" y="55" width="32" height="40" rx="4" fill="url(#svc2)" filter="url(#svcShadow)"/>
    <rect x="160" y="62" width="22" height="3" rx="1" fill="#ECE5D8" opacity="0.7"/>
    <rect x="160" y="68" width="18" height="3" rx="1" fill="#ECE5D8" opacity="0.5"/>
    <rect x="160" y="74" width="22" height="3" rx="1" fill="#ECE5D8" opacity="0.5"/>
    <rect x="160" y="80" width="14" height="3" rx="1" fill="#ECE5D8" opacity="0.4"/>
    {/* Checkmark on document */}
    <path d="M170 86l3 3 6-6" stroke="#ECE5D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Floating coins/elements */}
    <circle cx="170" cy="130" r="10" fill="#D8CDBA" opacity="0.8"/>
    <text x="166.5" y="134" fill="#2A3542" fontSize="12" fontWeight="bold">$</text>
    <circle cx="155" cy="145" r="7" fill="#B3AA98" opacity="0.6"/>
    {/* Connection dots */}
    <circle cx="22" cy="50" r="3" fill="#B3AA98" opacity="0.5"/>
    <circle cx="180" cy="40" r="2.5" fill="#D8CDBA" opacity="0.5"/>
    <path d="M18 35l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.7"/>
  </svg>
);

export const SkillDevIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sk1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#5C6B7E"/>
      </linearGradient>
      <linearGradient id="sk2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D8CDBA"/>
        <stop offset="100%" stopColor="#5C6B7E"/>
      </linearGradient>
      <filter id="skShadow"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#2A3542" floodOpacity="0.25"/></filter>
    </defs>
    {/* Stack of books */}
    <rect x="35" y="120" width="100" height="16" rx="3" fill="#3C4A5A" filter="url(#skShadow)"/>
    <rect x="37" y="122" width="96" height="12" rx="2" fill="url(#sk1)"/>
    <rect x="30" y="104" width="110" height="16" rx="3" fill="#5C6B7E" filter="url(#skShadow)"/>
    <rect x="32" y="106" width="106" height="12" rx="2" fill="url(#sk2)"/>
    <rect x="40" y="88" width="95" height="16" rx="3" fill="#5C6B7E" filter="url(#skShadow)"/>
    <rect x="42" y="90" width="91" height="12" rx="2" fill="#B3AA98"/>
    {/* Book spines detail */}
    <line x1="55" y1="106" x2="55" y2="118" stroke="#2A3542" strokeWidth="1" opacity="0.3"/>
    <line x1="90" y1="106" x2="90" y2="118" stroke="#2A3542" strokeWidth="1" opacity="0.3"/>
    <line x1="120" y1="106" x2="120" y2="118" stroke="#2A3542" strokeWidth="1" opacity="0.3"/>
    {/* Graduation cap */}
    <path d="M100 30L55 52l45 22 45-22L100 30z" fill="url(#sk1)" filter="url(#skShadow)"/>
    <path d="M100 30L55 52l45 22 45-22L100 30z" fill="url(#sk2)" opacity="0.7"/>
    <path d="M100 52l-30-14v20c0 8 13 14 30 14s30-6 30-14V38L100 52z" fill="#5C6B7E" opacity="0.8"/>
    <path d="M100 52l-30-14v20c0 8 13 14 30 14s30-6 30-14V38L100 52z" fill="url(#sk1)" opacity="0.5"/>
    {/* Tassel */}
    <line x1="145" y1="52" x2="145" y2="78" stroke="#D8CDBA" strokeWidth="2.5"/>
    <circle cx="145" cy="78" r="4" fill="#D8CDBA"/>
    <rect x="143" y="50" width="4" height="4" rx="1" fill="#D8CDBA"/>
    {/* Certificate floating right */}
    <rect x="150" y="90" width="38" height="50" rx="4" fill="#F6F2EA" filter="url(#skShadow)"/>
    <rect x="150" y="90" width="38" height="12" rx="4" fill="url(#sk2)"/>
    <rect x="156" y="108" width="26" height="2.5" rx="1" fill="#5C6B7E" opacity="0.4"/>
    <rect x="156" y="114" width="20" height="2.5" rx="1" fill="#5C6B7E" opacity="0.3"/>
    <rect x="156" y="120" width="26" height="2.5" rx="1" fill="#5C6B7E" opacity="0.3"/>
    {/* Star on certificate */}
    <path d="M169 128l2 4 4.5 .7-3.2 3.2.8 4.5-4-2.1-4 2.1.8-4.5-3.2-3.2 4.5-.7z" fill="#B3AA98"/>
    {/* Pencil floating left */}
    <rect x="15" y="65" width="8" height="55" rx="2" fill="#D8CDBA" transform="rotate(-15 19 92)" filter="url(#skShadow)"/>
    <path d="M8 115l4 15 4-1-4-14z" fill="#8A857C" transform="rotate(-15 14 122)"/>
    <rect x="15" y="65" width="8" height="10" rx="2" fill="#DC2626" opacity="0.7" transform="rotate(-15 19 70)"/>
    {/* Sparkles */}
    <circle cx="45" cy="40" r="3" fill="#D8CDBA" opacity="0.7"/>
    <circle cx="160" cy="35" r="2.5" fill="#B3AA98" opacity="0.6"/>
    <path d="M30 80l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.8"/>
    {/* Light bulb idea */}
    <circle cx="170" cy="60" r="8" fill="#D8CDBA" opacity="0.3"/>
    <circle cx="170" cy="60" r="5" fill="#D8CDBA" opacity="0.5"/>
  </svg>
);

export const PartnershipIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pt1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E2733"/>
        <stop offset="100%" stopColor="#1E2733"/>
      </linearGradient>
      <linearGradient id="pt2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8A857C"/>
        <stop offset="100%" stopColor="#1E2733"/>
      </linearGradient>
      <linearGradient id="pt3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#141B24"/>
        <stop offset="100%" stopColor="#1E2733"/>
      </linearGradient>
      <filter id="ptShadow"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1E2733" floodOpacity="0.3"/></filter>
    </defs>
    {/* Globe */}
    <circle cx="100" cy="90" r="50" fill="url(#pt1)" fillOpacity="0.15" stroke="url(#pt2)" strokeWidth="2.5" filter="url(#ptShadow)"/>
    <ellipse cx="100" cy="90" rx="50" ry="18" stroke="#8A857C" strokeWidth="1" opacity="0.4"/>
    <ellipse cx="100" cy="90" rx="18" ry="50" stroke="#8A857C" strokeWidth="1" opacity="0.4"/>
    <ellipse cx="100" cy="90" rx="35" ry="50" stroke="#8A857C" strokeWidth="0.7" opacity="0.25"/>
    <line x1="50" y1="90" x2="150" y2="90" stroke="#8A857C" strokeWidth="0.7" opacity="0.3"/>
    {/* UK flag hint - left side */}
    <rect x="15" y="55" width="40" height="28" rx="4" fill="#141B24" filter="url(#ptShadow)"/>
    <line x1="15" y1="69" x2="55" y2="69" stroke="white" strokeWidth="3"/>
    <line x1="35" y1="55" x2="35" y2="83" stroke="white" strokeWidth="3"/>
    <line x1="15" y1="55" x2="55" y2="83" stroke="#8A857C" strokeWidth="1.5" opacity="0.7"/>
    <line x1="55" y1="55" x2="15" y2="83" stroke="#8A857C" strokeWidth="1.5" opacity="0.7"/>
    {/* Pakistan flag hint - right side */}
    <rect x="145" y="55" width="40" height="28" rx="4" fill="#3C4A5A" filter="url(#ptShadow)"/>
    <circle cx="170" cy="68" r="7" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M172 62l2 4 1-3z" fill="white"/>
    {/* Connection line between flags through globe */}
    <path d="M55 69h15M130 69h15" stroke="url(#pt3)" strokeWidth="2" strokeDasharray="4 3" opacity="0.6"/>
    {/* Handshake in center */}
    <path d="M85 125c-3-3-5-2-8 0l-6 6c-2 2-1 5 1 7l4 4c2 2 5 1 7-1l8-8" stroke="#8A857C" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M115 125c3-3 5-2 8 0l6 6c2 2 1 5-1 7l-4 4c-2 2-5 1-7-1l-8-8" stroke="#8A857C" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M88 128l12-3 12 3" stroke="#D8CDBA" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Connection nodes on globe */}
    <circle cx="75" cy="72" r="4" fill="#8A857C"/>
    <circle cx="125" cy="72" r="4" fill="#8A857C"/>
    <circle cx="100" cy="50" r="3.5" fill="#B3AA98"/>
    <circle cx="100" cy="130" r="3.5" fill="#B3AA98"/>
    <line x1="75" y1="72" x2="125" y2="72" stroke="#8A857C" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5"/>
    {/* Floating elements */}
    <circle cx="30" cy="130" r="3" fill="#B3AA98" opacity="0.5"/>
    <circle cx="170" cy="130" r="3" fill="#D8CDBA" opacity="0.5"/>
    <path d="M25 40l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.7"/>
    <path d="M175 40l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.6"/>
  </svg>
);

export const GovernanceIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gov1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3C4A5A"/>
        <stop offset="100%" stopColor="#2A3542"/>
      </linearGradient>
      <linearGradient id="gov2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8A857C"/>
        <stop offset="100%" stopColor="#2A3542"/>
      </linearGradient>
      <filter id="govShadow"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1E2733" floodOpacity="0.3"/></filter>
      <filter id="govGlow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {/* Shield main */}
    <path d="M100 20L40 50v40c0 35 25 65 60 75 35-10 60-40 60-75V50L100 20z"
      fill="url(#gov1)" filter="url(#govShadow)"/>
    <path d="M100 30L50 55v35c0 30 22 56 50 65 28-9 50-35 50-65V55L100 30z"
      fill="#2A3542" opacity="0.7"/>
    {/* Shield inner glow border */}
    <path d="M100 38L58 60v30c0 26 19 48 42 56 23-8 42-30 42-56V60L100 38z"
      stroke="#B3AA98" strokeWidth="1.5" fill="none" opacity="0.5"/>
    {/* Large checkmark */}
    <path d="M75 88l18 18 35-35" stroke="#E0E7FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#govGlow)"/>
    {/* Pillar left */}
    <rect x="15" y="70" width="18" height="80" rx="3" fill="url(#gov2)" filter="url(#govShadow)"/>
    <rect x="15" y="65" width="18" height="10" rx="2" fill="#8A857C"/>
    <rect x="15" y="150" width="18" height="8" rx="2" fill="#8A857C"/>
    <line x1="20" y1="80" x2="20" y2="145" stroke="#B3AA98" strokeWidth="1" opacity="0.3"/>
    <line x1="28" y1="80" x2="28" y2="145" stroke="#B3AA98" strokeWidth="1" opacity="0.3"/>
    {/* Pillar right */}
    <rect x="167" y="70" width="18" height="80" rx="3" fill="url(#gov2)" filter="url(#govShadow)"/>
    <rect x="167" y="65" width="18" height="10" rx="2" fill="#8A857C"/>
    <rect x="167" y="150" width="18" height="8" rx="2" fill="#8A857C"/>
    <line x1="172" y1="80" x2="172" y2="145" stroke="#B3AA98" strokeWidth="1" opacity="0.3"/>
    <line x1="180" y1="80" x2="180" y2="145" stroke="#B3AA98" strokeWidth="1" opacity="0.3"/>
    {/* Pediment top */}
    <path d="M10 65l90-30 90 30H10z" fill="url(#gov2)" opacity="0.2"/>
    {/* Base */}
    <rect x="10" y="155" width="180" height="10" rx="3" fill="url(#gov2)" opacity="0.4"/>
    {/* Gavel floating */}
    <rect x="148" y="25" width="30" height="10" rx="4" fill="#8A857C" filter="url(#govShadow)" transform="rotate(-30 163 30)"/>
    <rect x="158" y="30" width="5" height="22" rx="2" fill="#8A857C" transform="rotate(-30 160 41)"/>
    {/* Stars/sparkles */}
    <circle cx="40" cy="40" r="3" fill="#B3AA98" opacity="0.6"/>
    <circle cx="160" cy="170" r="2.5" fill="#B3AA98" opacity="0.5"/>
    <path d="M175 15l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.7"/>
  </svg>
);

export const TradeDelegationsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="td1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5C6B7E"/>
        <stop offset="100%" stopColor="#3C4A5A"/>
      </linearGradient>
      <linearGradient id="td2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8A857C"/>
        <stop offset="100%" stopColor="#3C4A5A"/>
      </linearGradient>
      <filter id="tdShadow"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#2A3542" floodOpacity="0.3"/></filter>
    </defs>
    {/* Building left - tall */}
    <rect x="20" y="60" width="35" height="100" rx="3" fill="url(#td2)" filter="url(#tdShadow)"/>
    <rect x="25" y="68" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.4"/>
    <rect x="40" y="68" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.4"/>
    <rect x="25" y="82" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.35"/>
    <rect x="40" y="82" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.35"/>
    <rect x="25" y="96" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.3"/>
    <rect x="40" y="96" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.3"/>
    <rect x="25" y="110" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.25"/>
    <rect x="40" y="110" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.25"/>
    <rect x="30" y="130" width="14" height="30" rx="2" fill="#3C4A5A"/>
    {/* Building right - medium */}
    <rect x="145" y="80" width="35" height="80" rx="3" fill="url(#td2)" filter="url(#tdShadow)"/>
    <rect x="150" y="88" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.4"/>
    <rect x="165" y="88" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.4"/>
    <rect x="150" y="102" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.35"/>
    <rect x="165" y="102" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.35"/>
    <rect x="150" y="116" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.3"/>
    <rect x="165" y="116" width="10" height="8" rx="1.5" fill="#ECE5D8" opacity="0.3"/>
    <rect x="155" y="135" width="14" height="25" rx="2" fill="#3C4A5A"/>
    {/* Ground */}
    <rect x="10" y="158" width="180" height="8" rx="3" fill="url(#td1)" opacity="0.3"/>
    {/* Airplane */}
    <path d="M85 30l15-5 50 20-8 4-20-6-12 5-8-3 10-5-15-6-12 5z" fill="url(#td2)" filter="url(#tdShadow)"/>
    <path d="M100 25l-8 3 15 6" stroke="#ECE5D8" strokeWidth="1" opacity="0.5" fill="none"/>
    {/* Central handshake */}
    <circle cx="100" cy="110" r="28" fill="url(#td1)" fillOpacity="0.15" stroke="#8A857C" strokeWidth="2"/>
    <path d="M82 108c-2-4 0-7 4-7h6l8 4h8c4 0 6 3 4 7l-4 6c-2 2-4 3-7 2l-5-3-5 3c-3 1-5 0-7-2l-2-4z" fill="#8A857C" opacity="0.6"/>
    <path d="M85 104l8-2 7 4 7-4 8 2" stroke="#E0F2FE" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M88 114l5 4 7-2 7 2 5-4" stroke="#ECE5D8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
    {/* Arrow paths - trade routes */}
    <path d="M55 100c15-20 30-25 45-20" stroke="#8A857C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" fill="none"/>
    <path d="M145 100c-15-20-30-25-45-20" stroke="#8A857C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" fill="none"/>
    {/* Container boxes */}
    <rect x="65" y="145" width="20" height="13" rx="2" fill="#8A857C" filter="url(#tdShadow)"/>
    <rect x="67" y="147" width="16" height="2" rx="0.5" fill="#ECE5D8" opacity="0.5"/>
    <rect x="115" y="145" width="20" height="13" rx="2" fill="#EF4444" filter="url(#tdShadow)"/>
    <rect x="117" y="147" width="16" height="2" rx="0.5" fill="#FECACA" opacity="0.5"/>
    <rect x="90" y="148" width="20" height="10" rx="2" fill="#1E2733" filter="url(#tdShadow)"/>
    {/* Sparkles */}
    <circle cx="75" cy="45" r="3" fill="#8A857C" opacity="0.5"/>
    <circle cx="140" cy="55" r="2.5" fill="#B3AA98" opacity="0.5"/>
    <path d="M170 45l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.7"/>
    <path d="M25 45l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.6"/>
  </svg>
);

/* ── "More from Pakistan Textile Partners" section icons ── */

export const ProductsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="prod1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2A3542"/>
        <stop offset="100%" stopColor="#141B24"/>
      </linearGradient>
      <linearGradient id="prod2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#1E2733"/>
      </linearGradient>
      <filter id="prodSh"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#141B24" floodOpacity="0.3"/></filter>
    </defs>
    {/* Phone */}
    <rect x="55" y="30" width="55" height="110" rx="10" fill="url(#prod1)" filter="url(#prodSh)"/>
    <rect x="60" y="42" width="45" height="82" rx="3" fill="#1E2733"/>
    {/* Phone screen content */}
    <circle cx="82" cy="68" r="12" fill="#2A3542" opacity="0.3"/>
    <circle cx="82" cy="68" r="7" fill="#B3AA98" opacity="0.6"/>
    <rect x="66" y="86" width="33" height="3" rx="1" fill="#B3AA98" opacity="0.5"/>
    <rect x="70" y="93" width="25" height="3" rx="1" fill="#B3AA98" opacity="0.35"/>
    <rect x="66" y="102" width="33" height="8" rx="3" fill="#2A3542" opacity="0.5"/>
    {/* Phone notch */}
    <rect x="73" y="34" width="18" height="4" rx="2" fill="#1E2733"/>
    {/* Home indicator */}
    <rect x="74" y="128" width="16" height="3" rx="1.5" fill="#B3AA98" opacity="0.4"/>
    {/* Floating laptop behind */}
    <rect x="100" y="65" width="80" height="55" rx="5" fill="url(#prod2)" filter="url(#prodSh)"/>
    <rect x="105" y="71" width="70" height="40" rx="3" fill="#0E1318"/>
    <path d="M90 120h100l-5 8H95z" fill="#1E2733" opacity="0.6"/>
    {/* Laptop screen content */}
    <rect x="110" y="76" width="28" height="14" rx="2" fill="#2A3542" opacity="0.3"/>
    <rect x="142" y="76" width="28" height="14" rx="2" fill="#2A3542" opacity="0.25"/>
    <rect x="110" y="94" width="60" height="3" rx="1" fill="#B3AA98" opacity="0.3"/>
    <rect x="110" y="100" width="45" height="3" rx="1" fill="#B3AA98" opacity="0.2"/>
    {/* Floating gear */}
    <circle cx="30" cy="85" r="14" fill="url(#prod2)" filter="url(#prodSh)"/>
    <circle cx="30" cy="85" r="7" fill="#1E2733"/>
    <rect x="26" y="68" width="8" height="5" rx="2" fill="#2A3542"/>
    <rect x="26" y="97" width="8" height="5" rx="2" fill="#2A3542"/>
    <rect x="13" y="81" width="5" height="8" rx="2" fill="#2A3542"/>
    <rect x="42" y="81" width="5" height="8" rx="2" fill="#2A3542"/>
    {/* Connection lines */}
    <path d="M44 85h11" stroke="#B3AA98" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
    {/* Sparkles */}
    <circle cx="160" cy="45" r="3" fill="#B3AA98" opacity="0.6"/>
    <circle cx="25" cy="55" r="2.5" fill="#B3AA98" opacity="0.5"/>
    <path d="M45 40l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.7"/>
    <path d="M170 70l1 2.5 2.5.3-1.8 1.8.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.8 2.5-.3z" fill="#D8CDBA" opacity="0.6"/>
    {/* Floating notification */}
    <circle cx="105" cy="40" r="10" fill="#EF4444" opacity="0.9"/>
    <text x="101" y="44" fill="white" fontSize="12" fontWeight="bold">3</text>
  </svg>
);

export const MentorshipIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ment1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E2733"/>
        <stop offset="100%" stopColor="#3C4A5A"/>
      </linearGradient>
      <linearGradient id="ment2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#2A3542"/>
      </linearGradient>
      <filter id="mentSh"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#2A3542" floodOpacity="0.3"/></filter>
    </defs>
    {/* Person left (mentor) */}
    <circle cx="60" cy="55" r="18" fill="url(#ment1)" filter="url(#mentSh)"/>
    <circle cx="60" cy="48" r="10" fill="#ECE5D8" opacity="0.6"/>
    <path d="M60 58c-6 0-11 2-14 5v8c0 3 2 5 5 5h18c3 0 5-2 5-5v-8c-3-3-8-5-14-5z" fill="#B3AA98" opacity="0.5"/>
    {/* Person body left */}
    <path d="M35 95c0-14 11-25 25-25s25 11 25 25v25H35V95z" fill="url(#ment1)" filter="url(#mentSh)"/>
    <rect x="40" y="100" width="15" height="3" rx="1" fill="#ECE5D8" opacity="0.3"/>
    <rect x="40" y="107" width="10" height="3" rx="1" fill="#ECE5D8" opacity="0.2"/>
    {/* Person right (mentee) */}
    <circle cx="140" cy="60" r="16" fill="url(#ment2)" filter="url(#mentSh)"/>
    <circle cx="140" cy="54" r="9" fill="#F6F2EA" opacity="0.6"/>
    <path d="M140 62c-5 0-9 2-12 4v7c0 2.5 1.8 4.5 4.5 4.5h15c2.7 0 4.5-2 4.5-4.5v-7c-3-2-7-4-12-4z" fill="#D8CDBA" opacity="0.5"/>
    {/* Person body right */}
    <path d="M118 100c0-12 10-22 22-22s22 10 22 22v20H118V100z" fill="url(#ment2)" filter="url(#mentSh)"/>
    <rect x="123" y="104" width="13" height="3" rx="1" fill="#F6F2EA" opacity="0.3"/>
    <rect x="123" y="110" width="9" height="3" rx="1" fill="#F6F2EA" opacity="0.2"/>
    {/* Connection arc between them */}
    <path d="M78 65c15-15 30-15 45 0" stroke="#B3AA98" strokeWidth="2.5" strokeDasharray="5 3" fill="none" opacity="0.6"/>
    <circle cx="100" cy="52" r="5" fill="#1E2733" opacity="0.8"/>
    <path d="M97 52l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Chat bubbles */}
    <rect x="70" y="130" width="60" height="30" rx="8" fill="url(#ment1)" filter="url(#mentSh)"/>
    <circle cx="88" cy="145" r="3" fill="#ECE5D8" opacity="0.5"/>
    <circle cx="100" cy="145" r="3" fill="#ECE5D8" opacity="0.5"/>
    <circle cx="112" cy="145" r="3" fill="#ECE5D8" opacity="0.5"/>
    <path d="M85 160l8-2v6z" fill="#3C4A5A"/>
    {/* Light bulbs / ideas */}
    <circle cx="30" cy="40" r="8" fill="#D8CDBA" opacity="0.3"/>
    <circle cx="30" cy="40" r="5" fill="#D8CDBA" opacity="0.5"/>
    <circle cx="170" cy="38" r="6" fill="#D8CDBA" opacity="0.25"/>
    <circle cx="170" cy="38" r="4" fill="#D8CDBA" opacity="0.45"/>
    {/* Sparkles */}
    <path d="M20 70l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.7"/>
    <circle cx="180" cy="90" r="2.5" fill="#D8CDBA" opacity="0.5"/>
    <circle cx="100" cy="30" r="2" fill="#B3AA98" opacity="0.6"/>
  </svg>
);

export const MeetingSpaceIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="meet1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#5C6B7E"/>
      </linearGradient>
      <linearGradient id="meet2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D8CDBA"/>
        <stop offset="100%" stopColor="#5C6B7E"/>
      </linearGradient>
      <filter id="meetSh"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#2A3542" floodOpacity="0.25"/></filter>
    </defs>
    {/* Building exterior */}
    <rect x="40" y="35" width="120" height="120" rx="6" fill="url(#meet1)" filter="url(#meetSh)"/>
    <rect x="45" y="40" width="110" height="110" rx="4" fill="#2A3542" opacity="0.3"/>
    {/* Windows grid */}
    <rect x="52" y="48" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.5"/>
    <rect x="75" y="48" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.5"/>
    <rect x="98" y="48" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.45"/>
    <rect x="121" y="48" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.4"/>
    <rect x="52" y="68" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.45"/>
    <rect x="75" y="68" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.45"/>
    <rect x="98" y="68" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.4"/>
    <rect x="121" y="68" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.35"/>
    <rect x="52" y="88" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.4"/>
    <rect x="75" y="88" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.4"/>
    <rect x="98" y="88" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.35"/>
    <rect x="121" y="88" width="18" height="14" rx="2" fill="#F6F2EA" opacity="0.3"/>
    {/* Entrance */}
    <rect x="80" y="115" width="40" height="40" rx="4" fill="#2A3542" opacity="0.6"/>
    <rect x="80" y="115" width="40" height="5" rx="2" fill="#D8CDBA" opacity="0.5"/>
    <line x1="100" y1="120" x2="100" y2="155" stroke="#3C4A5A" strokeWidth="1.5" opacity="0.4"/>
    {/* Door handles */}
    <circle cx="96" cy="138" r="2" fill="#D8CDBA" opacity="0.7"/>
    <circle cx="104" cy="138" r="2" fill="#D8CDBA" opacity="0.7"/>
    {/* Conference table floating */}
    <ellipse cx="100" cy="170" rx="40" ry="10" fill="url(#meet2)" filter="url(#meetSh)" opacity="0.7"/>
    <ellipse cx="100" cy="168" rx="35" ry="8" fill="#2A3542" opacity="0.3"/>
    {/* Chairs around table */}
    <circle cx="68" cy="168" r="6" fill="#5C6B7E" opacity="0.6"/>
    <circle cx="132" cy="168" r="6" fill="#5C6B7E" opacity="0.6"/>
    <circle cx="88" cy="178" r="5" fill="#5C6B7E" opacity="0.5"/>
    <circle cx="112" cy="178" r="5" fill="#5C6B7E" opacity="0.5"/>
    {/* UK flag on building */}
    <rect x="20" y="30" width="22" height="15" rx="2" fill="#141B24" filter="url(#meetSh)"/>
    <line x1="20" y1="37.5" x2="42" y2="37.5" stroke="white" strokeWidth="2"/>
    <line x1="31" y1="30" x2="31" y2="45" stroke="white" strokeWidth="2"/>
    {/* Location pin */}
    <path d="M170 28c-8 0-15 7-15 15 0 12 15 25 15 25s15-13 15-25c0-8-7-15-15-15z" fill="#EF4444" filter="url(#meetSh)"/>
    <circle cx="170" cy="43" r="6" fill="white" opacity="0.8"/>
    {/* Sparkles */}
    <path d="M25 65l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.8"/>
    <circle cx="175" cy="80" r="2.5" fill="#B3AA98" opacity="0.5"/>
  </svg>
);

export const StructureIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="str1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3C4A5A"/>
        <stop offset="100%" stopColor="#2A3542"/>
      </linearGradient>
      <linearGradient id="str2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B3AA98"/>
        <stop offset="100%" stopColor="#3C4A5A"/>
      </linearGradient>
      <filter id="strSh"><feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1E2733" floodOpacity="0.3"/></filter>
    </defs>
    {/* Org chart - top node */}
    <rect x="70" y="25" width="60" height="35" rx="8" fill="url(#str1)" filter="url(#strSh)"/>
    <circle cx="100" cy="37" r="8" fill="#D8CDBA" opacity="0.4"/>
    <rect x="88" y="48" width="24" height="3" rx="1" fill="#D8CDBA" opacity="0.5"/>
    {/* Connector lines */}
    <line x1="100" y1="60" x2="100" y2="75" stroke="#8A857C" strokeWidth="2.5"/>
    <line x1="45" y1="75" x2="155" y2="75" stroke="#8A857C" strokeWidth="2.5"/>
    <line x1="45" y1="75" x2="45" y2="90" stroke="#8A857C" strokeWidth="2.5"/>
    <line x1="100" y1="75" x2="100" y2="90" stroke="#8A857C" strokeWidth="2.5"/>
    <line x1="155" y1="75" x2="155" y2="90" stroke="#8A857C" strokeWidth="2.5"/>
    {/* Second level nodes */}
    <rect x="20" y="90" width="50" height="32" rx="7" fill="url(#str2)" filter="url(#strSh)"/>
    <circle cx="37" cy="100" r="5" fill="#E0E7FF" opacity="0.4"/>
    <rect x="45" y="98" width="18" height="2.5" rx="1" fill="#E0E7FF" opacity="0.4"/>
    <rect x="45" y="104" width="12" height="2.5" rx="1" fill="#E0E7FF" opacity="0.3"/>
    <rect x="75" y="90" width="50" height="32" rx="7" fill="url(#str2)" filter="url(#strSh)"/>
    <circle cx="92" cy="100" r="5" fill="#E0E7FF" opacity="0.4"/>
    <rect x="100" y="98" width="18" height="2.5" rx="1" fill="#E0E7FF" opacity="0.4"/>
    <rect x="100" y="104" width="12" height="2.5" rx="1" fill="#E0E7FF" opacity="0.3"/>
    <rect x="130" y="90" width="50" height="32" rx="7" fill="url(#str2)" filter="url(#strSh)"/>
    <circle cx="147" cy="100" r="5" fill="#E0E7FF" opacity="0.4"/>
    <rect x="155" y="98" width="18" height="2.5" rx="1" fill="#E0E7FF" opacity="0.4"/>
    <rect x="155" y="104" width="12" height="2.5" rx="1" fill="#E0E7FF" opacity="0.3"/>
    {/* Third level connectors */}
    <line x1="45" y1="122" x2="45" y2="135" stroke="#8A857C" strokeWidth="2" opacity="0.7"/>
    <line x1="100" y1="122" x2="100" y2="135" stroke="#8A857C" strokeWidth="2" opacity="0.7"/>
    <line x1="155" y1="122" x2="155" y2="135" stroke="#8A857C" strokeWidth="2" opacity="0.7"/>
    {/* Third level nodes (smaller) */}
    <rect x="25" y="135" width="40" height="25" rx="6" fill="#2A3542" opacity="0.6" filter="url(#strSh)"/>
    <rect x="30" y="141" width="16" height="2" rx="1" fill="#D8CDBA" opacity="0.4"/>
    <rect x="30" y="146" width="12" height="2" rx="1" fill="#D8CDBA" opacity="0.3"/>
    <rect x="80" y="135" width="40" height="25" rx="6" fill="#2A3542" opacity="0.6" filter="url(#strSh)"/>
    <rect x="85" y="141" width="16" height="2" rx="1" fill="#D8CDBA" opacity="0.4"/>
    <rect x="85" y="146" width="12" height="2" rx="1" fill="#D8CDBA" opacity="0.3"/>
    <rect x="135" y="135" width="40" height="25" rx="6" fill="#2A3542" opacity="0.6" filter="url(#strSh)"/>
    <rect x="140" y="141" width="16" height="2" rx="1" fill="#D8CDBA" opacity="0.4"/>
    <rect x="140" y="146" width="12" height="2" rx="1" fill="#D8CDBA" opacity="0.3"/>
    {/* Floating shield badge */}
    <path d="M170 25l-10 5v8c0 7 4 13 10 16 6-3 10-9 10-16v-8l-10-5z" fill="url(#str1)" filter="url(#strSh)"/>
    <path d="M165 36l4 4 7-7" stroke="#E0E7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Document */}
    <rect x="10" y="40" width="25" height="32" rx="3" fill="#8A857C" filter="url(#strSh)"/>
    <rect x="14" y="46" width="17" height="2" rx="1" fill="#E0E7FF" opacity="0.5"/>
    <rect x="14" y="51" width="13" height="2" rx="1" fill="#E0E7FF" opacity="0.4"/>
    <rect x="14" y="56" width="17" height="2" rx="1" fill="#E0E7FF" opacity="0.4"/>
    <rect x="14" y="61" width="10" height="2" rx="1" fill="#E0E7FF" opacity="0.3"/>
    {/* Sparkles */}
    <path d="M35 20l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" fill="#D8CDBA" opacity="0.7"/>
    <circle cx="185" cy="60" r="2.5" fill="#B3AA98" opacity="0.5"/>
    <circle cx="15" cy="85" r="2" fill="#8A857C" opacity="0.4"/>
  </svg>
);
