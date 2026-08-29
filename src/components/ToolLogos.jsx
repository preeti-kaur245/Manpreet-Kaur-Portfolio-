import React from 'react';

// Crisp, high-fidelity SVGs for all toolkit logos
export function FigmaLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

export function CanvaLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="url(#canva-grad)"/>
      <path d="M35 62c-8-5-11-16-6-24 5-9 17-11 25-5 5 4 8 11 7 17-1 5-4 8-8 7-3-1-3-4-2-7 1-4 1-8-2-10-4-3-10-1-13 4-4 6-2 14 3 17 4 3 9 1 12-2l4 5c-5 5-13 7-20 2z" fill="#FFFFFF"/>
      <defs>
        <linearGradient id="canva-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FigJamLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="24" fill="#9747FF"/>
      <path d="M28 35C28 29.4772 32.4772 25 38 25H62C67.5228 25 72 29.4772 72 35V45C72 50.5228 67.5228 55 62 55H38C32.4772 55 28 50.5228 28 45V35Z" fill="#FFC700"/>
      <path d="M38 55H62V65C62 70.5228 57.5228 75 52 75H48C42.4772 75 38 70.5228 38 65V55Z" fill="#0ACF83"/>
      <circle cx="50" cy="40" r="6" fill="#1E1E1E"/>
    </svg>
  );
}

export function GeminiLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none">
      <path d="M14 0C14 7.73199 7.73199 14 0 14C7.73199 14 14 20.268 14 28C14 20.268 20.268 14 28 14C20.268 14 14 7.73199 14 0Z" fill="url(#gemini-grad)" />
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BA1E3" />
          <stop offset="0.5" stopColor="#5E5CE6" />
          <stop offset="1" stopColor="#9E72FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ChatGPTLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#10A37F" />
      <path d="M18.2 10.4a4.4 4.4 0 0 0-.4-3.5 4.5 4.5 0 0 0-4.3-2.1 4.4 4.4 0 0 0-3.3-1.5 4.5 4.5 0 0 0-4.3 3.1 4.4 4.4 0 0 0-2.8 2 4.5 4.5 0 0 0 .5 4.7 4.4 4.4 0 0 0 .4 3.5 4.5 4.5 0 0 0 4.3 2.1 4.4 4.4 0 0 0 3.3 1.5 4.5 4.5 0 0 0 4.3-3.1 4.4 4.4 0 0 0 2.8-2 4.5 4.5 0 0 0-.5-4.7zm-6.2 8a3.1 3.1 0 0 1-2.2-.9l1.1-1.1a1.6 1.6 0 0 0 2.2.1 1.6 1.6 0 0 0 .5-1.1v-2.3l1.8 1a3.1 3.1 0 0 1-3.4 4.3zm-5.1-3.7a3.1 3.1 0 0 1-.3-2.4l1.5.8a1.6 1.6 0 0 0 1.6 1.9h2.3l-1.8 1a3.1 3.1 0 0 1-3.3-1.3zm-1.1-5.7a3.1 3.1 0 0 1 1.9-1.5v1.7a1.6 1.6 0 0 0 .6 2.2l2 1.2-1.8 1a3.1 3.1 0 0 1-2.7-4.6zm8.6-.8a1.6 1.6 0 0 0-2.2-.1 1.6 1.6 0 0 0-.5 1.1v2.3l-1.8-1a3.1 3.1 0 0 1 3.4-4.3 3.1 3.1 0 0 1 2.2.9zm3.1 3.4a3.1 3.1 0 0 1 .3 2.4l-1.5-.8a1.6 1.6 0 0 0-1.6-1.9H12l1.8-1a3.1 3.1 0 0 1 3.3 1.3zm-3.8 1.4-1.6-1 1.6-1 1.6 1z" fill="#FFFFFF"/>
    </svg>
  );
}

export function ClaudeLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#CC6B49"/>
      <path d="M12 4.5l1.6 5.4h5.6l-4.5 3.3 1.7 5.3-4.4-3.3-4.4 3.3 1.7-5.3-4.5-3.3h5.6z" fill="#FFF8F0"/>
    </svg>
  );
}

export function OllamaLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#1C1C1E" stroke="#FFFFFF" strokeWidth="3"/>
      <path d="M38 72V48c0-4 3-8 7-8h10c4 0 7 4 7 8v24M44 32v-8m12 8v-8M42 52h4m8 0h4M48 62h4" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  );
}

export function ElevenLabsLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#111827"/>
      <rect x="7" y="5" width="3.5" height="14" rx="1.75" fill="#FFFFFF"/>
      <rect x="13.5" y="5" width="3.5" height="14" rx="1.75" fill="#FFFFFF"/>
    </svg>
  );
}

export function DalleLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#1F2937"/>
      <rect x="4" y="4" width="7" height="7" rx="2" fill="#EC4899"/>
      <rect x="13" y="4" width="7" height="7" rx="2" fill="#3B82F6"/>
      <rect x="4" y="13" width="7" height="7" rx="2" fill="#10B981"/>
      <rect x="13" y="13" width="7" height="7" rx="2" fill="#F59E0B"/>
    </svg>
  );
}

export function MidjourneyLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0F172A"/>
      <path d="M12 4L18 17H6L12 4Z" stroke="#38BDF8" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <path d="M12 9L15 17" stroke="#38BDF8" strokeWidth="1.5"/>
      <path d="M4 19C8 17.5 16 17.5 20 19" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function ReactLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function NextjsLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000000"/>
      <path d="M149.508 157.075L69.1415 54H54V125.962H66.4251V69.7573L139.73 164.729C143.155 162.392 146.429 159.833 149.508 157.075Z" fill="url(#next-grad)"/>
      <rect x="115" y="54" width="12" height="72" fill="#FFFFFF"/>
      <defs>
        <linearGradient id="next-grad" x1="109.5" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TailwindLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
    </svg>
  );
}

export function FirebaseLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4.3 17.7l1.7-10.7c.1-.4.6-.6.9-.3l3.5 4.4L4.3 17.7z" fill="#FFA000"/>
      <path d="M4.3 17.7l7.7 4.3c.4.2.8.2 1.2 0l7.5-4.3-16.4 0z" fill="#FF6F00"/>
      <path d="M12.8 3.5c-.3-.5-.9-.5-1.2 0l-3.3 6.3 7.8 7.9 3.6-10.6c.1-.4-.3-.8-.7-.7l-6.2 2.1-0-5z" fill="#FFC107"/>
    </svg>
  );
}

export function AppwriteLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="22" fill="#FD366E"/>
      <path d="M30 68L50 32L70 68H58L50 52L42 68H30Z" fill="#FFFFFF"/>
    </svg>
  );
}

export function SupabaseLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 109 113" fill="none">
      <path d="M63.7 110.3c-2.4 3.1-7.4 1.4-7.4-2.5V67.3H9.4c-4.4 0-6.8-5.1-4-8.6L52.8 2.7c2.4-3.1 7.4-1.4 7.4 2.5v40.5h39.9c4.4 0 6.8 5.1 4 8.6l-40.4 56z" fill="url(#supabase-grad)"/>
      <defs>
        <linearGradient id="supabase-grad" x1="56.3" y1="2" x2="56.3" y2="110.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3ECF8E"/>
          <stop offset="1" stopColor="#3ECF8E" stopOpacity="0.7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PythonLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M11.87 2c-5.06 0-4.74 2.2-4.74 2.2l.01 2.27h4.82v.68H5.16S2 6.8 2 11.87c0 5.08 2.76 4.9 2.76 4.9h1.64V14.5c0-1.85 1.58-3.47 3.47-3.47h4.78c1.55 0 2.82-1.31 2.82-2.87V4.87C17.47 3.32 16.1 2 14.55 2h-2.68zm-1.4 1.45c.46 0 .83.37.83.83 0 .46-.37.83-.83.83-.46 0-.83-.37-.83-.83 0-.46.37-.83.83-.83z" fill="#3776AB"/>
      <path d="M12.13 22c5.06 0 4.74-2.2 4.74-2.2l-.01-2.27h-4.82v-.68h6.8S22 17.2 22 12.13c0-5.08-2.76-4.9-2.76-4.9h-1.64v2.27c0 1.85-1.58 3.47-3.47 3.47H9.35c-1.55 0-2.82 1.31-2.82 2.87v3.29c0 1.55 1.37 2.87 2.92 2.87h2.68zm1.4-1.45c-.46 0-.83-.37-.83-.83 0-.46.37-.83.83-.83.46 0 .83.37.83.83 0 .46-.37.83-.83.83z" fill="#FFD43B"/>
    </svg>
  );
}

export function JavaScriptLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
      <path d="M7 17.5c1 .6 2.2.8 3 .2.8-.6.8-1.8.8-3.7V7.5H8.7v6.4c0 1.1-.1 1.6-.4 1.8-.3.2-.8.1-1.3-.2l-.0 2zM14.2 17.3c1.2.7 2.6 1 3.8.3 1.1-.7 1.2-2.1.6-3-.5-.7-1.4-1.1-2.3-1.6-.8-.4-1.5-.9-1.5-1.5 0-.6.4-1.1 1.3-1.1.8 0 1.6.3 2.1.7l.8-1.5c-.8-.6-1.8-.9-2.9-.9-1.9 0-3.1 1.2-3.1 2.8 0 1.1.6 2 1.7 2.6.9.5 1.8.9 2.2 1.3.4.4.4 1 .2 1.3-.3.4-1.1.5-1.9.2-.8-.3-1.6-.9-2.2-1.5l-.7 1.4z" fill="#000000"/>
    </svg>
  );
}

export function VSCodeLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M17.5 2.5L7.8 11.2L3.5 7.8L2 8.8L5.5 12L2 15.2L3.5 16.2L7.8 12.8L17.5 21.5L22 19.3V4.7L17.5 2.5ZM17.5 17L10.2 12L17.5 7V17Z" fill="#007ACC"/>
    </svg>
  );
}

export function GitLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.4 4c-.2.2-.3.4-.4.6l3.3 3.3c.4-.2.8-.2 1.3-.1.7.3 1.2 1 1.2 1.8 0 .4-.1.7-.3 1l3.2 3.2c.3-.2.6-.3 1-.3 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.4.1-.7.3-1l-3-3v4.6c.3.3.5.7.5 1.1 0 1.1-.9 2-2 2s-2-.9-2-2c0-.5.2-.9.5-1.2V9.3c-.3-.3-.5-.7-.5-1.1 0-.6.3-1.1.7-1.4L8.8 3.5 2.4 9.9c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.6.6-1.5.1-2.1z" fill="#F05032"/>
    </svg>
  );
}

export function GitHubLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export function MySQLLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#00618A"/>
      <path d="M7 16c2-4 5-6 9-6-1 2-2 4-5 6H7zm9-5c-2-3-5-4-9-4 1 2 2 4 5 5l4-1z" fill="#E48E00"/>
    </svg>
  );
}

export function PostmanLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#FF6C37"/>
      <path d="M16 8L7 12l4 1.5L16 8z" fill="#FFFFFF"/>
      <path d="M11 13.5V17l2-2-2-1.5z" fill="#FFFFFF"/>
    </svg>
  );
}

export function AdobeExpressLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#EB1000"/>
      <path d="M14.5 4H19L14 18H9.5L14.5 4ZM5 4H9.5L5 18H5L5 4ZM10 13.5L11.5 9.5L13.8 15.5L11.2 15.5L10 13.5Z" fill="#FFFFFF"/>
    </svg>
  );
}

export function PremiereLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#00005B"/>
      <rect x="1" y="1" width="22" height="22" rx="4" stroke="#9999FF" strokeWidth="1.5"/>
      <text x="6" y="16" fill="#EA77FF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Pr</text>
    </svg>
  );
}

export function CapCutLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#000000" stroke="rgba(255,255,255,0.2)"/>
      <path d="M5 8l6 4-6 4V8zm14 0l-6 4 6 4V8z" fill="#FFFFFF"/>
    </svg>
  );
}

export function SQLLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  );
}

export function AIAPILogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
    </svg>
  );
}
