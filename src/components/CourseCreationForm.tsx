'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function CourseCreationForm() {
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle course creation logic here
    console.log('Creating course:', { courseName, courseDescription })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="courseName">Course Name</Label>
        <Input
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="courseDescription">Course Description</Label>
        <Textarea
          id="courseDescription"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Create Course</Button>
    </form>
  )
}

