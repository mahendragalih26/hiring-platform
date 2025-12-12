export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Remote"
  salary: string
  description: string
  tags: string[]
  postedDate: string
  logo?: string
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "TechFlow",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    description:
      "We're looking for an experienced frontend engineer to join our team and help build the next generation of web applications.",
    tags: ["React", "TypeScript", "Next.js", "UI/UX"],
    postedDate: "2 days ago",
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignStudio",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100k - $150k",
    description:
      "Join our design team to create beautiful and intuitive user experiences for our growing product suite.",
    tags: ["Figma", "Design Systems", "User Research"],
    postedDate: "1 week ago",
  },
  {
    id: "3",
    title: "Backend Developer",
    company: "CloudScale",
    location: "Remote",
    type: "Remote",
    salary: "$110k - $170k",
    description:
      "Build scalable backend systems using modern technologies. Work with a distributed team of talented engineers.",
    tags: ["Node.js", "Python", "AWS", "Microservices"],
    postedDate: "3 days ago",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "InfraTech",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$130k - $190k",
    description:
      "Manage our cloud infrastructure and CI/CD pipelines. Help us scale efficiently and reliably.",
    tags: ["Kubernetes", "Docker", "Terraform", "CI/CD"],
    postedDate: "5 days ago",
  },
  {
    id: "5",
    title: "Full Stack Developer",
    company: "StartupHub",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$95k - $140k",
    description:
      "Join a fast-paced startup and work across the entire stack. Make a real impact from day one.",
    tags: ["React", "Node.js", "PostgreSQL", "GraphQL"],
    postedDate: "1 day ago",
  },
  {
    id: "6",
    title: "Mobile App Developer",
    company: "AppVenture",
    location: "Los Angeles, CA",
    type: "Contract",
    salary: "$80k - $120k",
    description:
      "Build native mobile applications for iOS and Android. Work on exciting consumer-facing products.",
    tags: ["React Native", "Swift", "Kotlin"],
    postedDate: "4 days ago",
  },
  {
    id: "7",
    title: "Data Scientist",
    company: "DataInsights",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$140k - $200k",
    description:
      "Apply machine learning and statistical analysis to solve complex business problems.",
    tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    postedDate: "6 days ago",
  },
  {
    id: "8",
    title: "UX Researcher",
    company: "UserFirst",
    location: "Remote",
    type: "Part-time",
    salary: "$60k - $90k",
    description:
      "Conduct user research and help shape product decisions based on real user insights.",
    tags: ["User Research", "Interviews", "Analytics"],
    postedDate: "2 weeks ago",
  },
  {
    id: "9",
    title: "Security Engineer",
    company: "SecureNet",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$150k - $220k",
    description:
      "Protect our systems and data from threats. Work on security architecture and incident response.",
    tags: ["Security", "Penetration Testing", "Compliance"],
    postedDate: "1 week ago",
  },
  {
    id: "10",
    title: "Marketing Manager",
    company: "GrowthCo",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$85k - $130k",
    description:
      "Drive growth through innovative marketing campaigns and strategies.",
    tags: ["Marketing", "SEO", "Content Strategy"],
    postedDate: "3 days ago",
  },
]

