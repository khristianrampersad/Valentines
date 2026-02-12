// Roses and hearts - same floating animation style as cats

function Rose({ className = '', style = {} }) {
  return (
    <div className={`absolute pointer-events-none scale-[2] ${className}`} style={style} aria-hidden>
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className="drop-shadow-sm">
        {/* Stem */}
        <path d="M16 40 L16 22" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 28 Q12 32 16 36 Q20 32 16 28" fill="#166534" opacity="0.5" />
        {/* Leaves */}
        <path d="M16 32 Q8 30 14 26 Q16 28 16 32" fill="#22c55e" stroke="#16a34a" strokeWidth="0.5" />
        <path d="M16 32 Q24 30 18 26 Q16 28 16 32" fill="#22c55e" stroke="#16a34a" strokeWidth="0.5" />
        {/* Rose bud - petals */}
        <path d="M16 20 Q20 8 16 4 Q12 8 16 20Z" fill="#e11d48" stroke="#be123c" strokeWidth="0.5" />
        <path d="M16 20 Q24 12 20 4 Q16 10 16 20Z" fill="#f43f5e" stroke="#e11d48" strokeWidth="0.5" />
        <path d="M16 20 Q12 10 20 8 Q16 14 16 20Z" fill="#e11d48" stroke="#be123c" strokeWidth="0.5" />
        <path d="M16 20 Q8 14 12 6 Q16 12 16 20Z" fill="#f43f5e" stroke="#e11d48" strokeWidth="0.5" />
        <path d="M16 20 Q16 6 22 12 Q18 16 16 20Z" fill="#e11d48" stroke="#be123c" strokeWidth="0.5" />
        <circle cx="16" cy="14" r="4" fill="#fda4af" />
      </svg>
    </div>
  )
}

function Heart({ className = '', style = {} }) {
  return (
    <div className={`absolute pointer-events-none scale-[2] ${className}`} style={style} aria-hidden>
      <svg width="28" height="24" viewBox="0 0 28 24" fill="none" className="drop-shadow-sm">
        <path
          d="M14 22 C14 22 2 14 2 8 C2 4 5 2 8 2 C10 2 12 3 14 5 C16 3 18 2 20 2 C23 2 26 4 26 8 C26 14 14 22 14 22Z"
          fill="#f43f5e"
          stroke="#e11d48"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  )
}

export function RosesAndHeartsDecorations({ page }) {
  const positions = {
    'questions-0': {
      rose1: { top: '18%', right: '5%', rotate: -8 },
      rose2: { bottom: '22%', left: '8%', rotate: 12 },
      heart1: { top: '8%', left: '12%', rotate: -12 },
      heart2: { bottom: '12%', right: '10%', rotate: 8 },
    },
    'questions-1': {
      rose1: { bottom: '28%', right: '8%', rotate: 5 },
      rose2: { top: '12%', left: '6%', rotate: -15 },
      heart1: { top: '22%', right: '12%', rotate: 10 },
      heart2: { bottom: '18%', left: '5%', rotate: -8 },
    },
    'questions-2': {
      rose1: { top: '28%', left: '4%', rotate: -10 },
      rose2: { bottom: '12%', right: '6%', rotate: 15 },
      heart1: { bottom: '28%', left: '12%', rotate: -5 },
      heart2: { top: '10%', right: '8%', rotate: 12 },
    },
    'questions-3': {
      rose1: { bottom: '20%', left: '10%', rotate: 8 },
      rose2: { top: '20%', right: '8%', rotate: -12 },
      heart1: { top: '8%', right: '15%', rotate: -10 },
      heart2: { bottom: '10%', left: '6%', rotate: 15 },
    },
    'success': {
      rose1: { top: '22%', left: '6%', rotate: -10 },
      rose2: { bottom: '22%', right: '8%', rotate: 12 },
      heart1: { top: '10%', right: '12%', rotate: 8 },
      heart2: { bottom: '12%', left: '10%', rotate: -12 },
    },
  }

  const pos = positions[page] || positions['questions-0']

  return (
    <>
      <Rose
        className="animate-cat-float"
        style={{
          ...pos.rose1,
          '--cat-rotate': `${pos.rose1.rotate}deg`,
          animationDelay: '0.3s',
          animationDuration: '6.5s',
        }}
      />
      <Rose
        className="animate-cat-float-alt"
        style={{
          ...pos.rose2,
          '--cat-rotate': `${pos.rose2.rotate}deg`,
          animationDelay: '0.7s',
          animationDuration: '5.8s',
        }}
      />
      <Heart
        className="animate-cat-float"
        style={{
          ...pos.heart1,
          '--cat-rotate': `${pos.heart1.rotate}deg`,
          animationDelay: '0.1s',
          animationDuration: '5.5s',
        }}
      />
      <Heart
        className="animate-cat-float-alt"
        style={{
          ...pos.heart2,
          '--cat-rotate': `${pos.heart2.rotate}deg`,
          animationDelay: '0.5s',
          animationDuration: '6.2s',
        }}
      />
    </>
  )
}
