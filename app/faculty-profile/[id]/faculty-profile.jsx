'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, GraduationCapIcon, MailIcon, PhoneIcon, HomeIcon } from 'lucide-react';

export function FacultyProfile({ faculty: initialFaculty }) {
  const [faculty, setFaculty] = useState(initialFaculty);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFaculty(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFaculty(prev => ({ ...prev, profile_photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Saving updated faculty data:', faculty);
    setIsEditing(false);
  };

  const handleAddResearchPaper = () => {
    const newPaper = { id: Date.now().toString(), title: '', year: new Date().getFullYear(), journal: '' };
    setFaculty(prev => ({ ...prev, researchPapers: [...prev.researchPapers, newPaper] }));
  };

  const handleUpdateResearchPaper = (id, field, value) => {
    setFaculty(prev => ({
      ...prev,
      researchPapers: prev.researchPapers.map(paper =>
        paper.id === id ? { ...paper, [field]: value } : paper
      )
    }));
  };

  const handleAddAchievement = () => {
    const newAchievement = { id: Date.now().toString(), description: '' };
    setFaculty(prev => ({ ...prev, achievements: [...prev.achievements, newAchievement] }));
  };

  const handleUpdateAchievement = (id, description) => {
    setFaculty(prev => ({
      ...prev,
      achievements: prev.achievements.map(achievement =>
        achievement.id === id ? { ...achievement, description } : achievement
      )
    }));
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <Avatar className="w-48 h-48">
              <AvatarImage src={faculty.profile_photo} alt={faculty.name} />
              <AvatarFallback>{faculty.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {isEditing && (
              <Input
                type="file"
                onChange={handlePhotoChange}
                className="absolute bottom-0 left-0 w-full bg-background/80 p-2"
              />
            )}
          </div>
          <div className="text-center md:text-left space-y-2">
            <CardTitle className="text-3xl font-bold">{faculty.name}</CardTitle>
            <p className="text-xl text-muted-foreground">{faculty.role}</p>
            <p className="text-lg font-medium">{faculty.department}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MailIcon className="w-4 h-4" />
                {faculty.email}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <PhoneIcon className="w-4 h-4" />
                {isEditing ? (
                  <Input
                    name="phone_number"
                    value={faculty.phone_number}
                    onChange={handleInputChange}
                    className="w-32 h-6 p-1"
                  />
                ) : (
                  faculty.phone_number
                )}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent >
          <Separator className="my-6" />
          <div className="grid grid-cols-2 gap-6">
            <Section title="About" icon={<GraduationCapIcon className="w-5 h-5" />}>
              <div className="space-y-2">
                <Label>Qualification</Label>
                {isEditing ? (
                  <Input
                    name="qualification"
                    value={faculty.qualification}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{faculty.qualification}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Date of Joining</Label>
                <p>{new Date(faculty.dateOfJoining).toLocaleDateString('en-GB')}</p>
              </div>
              <div className="space-y-2">
                <Label>Room Number</Label>
                {isEditing ? (
                  <Input
                    name="room_number"
                    value={faculty.room_number}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{faculty.room_number}</p>
                )}
              </div>
            </Section>

            <Section title="Current Courses" icon={<CalendarIcon className="w-5 h-5" />}>
              <ul className="list-disc pl-5">
                {faculty.currentCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </Section>

            <Section title="Research Papers">
              <ul className="space-y-2">
                {faculty.researchPapers.map((paper) => (
                  <li key={paper.id} className="border-l-2 border-primary pl-4">
                    {isEditing ? (
                      <div className="space-y-2">
                        <Input
                          value={paper.title}
                          onChange={(e) => handleUpdateResearchPaper(paper.id, 'title', e.target.value)}
                          placeholder="Paper Title"
                        />
                        <Input
                          value={paper.year}
                          onChange={(e) => handleUpdateResearchPaper(paper.id, 'year', parseInt(e.target.value))}
                          type="number"
                          placeholder="Year"
                        />
                        <Input
                          value={paper.journal}
                          onChange={(e) => handleUpdateResearchPaper(paper.id, 'journal', e.target.value)}
                          placeholder="Journal"
                        />
                      </div>
                    ) : (
                      <>
                        <p className="font-medium">{paper.title}</p>
                        <p className="text-sm text-muted-foreground">{paper.journal}, {paper.year}</p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              {isEditing && (
                <Button onClick={handleAddResearchPaper} className="mt-2">Add Research Paper</Button>
              )}
            </Section>

            <Section title="Achievements">
              <ul className="space-y-2">
                {faculty.achievements.map((achievement) => (
                  <li key={achievement.id}>
                    {isEditing ? (
                      <Input
                        value={achievement.description}
                        onChange={(e) => handleUpdateAchievement(achievement.id, e.target.value)}
                      />
                    ) : (
                      achievement.description
                    )}
                  </li>
                ))}
              </ul>
              {isEditing && (
                <Button onClick={handleAddAchievement} className="mt-2">Add Achievement</Button>
              )}
            </Section>
          </div>
          <div className="mt-6 flex justify-end">
            {isEditing ? (
              <Button onClick={handleSave}>Save Changes</Button>
            ) : (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Section({ title, children, icon }) {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}
