"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const cards = [
  { icon: "mdi:briefcase", color: "bg-blue-500", delay: 0 },
  { icon: "mdi:account-group", color: "bg-purple-500", delay: 0.2 },
  { icon: "mdi:chart-line", color: "bg-green-500", delay: 0.4 },
  { icon: "mdi:rocket-launch", color: "bg-orange-500", delay: 0.6 },
]

export function FloatingCards() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -30, 0],
            x: [0, Math.sin(index) * 20, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            delay: card.delay,
            ease: "easeInOut",
          }}
          className={`absolute ${card.color} rounded-2xl p-4 shadow-lg`}
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + index * 15}%`,
          }}
        >
          <Icon icon={card.icon} className="w-8 h-8 text-white" />
        </motion.div>
      ))}
    </div>
  )
}
