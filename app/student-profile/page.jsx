"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Camera, Pencil, Plus, X } from 'lucide-react'

// Mock data (replace with actual data fetching logic)
const initialStudent = {
  sectionID: "123",
  name: "A.S.R Karthik",
  roll_number: "21B91A0511",
  email: "sriramkarthikakula6@gmail.com",
  password: "qwerty",
  date_of_birth: "2000-01-01",
  skills: ["React", "Node.js", "Python"],
  certificates: [
    { id: "cert1", name: "Web Development Bootcamp" },
    { id: "cert2", name: "Data Structures and Algorithms" },
  ],
  projects: [
    { id: "proj1", name: "E-commerce Platform" },
    { id: "proj2", name: "Machine Learning Model for Image Recognition" },
  ],
  cgpa: 8.5,
  role: "student",
  profile_photo: "https://github.com/shadcn.png",
  batch: "2021 - 2025",
}

export default function ProfilePage() {
  const [student, setStudent] = useState(initialStudent)
  const [newSkill, setNewSkill] = useState("")
  const [newCertificate, setNewCertificate] = useState("")
  const [newProject, setNewProject] = useState("")

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setStudent(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }))
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skillToRemove) => {
    setStudent(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  const handleAddCertificate = () => {
    if (newCertificate.trim()) {
      setStudent(prev => ({
        ...prev,
        certificates: [...prev.certificates, {
          id: `cert${Date.now()}`,
          name: newCertificate.trim()
        }]
      }))
      setNewCertificate("")
    }
  }

  const handleAddProject = () => {
    if (newProject.trim()) {
      setStudent(prev => ({
        ...prev,
        projects: [...prev.projects, {
          id: `proj${Date.now()}`,
          name: newProject.trim()
        }]
      }))
      setNewProject("")
    }
  }

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setStudent(prev => ({
          ...prev,
          profile_photo: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative">
            <Avatar className="w-32 h-32">
              <AvatarImage src={student.profile_photo} alt={student.name} />
              <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <label 
              htmlFor="profile-photo" 
              className="absolute bottom-0 right-0 p-1 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90"
            >
              <Camera className="w-4 h-4" />
              <input
                id="profile-photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePhotoChange}
              />
            </label>
          </div>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl font-bold">{student.name}</CardTitle>
            <p className="text-muted-foreground">{student.roll_number}</p>
            <p className="text-muted-foreground">{student.email}</p>
            <p className="text-muted-foreground">Batch: {student.batch}</p>
          </div>
        </CardHeader>
        <CardContent>
          <Separator className="my-4" />
          <div className="grid gap-6">
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {student.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-1" /> Add Skill
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Skill</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Enter skill name"
                      />
                      <Button onClick={handleAddSkill}>Add</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Section>

            <Section title="Certificates">
              <ul className="list-disc pl-5 mb-2">
                {student.certificates.map((cert) => (
                  <li key={cert.id}>{cert.name}</li>
                ))}
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" /> Add Certificate
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Certificate</DialogTitle>
                  </DialogHeader>
                  <div className="flex gap-2">
                    <Input
                      value={newCertificate}
                      onChange={(e) => setNewCertificate(e.target.value)}
                      placeholder="Enter certificate name"
                    />
                    <Button onClick={handleAddCertificate}>Add</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Section>

            <Section title="Projects">
              <ul className="list-disc pl-5 mb-2">
                {student.projects.map((project) => (
                  <li key={project.id}>{project.name}</li>
                ))}
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" /> Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Project</DialogTitle>
                  </DialogHeader>
                  <div className="flex gap-2">
                    <Input
                      value={newProject}
                      onChange={(e) => setNewProject(e.target.value)}
                      placeholder="Enter project name"
                    />
                    <Button onClick={handleAddProject}>Add</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Section>

            {/* CGPA section - only visible to admin */}
            {student.role === 'admin' && (
              <Section title="CGPA">
                <p>{student.cgpa}</p>
              </Section>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {children}
    </div>
  )
}
