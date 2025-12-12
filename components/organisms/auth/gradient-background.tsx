"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const gradientColors = [
  ["#3b82f6", "#8b5cf6", "#ec4899"], // Blue to Purple to Pink
  ["#06b6d4", "#3b82f6", "#6366f1"], // Cyan to Blue to Indigo
  ["#8b5cf6", "#ec4899", "#f59e0b"], // Purple to Pink to Amber
  ["#10b981", "#06b6d4", "#3b82f6"], // Green to Cyan to Blue
  ["#f59e0b", "#ef4444", "#ec4899"], // Amber to Red to Pink
  ["#6366f1", "#8b5cf6", "#a855f7"], // Indigo to Purple to Purple
  ["#14b8a6", "#06b6d4", "#3b82f6"], // Teal to Cyan to Blue
  ["#ec4899", "#f59e0b", "#10b981"], // Pink to Amber to Green
]

function generateRandomGradient() {
  const colorSet =
    gradientColors[Math.floor(Math.random() * gradientColors.length)]
  const shuffled = [...colorSet].sort(() => Math.random() - 0.5)
  return shuffled
}

export function GradientBackground() {
  const [gradient1, setGradient1] = useState(() => generateRandomGradient())
  const [gradient2, setGradient2] = useState(() => generateRandomGradient())
  const [gradient3, setGradient3] = useState(() => generateRandomGradient())

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient1(generateRandomGradient())
      setGradient2(generateRandomGradient())
      setGradient3(generateRandomGradient())
    }, 8000) // Change gradients every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(135deg, ${gradient1[0]} 0%, ${gradient1[1]} 50%, ${gradient1[2]} 100%)`,
            `linear-gradient(225deg, ${gradient2[0]} 0%, ${gradient2[1]} 50%, ${gradient2[2]} 100%)`,
            `linear-gradient(315deg, ${gradient3[0]} 0%, ${gradient3[1]} 50%, ${gradient3[2]} 100%)`,
            `linear-gradient(45deg, ${gradient1[0]} 0%, ${gradient1[1]} 50%, ${gradient1[2]} 100%)`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-60"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.3, 0.8, 1],
          background: [
            `radial-gradient(circle, ${gradient1[0]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient2[1]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient3[2]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient1[0]} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-60"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -50, -100, 0],
          scale: [1, 0.8, 1.4, 1],
          background: [
            `radial-gradient(circle, ${gradient2[2]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient3[0]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient1[1]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient2[2]} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 0.9, 1],
          opacity: [0.5, 0.7, 0.4, 0.5],
          background: [
            `radial-gradient(circle, ${gradient3[1]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient1[2]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient2[0]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient3[1]} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional smaller blobs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl opacity-40"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.7, 1],
          background: [
            `radial-gradient(circle, ${gradient1[1]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient2[2]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient3[0]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient1[1]} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-2xl opacity-40"
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 70, -30, 0],
          scale: [1, 0.9, 1.3, 1],
          background: [
            `radial-gradient(circle, ${gradient2[0]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient3[1]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient1[2]} 0%, transparent 70%)`,
            `radial-gradient(circle, ${gradient2[0]} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
    </div>
  )
}
