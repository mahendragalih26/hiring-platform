"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/atoms/button"
import { Navigation } from "@/components/molecules/nav"
import { Scene3D } from "@/components/organisms/hero/3d-scene"
import { FloatingCards } from "@/components/organisms/hero/floating-cards"
import { Icon } from "@iconify/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium"
              >
                <Icon icon="mdi:sparkles" className="w-4 h-4" />
                <span>Connecting Talent with Opportunity</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Find Your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Dream Job
                </span>{" "}
                or{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Top Talent
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 max-w-2xl"
              >
                The modern platform that connects job seekers with opportunities
                and helps recruiters find the perfect candidates. Experience a
                new way of hiring and job searching.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/jobs">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Find Jobs
                        <Icon
                          icon="mdi:arrow-right"
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/recruiters">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="group">
                      <span className="flex items-center gap-2">
                        Find Recruiters
                        <Icon icon="mdi:account-group" className="w-5 h-5" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-8 pt-8"
              >
                {[
                  { value: "10K+", label: "Active Jobs" },
                  { value: "500+", label: "Recruiters" },
                  { value: "50K+", label: "Candidates" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right 3D Scene */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                <Scene3D />
              </div>
              <FloatingCards />
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose TalentHub?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of job searching and talent acquisition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "mdi:lightning-bolt",
                title: "Lightning Fast",
                description:
                  "Find opportunities in seconds with our powerful search and filtering.",
              },
              {
                icon: "mdi:shield-check",
                title: "Verified Recruiters",
                description:
                  "Connect with trusted recruiters who understand your career goals.",
              },
              {
                icon: "mdi:chart-line",
                title: "Career Growth",
                description:
                  "Track your progress and discover paths to advance your career.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon={feature.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
