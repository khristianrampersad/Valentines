// User-uploaded asset images - same floating animation style as cats

import img1 from './assets/04814b4f-228d-4ffa-899b-65e01fa07ddc_1000x580.png'
import img2 from './assets/0dca6109ebff057b93b4c65d8768e4236c-hudson-williams-auto-refill-lede.rvertical.w600.png'
import img3 from './assets/23cul-heatedrivalry-zjwl-mediumSquareAt3X.png'
import img4 from './assets/IMG_3678.png'

const ASSETS = [img1, img2, img3, img4]

function AssetImage({ src, className = '', style = {} }) {
  return (
    <div
      className={`absolute pointer-events-none overflow-hidden rounded-2xl shadow-lg w-[100px] h-[70px] sm:w-[140px] sm:h-[90px] scale-[2.5] origin-center ${className}`}
      style={style}
      aria-hidden
    >
      <img src={src} alt="" className="w-full h-full object-contain bg-white/30" loading="lazy" />
    </div>
  )
}

export function AssetImageDecorations({ page }) {
  // Positions chosen to avoid overlap with cats (corners) and roses/hearts
  // Assets use edge-mid zones: left/right edges and top/bottom bands
  const positions = {
    'questions-0': {
      img1: { top: '5%', left: '20%', rotate: -8 },
      img2: { top: '40%', right: '2%', rotate: 10 },
      img3: { bottom: '5%', left: '25%', rotate: -5 },
      img4: { bottom: '40%', left: '2%', rotate: 12 },
    },
    'questions-1': {
      img1: { top: '5%', right: '22%', rotate: 8 },
      img2: { top: '42%', left: '2%', rotate: -12 },
      img3: { bottom: '5%', right: '20%', rotate: 5 },
      img4: { bottom: '42%', right: '2%', rotate: -8 },
    },
    'questions-2': {
      img1: { top: '5%', left: '18%', rotate: -10 },
      img2: { top: '38%', right: '2%', rotate: 8 },
      img3: { bottom: '5%', left: '22%', rotate: 6 },
      img4: { bottom: '38%', left: '2%', rotate: -15 },
    },
    'questions-3': {
      img1: { top: '5%', right: '18%', rotate: 8 },
      img2: { top: '45%', left: '2%', rotate: -10 },
      img3: { bottom: '5%', right: '25%', rotate: 12 },
      img4: { bottom: '45%', right: '2%', rotate: -6 },
    },
    'success': {
      img1: { top: '5%', left: '22%', rotate: -8 },
      img2: { top: '42%', right: '2%', rotate: 10 },
      img3: { bottom: '5%', left: '20%', rotate: -12 },
      img4: { bottom: '42%', left: '2%', rotate: 8 },
    },
  }

  const pos = positions[page] || positions['questions-0']
  const imgPositions = [pos.img1, pos.img2, pos.img3, pos.img4]
  const animClasses = ['animate-cat-float', 'animate-cat-float-alt', 'animate-cat-float', 'animate-cat-float-alt']
  const delays = ['0s', '0.4s', '0.8s', '0.2s']
  const durations = ['6s', '5.5s', '6.5s', '5.8s']

  return (
    <>
      {ASSETS.map((src, i) => (
        <AssetImage
          key={i}
          src={src}
          className={animClasses[i]}
          style={{
            ...imgPositions[i],
            '--cat-rotate': `${imgPositions[i].rotate}deg`,
            animationDelay: delays[i],
            animationDuration: durations[i],
          }}
        />
      ))}
    </>
  )
}
