import { FacultyProfile } from './faculty-profile'

async function getFacultyData(id) {
  // In a real application, fetch data from an API or database
  return {
    id: "1",
    name: "Dr. Jane Smith",
    email: "jane.smith@university.edu",
    role: "Associate Professor",
    dateOfJoining: "2015-09-01",
    qualification: "Ph.D. in Computer Science",
    profile_photo: "/placeholder.svg?height=256&width=256",
    phone_number: "+1 (555) 123-4567",
    department: "Computer Science and Engineering",
    room_number: "CS-301",
    currentCourses: [
      "Advanced Algorithms",
      "Machine Learning",
      "Data Structures"
    ],
    researchPapers: [
      { id: "1", title: "Novel Approach to Quantum Computing", year: 2022, journal: "Journal of Quantum Information" },
      { id: "2", title: "Advancements in Natural Language Processing", year: 2021, journal: "Computational Linguistics" },
      { id: "3", title: "Efficient Algorithms for Big Data Analysis", year: 2020, journal: "Journal of Big Data" }
    ],
    achievements: [
      { id: "1", description: "Best Teacher Award 2022" },
      { id: "2", description: "Research Excellence Award 2021" },
      { id: "3", description: "Published 5 papers in top-tier conferences" }
    ]
  }
}

export default async function FacultyProfilePage({ params }) {
  const facultyData = await getFacultyData(params.id)
  return <FacultyProfile faculty={facultyData} />
}
