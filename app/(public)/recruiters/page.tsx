"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/molecules/nav"
import { mockRecruiters, type Recruiter } from "@/constants/mockRecruiters"
import { Icon } from "@iconify/react"
import { Input } from "@/components/atoms/input"
import { Button } from "@/components/atoms/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"

const niches = [
  "All",
  "Engineering",
  "Design",
  "Product",
  "Marketing",
  "Data Science",
  "Security",
  "Startups",
  "Remote",
  "Leadership",
]
const locations = [
  "All",
  "San Francisco, CA",
  "New York, NY",
  "Remote",
  "Seattle, WA",
  "Austin, TX",
  "Boston, MA",
  "Chicago, IL",
  "Los Angeles, CA",
  "Washington, DC",
]

export default function RecruitersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedNiche, setSelectedNiche] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [minRating, setMinRating] = useState(0)

  const filteredRecruiters = useMemo(() => {
    return mockRecruiters.filter((recruiter) => {
      const matchesSearch =
        recruiter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recruiter.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recruiter.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recruiter.specialties.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesNiche =
        selectedNiche === "All" || recruiter.niche.includes(selectedNiche)

      const matchesLocation =
        selectedLocation === "All" || recruiter.location === selectedLocation

      const matchesRating = recruiter.rating >= minRating

      return matchesSearch && matchesNiche && matchesLocation && matchesRating
    })
  }, [searchQuery, selectedNiche, selectedLocation, minRating])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Find Your Perfect Recruiter
            </h1>
            <p className="text-xl text-gray-600">
              Connect with {filteredRecruiters.length} expert recruiters ready
              to help your career
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Icon
                icon="mdi:magnify"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              />
              <Input
                type="text"
                placeholder="Search recruiters, companies, or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg text-foreground"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Niche Filter */}
              <div className="flex flex-wrap gap-2">
                {niches.map((niche) => (
                  <Button
                    key={niche}
                    variant={selectedNiche === niche ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedNiche(niche)}
                    className="transition-all"
                  >
                    {niche}
                  </Button>
                ))}
              </div>

              {/* Location Filter */}
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent rounded-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 pl-3 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 ml-1 absolute top-1.5 right-2.5 text-slate-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Min Rating:
                </span>
                <div className="flex gap-1">
                  {[0, 4.5, 4.7, 4.8].map((rating) => (
                    <Button
                      key={rating}
                      variant={minRating === rating ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setMinRating(rating)}
                      className="transition-all"
                    >
                      {rating === 0 ? "All" : `${rating}+`}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recruiter Cards */}
          <AnimatePresence mode="wait">
            {filteredRecruiters.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredRecruiters.map((recruiter, index) => (
                  <RecruiterCard
                    key={recruiter.id}
                    recruiter={recruiter}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <Icon
                  icon="mdi:account-off"
                  className="w-24 h-24 text-gray-300 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  No recruiters found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search query
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function RecruiterCard({
  recruiter,
  index,
}: {
  recruiter: Recruiter
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 cursor-pointer transition-all group"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-16 h-16 border-2 border-purple-200">
          <AvatarImage src={recruiter.avatar} />
          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-lg font-semibold">
            {recruiter.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-semibold group-hover:text-purple-600 transition-colors">
              {recruiter.name}
            </h3>
            {recruiter.verified && (
              <Icon icon="mdi:check-circle" className="w-5 h-5 text-blue-500" />
            )}
          </div>
          <p className="text-gray-600 font-medium text-sm">{recruiter.title}</p>
          <p className="text-purple-600 font-semibold text-sm">
            {recruiter.company}
          </p>
        </div>
      </div>

      {/* Rating and Stats */}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <Icon icon="mdi:star" className="w-5 h-5 text-yellow-400" />
          <span className="font-semibold">{recruiter.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Icon icon="mdi:account-group" className="w-4 h-4" />
          <span className="text-sm">{recruiter.placements} placements</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Icon icon="mdi:clock-outline" className="w-4 h-4" />
          <span className="text-sm">{recruiter.experience}</span>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Icon icon="mdi:map-marker" className="w-4 h-4" />
        <span>{recruiter.location}</span>
      </div>

      {/* Bio */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recruiter.bio}</p>

      {/* Niches */}
      <div className="flex flex-wrap gap-2 mb-4">
        {recruiter.niche.map((niche) => (
          <span
            key={niche}
            className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
          >
            {niche}
          </span>
        ))}
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-700 mb-2">Specialties:</p>
        <div className="flex flex-wrap gap-2">
          {recruiter.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
            >
              {specialty}
            </span>
          ))}
          {recruiter.specialties.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{recruiter.specialties.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <Button
        size="sm"
        className="w-full group-hover:bg-purple-600 transition-colors"
      >
        Connect
        <Icon
          icon="mdi:arrow-right"
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
        />
      </Button>
    </motion.div>
  )
}
