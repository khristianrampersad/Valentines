import { useState, useCallback, useRef } from 'react'
import { VALENTINE_CONFIG } from './config.js'
import { CatDecorations } from './Cats.jsx'
import { RosesAndHeartsDecorations } from './RosesAndHearts.jsx'
import { AssetImageDecorations } from './AssetImages.jsx'

const QUESTIONS = [
  `${VALENTINE_CONFIG.name}, I have a question`,
  "I've been meaning to ask you",
  "Ready for the big question?",
  `Will you be my Valentine? 💕`,
]

function DodgingNoButton({ onYes }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dodgeCount, setDodgeCount] = useState(0)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)

  const handleNoInteraction = useCallback((clientX, clientY) => {
    if (!containerRef.current || !buttonRef.current) return false
    
    const container = containerRef.current.getBoundingClientRect()
    const button = buttonRef.current.getBoundingClientRect()
    
    // Check if click/touch was near the No button (within 100px)
    const distance = Math.hypot(
      clientX - (button.left + button.width / 2),
      clientY - (button.top + button.height / 2)
    )
    
    if (distance < 100) {
      setDodgeCount(c => c + 1)
      
      const maxX = (container.width - 120) / 2
      const maxY = (container.height - 200) / 2
      
      const buttonCenterX = button.left - container.left + button.width / 2
      const buttonCenterY = button.top - container.top + button.height / 2
      const touchX = clientX - container.left
      const touchY = clientY - container.top
      
      const deltaX = buttonCenterX - touchX
      const deltaY = buttonCenterY - touchY
      
      const magnitude = Math.hypot(deltaX, deltaY) || 1
      const pushDistance = Math.min(80 + dodgeCount * 15, 120)
      const newX = (deltaX / magnitude) * pushDistance
      const newY = (deltaY / magnitude) * pushDistance
      
      setPosition(prev => ({
        x: Math.max(-maxX, Math.min(maxX, prev.x + newX)),
        y: Math.max(-maxY, Math.min(maxY, prev.y + newY)),
      }))
      return true
    }
    return false
  }, [dodgeCount])

  const handleNoClick = (e) => {
    e.preventDefault()
    handleNoInteraction(e.clientX, e.clientY)
  }

  const handleNoTouchStart = (e) => {
    const touch = e.touches[0]
    if (touch && handleNoInteraction(touch.clientX, touch.clientY)) {
      e.preventDefault()
    }
  }

  const handleYesClick = () => {
    onYes()
  }

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center min-h-[140px] touch-none"
    >
      <button
        onClick={handleYesClick}
        className="px-8 py-4 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg shadow-lg shadow-rose-500/40 transition-all active:scale-95 select-none"
      >
        Yes! 💖
      </button>
      
      <button
        ref={buttonRef}
        onClick={handleNoClick}
        onTouchStart={handleNoTouchStart}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: position.x === 0 && position.y === 0 ? 'none' : 'transform 0.15s ease-out',
        }}
        className="px-8 py-4 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-lg transition-all active:scale-95 select-none cursor-default touch-manipulation"
      >
        {dodgeCount > 3 ? "Maybe...?" : "No"}
      </button>
    </div>
  )
}

function ValentinesSuccess() {
  const [isAnimating, setIsAnimating] = useState(true)

  return (
    <div className="min-h-dvh relative flex flex-col items-center justify-center p-6 pb-[env(safe-area-inset-bottom)] overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100">
      <CatDecorations page="success" />
      <RosesAndHeartsDecorations page="success" />
      <AssetImageDecorations page="success" />
      <div className={`relative z-10 text-center space-y-6 transition-all duration-700 ${isAnimating ? 'animate-in fade-in zoom-in' : ''}`}>
        <div className="text-6xl sm:text-7xl mb-4">💕</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-rose-800">
          You said yes!
        </h1>
        <p className="text-xl text-rose-600 font-medium">
          Happy Valentine's Day, {VALENTINE_CONFIG.name}! 💝
        </p>
        <p className="text-lg text-rose-500 max-w-md">
          I'm so lucky to have you. {VALENTINE_CONFIG.subMessage}
        </p>
        
        {/* Customization: edit src/config.js to personalize */}
        <div className="mt-8 p-6 rounded-2xl bg-white/60 backdrop-blur border border-rose-200/50 shadow-lg max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-rose-700 mb-3">💌 Your message</h2>
          <p className="text-rose-600 italic whitespace-pre-line">
            {VALENTINE_CONFIG.message}
          </p>
          {VALENTINE_CONFIG.customNote && (
            <p className="text-rose-500 mt-3 text-right font-medium">
              {VALENTINE_CONFIG.customNote}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  const isFinalQuestion = questionIndex === QUESTIONS.length - 1

  const handleNext = () => {
    if (isFinalQuestion) return
    setQuestionIndex(i => i + 1)
  }

  const handleYes = () => {
    setShowSuccess(true)
  }

  if (showSuccess) {
    return <ValentinesSuccess />
  }

  const pageKey = `questions-${questionIndex}`

  return (
    <div className="min-h-dvh relative flex flex-col items-center justify-center p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] overflow-hidden bg-gradient-to-b from-rose-100 via-pink-50 to-rose-50">
      <CatDecorations page={pageKey} />
      <RosesAndHeartsDecorations page={pageKey} />
      <AssetImageDecorations page={pageKey} />
      <div className="relative z-10 w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-rose-800 leading-tight">
            {QUESTIONS[questionIndex]}
          </h1>
          {isFinalQuestion && (
            <p className="text-xl sm:text-2xl font-semibold text-rose-700">
              & come to the cottage
            </p>
          )}
        </div>

        {isFinalQuestion ? (
          <DodgingNoButton onYes={handleYes} />
        ) : (
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="px-8 py-4 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg shadow-lg shadow-rose-500/30 transition-all active:scale-95"
            >
              Continue →
            </button>
          </div>
        )}

        <div className="flex justify-center gap-1">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i <= questionIndex ? 'bg-rose-500' : 'bg-rose-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
