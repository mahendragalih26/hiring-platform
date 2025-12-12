"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/molecules/nav"
import { mockJobs, type Job } from "@/constants/mockJobs"
import { Icon } from "@iconify/react"
import { Input } from "@/components/atoms/input"
import { Button } from "@/components/atoms/button"

const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"]
const locations = [
  "All",
  "San Francisco, CA",
  "New York, NY",
  "Remote",
  "Austin, TX",
  "Seattle, WA",
  "Los Angeles, CA",
  "Boston, MA",
  "Chicago, IL",
  "Washington, DC",
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    mockJobs.forEach((job) => {
      job.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags)
  }, [])

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesType = selectedType === "All" || job.type === selectedType
      const matchesLocation =
        selectedLocation === "All" || job.location === selectedLocation
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => job.tags.includes(tag))

      return matchesSearch && matchesType && matchesLocation && matchesTags
    })
  }, [searchQuery, selectedType, selectedLocation, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Find Your Next Opportunity
            </h1>
            <p className="text-xl text-gray-600">
              Discover {filteredJobs.length} amazing job opportunities
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
                placeholder="Search jobs, companies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg text-foreground"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Job Type Filter */}
              <div className="flex flex-wrap gap-2">
                {jobTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="transition-all"
                  >
                    {type}
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
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center">
                Skills:
              </span>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "ghost"}
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className="transition-all"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Job Cards */}
          <AnimatePresence mode="wait">
            {filteredJobs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <Icon
                  icon="mdi:briefcase-off"
                  className="w-24 h-24 text-gray-300 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  No jobs found
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

function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 cursor-pointer transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-600 font-medium">{job.company}</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          {job.company.charAt(0)}
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icon icon="mdi:map-marker" className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icon icon="mdi:clock-outline" className="w-4 h-4" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
          <Icon icon="mdi:currency-usd" className="w-4 h-4" />
          <span>{job.salary}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
        {job.tags.length > 3 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
            +{job.tags.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">{job.postedDate}</span>
        <Button size="sm" className="group-hover:bg-blue-600 transition-colors">
          Apply Now
          <Icon
            icon="mdi:arrow-right"
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          />
        </Button>
      </div>
    </motion.div>
  )
}
