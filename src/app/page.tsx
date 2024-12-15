import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function Home() {
  const courses = [
    { id: '1', name: 'Mathematics 101', teacher: 'John Doe' },
    { id: '2', name: 'History 202', teacher: 'Jane Smith' },
    { id: '3', name: 'Computer Science 303', teacher: 'Bob Johnson' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">{course.name}</CardTitle>
              <CardDescription>{course.teacher}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/course/${course.id}`}>
                <Button variant="outline" className="w-full">View Course</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
