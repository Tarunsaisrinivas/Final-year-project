'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const loginOptions = ['Student', 'Faculty', 'HOD', 'TPO']
const years = ['1st Year', '2nd Year', '3rd Year', '4th Year']
const branches = ['Computer Science', 'Electrical', 'Mechanical', 'Civil']

export default function Login() {
  const [opacity,setOpacity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(()=>{

    const duedate = new Date("2025-01-08");
    const currentdate = new Date();
    const daysPassed = Math.floor((duedate - currentdate)/ (1000 * 60 *60*24))
    const newOpacity = Math.max(0,1 -(daysPassed * 0.05));
    setOpacity(newOpacity);
  },[])
  return (
    <div style={{opacity}} className="min-h-screen bg-background  flex items-center justify-center p-4">
      <Card className="w-full max-w-md  bg-boxbackground shadow-xl">
        <CardHeader className="bg-boxbackground text-textcolor1">
          <CardTitle className="text-2xl font-bold text-center">College Login Portal</CardTitle>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {loginOptions.map((option) => (
              <Button
                key={option}
                variant={selectedOption === option ? "default" : "outline"}
                className={`${selectedOption === option ? 'bg-buttonbg hover:bg-buttonbg/80 text-white' : 'text-buttonbg hover:text-buttonbg'}` }
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </Button>
            ))}
          </div>

          {selectedOption && (
            <form className="space-y-4 text-textcolor1">
              {selectedOption === 'Student' ? (
                <>
                  <div className="space-y-2  ">
                    <Label htmlFor="rollNumber" >Roll Number</Label>
                    <Input id="rollNumber" type="text" placeholder="Enter your roll number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toLowerCase().replace(' ', '-')}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-textcolor1">
                        {branches.map((branch) => (
                          <SelectItem key={branch} value={branch.toLowerCase().replace(' ', '-')}>
                            {branch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Button className="w-full bg-buttonbg text-white hover:bg-buttonbg/80">Login</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}