'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CourseStream() {
  const [announcement, setAnnouncement] = useState('')
  const [announcements, setAnnouncements] = useState([
    { id: 1, content: 'Welcome to the course!', author: 'John Doe', timestamp: new Date() },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle announcement creation logic here
    const newAnnouncement = {
      id: announcements.length + 1,
      content: announcement,
      author: 'John Doe', // Replace with actual user name
      timestamp: new Date(),
    }
    setAnnouncements([newAnnouncement, ...announcements])
    setAnnouncement('')
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
          placeholder="Share something with your class..."
          required
        />
        <Button type="submit">Post</Button>
      </form>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <CardTitle>{announcement.author}</CardTitle>
              <p className="text-sm text-gray-500">{announcement.timestamp.toLocaleString()}</p>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

