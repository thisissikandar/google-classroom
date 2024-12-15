'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CourseStream } from '@/components/CourseStream'
import { AssignmentCreationForm } from '@/components/AssignmentCreationForm'
import { StudentEnrollmentForm } from '@/components/StudentEnrollmentForm'
import { GradeTracker } from '@/components/GradeTracker'

export default function CoursePage() {
  const { id } = useParams()
  const [course] = useState({
    id,
    name: 'Mathematics 101',
    teacher: 'John Doe',
    description: 'An introduction to basic mathematical concepts and principles.',
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{course.name}</h1>
        <p className="text-gray-600">{course.teacher}</p>
      </div>
      <Tabs defaultValue="stream" className="w-full">
        <TabsList>
          <TabsTrigger value="stream">Stream</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
        </TabsList>
        <TabsContent value="stream">
          <Card>
            <CardHeader>
              <CardTitle>Course Stream</CardTitle>
              <CardDescription>Announcements and discussions</CardDescription>
            </CardHeader>
            <CardContent>
              <CourseStream />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assignments">
          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>Create and manage assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <AssignmentCreationForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="people">
          <Card>
            <CardHeader>
              <CardTitle>People</CardTitle>
              <CardDescription>Manage students and teachers</CardDescription>
            </CardHeader>
            <CardContent>
              <StudentEnrollmentForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="grades">
          <Card>
            <CardHeader>
              <CardTitle>Grades</CardTitle>
              <CardDescription>View and manage grades</CardDescription>
            </CardHeader>
            <CardContent>
              <GradeTracker />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

