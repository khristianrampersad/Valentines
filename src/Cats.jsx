// Grey & white cat and dark grey cat - they wander through the pages

function GreyWhiteCat({ className = '', style = {} }) {
  return (
    <div className={`absolute pointer-events-none scale-[2.5] ${className}`} style={style} aria-hidden>
      <svg width="56" height="48" viewBox="0 0 56 48" fill="none" className="drop-shadow-sm">
        {/* Body - grey outside */}
        <ellipse cx="28" cy="32" rx="14" ry="12" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.5" />
        <ellipse cx="28" cy="30" rx="10" ry="8" fill="#a8a8a8" />
        {/* White belly patch - inside stays white */}
        <ellipse cx="26" cy="34" rx="6" ry="5" fill="white" opacity="0.9" />
        {/* Head - grey outer layer, white face inside */}
        <circle cx="28" cy="14" r="12" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.5" />
        <circle cx="28" cy="14" r="10" fill="white" />
        {/* Ears - grey */}
        <path d="M16 4 L20 14 L24 8 Z" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.5" />
        <path d="M32 4 L36 14 L40 8 Z" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.5" />
        <path d="M17 5 L20 12 L23 7 Z" fill="#a8a8a8" />
        <path d="M33 5 L36 12 L39 7 Z" fill="#a8a8a8" />
        {/* Eyes */}
        <ellipse cx="23" cy="13" rx="2" ry="2.5" fill="#374151" />
        <ellipse cx="33" cy="13" rx="2" ry="2.5" fill="#374151" />
        <circle cx="24" cy="12" r="0.5" fill="white" />
        <circle cx="34" cy="12" r="0.5" fill="white" />
        {/* Nose */}
        <path d="M28 16 L27 18 L29 18 Z" fill="#f472b6" />
        {/* Whiskers */}
        <line x1="12" y1="14" x2="18" y2="14" stroke="#6b7280" strokeWidth="0.3" strokeLinecap="round" />
        <line x1="12" y1="16" x2="18" y2="16" stroke="#6b7280" strokeWidth="0.3" strokeLinecap="round" />
        <line x1="38" y1="14" x2="44" y2="14" stroke="#6b7280" strokeWidth="0.3" strokeLinecap="round" />
        <line x1="38" y1="16" x2="44" y2="16" stroke="#6b7280" strokeWidth="0.3" strokeLinecap="round" />
        {/* Tail - grey */}
        <path d="M42 28 Q48 20 46 32 Q44 38 40 34" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.5" />
        <path d="M42 28 Q46 30 44 36" fill="#a8a8a8" />
      </svg>
    </div>
  )
}

function DarkGreyCat({ className = '', style = {} }) {
  return (
    <div className={`absolute pointer-events-none scale-[2.5] ${className}`} style={style} aria-hidden>
      <svg width="56" height="48" viewBox="0 0 56 48" fill="none" className="drop-shadow-sm">
        {/* Body */}
        <ellipse cx="28" cy="32" rx="14" ry="12" fill="#4b5563" stroke="#374151" strokeWidth="0.5" />
        <ellipse cx="28" cy="30" rx="10" ry="8" fill="#6b7280" />
        {/* Slightly lighter belly */}
        <ellipse cx="26" cy="34" rx="6" ry="5" fill="#9ca3af" opacity="0.5" />
        {/* Head */}
        <circle cx="28" cy="14" r="12" fill="#4b5563" stroke="#374151" strokeWidth="0.5" />
        <circle cx="28" cy="12" r="10" fill="#6b7280" />
        {/* Ears */}
        <path d="M16 4 L20 14 L24 8 Z" fill="#374151" stroke="#1f2937" strokeWidth="0.5" />
        <path d="M32 4 L36 14 L40 8 Z" fill="#374151" stroke="#1f2937" strokeWidth="0.5" />
        <path d="M17 5 L20 12 L23 7 Z" fill="#4b5563" />
        <path d="M33 5 L36 12 L39 7 Z" fill="#4b5563" />
        {/* Eyes */}
        <ellipse cx="23" cy="13" rx="2" ry="2.5" fill="#22c55e" />
        <ellipse cx="33" cy="13" rx="2" ry="2.5" fill="#22c55e" />
        <circle cx="24" cy="12" r="0.5" fill="#14532d" />
        <circle cx="34" cy="12" r="0.5" fill="#14532d" />
        {/* Nose */}
        <path d="M28 16 L27 18 L29 18 Z" fill="#f472b6" />
        {/* Whiskers */}
        <line x1="12" y1="14" x2="18" y2="14" stroke="#6b7280" strokeWidth="0.3" strokeLinecap="round" />
        <line x1="12" y1="16" x2="18" y2="16" stroke="#6b7280" strokeWidth="0.3" strokeLinecap="round" />
        <line x1="38" y1="14" x2="44" y2="14" stroke="#6b7280" strokeWidth="0.3" strokeLinecap="round" />
        <line x1="38" y1="16" x2="44" y2="16" stroke="#6b7280" strokeWidth="0.3" strokeLinecap="round" />
        {/* Tail - curled differently */}
        <path d="M14 26 Q8 18 10 30 Q12 36 16 32" fill="#4b5563" stroke="#374151" strokeWidth="0.5" />
        <path d="M14 26 Q10 28 12 34" fill="#6b7280" />
      </svg>
    </div>
  )
}

export function CatDecorations({ page }) {
  // page: 'questions-0' | 'questions-1' | 'questions-2' | 'questions-3' | 'success'
  // Different positions per page so cats feel like they're moving through

  const positions = {
    'questions-0': {
      greyWhite: { top: '8%', left: '5%', rotate: -15 },
      darkGrey: { bottom: '12%', right: '8%', rotate: 12 },
    },
    'questions-1': {
      greyWhite: { top: '15%', right: '6%', rotate: 8 },
      darkGrey: { bottom: '20%', left: '5%', rotate: -10 },
    },
    'questions-2': {
      greyWhite: { bottom: '25%', left: '3%', rotate: -5 },
      darkGrey: { top: '20%', right: '4%', rotate: 18 },
    },
    'questions-3': {
      greyWhite: { top: '10%', right: '10%', rotate: 15 },
      darkGrey: { bottom: '15%', left: '8%', rotate: -8 },
    },
    'success': {
      greyWhite: { top: '15%', left: '8%', rotate: -12 },
      darkGrey: { top: '18%', right: '6%', rotate: 10 },
    },
  }

  const pos = positions[page] || positions['questions-0']

  return (
    <>
      <GreyWhiteCat
        className="animate-cat-float"
        style={{
          ...pos.greyWhite,
          '--cat-rotate': `${pos.greyWhite.rotate}deg`,
          animationDelay: '0s',
          animationDuration: '6s',
        }}
      />
      <DarkGreyCat
        className="animate-cat-float-alt"
        style={{
          ...pos.darkGrey,
          '--cat-rotate': `${pos.darkGrey.rotate}deg`,
          animationDelay: '0.5s',
          animationDuration: '7s',
        }}
      />
    </>
  )
}
